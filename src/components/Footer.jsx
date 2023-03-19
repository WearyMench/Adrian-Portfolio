import React, { useState, useEffect } from "react";
import { Wrapper, Arrow, Text } from "./Footer.styles";

function Footer() {
  const [seeArrow, setSeeArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 20) {
        setSeeArrow(true);
      } else {
        setSeeArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Wrapper>
      <Text>
        Made with ❤️ by{" "}
        <a href="https://github.com/WearyMench" target="_blank">
          Adrian Mirabal
        </a>
      </Text>
      {seeArrow && (
        <Arrow onClick={handleClick}>
          <span className="material-symbols-outlined">arrow_upward</span>
        </Arrow>
      )}
    </Wrapper>
  );
}

export default Footer;
