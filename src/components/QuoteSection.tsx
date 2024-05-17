import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 80%;
  min-height: 40rem;
  background-color: "#FDBF9";
  gap: 2rem;
`;

const Image = styled.img`
  box-shadow: 8px 16px 24px 9px rgba(0, 0, 0, 0.17);
  width: 20rem;
  height: 30rem;
  object-fit: cover;
  border-radius: 15px;
`;

const LeftContent = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const QuoteSection = () => {
  return (
    <Section>
      <Image
        src="https://unsplash.com/photos/464ps_nOflw/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzEwMzk4OTAwfA&force=true&w=1920"
        alt="quote-marriage"
      ></Image>
     <LeftContent>
        <img
          src="https://www.bridestory.com/_next/image?url=https%3A%2F%2Falexandra.bridestory.com%2Fimage%2Fupload%2Fdpr_1.0%2Cf_auto%2Cfl_progressive%2Cq_80%2Fv1%2Fassets%2Fbranches-GWZDtNSgR.png&w=96&q=75"
          alt="decoration-leaf"
        ></img>
        <div style={{ textAlign: "center" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <br></br>
        <div>PASAL 1:1</div>
      </LeftContent>
    </Section>
    // <div>QuoteSection</div>
  );
};

export default QuoteSection;
