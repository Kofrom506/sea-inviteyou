import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import styled from "styled-components";

const Section = styled.section`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  /* justify-content: center; */
  width: 100vw;
  height: 80%;
  min-height: 40rem;
  background-color: #a8cea8;
  gap: 1rem;
  box-sizing: border-box;

`;

const TextArea = styled.textarea`
   background-color: chocolate;
  /* border: 1px solid white; */
  /* outline: none; */
  /* cursor: pointer; */
  
  font-weight: 800;
  padding: 1rem 2rem;
  border-radius: 13px;
  align-items: center;
  color: grey;
  height: 100px;
`

const ContentCardButton = styled.button<{$isActive: boolean}>`
  background-color: ${(props)=> props.$isActive ? 'chocolate': 'transparent'};
  border: 1px solid white;
  outline: none;
  cursor: pointer;
  font-weight: 800;
  font-family: "Montserrat";
  padding: 0.5rem 1.5rem;
  width: 100%;

  border-radius: 13px;
  align-items: center;
  color: white;
`;


const InputForm = styled.input<{$height?: number;}>`
  background-color: chocolate;
  /* border: 1px solid white; */
  /* outline: none; */
  /* cursor: pointer; */
  
  font-weight: 800;
  padding: 1rem 2rem;
  border-radius: 13px;
  align-items: center;
  color: grey;
  /* height: ((props)=>props.$height); */
`

const Header = styled.h1<{ $isAnimated?: boolean; $animationDelay?: string }>`
  font-family: "Alex Brush", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 6rem;
  
`;

const SubHeader = styled.p<{
  $fontWeight?: number;
  $size?: string;
}>`
  font-family: "Montserrat";
  font-weight: ${(props) => props.$fontWeight || 300};
  font-style: normal;
  font-size: ${(props) => props.$size || "1rem"};
`;


const ButtonDiv = styled.div`
   display: flex;
  flex-direction: row;
  gap: 1rem
`;
/* const TextArea = styled. */


const WishesSection = () => {

  const [searchParams] = useSearchParams()
  const name = searchParams.get('name')

  const [isAttend, setIsAttend] = useState(false)
  return (

    <Section>
      <Header>Pray and Wishes from {name}</Header>
      <SubHeader>Please Leave your sincere prayers and wishes to us and our family</SubHeader>
      <div style={{width: '18%', display: 'flex', flexDirection: 'column', gap:'1rem'}}>
      <InputForm placeholder='Your Name'></InputForm>
      <InputForm placeholder='Phone Number'></InputForm>

      <InputForm placeholder='The Relationship'></InputForm>
      <SubHeader>We'd love to hear from you! Please fill out the confirmation below:</SubHeader>

      <InputForm placeholder='Your Name'></InputForm>
    
    <ButtonDiv>
    <ContentCardButton $isActive={!isAttend} onClick={()=>setIsAttend(false)}>Unable To Attend</ContentCardButton>
    <ContentCardButton $isActive={isAttend} onClick={()=>setIsAttend(true)}>Gladly  Attend</ContentCardButton>
    
    </ButtonDiv>
    <TextArea placeholder='Your Prayer and Wishes'></TextArea>
    <ContentCardButton>Submit</ContentCardButton>
      </div>
      
    
    </Section>
    )
}

export default WishesSection