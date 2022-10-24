import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import { socialLinks, themeData } from "../data/data";
import themeContext from "../state/context/themeContext";
import { useContext } from "react";
import logo from "../assets/logo.png";
import I4G from "../assets/I4G.png";
const Footer = () => {
  const a = useContext(themeContext);

  const footerSocialLinkColor = () => {
    if (a.darkMode) return themeData.dark.footerSocialLinkColor;
    else return themeData.light.footerSocialLinkColor;
  };

  const SocialIconStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: footerSocialLinkColor(),
  };

  const backgroundStyles = {
    // backgroundColor: footerSocialLinkColor(),
  };

  return (
    <>
      <div className="bottom">
        <SocialsContainer>
          {socialLinks.map((link, index) => {
            return (
              <FooterContent key={index}>
                <SocialIcon
                  className="shadow"
                  style={SocialIconStyle}
                  url={link}
                />
              </FooterContent>
            );
          })}
        </SocialsContainer>
        <hr />
        <MainFooter>
          <img alt="" src={logo} style={backgroundStyles} />
          <p style={backgroundStyles}>HNG Internship 9 Frontend Task</p>
          <img src={I4G} alt="" style={backgroundStyles} />
        </MainFooter>
      </div>
    </>
  );
};

export default Footer;

const SocialsContainer = styled.div`
  width: 100vw;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
`;

const FooterContent = styled.div`
  margin: 5px;
  :hover {
    transform: scale(1.1);
  }
`;

const MainFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`;
