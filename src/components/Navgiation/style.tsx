import theme from "@/styles/theme";
import styled from "styled-components";

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

export const NavigationLogo = styled.h2`
  position: relative;
  font-size: 24px;
  font-weight: 700;
  color: ${theme.colors.title};
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
