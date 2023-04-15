import styled from "styled-components";

export const GithubLoginContainer = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 5px 10px;
  border-radius: 15px;
  border: none;

  cursor: pointer;
`;

export const GithubLoginLogo = styled.div`
  position: relative;
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

export const GithubLoginText = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
