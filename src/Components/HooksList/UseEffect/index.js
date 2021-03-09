import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useEffectData } from "./UseEffectData";
import { DefaultCodeBlock } from "../../CodeBlock";
import {
  Container,
  ArticleTitle,
  ArticleTitleWrapper,
  ArticleWrapper,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  Paragraph,
} from "./UseEffectElements";
import ButtonPart from "../../Parts/ButtonPart";

const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 1rem;
  z-index: 999;
  right: 2rem;
  width: auto;
  height: 5rem;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0);

  color: white;
  text-align: center;
  font-weight: bold;

  transition: all 1s ease-in;
`;

const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.position || "center"};
  align-items: center;
`;

const PadWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LabelXL = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 7rem;
  height: 7rem;
  border-radius: 100%;

  background-color: red;
  color: white;
  text-align: center;
  font-weight: bold;

  transition: all 1s ease-in;
`;

const Reference = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 450px;
  padding: 0 24px;
`;
const ReferenceWrapper = styled.div`
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

const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  font-weight: bold;
  font-size: 2rem;
  background-color: red;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  :hover {
    cursor: pointer;
    color: black;
  }
`;

function UseEffect() {
  const target = useRef();
  const sphere = useRef();

  const [position, setPosition] = useState("center");
  const [targetXY, setTargetXY] = useState({ x: 0, y: 0 });
  const [sphereXY, setSphereXY] = useState({ x: 0, y: 0 });

  // TARGET 중간 위치에서 시작
  // 왼쪽으로 보내기
  const toLeft = () => {
    setPosition("flex-start");
    console.log("toLeft");
  };
  // 중간으로 복귀
  const toMiddle = () => {
    setPosition("center");
    console.log("toMiddle");
  };
  // 오른쪽으로 보내기
  const toRight = () => {
    setPosition("flex-end");
    console.log("toRight");
  };

  // 기존 TARGET 위치
  const setTargetPosition = () => {
    setTargetXY({
      x: target.current.offsetLeft + 80,
      y: target.current.offsetTop + 30,
    });
    console.log("setTargetPosition");
  };

  useEffect(() => {
    setTargetPosition();
  }, []);

  // 스피어 위치: 정상작동해야 함
  const setSherePosition = () => {
    setSphereXY({
      x: sphere.current.offsetLeft + 80,
      y: sphere.current.offsetTop + 30,
    });
    console.log("setSpherePosition");
  };

  useEffect(() => {
    setSherePosition();
  }, [position]);

  return (
    <Container>
      <Label>
        <Span onClick={toLeft}>L</Span>
        <Span onClick={toMiddle}>M</Span>
        <Span onClick={toRight}>R</Span>
      </Label>
      <ArticleTitle>
        <ArticleTitleWrapper>
          <TopLine>{useEffectData.topLine}</TopLine>
          <Heading ref={target} lightText={useEffectData.lightText}>
            <ButtonPart foo="useRef" answer="useEffect RECAP" />
          </Heading>
          <SubTitle>{useEffectData.description}</SubTitle>
        </ArticleTitleWrapper>
      </ArticleTitle>

      <ArticleWrapper>
        {/* 1*/}
        <TextWrapper>
          <SubTitle darkText={useEffectData.darkText}>
            {useEffectData.contents.paragraph01.title}
          </SubTitle>

          <Paragraph>{useEffectData.contents.paragraph01.text1}</Paragraph>
          <Paragraph>
            <LabelWrapper position={`${position}`}>
              <LabelXL>
                x:{targetXY.x} y:{targetXY.y}
              </LabelXL>
            </LabelWrapper>
          </Paragraph>
          <Paragraph>{useEffectData.contents.paragraph01.text2}</Paragraph>
          <Paragraph>{useEffectData.contents.paragraph01.text3}</Paragraph>
        </TextWrapper>

        {/* 2 */}
        <TextWrapper>
          <SubTitle darkText={useEffectData.darkText}>
            {useEffectData.contents.paragrah02.title}
          </SubTitle>
          <Paragraph>
            <PadWrapper>
              <Span onClick={toLeft}>L</Span>
              <Span onClick={toMiddle}>M</Span>
              <Span onClick={toRight}>R</Span>
            </PadWrapper>
          </Paragraph>
          <Paragraph>{useEffectData.contents.paragrah02.text1}</Paragraph>
          <Paragraph>
            <DefaultCodeBlock
              text={useEffectData.contents.paragrah02.code1}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useEffectData.contents.paragrah02.text2}</Paragraph>
        </TextWrapper>

        {/* 3 */}
        <TextWrapper>
          <SubTitle darkText={useEffectData.darkText}>
            {useEffectData.contents.paragrah03.title}
          </SubTitle>
          <Paragraph>{useEffectData.contents.paragrah03.text1}</Paragraph>

          <Paragraph>
            <DefaultCodeBlock
              text={useEffectData.contents.paragrah03.code1}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useEffectData.contents.paragrah03.text2}</Paragraph>
        </TextWrapper>

        {/* 4 */}
        <TextWrapper>
          <SubTitle darkText={useEffectData.darkText}>
            {useEffectData.contents.paragrah04.title}
          </SubTitle>
          <Paragraph>{useEffectData.contents.paragrah04.text1}</Paragraph>
          <Paragraph>
            <LabelWrapper position={`${position}`}>
              <LabelXL ref={sphere}>
                x:{sphereXY.x} y:{sphereXY.y}
              </LabelXL>
            </LabelWrapper>
          </Paragraph>
          <Paragraph>{useEffectData.contents.paragrah04.text2}</Paragraph>
          <Paragraph>
            <DefaultCodeBlock
              text={useEffectData.contents.paragrah04.code1}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useEffectData.contents.paragrah04.text3}</Paragraph>
        </TextWrapper>
      </ArticleWrapper>

      <Reference>
        <ReferenceWrapper>
          <Paragraph>
            여기까지 이해했다면 다음으로 넘어갑시다. 다음 주제는 주어진 좌표를
            이용해 찾아보세요.
          </Paragraph>
        </ReferenceWrapper>

        <ReferenceWrapper>
          <Span>←</Span>
          <Span>-</Span>
          <Span>→</Span>
        </ReferenceWrapper>
      </Reference>
    </Container>
  );
}

export default UseEffect;
