import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  background: #000;
  width: 100%;
`;

export const ArticleTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 450px;
  padding: 0 24px;
  @media screen and (max-width: 768px) {
    transition: all 0.3s ease-in-out;
    padding: 0 24px;
  }
`;

export const ArticleTitleWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px;
`;

export const ArticleWrapper = styled.div`
  min-height: 460px;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  grid-gap: 16px;
  @media screen and (max-width: 768px) {
    transition: all 0.3s ease-in-out;
    grid-template-columns: 1fr;
    padding: 0 24px;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
`;

export const TopLine = styled.p`
  color: red;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#fff" : "#000")};
  @media screen and (max-width: 480px) {
    transition: all 0.3s ease-in;
    font-size: 32px;
  }
`;

export const SubTitle = styled.p`
  max-width: 440px;
  margin-bottom: 25px;
  font-size: 1.1rem;
  line-height: 32px;
  font-weight: bold;
  color: ${({ darkText }) => (darkText ? "#000" : "#fff")};
`;

export const Paragraph = styled.p`
  display: flex;
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 0.9rem;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#000" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  font-weight: bold;
  z-index: 99;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const Reference = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 450px;
  padding: 0 24px;
`;
export const ReferenceWrapper = styled.div`
  min-width: 50%;
  max-width: 800px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    transition: all 0.5s ease-in;
    min-width: 100%;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Form = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  all: unset;
  background: white;
  width: 100%;
  color: #010606;
  font-weight: bold;
  padding-left: 10px;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  ::placeholder {
    color: #010606;
    padding-left: 10px;
    font-size: 0.9rem;
    font-weight: bold;
  }
`;

export const UpBtn = styled.div`
  font-size: 1.5rem;
  transition: all 0.5s ease-in;
  :hover {
    color: red;
  }
`;
