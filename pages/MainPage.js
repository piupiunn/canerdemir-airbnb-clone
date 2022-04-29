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
        <h2>Merakınız, rezervasyonunuza yön verssin</h2>
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
      <BottomSection>
        <BottomTwoImg>
          <BottomImgs>
            <img
              src="https://a0.muscache.com/im/pictures/c2adcb16-6c3f-4041-86a1-afa9c303c500.jpg?im_w=720"
              alt=""
            />
          </BottomImgs>
          <BottomImgs>
            <img
              src="https://a0.muscache.com/im/pictures/c1bdf53f-2a19-4529-aa9b-1b0e6bd8d0ee.jpg?im_w=720"
              alt=""
            />
          </BottomImgs>
        </BottomTwoImg>
        <BottomImg>
          <img
            src="https://a0.muscache.com/im/pictures/0528b0f7-4c0c-47bc-9786-d91454f531ba.jpg?im_w=1200"
            alt=""
          />
        </BottomImg>
      </BottomSection>
      <FooterSection>
        <FooterSubjects>
          <h4>Destek</h4>
          <p>Yardım Merkezi</p>
          <p>Güvenlik Bilgileri</p>
          <p>İptal Seçenekleri</p>
          <p>COVID-19 Önlemlerimiz</p>
          <p>Engelli kişilere destek</p>
          <p>Semtinizdeki sorunu bildirin</p>
        </FooterSubjects>
        <FooterSubjects>
          {" "}
          <h4>Topluluk</h4>
          <p>Airbnb.org: afet yardımı</p>
          <p>Afgan mültecileri destekleyin</p>
          <p>Ayrımcılıkla mücadele</p>
        </FooterSubjects>
        <FooterSubjects>
          {" "}
          <h4>Ev sahipliği</h4>
          <p>Ev sahipliği yapmayı deneyin</p>
          <p>Ev sahipleri için AirCover</p>
          <p>Ev sahibi kaynaklarını keşfedin</p>
          <p>Topluluk forumunu ziyaret edin</p>
          <p>Sorumlu ev sahipliği</p>
        </FooterSubjects>
        <FooterSubjects>
          {" "}
          <h4>Hakkımızda</h4>
          <p>Basın Odası</p>
          <p>Yeni özellikler hakkında bilgi</p>
          <p>Kurucularımızdan bir mektup</p>
          <p>Kariyer Fırsatları</p>
          <p>Yatırımcılar</p>
          <p>Airbnb Luxe</p>
        </FooterSubjects>
      </FooterSection>
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
  height: 1500px;
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
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s,
    -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
  margin-top: 750px;
`;

const Up = styled.div`
  img {
    object-fit: cover;
    background-position-x: 50%;
    background-position-y: 50%;
    object-position: 50% 50%;
    width: 400px;
    height: 300px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
`;
const Down = styled.div`
  margin-top: -3px;
  width: 400px;
  height: 300px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;
const BottomSection = styled.div`
  margin-left: auto;
  margin-right: auto;
  justify-items: center;
  position: relative;
  background-color: white;
  height: 1990px;
  display: grid;
`;

const BottomTwoImg = styled.div`
  display: flex;
  grid-gap: 24px;
`;
const BottomImg = styled.div`
  margin-top: 100px;
  img {
    width: 1700px;
    border-radius: 12px;
  }
`;
const BottomImgs = styled.div`
  img {
    width: 835px;
    border-radius: 12px;
  }
`;
//footer
const FooterSection = styled.div`
  background-color: #f7f7f7;
  display: flex;
  padding-bottom: 50px;
  padding-top: 30px;
  justify-items: center;
`;
const FooterSubjects = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
