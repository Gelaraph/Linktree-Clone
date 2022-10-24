import { useContext } from "react";
import styled from "styled-components";
import { Zoom } from "react-reveal";
import { profileData, themeData } from "../data/data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DarkModeToggle from "react-dark-mode-toggle";
import themeContext from "../state/context/themeContext";
import "react-lazy-load-image-component/src/effects/blur.css";

const Header = () => {
  const theme = useContext(themeContext);
  const { name, profilePhoto } = profileData;
  if (!theme.darkMode) {
    document.body.style.backgroundColor = themeData.dark.backgroundColor;
  } else {
    document.body.style.backgroundColor = themeData.light.backgroundColor;
  }

  return (
    <>
      <DarkMode
        onChange={theme.setDarkMode}
        checked={theme.darkMode}
        size={50}
      />
      <Zoom>
        <HeaderWrapper>
          <CustomImage effect="blur" src={profilePhoto} />
          <UserNameText
            props={theme.darkMode ? themeData.light : themeData.dark}
          >
            {name}
          </UserNameText>
        </HeaderWrapper>
      </Zoom>
    </>
  );
};
export default Header;

const DarkMode = styled(DarkModeToggle)`
  margin: 15px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  margin-top: 4rem;
`;

const CustomImage = styled(LazyLoadImage)`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 5px;
`;

const UserNameText = styled.h6`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #101828;
  color: ${(props) => props.props.headerFontColor};
  font-weight: bold;
  text-align: center;
  margin-top: 1rem;
`;
