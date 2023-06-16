import { styled } from "styled-components";

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 120px;
  min-height: 100%;
  width: 900px;
`;

export const IdContainer = styled.div`
  background: transparent;
  display: flex;
  height: fit-content;
  width: 100%;
  justify-content: end;

  & > h2 {
    color: #fff;
    padding-left: 16px;
    font-weight: 100;
    background-color: #55c7cd;
  }
`;

export const NameImgContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 765px) {
    flex-direction: column;
  }
`;

export const ProfileImg = styled.img`
  border: 4px solid #fff;
  border-radius: 50%;
  height: 172px;
`;

export const Divisor = styled.div`
  height: 170px;
  width: 4px;
  background: #fff;
  margin-right: 20px;

  @media (max-width: 765px) {
    display: none;
  }
`;

export const NameOutlined = styled.h1`
  font-size: 80px;
  font-weight: 700;
  color: transparent;
  text-align: right;
  -webkit-text-stroke: 2px #fff;
  @media (max-width: 765px) {
    text-align: center;
  }
`;
export const NameFilled = styled.h1`
  font-size: 80px;
  font-weight: 700;
  text-align: right;
  color: #fff;
  text-shadow: 6px 4px #8f919c;
  @media (max-width: 765px) {
    text-align: center;
  }
`;
