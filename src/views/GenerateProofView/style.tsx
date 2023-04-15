import styled from "styled-components";
import { DefaultCardContainer } from "../style";
import theme from "@/styles/theme";

export const GenerateProofViewContainer = styled(DefaultCardContainer)``;

export const GenerateProofViewTitle = styled.h2`
  position: relative;
  font-size: 24px;
  font-weight: 700;

  margin-bottom: 10px;
  color: ${theme.colors.title};
`;

export const GenerateProofViewContent = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;
