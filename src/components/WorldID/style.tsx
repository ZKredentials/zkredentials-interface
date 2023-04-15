import theme from "@/styles/theme";
import styled from "styled-components";

export const WorldIdContainer = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: ${theme.colors.backgroundTwo};

  padding: 10px 15px;
  border-radius: 15px;
`;

export const WorldIDLogo = styled.div`
  position: relative;
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

export const WorldIdText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${theme.colors.text};
`;
