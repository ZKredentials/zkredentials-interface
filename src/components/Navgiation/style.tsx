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
position: absolute;
width: 500px;
border: 5px solid black;
border-radius: 25px;
left: 500px;
left: 340px;
top: 30px;
background: white;
z-index: 999;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

padding: 20px;
`;
export const Chat = styled.div`
border: 5px solid black;
padding 10px;
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
