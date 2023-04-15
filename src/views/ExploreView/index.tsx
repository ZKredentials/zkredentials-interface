import GithubStatistics from "@/components/GithubStatistics";
import {
  ExplorerViewContainer,
  ExplorerViewContent,
  ExplorerViewTitle,
  User,
} from "./style";
import { useSocials } from "@/context/SocialsContext";
import { useEffect, useState } from "react";
import request, { gql } from 'graphql-request'
import { useMetaMask } from "@/hooks/useMetamask";
import * as PushAPI from "@pushprotocol/restapi";
import { Chat, ChatButton, ChatContainer, ChatInput } from "@/components/Navgiation/style";
import { ethers } from "ethers";
type User = {
  cid: string
  id: string
}
const ExplorerView = ({signing}: any) => {
  const [users, setUsers] = useState<User[]>([])
  const {
    state: { wallet },
  } = useMetaMask();
  const [msg, showMsg] = useState(false)
  const [user, setUser] = useState<any>()
  const [reply, setReply] = useState("")

  useEffect(() => {
    async function getUsers() {
      const response: any = await request(
        "https://api.studio.thegraph.com/proxy/24901/zkcredentials/v0.0.2",
        gql`
          query test {
            users{
              id
              cid
            }
          }
        `,
        {},
      )
      setUsers(response.users)
    }
    getUsers()
  }, [])
  async function sendReply() {
    if (wallet){
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
          receiverAddress: `eip155:${user.id}`,
          signer: signer as any,
          pgpPrivateKey: signing
        });
        setReply("")
        showMsg(false)
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <ExplorerViewContainer>
      <ExplorerViewTitle>Explorer - {signing && "Ready to send messages"}</ExplorerViewTitle>
      <ExplorerViewContent>
        {
          users.filter(users => users.id.toLowerCase() !== (wallet || "").toLowerCase()).map((user: any) => {
            return <User onClick={() => {
              showMsg(true)
              setUser(user)
            }}>
              {user.id}
            </User>
          })
        }
        {signing && msg && <ChatContainer><Chat>
          <div>to: {user?.id}</div>
          <ChatInput placeholder="Enter reply here" value={reply} onChange={(e) => setReply(e.target.value)}></ChatInput>
          <ChatButton onClick={() => sendReply()}>Reply</ChatButton>
        </Chat></ChatContainer>}
      </ExplorerViewContent>
    </ExplorerViewContainer>
  );
};

export default ExplorerView;
