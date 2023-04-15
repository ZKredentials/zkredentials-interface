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

const Navigation = ({signing}: any) => {
  const {
    state: { wallet },
  } = useMetaMask();
  const [mails, setMails] = useState<PushAPI.IFeeds[]>([])
  const [viewChats, setViewChats] = useState(false)
  const [reply, setReply] = useState("")

  useEffect(() => {
    async function createUser() {
      try {
        if (wallet && signing) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          if (!provider) {
            return;
          }
          const chats = await PushAPI.chat.chats({
            account: `eip155:${wallet}`,
            toDecrypt: true,
            pgpPrivateKey: signing
          });
          const requests = await PushAPI.chat.requests({
            account: `eip155:${wallet}`, // user address in CAIP
            pgpPrivateKey: signing,
            toDecrypt: true
          });
          setMails([...chats, ...requests])
        } else {
          setMails([])
          setReply("")
        } 
      } catch (error) {
        console.log(error)
      }
    }
    createUser()
  }, [wallet, signing])

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
          pgpPrivateKey: signing
        });
        const chats = await PushAPI.chat.chats({
          account: `eip155:${wallet}`,
          toDecrypt: true,
          pgpPrivateKey: signing
        });
        const requests = await PushAPI.chat.requests({
          account: `eip155:${wallet}`, // user address in CAIP
          pgpPrivateKey: signing,
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
