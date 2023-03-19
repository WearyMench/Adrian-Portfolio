import React from "react";

import { LogoWrapper, Logo } from "./SocialsHome.styles";
import LogoGitHub from "../assets/github.png";
import LogoLinkdIn from "../assets/linkdin.png";
import LogoCorreo from "../assets/correo.png";

function Socials() {
  return (
    <>
      <LogoWrapper>
        <a href="https://github.com/WearyMench" target="_blank">
          <Logo src={LogoGitHub} alt="logo github" />
        </a>
        <a href="https://linkedin.com/in/adrianm07" target="_blank">
          <Logo src={LogoLinkdIn} alt="logo linkdin" />
        </a>
        <a href="mailto:adrian.mirabal07@gmail.com" target="_blank">
          <Logo src={LogoCorreo} alt="logo correo" />
        </a>
      </LogoWrapper>
    </>
  );
}

export default Socials;
