import styled from "styled-components";

export const ProofCardContainer = styled.div`
  position: relative;
  height: 100px;
  width: 100px;

  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid black;
`;

export const ProofCardTypeIconContainer = styled.div`
  position: relative;
  height: 50%;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ProofCardTypeIcon = styled.div`
  position: relative;
  height: 35px;
  width: 35px;
`;

export const ProofCardCTASection = styled.div`
  position: relative;
  height: 100%;
  width: 50%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ProofCardIcon = styled.div`
  position: relative;
  height: 25px;
  width: 25px;

  cursor: pointer;
`;
