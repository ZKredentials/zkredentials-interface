import styled from "styled-components";
import { DefaultCardContainer } from "../style";
import theme from "@/styles/theme";

export const NotVerifiedContainer = styled(DefaultCardContainer)``;

export const NotVerifiedTitle = styled.h2`
  position: relative;
  font-size: 24px;
  font-weight: 700;

  color: ${theme.colors.title};
`;
