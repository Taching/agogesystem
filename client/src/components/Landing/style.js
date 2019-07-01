import styled from "styled-components";
import { color } from "../../styles/Theme";
import { moveInLeft, moveInRight } from "../../styles/Keyframes";

import HeroImg from "../../images/hero.jpg";
import SecImg from "../../images/section.jpg";

import dan from "../../images/dan.jpg";
import ryan from "../../images/ryan.jpg";

export const HeroStyle = styled.div`
  position: relative;
  height: 95vh;
  /* background-image: url(${HeroImg}); */
  background-size: cover;
  background-position: top;

  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

  &::after {
    background-color: ${color.black};
    content: "";
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.4;
  }
`;
export const VideoStyle = styled.video`
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  object-fit: cover;
  height: 100%;
`;
export const TextBox = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const HeadingPrimary = styled.h1`
  color: ${color.white};
  text-transform: uppercase;

  backface-visibility: hidden;
`;
export const HeadMain = styled.span`
  display: block;
  font-size: 6rem;
  font-weight: 400;
  letter-spacing: 4rem;
  line-height: 1.5;

  animation: ${moveInLeft} 1s ease-out;
`;
export const HeadSub = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1.75rem;
  padding: 1rem 0;
  color: ${color.red};

  animation: ${moveInRight} 1s ease-out;
`;

export const MainContent = styled.main`
  background-color: ${color.lightGrey};
  padding: 25rem 0;
  margin-top: -20vh;

  h2 {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    color: ${color.red};
    letter-spacing: 1rem;
    padding: 0 1rem 2rem;
  }
  p {
    color: ${color.black};
    font-weight: 400;
    font-size: 2rem;
    padding: 1rem;
  }
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    padding-top: 2rem;
    li {
      list-style: none;
      display: inline-block;
      padding: 0 40px 0 30px;
      vertical-align: top;
      color: ${color.red};
      font-size: 2rem;
      font-weight: 700;
    }
  }
`;

export const SectionClient = styled.div`
  padding: 20rem 0;
  background-image: url(${SecImg});
  background-size: cover;
  /* background-position: top; */
  background-color: rgba(#fff, 0.8);
  transform: skewY(-7deg);

  & > * {
    transform: skewY(7deg);
  }
  .box {
  }
`;

export const Client = styled.div`
  background-color: rgba(225, 225, 225, 0.8);
  font-size: 1.5rem;
  padding: 2.5rem;
  margin: 2rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(#fff, 0.15);
  transition: transition 0.3s;
  :hover {
    transform: translateY(-1.5rem) scale(1.03);
  }
  .img-circle {
    width: 200px;
    height: 200px;
    background-size: cover;
    display: block;
    border-radius: 100px;
    margin: 0 auto;
  }
  .dan {
    background-image: url(${dan});
  }
  .ryan {
    background-image: url(${ryan});
  }
`;
