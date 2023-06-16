import { styled } from "styled-components";

export const VPStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
  padding-top: 120px;
  min-height: 100%;
  width: 750px;
`;

export const DuoContainerVP = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 765px) {
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }
`;

export const VerticalHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
`;

export const TextBoxImg = styled.img`
  height: 200px;
  margin-top: -6px;
`;
