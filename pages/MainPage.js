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
        <BigImgButton>Esnek Arama</BigImgButton>
      </BigImg>
      <LocationsSection>
        <Locations>
          <h3>Gelecek seyahatiniz için fikirler</h3>
          <Location>
            <Up>
              <img
                src="https://a0.muscache.com/im/pictures/2ce0594a-fe5c-4d88-b120-b91ff7456c1f.jpg?im_w=320"
                alt=""
              />
            </Up>
            <Down style={{ backgroundColor: " rgb(204, 45, 74)" }}></Down>
          </Location>
          <Location>
            <Up>
              {" "}
              <img
                src="https://a0.muscache.com/im/pictures/0d4ae5be-37d9-400c-917a-de52a034fe4c.jpg?im_w=320"
                alt=""
              />
            </Up>
            <Down style={{ backgroundColor: " rgb(222, 49, 81)" }}></Down>
          </Location>
          <Location>
            <Up>
              {" "}
              <img
                src="https://a0.muscache.com/im/pictures/06248faf-fafa-4adb-9447-3a393ca625a4.jpg?im_w=320"
                alt=""
              />
            </Up>
            <Down style={{ backgroundColor: " rgb(188, 26, 110)" }}></Down>
          </Location>
          <Location>
            <Up>
              {" "}
              <img
                src="https://a0.muscache.com/im/pictures/68ef0c20-321d-42c0-beb4-13bce3e258a2.jpg?im_w=320"
                alt=""
              />
            </Up>
            <Down style={{ backgroundColor: " rgb(217, 59, 48)" }}></Down>
          </Location>
        </Locations>
      </LocationsSection>
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
  position: relative;

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
const BigImgButton = styled.button`
  width: 176px;
  height: 72;
  border-radius: 20px;
  position: absolute;
`;
const LocationsSection = styled.div`
  background-color: white;
  height: 1200px;
  margin-top: -500px;
  display: grid;
  grid-template-columns: 1fr;
  h3 {
    margin-top: 660px;
    color: black;
    position: absolute;
    font-weight: 400;
    font-size: 36px;
  }
`;
const Locations = styled.div`
  display: flex;
  grid-gap: 24px;
  margin-left: auto;
  margin-right: auto;
`;
const Location = styled.div`
  width: 247px;
  height: 329px;
  border-radius: 12px;

  display: block;
  outline: none !important;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s,
    -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
  margin-top: 750px;
`;

const Up = styled.div`
  width: 247px;
  height: 164px;

  img {
    object-fit: cover;
    background-position-x: 50%;
    background-position-y: 50%;
    object-position: 50% 50%;
    width: 247px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
`;
const Down = styled.div`
  width: 247px;
  height: 164px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;
