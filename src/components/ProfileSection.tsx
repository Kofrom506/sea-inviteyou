import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 80%;
  min-height: 40rem;
  background-color: ${(props) => props.theme.bgColor };
    gap: 2rem;
  padding: 3rem;
  padding-bottom: 3rem;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;  
`;

const ContentWrapper = styled.div`
  display: flex;

  gap: 1rem;
  align-items: center;
`;

const Image = styled.img`
  box-shadow: 8px 16px 24px 9px rgba(0, 0, 0, 0.17);
  width: 20rem;
  height: 20rem;
  object-fit: cover;
  border-radius: 50%;
  border: 0.5rem solid white;
`;

const Header = styled.h1`
  font-family: "Alex Brush", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 6rem;
`;

const SubHeader = styled.p<{

  $fontWeight? : number;
  $size?: string;
}>`
  color: #2c2727;
  font-family: "Montserrat";
  font-weight:${(props) => props.$fontWeight || 400};
  font-style: normal;
  font-size: ${(props) => props.$size || '1rem'};
`;


const Icon = styled.i`
  padding: 1rem;
  border-radius: 50%;
  color: white;
  background-color: pink;
`

const ProfileSection = () => {
  return (
    <Section>
      <img
        src="https://www.bridestory.com/_next/image?url=https%3A%2F%2Falexandra.bridestory.com%2Fimage%2Fupload%2Fdpr_1.0%2Cf_auto%2Cfl_progressive%2Cq_80%2Fv1%2Fassets%2Fgroup-282x-n71nYQ2ew.png&w=384&q=75"
        alt="flower decoration"
      ></img>
      <ContentWrapper>
        <Contents>
          {/* </Image> */}
          <Image
            src="https://unsplash.com/photos/6W4F62sN_yI/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzEwNDAwMDk1fA&force=true&w=2400"
            alt="bride image"
          ></Image>
          <Header> Joe</Header>
          <SubHeader $fontWeight={700} $size='2rem'>
          Jonathan
          </SubHeader>
          <hr style={{width: '60%', color: "white"}}/>
          <SubHeader  style={{textAlign: 'center', width: '40%'}}>

          Putra kedua dari Andrian Wijaya dan Susan Widjatmoko
          </SubHeader>


<Icon className="fa-brands fa-instagram"/>

          
          <span></span>
        </Contents>

        <Contents>
          {/* </Image> */}
          <Image
            src="https://unsplash.com/photos/6W4F62sN_yI/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzEwNDAwMDk1fA&force=true&w=2400"
            alt="bride image"
          ></Image>
          <Header> Joe</Header>
          <SubHeader $fontWeight={700} $size='2rem'>
          Jonathan
          </SubHeader>
          <hr style={{width: '60%', color: "white"}}/>
          <SubHeader  style={{textAlign: 'center', width: '40%'}}>

          Putra kedua dari Andrian Wijaya dan Susan Widjatmoko
          </SubHeader>


          
<Icon className="fa-brands fa-instagram"/>
        </Contents>
      </ContentWrapper>
    </Section>
  );
};

export default ProfileSection;
