import styled from "styled-components";
import { DefaultCardContainer } from "../style";
import theme from "@/styles/theme";

export const HomeViewContainer = styled(DefaultCardContainer)``;

export const HomeViewTitle = styled.h2`
  position: relative;
  font-size: 32px;
  font-weight: 700;

  margin-bottom: 10px;
  color: ${theme.colors.title};
`;

export const HomeViewText = styled.p`
  position: relative;
  font-size: 18px;
  font-weight: 400;
`;
