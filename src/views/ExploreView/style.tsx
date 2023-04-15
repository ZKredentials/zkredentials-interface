import styled from "styled-components";
import { DefaultCardContainer } from "../style";
import theme from "@/styles/theme";

export const ExplorerViewContainer = styled(DefaultCardContainer)``;

export const ExplorerViewTitle = styled.h2`
  position: relative;
  font-size: 24px;
  font-weight: 700;

  margin-bottom: 10px;
  color: ${theme.colors.title};
`;

export const ExplorerViewContent = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

export const User = styled.div`
  padding: 10px;
  width: 32%;
  height: 100px;
  border: 2px solid black;
`;