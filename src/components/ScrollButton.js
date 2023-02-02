import React, { useState } from "react";
import styled from "styled-components";
/* React Icons */
import { BsArrowUpCircleFill } from "react-icons/bs";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  // To scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Trigger the change of state
  window.addEventListener("scroll", toggleVisible);
  return (
    <Wrapper>
      <BsArrowUpCircleFill
        className='scroll-btn'
        aria-label='scroll to the top of the page'
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </Wrapper>
  );
};

/* Styles */
const Wrapper = styled.div`
  .scroll-btn {
    position: fixed;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    left: 85%;
    bottom: 40px;
    font-size: 1rem;
    z-index: 1;
    cursor: pointer;
    background: var(--backgroundColor);
    border-color: transparent;
    color: var(--headlineColor);
    box-shadow: var(--shadow-1);
  }
  .scroll-btn:hover {
    color: var(--secondaryColor);
  }
  @media (min-width: 990px) {
    .scroll-btn {
      left: 95%;
    }
  }
`;
export default ScrollButton;
