import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import styled, { keyframes } from "styled-components";
import { GuestContext } from "../context/GuestNameContext";

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

const LandingButton = styled(Link)`
  padding: 1rem 3rem;
  background-color: transparent;
  border: 2px solid black;
  color: black;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: brown;
    border: brown;
    background-color: brown;
  }
`;

const InputForm = styled.input<{ $height?: number }>`
  background-color: brown;

  font-weight: 800;
  padding: 1rem 1rem;
  border-radius: 13px;
  align-items: center;
  color: grey;
  /* height: ((props)=>props.$height); */
`;

// const ContentCardButton = styled.button<{ $isActive: boolean }>`
//   background-color: transparent;
//   border: 1px solid black;
//   outline: none;
//   cursor: pointer;
//   /* font-weight: 800; */
//   font-family: "Montserrat";
//   padding: 0.5rem 1.5rem;
//   width: 100%;

//   /* border-radius: 13px; */
//   align-items: center;
//   width: 200px;
//   color: black;
// `;

type LandingSectionProps = {
    isInvitation: boolean
}

const LandingSolutionInput = ({isInvitation}: LandingSectionProps) => {
    const [name,setName] = useState("")
    const {guest, setGuest}= useContext(GuestContext)

    // useEffect()
  return (
    <Section>
      <DivHeader>
        <button onClick={()=>{
          setGuest({
          ...guest, name: 'adandsi'
        })
        console.log(guest)}
        }>
          console.log(guest)
        </button>
        {/* <p>{nameParams}</p>
        <p>{ageParams}</p> */}
        {guest.name}
        <SubHeader $delay={1}>The marriage of</SubHeader>

        <Header>
          Joe <span>&</span> Christy
        </Header>
        <DateHeader $delay={2}>03.02.2024</DateHeader>
        <SubHeader $delay={2} $size="1.4rem">
          #JoeFindChristy
        </SubHeader>

        {isInvitation ? (
          <div style={{display: 'flex', flexDirection: "column"}}>
            <InputForm
            onChange={(e)=>{setName(e.target.value)}}
              style={{ margin: "3rem" }}
              placeholder="Please Input Your Name"
            ></InputForm>
            <LandingButton to={`/landing?name=${name}`}>
                <span>
                    Open Invitation
                </span>
            </LandingButton>
            
          </div>
        ) : (
          <></>
        )}
      </DivHeader>
    </Section>
  );
};

export default LandingSolutionInput;
