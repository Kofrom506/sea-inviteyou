import React from "react";
import styled from "styled-components";

const Background = styled.div`
  background-image: url("https://unsplash.com/photos/fJzmPe-a0eU/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzEwNDcyMDM4fA&force=true&w=2400");
  background-position: center;
  object-fit: cover;
  width: 100vw;
  height: 120vh;
  filter: blur(8px);
  -webkit-filter: blur(8px);
  z-index: -1;
  position: absolute;
`;

const Section = styled.section`
  /* position: absolute; */
  z-index: 1;
  width: 100vw;
  height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  gap: 1rem;
  margin: 2rem 2rem;
  /* background-color: red; */
`;

const Header = styled.h1<{ $isAnimated?: boolean; $animationDelay?: string }>`
  font-family: "Alex Brush", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 6rem;
  color: white;

  span {
    font-size: 2rem;
    font-family: "Alex Brush", cursive;
    color: white;
  }
`;

const SubHeader = styled.p<{
  $fontWeight?: number;
  $size?: string;
}>`
  color: white;
  font-family: "Montserrat";
  font-weight: ${(props) => props.$fontWeight || 300};
  font-style: normal;
  font-size: ${(props) => props.$size || "1rem"};
`;

const Content = styled.div<{
  $isReverse?: boolean;
}>`
  display: flex;
  gap: 3rem;
  flex-direction: ${(props) => (props.$isReverse ? "row" : "row-reverse")};
`;
const ContentCardButton = styled.button`
  background-color: transparent;
  border: 1px solid white;
  outline: none;
  cursor: pointer;
  font-weight: 800;

  padding: 1rem 2rem;
  border-radius: 13px;
  align-items: center;
  color: white;
`;

const Image = styled.img`
  box-shadow: 8px 16px 24px 9px rgba(0, 0, 0, 0.17);
  width: 20rem;
  height: 20rem;
  object-fit: cover;
  border-radius: 15px;
`;

const ScheduleSection = () => {
  return (
    <>
      <Background></Background>
      <Section>
        <Header>
          Counting <span>the</span>
          {""} Days
        </Header>
        <SubHeader $size="1.5rem">Saturday, 03 February 2024</SubHeader>

        <Content $isReverse>
          <Image src="https://unsplash.com/photos/WJc87MVcDaA/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzEwNDM3NTcyfA&force=true&w=2400"></Image>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <SubHeader style={{ fontWeight: 600 }} $size="1.5rem">
              Akad Nikah
            </SubHeader>
            <SubHeader $size="1.5rem">20 February 2023</SubHeader>
            <SubHeader $size="1.5rem">01:00 - 02:00 WIB</SubHeader>
            <SubHeader style={{ maxWidth: "22rem" }} $size="1.5rem">
              Assembly Hall Menara Mandiri Lt 10 JL Jenderal Sudirman No.Kav
              44-45, Senayan - Jakarta Selatan
            </SubHeader>
            <ContentCardButton>Open In Maps</ContentCardButton> 
       </div>
        </Content>
        <Content>
          <Image src="https://unsplash.com/photos/WJc87MVcDaA/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzEwNDM3NTcyfA&force=true&w=2400"></Image>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <SubHeader style={{ fontWeight: 600 }} $size="1.5rem">
              Akad Nikah
            </SubHeader>
            <SubHeader $size="1.5rem">20 February 2023</SubHeader>
            <SubHeader $size="1.5rem">01:00 - 02:00 WIB</SubHeader>
            <SubHeader style={{ maxWidth: "22rem" }} $size="1.5rem">
              Assembly Hall Menara Mandiri Lt 10 JL Jenderal Sudirman No.Kav
              44-45, Senayan - Jakarta Selatan
            </SubHeader>
            <ContentCardButton>Open In Maps</ContentCardButton> 
          </div>
        </Content>
      </Section>
    </>
  );
};

export default ScheduleSection;
