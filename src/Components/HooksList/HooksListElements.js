import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Link = styled(LinkR)`
  all: unset;
  text-decoration: none;
  color: #000;
`;

export const HookContainer = styled.div`
  height: 860px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const HookWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const HookCard = styled.div`
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  min-height: 300px;
  min-width: 300px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: e-resize;
  }
`;

export const HookIcon = styled.img`
  width: 100%;
  height: 5rem;
  width: 5rem;
  margin-bottom: 1rem;
  color: ${({ fill }) => (fill ? "#ff0000" : "#fff")};
`;

export const HookH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const HookH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
  background-color: #000;
  color: #fff;
`;

export const HookP = styled.p`
  font-size: 1rem;
  text-align: left;
  background-color: #000;
  color: #fff;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    text-align: left;
    background-color: #000;
    color: #fff;
  }
`;
