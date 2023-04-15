import theme from "@/styles/theme";
import styled from "styled-components";

export const ProofViewContainer = styled.div`
  position: relative;

  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProofViewContent = styled.div`
  position: relative;
  width: 500px;
  padding: 20px;
  background-color: ${theme.colors.backgroundTwo};
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ProofViewSection = styled.div`
  width: 100%;
  margin: 5px 0;
`;

export const ProofViewText = styled.p`
  position: relative;
  dispay: block;
  font-size: 24px;
  font-weight: 400;
  color: ${theme.colors.text};
`;

export const ProofViewTextSeeMore = styled.p`
  font-size: 14px;
  cursor: pointer;
`;

export const ProofViewProofDetail = styled.code`
  position: relative;
  background-color: ${theme.colors.highlightTwo};
  overflow-wrap: break-word;
`;
