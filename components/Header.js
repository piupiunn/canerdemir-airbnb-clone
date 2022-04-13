import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function Header() {
  return (
    <header>
      {/* Left */}
      <Container>
        <StyledImage
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          width={100}
          height={100}
          objectFit="contain"
          objectPosition="left"
          alt="Airbnb Logo"
        />
        <div>asdasdddddddddddddddddddddddsB</div>
        {/* Right */}
        <div>asdsaasddddddddddddddddddddddda</div>
      </Container>
      {/* Middle */}
    </header>
  );
}
const Container = styled.div`
  display: flex;
  position: sticky;
  width: 100%;
  z-index: 50;
  grid-column: 3;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  justify-content: space-around;
`;
const StyledImage = styled(Image)`
  cursor: pointer;
`;
