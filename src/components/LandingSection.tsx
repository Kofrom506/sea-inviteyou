import React from "react";

import styled, { keyframes } from "styled-components";

const fadeDown = keyframes`
  from {
    transform: translateY(-10px);
    opacity: 0%;
  }
  
  to {
    transform: translateY(0px);
    opacity: 100%;
  }
`;

const Section = styled.section`
  background-image: url("https://unsplash.com/photos/IfjHaIoAoqE/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8d2VkZGluZ3xlbnwwfHx8fDE3MTAzNTQyMDd8MA&force=true&w=2400");
  background-position: center;
  object-fit: cover;
  width: 100vw;
  height: 100vh;
`;

const Header = styled.h1<{ $isAnimated?: boolean; $animationDelay?: string }>`
  font-family: "Alex Brush", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 6rem;

  animation: ${fadeDown} 2s forwards;
  animation-delay: ${(props) => props.$animationDelay || "0s"};

  opacity: ${(props) => (props.$isAnimated ? 0 : 1)};

  span {
    font-size: 4rem;
    font-family: "Alex Brush", cursive;
    color: orange;
    &:hover {
      scale: 2;
    }
  }
`;

const SubHeader = styled.p<{
  $textColor?: string;
  $size?: string;
  $delay?: number;
}>`
  margin-top: 2rem;
  font-family: "Montserrat";
  font-weight: 400;
  font-style: normal;
  font-size: ${(props) => props.$size || "1rem"};
  color: ${(props) => props.$textColor || "#8e8e8e"};
  animation: ${fadeDown} 2s forwards;
  animation-delay: ${(props) => props.$delay || 1}s;
  opacity: 0;
`;

const DateHeader = styled.p<{ $delay?: number }>`
  font-family: "Montserrat";
  font-weight: 400;
  font-style: normal;
  font-size: 1.5;

  animation: ${fadeDown} 2s forwards;
  animation-delay: ${(props) => props.$delay || 1}s;
  opacity: 0;
`;

const DivHeader = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  flex-direction: column;

  /* gap:1rem; */
  justify-content: center;
  align-items: center;
`;

const LandingSection = () => {
  return (
    <Section>
      <DivHeader>
        <SubHeader $delay={1}>The marriage of</SubHeader>

        <Header>
          {" "}
          Joe <span>&</span> Christy
        </Header>
        <DateHeader $delay={2}>03.02.2024</DateHeader>
        <SubHeader $delay={2} $size="1.4rem">
          #JoeFindChristy
        </SubHeader>
      </DivHeader>
    </Section>
  );
};

export default LandingSection;
