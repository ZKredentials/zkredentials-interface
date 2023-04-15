import {
  Badge,
  Chat,
  ChatButton,
  ChatContainer,
  ChatInput,
  MailLogo,
  NavigationActionableSection,
  NavigationContainer,
  NavigationLogo,
  NavigationLogoContainer,
  NavigationLogoImage,
} from "./style";
import Wallet from "../Wallet";
import { useMetaMask } from "@/hooks/useMetamask";
import WorldID from "../WorldID";
import ZKredentialsLogo from "@/assets/images/ZKredentials.svg";
import Image from "next/image";
import * as PushAPI from "@pushprotocol/restapi";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Mail from "@/assets/images/mail.svg";
import { ENV } from "@pushprotocol/restapi/src/lib/constants";

const Navigation = () => {
  const {
    state: { wallet },
  } = useMetaMask();
  const [mails, setMails] = useState<PushAPI.IFeeds[]>([])
  const [viewChats, setViewChats] = useState(false)
  const [reply, setReply] = useState("")
  const [key, setKey] = useState("")
  useEffect(() => {
    async function createUser() {
      let user
      try {
        if(wallet){
          const user = await PushAPI.user.create({
            account: wallet
          });
        }
      } catch (error) {
        console.log(error)
      }
      try {
        if (wallet) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          if (!provider) {
            return;
          }
          const signer = provider.getSigner();
          const user = await PushAPI.user.get({
            account: wallet
          });
          const decryptedPvtKey = await PushAPI.chat.decryptPGPKey({
            encryptedPGPPrivateKey: user.encryptedPrivateKey,
            signer: signer as any
          });
          setKey(decryptedPvtKey)
          const chats = await PushAPI.chat.chats({
            account: `eip155:${wallet}`,
            toDecrypt: true,
            pgpPrivateKey: decryptedPvtKey
          });
          const requests = await PushAPI.chat.requests({
            account: `eip155:${wallet}`, // user address in CAIP
            pgpPrivateKey: decryptedPvtKey,
            toDecrypt: true
          });
          setMails([...chats, ...requests])
          console.log(chats, requests)
          // const response = await PushAPI.chat.send({
          //   messageContent: "Gm gm! It's me... Mario",
          //   messageType: 'Text',
          //   receiverAddress: `eip155:0x63425a866FA081818d6Fc22cc7c354f765Dc1E4d`,
          //   signer: signer as any,
          //   pgpPrivateKey: decryptedPvtKey
          // });
          // console.log(response)
        } else {
          setMails([])
          setKey("")
          setReply("")
        } 
      } catch (error) {
        console.log(error)
      }
    }
    createUser()
  }, [wallet])

  async function sendReply(chat: PushAPI.IFeeds) {
    if (wallet){
      // Approve first regardless
      try {
        const response = await PushAPI.chat.approve({
          status: 'Approved',
          account: wallet,
          senderAddress : chat.msg.fromDID.slice(7) // receiver's address or chatId of a group
        });
      } catch (error) {
        console.log(error)
      }
      // Reply
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        if (!provider) {
          return;
        }
        const signer = provider.getSigner();
        const response = await PushAPI.chat.send({
          messageContent: reply,
          messageType: 'Text',
          receiverAddress: chat.msg.fromDID,
          signer: signer as any,
          pgpPrivateKey: key
        });
        const chats = await PushAPI.chat.chats({
          account: `eip155:${wallet}`,
          toDecrypt: true,
          pgpPrivateKey: key
        });
        const requests = await PushAPI.chat.requests({
          account: `eip155:${wallet}`, // user address in CAIP
          pgpPrivateKey: key,
          toDecrypt: true
        });
        setMails([...chats, ...requests])
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <NavigationContainer>
      <NavigationLogoContainer>
        <NavigationLogoImage>
          <Image src={ZKredentialsLogo} alt="ZKredentials Icon" fill />
        </NavigationLogoImage>
        <NavigationLogo>ZKredentials</NavigationLogo>
      </NavigationLogoContainer>

      <NavigationActionableSection>
        <MailLogo onClick={() => setViewChats(!viewChats)}>
          <Image src={Mail} alt="Mail" fill />
          {mails.filter(mail => mail.msg.fromDID.slice(7).toLowerCase() !== wallet?.toLowerCase()).length > 0  && <Badge>{mails.filter(mail => mail.msg.fromDID.slice(7).toLowerCase() !== wallet?.toLowerCase()).length}</Badge>}
        </MailLogo>
        {viewChats && mails.filter(mail => mail.msg.fromDID.slice(7).toLowerCase() !== wallet?.toLowerCase()).length > 0 && <ChatContainer>{mails.filter(mail => mail.msg.fromDID.slice(7).toLowerCase() !== wallet?.toLowerCase()).map(mail => {
            return <Chat>
              <div>from: {mail.msg.fromDID.slice(7)}</div>
              <div>msg: {mail.msg.messageContent}</div>
              <ChatInput placeholder="Enter reply here" value={reply} onChange={(e) => setReply(e.target.value)}></ChatInput>
              <ChatButton onClick={() => sendReply(mail)}>Reply</ChatButton>
            </Chat>
          })}</ChatContainer>}
        {wallet && <WorldID />}
        <Wallet />
      </NavigationActionableSection>
    </NavigationContainer>
  );
};

export default Navigation;
