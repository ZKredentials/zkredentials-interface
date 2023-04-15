import theme from "@/styles/theme";
import styled from "styled-components";
export const Badge = styled.span`
  background-color: red;
  color: white;
  padding: 4px 8px;
  position: absolute;
  top: -5px;
  right: -2px;
  border-radius: 5px;
  font-size: 10px;
`
export const MailLogo = styled.div`
  position: relative;
  height: 40px;
  width: 40px;
  margin-right: 10px;
`;
export const ChatContainer = styled.div`
display: flex;
flex-direction: column;
position: absolute;
width: 500px;
border: 5px solid black;
border-radius: 25px;
left: 500px;
left: 340px;
top: 30px;
background: white;
z-index: 999;
align-items: center;
justify-content: space-between;

padding: 20px;
`;
export const Chat = styled.div`
width: 100%;
border: 1px solid black;
padding: 10px;
margin: 2px 0px;
border-radius: 5px;
`
export const ChatInput = styled.input`
width: 100%;
padding: 6px 12px;
font-size: 16px;
font-weight: 400;
line-height: 1.5;
color: #212529;
background-color: #fff;
background-clip: padding-box;
border: 1px solid #ced4da;
appearance: none;
border-radius: 4px;
transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
:focus{
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
}
`
export const ChatButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  border-radius: 6px;
  border: none;

  color: #fff;
  background: linear-gradient(180deg, #4B91F7 0%, #367AF6 100%);
   background-origin: border-box;
  box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`
export const NavigationContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100vw;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 20px;
`;

export const NavigationLogoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const NavigationLogoImage = styled.div`
  position: relative;
  height: 25px;
  width: 23.68px;
  margin-right: 5px;
`;

export const NavigationLogo = styled.h2`
  position: relative;
  font-size: 24px;
  font-weight: 700;
  color: ${theme.colors.logo};
`;

export const NavigationActionableSection = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  & > * {
    margin: 0 10px;
  }
`;
