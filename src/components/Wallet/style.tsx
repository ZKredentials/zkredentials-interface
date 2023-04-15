import theme from "@/styles/theme";
import styled from "styled-components";

export const WalletContainer = styled.div<{
  type: "normal" | "warning";
}>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${theme.colors.title};

  padding: 10px 15px;
  border-radius: 15px;

  height: 44px;
  max-width: 200px;

  cursor: pointer;

  background-color: ${({ type }) =>
    type === "normal" ? theme.colors.title : theme.colors.warning};
`;

export const WalletContainerButton = styled.div`
  position: relative;
  dispaly: flex;
  flex-direction: row;
  align-items: center;

  & p {
    color: ${theme.colors.backgroundTwo};
    font-weight: 400;
  }
`;
