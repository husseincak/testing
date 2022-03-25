import {css, styled } from "frontity";
import BG from "./image.jpg"
const Theme = () => {
  console.log("Background", BG)
  return (
    <Styled >Hola</Styled>
  );
};

export default Theme;


const Styled = styled.div`
background-image: url("${BG}");
`