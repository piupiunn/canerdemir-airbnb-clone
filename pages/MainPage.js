import React from "react";
import styled, { css, keyframes } from "styled-components";

export default function MainPage() {
  return (
    <main style={{ width: "100%" }}>
      <BigImg>
        <img
          src="https://a0.muscache.com/im/pictures/a2704500-b282-4411-a2fb-d7f80c4c72a8.jpg?im_w=1200"
          alt=""
        />
        <h2>Merakınız, rezervasyonunuza yön versin</h2>
      </BigImg>
    </main>
  );
}

////
//style
/////

const BigImg = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  justify-items: center;

  display: grid;
  grid-template-columns: 1fr;
  margin-top: 150px;
  box-align: center;
  img {
    width: 1700px;
    height: 1100px;
    border-radius: 12px;
  }
  h2 {
    position: absolute;
    color: white;
    font-size: 40px;
    overflow-wrap: anywhere;
    font-weight: 400;
    line-height: 20px;
  }
`;
