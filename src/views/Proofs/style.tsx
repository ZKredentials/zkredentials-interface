import styled from "styled-components";
import { DefaultCardContainer } from "../style";
import theme from "@/styles/theme";

export const ProofsContainer = styled(DefaultCardContainer)``;

export const ProofsTitle = styled.h2`
  position: relative;
  font-size: 24px;
  font-weight: 700;

  margin-bottom: 10px;
  color: ${theme.colors.title};
`;
