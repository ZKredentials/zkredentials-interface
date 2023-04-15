import styled from "styled-components";
import theme from "@/styles/theme";

export const DefaultCardContainer = styled.div`
  position: relative;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  background-color: ${theme.colors.backgroundTwo};

  margin: 10px 20px;
  padding: 20px;

  border-radius: 15px;
`;
