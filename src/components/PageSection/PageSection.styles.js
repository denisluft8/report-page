import { styled } from "styled-components";

export const PageSectionStyled = styled.section`
  background-image: linear-gradient(#323a46, #7b40ca);
  min-height: 100%;
  min-width: 100%;
  width: fit-content;
  display: flex;
  justify-content: center;
  page-break-before: always;
  page-break-after: always;
`;

export const LogoContainer = styled.div`
  width: 830px;
  position: absolute;
  text-align: end;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const PageLogo = styled.img`
  height: 60px;
  margin-top: 40px;
  @media (max-width: 900px) {
    margin-right: 40px;
  }
`;
