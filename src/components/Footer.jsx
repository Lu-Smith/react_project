import React from 'react';
import {
    FaInstagram,
    FaLinkedin,
    FaFacebook,
    FaTwitter,
    FaYoutube,
  } from "react-icons/fa";
  import {
    FooterContainer,
    FooterWrap,
    SocialIconLink,
    SocialIcons,
    WebsiteRights,
    Portfolio,
    GitHub,
  } from "../styles/Footer.styled";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
            <WebsiteRights>
              Luna Smith Art © {new Date().getFullYear()}, coded by{" "}
              <Portfolio
                href="//www.lunasmithart.com"
                target="_blank"
                aria-label="GitHub"
              >
                Luna Smith
              </Portfolio>{" "}
              open source on{" "}
              <GitHub
                href="https://github.com/Lu-Smith/react_project"
                target="_blank"
                aria-label="GitHub"
              >
                GitHub
              </GitHub>
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.facebook.com/lunasmithart"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="//www.instagram.com/lunasmithart/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//twitter.com/LunaSmithArt"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="//www.youtube.com/watch?v=5aBwg6IMwGo"
                target="_blank"
                aria-label="YouTube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="//www.linkedin.com/in/luna-smith/"
                target="_blank"
                aria-label="LinkendIn"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;