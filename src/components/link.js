import { Bounce } from "react-reveal";
import styled from "styled-components";
import { linkData, themeData } from "../data/data";
import { useContext } from "react";
import themeContext from "../state/context/themeContext";

const Link = () => {
  const a = useContext(themeContext);
  return (
    <>
      <Bounce>
        <ParentWrapper>
          {linkData.map((item, index) => (
            <CustomDiv
              props={a.darkMode ? themeData.light : themeData.dark}
              onClick={() => {
                window.open(item.link, "_blank");
              }}
              key={index}
            >
              <div className="text-center">
                <button>{item.name}</button>
              </div>
            </CustomDiv>
          ))}
        </ParentWrapper>
      </Bounce>
    </>
  );
};

export default Link;

const CustomDiv = styled.div`
  margin-bottom: 15px;
  border-radius: 5px;
  cursor: pointer;
  align-content: center;
  align-items: baseline;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #101828;
  width: 50vw;
  padding: 15px;
  background-color: ${(props) => props.props.cardBackgroundColor};
  color: #101828;
  display: flex;
  height: max-content;
  color: ${(props) => props.props.CardtextColor};
  button {
    background-color: transparent;
    border: none;
    color: ${(props) => props.props.CardtextColor};
  }
  @media (max-width: 768px) {
    width: 90vw;
    text-align: center;
  }
  :hover {
    background-color: ${(props) => props.props.onHoverBackgroundColor};
    color: ${(props) => props.props.onHoverTextColor};
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
  p {
    flex: 1;
  }
  #image {
    margin-left: 10px;
    width: 50px;
    height: 50px;
  }
`;

const ParentWrapper = styled.div`
  margin-top: 20px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 50vh;
`;
