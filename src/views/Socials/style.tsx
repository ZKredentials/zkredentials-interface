import styled from "styled-components";
import { DefaultCardContainer } from "../style";
import theme from "@/styles/theme";

export const SocialsContainer = styled(DefaultCardContainer)``;

export const SocialsTitle = styled.h2`
  position: relative;
  font-size: 24px;
  font-weight: 700;

  margin-bottom: 10px;
  color: ${theme.colors.title};
`;

export const SocialsContent = styled.div`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;
