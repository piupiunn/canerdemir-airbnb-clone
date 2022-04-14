import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Search } from "@styled-icons/evaicons-solid/Search";
import { World } from "@styled-icons/typicons/World";
import { ThreeBars } from "@styled-icons/octicons/ThreeBars";
import { UserCircle } from "@styled-icons/boxicons-solid/UserCircle";

//

import { DateRangePicker } from "@mantine/dates";
import { DatePicker } from "@mantine/dates";

export default function Header() {
  const [value, setValue] = useState([Date | null, Date | null]);

  return (
    <header>
      <TopInfo>
        <h4>
          COVID-19 çerçevesinde aldığımız önlemler hakkındaki en güncel
          bilgileri öğrenin
        </h4>
      </TopInfo>
      {/* Left */}

      <Navbar>
        <StyledImage
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          width={102}
          height={80}
          objectFit="contain"
          objectPosition="left"
          alt="Airbnb Logo"
        />

        {/* Middle */}

        <DetailedSearchBar>
          <Titles>
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
            <Guests>
              <div>
                <h4>Misafirler</h4>
                <p>Misafir ekleyin</p>
              </div>
              <SearchIcon />
            </Guests>
          </Bar>
        </DetailedSearchBar>

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
  /**Parent */
}
const Navbar = styled.div`
  display: flex;
  position: sticky;
  width: 100%;
  height: 162px;
  padding-left: 21px;
  padding-right: 21px;
  z-index: 50;

  background-color: #000000;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  justify-content: space-evenly;
  padding: 5px;
  @media (min-width: 768px) {
    padding: 0px;
  }
`;
{
  /**Parent */
}
//
{
  /**Logo */
}
const StyledImage = styled(Image)`
  cursor: pointer;
`;
//
{
  /**Middle Section */
}
const DetailedSearchBar = styled.div`
  margin-left: 10%;
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
  background-color: black;
  color: white;
  padding-bottom: 0px;
  font-size: 13px;
  margin-left: 20%;
  margin-right: 20%;
`;
const Bar = styled.div`
  display: flex;
  grid-column: 4;
  width: 850px;
  height: 66px;

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

  &:hover {
    background-color: #ebebeb;
  }
  display: flex;
`;
//
const SearchIcon = styled(Search)`
  background-color: #e11960;
  color: white;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  margin-left: 50px;
  margin-top: 8px;
`;
//
{
  /**Right Section  */
}
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
