import theme from "@/styles/theme";
import styled from "styled-components";

export const GithubStatisticsContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
`;

export const GithubStatisticsContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
`;

export const GithubStatisticsTableHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width 100%;
  margin-bottom: 3px;

  & p {
    width: 25%;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${theme.colors.text}
    text-align: left;
  }
`;

export const GithubStatisticsRow = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  margin: 5px 0;
`;

export const GithubStatisticsText = styled.div`
  position: relative;
  width: 25%;

  font-weight: 400;
  font-size: 18px;
  color: ${theme.colors.text};
`;

export const GithubStatisticsInputContainer = styled.div`
  position: relative;
  width: 25%;
`;

export const GithubStatisticsTextInput = styled.input`
  position: relative;
  padding: 5px;
`;

export const GithubStatisticsError = styled.p`
  position: relative;
  margin: 5px;

  font-size: 400;
  color: ${theme.colors.warning};
`;

export const GithubStatisticsButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${theme.colors.title};

  padding: 10px 15px;
  border-radius: 15px;

  height: 44px;
  max-width: 200px;

  cursor: pointer;
  border: none;

  & p {
    color: ${theme.colors.backgroundTwo};
    font-weight: 700;
  }
`;
