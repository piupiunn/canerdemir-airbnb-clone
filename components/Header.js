import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled, { css, keyframes } from "styled-components";
import { Search } from "@styled-icons/evaicons-solid/Search";
import { World } from "@styled-icons/typicons/World";
import { ThreeBars } from "@styled-icons/octicons/ThreeBars";
import { UserCircle } from "@styled-icons/boxicons-solid/UserCircle";
import { PlusCircle } from "@styled-icons/boxicons-regular/PlusCircle";
import { MinusCircle } from "@styled-icons/boxicons-regular/MinusCircle";

//
import { Popover } from "@mantine/core";
import { DateRangePicker } from "@mantine/dates";
import { DatePicker } from "@mantine/dates";

export default function Header() {
  const [value, setValue] = useState([Date | null, Date | null]);
  const [bigSearchIcon, setBigSearchIcon] = useState(false);
  const [opened, setOpened] = useState(false);

  const [yetiskinler, setYetiskinler] = useState(0);
  const [cocuklar, setCocuklar] = useState(0);
  const [bebekler, setBebekler] = useState(0);
  const [hayvanlar, setHayvanlar] = useState(0);

  const [showSecondBar, setShowSecondBar] = useState(false);
  const [bigNav, setBigNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setShowSecondBar(true) : setShowSecondBar(false),
        setBigNav(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  const getBigNavBar = () => {
    setShowSecondBar(false);
    setBigNav(true);
  };
  return (
    <header style={{ height: "646.81px" }}>
      {
        <TopInfo>
          <h4>
            COVID-19 çerçevesinde aldığımız önlemler hakkındaki en güncel
            bilgileri öğreninn
          </h4>
        </TopInfo>
      }
      {/* Left */}

      <Navbar showSecondBar={showSecondBar} bigNav={bigNav}>
        <LogoDiv>
          <StyledImage
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
            width={102}
            height={80}
            objectFit="contain"
            objectPosition="left"
            alt="Airbnb Logo"
          />
        </LogoDiv>
        {/* Middle */}

        {
          <DetailedSearchBar
            showSecondBar={showSecondBar}
            onClick={(e) => setBigSearchIcon(true)}
          >
            <Titles bigNav={bigNav}>
              <h3>Konaklama yerleri</h3>
              <h3>Deneyimler</h3>
              <h3>Çevrimiçi deneyimler</h3>
            </Titles>
            <Bar>
              <Location>
                <h4>Konum</h4>
                <p>Nereye gidiyorsunuz?</p>
              </Location>
              <EnterDate>
                <h4>Giriş</h4>
                <p>Tarih ekleyin</p>
                <DateRangePickerCustom
                  value={value}
                  onChange={setValue}
                  amountOfMonths={2}
                />
              </EnterDate>
              <OutDate>
                <h4>Çıkış</h4>
                <p>Tarih ekleyin</p>
              </OutDate>
              <Guests bigSearchIcon={bigSearchIcon}>
                <div>
                  <h4>Misafirlerr</h4>
                  <p>Misafir ekleyin</p>
                </div>
                <PopoverIcon
                  opened={opened}
                  onClose={() => setOpened(false)}
                  target={<Guests onClick={() => setOpened(true)} />}
                  position="bottom"
                  styles={{
                    popover: { borderRadius: "50px" },
                    body: { border: "none" },
                  }}
                >
                  <PopoverGuestsDetails>
                    <GuestsInfo>
                      <div>
                        <h5>Yetişkinler</h5>
                        <p>13 ve üzeri yaştakiler</p>
                      </div>
                      <div>
                        <MinusIcon
                          onClick={() => setYetiskinler(yetiskinler - 1)}
                        />
                        {yetiskinler}
                        <PlusIcon
                          onClick={() => setYetiskinler(yetiskinler + 1)}
                        />
                      </div>
                    </GuestsInfo>
                    <GuestsInfo>
                      <div>
                        <h5>Çocuklarr</h5>
                        <p>yaş aralığı 2-12</p>
                      </div>
                      <div>
                        {" "}
                        <MinusIcon onClick={() => setCocuklar(cocuklar - 1)} />
                        {cocuklar}
                        <PlusIcon
                          onClick={() => setCocuklar(cocuklar + 1)}
                        />{" "}
                      </div>
                    </GuestsInfo>
                    <GuestsInfo>
                      <div>
                        <h5>Bebekler</h5>
                        <p>2 yaş ve altı</p>
                      </div>
                      <div>
                        <MinusIcon onClick={() => setBebekler(bebekler - 1)} />
                        {bebekler}
                        <PlusIcon onClick={() => setBebekler(bebekler + 1)} />
                      </div>
                    </GuestsInfo>
                    <GuestsInfo>
                      <div>
                        <h5>Evcil Hayvanlaar</h5>
                        <p style={{ width: "200px" }}>
                          Yanınızda hizmet hayvanı mı getiriyorsunuz?
                        </p>
                      </div>
                      <div>
                        <MinusIcon
                          onClick={() => setHayvanlar(hayvanlar - 1)}
                        />
                        {hayvanlar}
                        <PlusIcon onClick={() => setHayvanlar(hayvanlar + 1)} />
                      </div>
                    </GuestsInfo>
                  </PopoverGuestsDetails>
                </PopoverIcon>
                <SearchButton bigSearchIcon={bigSearchIcon}>
                  <SearchIcon /> {bigSearchIcon ? "Arama" : ""}
                </SearchButton>
              </Guests>
            </Bar>
          </DetailedSearchBar>
        }
        {showSecondBar && (
          <SecondBar onClick={getBigNavBar}>
            <p>Aramanıza başlayın</p>
            <SecondSearch>
              <SecondSearchIcon />
            </SecondSearch>
          </SecondBar>
        )}
        {/* Right */}

        <RightSection>
          <p>Ev sahibi olun</p>
          <WorldIcon />

          <NavRightModal>
            <ThreebarsIcon />

            <UserCircleIcon />
          </NavRightModal>
        </RightSection>
      </Navbar>

      <BottomInfo>
        <h6>
          Ukrayna'dan kaçan mültecilerden 100.000 kişiyi barındırmamıza yardımcı
          olun
        </h6>
        <NavBottomButton>Daha fazla bilgi edinin</NavBottomButton>
      </BottomInfo>
      <button onClick={() => setBigSearchIcon(false)}>setFALSEe</button>
      <button onClick={() => setBigNav(false)}>setFALSEe</button>
    </header>
  );
}
/////
//style
/////
const TopInfo = styled.div`
  width: 100%;
  height: 50px;
  background-color: black;
  color: white;
  text-decoration: underline;
  text-align: center;
`;
{
  /**All-Parent */
}
const Navbar = styled.div`
  display: flex;
  position: fixed;
  background-color: ${(props) =>
    props.showSecondBar || props.bigNav ? "#FFFFFF" : "#000000"};

  transition: color 0.5s ease-in;
  transition: background 0.25s ease-out;
  top: 0;
  width: 100%;
  height: 80px;
  height: ${(props) => (props.bigNav ? "180px" : "80px")};

  padding-left: 21px;
  padding-right: 21px;
  z-index: 50;
  border: ${(props) => (props.bigNav ? "1px solid black" : "")};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  justify-content: space-evenly;
  padding: 5px;
  @media (min-width: 768px) {
    padding: 0px;
  }
`;

//
{
  /**Logo */
}
const StyledImage = styled(Image)`
  cursor: pointer;
  color: ${(props) => (props.showSecondBar ? "#FFFFFF" : "")};
  transition: color 0.5s ease-in;
`;
const LogoDiv = styled.div`
  margin-bottom: 20px;
`;
//
{
  /**Middle Section */
}

const DetailedSearchBar = styled.div`
  margin-left: 10%;
  opacity: ${(props) => (props.showSecondBar ? "0" : "1")};
  transform: ${(props) => (props.showSecondBar ? "translate(0%, -50%)" : "")};
  transform: ${(props) => (props.showSecondBar ? "scale(0.2)" : "")};
  transition: all 0.5s;

  h4,
  p {
    font-size: 13px;
    margin: 5px;
    text-align: left;
    padding-top: 5px;
    padding-left: 20px;
  }
`;

//
const Titles = styled.div`
  display: flex;
  justify-content: space-around;

  color: ${(props) => (props.bigNav ? "#000000" : "#FFFFFF")};
  padding-bottom: 0px;
  font-size: 13px;
  margin-left: 20%;
  margin-right: 20%;
  background-color: ${(props) => (props.bigNav ? "#FFFFFF" : "#000000")};
`;
const Bar = styled.div`
  display: flex;
  grid-column: 4;
  width: 850px;
  height: 66px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%) !important;
  border-radius: 50px;
  background-color: #ffffff;
`;

const Location = styled.div`
  width: 269.98px;
  height: 66px;
  border: 1px solid #ffffff;
  border-radius: 50px;

  &:hover {
    background-color: #ebebeb;
  }
`;
const EnterDate = styled.div`
  width: 178.16px;
  height: 66px;
  border: 1px solid #ffffff;
  border-radius: 50px;

  &:hover {
    background-color: #ebebeb;
  }
`;
const DateRangePickerCustom = styled(DateRangePicker)`
  width: 178.16px;
  height: 66px;
  opacity: 0;
  position: absolute;
  top: 60px;
`;
const OutDate = styled.div`
  width: 178.16px;
  height: 66px;
  border: 1px solid #ffffff;
  border-radius: 50px;

  &:hover {
    background-color: #ebebeb;
  }
`;
const Guests = styled.div`
  width: 222.72px;
  height: 66px;
  border: 1px solid #ffffff;
  border-radius: 50px;
  display: block;
  margin-right: ${(props) => (props.bigSearchIcon ? "50px" : "")};
  &:hover {
    background-color: #ebebeb;
  }
  display: flex;
  justify-content: space-around;
  div {
    h4,
    p {
      width: 109px;
    }
  }
`;
//
const SearchButton = styled.button`
  color: white;
  border-radius: ${(props) => (props.bigSearchIcon ? "20px" : "50%")};
  width: ${(props) => (props.bigSearchIcon ? "110.14px" : "48px")};
  background-color: #e11960;
  height: 48px;
  position: relative;
  border: none;
  cursor: pointer;
  margin-top: 7px;
  margin-right: ${(props) => (props.bigSearchIcon ? "-32px" : "")};
`;
const SearchIcon = styled(Search)`
  color: white;
  height: 25px;

  display: inline-block;
`;
//
{
  /**Right Section  */
}
//
const RightSection = styled.div`
  width: 250px;
  height: 80px;
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 14px;
`;
const WorldIcon = styled(World)`
  width: 20px;
  height: 20px;
`;

const NavRightModal = styled.div`
  width: 77px;
  height: 42px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 50px;
`;
const ThreebarsIcon = styled(ThreeBars)`
  width: 16px;
  height: 16px;
  color: #595959;
`;
const UserCircleIcon = styled(UserCircle)`
  width: 30px;
  height: 30px;
  color: #595959;
`;
//
{
  /**Bottom-Info */
}
//
const BottomInfo = styled.div`
  width: 1700px;
  height: 450px;
  padding-left: 80px;
  padding-right: 80px;
  background-color: rgb(255, 56, 92);
  border-radius: 12px;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 150px;
  box-align: center;
  margin-left: auto;
  margin-right: auto;
  justify-items: center;
  h6 {
    font-size: 45px;
    color: white;
    font-weight: 600;
    text-align: center;
    margin-bottom: -100px;
    margin-top: 150px;
    justify-content: center;
  }
`;
const NavBottomButton = styled.button`
  width: 174.42px;
  height: 36px;
  background-color: #ff385c;
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  color: white;
  font-size: 14px;
  border: 1px solid white;

  margin-left: 16px;
  display: inline-block;
`;
//
{
  /**Popover-Icon */
}
//
const PopoverIcon = styled(Popover)`
  background-color: red;
  width: 50px;
  margin-right: 100px;
  opacity: 0;
  position: absolute;
`;

const PopoverGuestsDetails = styled.div`
  width: 393px;
  height: 394px;
  border-radius: 32px;
  padding: 16px 32px;
  display: grid;
`;
const GuestsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  h5 {
    margin-bottom: 1px;
  }
  p {
    margin-top: 5px;
    color: gray;
  }
`;
const PlusIcon = styled(PlusCircle)`
  width: 40px;
  height: 40px;
  color: gray;
  margin-left: 10px;
`;
const MinusIcon = styled(MinusCircle)`
  width: 40px;
  height: 40px;
  color: gray;
  margin-right: 10px;
`;
//
{
  /**Second-Bar */
}
//
const SecondBar = styled.button`
  position: absolute;
  width: 300px;
  height: 48px;
  border: 1px solid white;
  margin-top: 20px;
  margin-left: 100px;
  border-radius: 40px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
  transition: box-shadow 0.2s ease;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 16px;
    padding-bottom: 5px;
    padding-left: 5px;
  }

  visibility: ${(props) => (props.showSecondBar ? "0" : "1")};
`;

const SecondSearch = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #e11960;
  margin: 7px 7px 7px;
  padding: 10px;
  position: relative;
  cursor: pointer;
`;
const SecondSearchIcon = styled(SearchIcon)`
  color: white;
  height: 12px;
  width: 12px;

  display: block;
`;
