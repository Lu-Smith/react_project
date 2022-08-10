import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #EA474E;

  @media screen and (max-width: 820px) {
    margin: 0 36px;
  }

  @media screen and (max-width: 480px) {
    margin: 0;
  }
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    padding: 10px 24px;
  }

`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin: 10px 0 40px 0;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 786px) {
    margin: 0 auto;
    padding-bottom: 50px;
  }
  @media screen and (max-width: 480px) {
    padding: 0 20px 20px 20px;
    text-align: center;
    margin-top: 10px;
  }
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  @media screen and (max-width: 786px) {
    margin: 0 auto;
    padding-bottom: 30px;
  }
  @media screen and (max-width: 480px) {
    padding-bottom: 20px;
  }
`;

export const SocialIconLink = styled.a`
  color: #ffff;
  font-size: 24px;
  line-height: 35px;

  &:hover {
    color: bisque;
    font-size: 28px;
  }

`;

export const Portfolio = styled.a`
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: bisque;
    border-bottom: 1px solid bisque;
  }
`;

export const GitHub = styled.a`
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: bisque;
    border-bottom: 1px solid bisque;
  }
`;
