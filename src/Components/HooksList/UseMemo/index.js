import React, { useRef, useState, useEffect } from "react";
import Router from "react-router-dom";
import styled from "styled-components";
import { useMemoData } from "./UseMemoData";
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
} from "./UseMemoElements";
import ButtonPart from "../../Parts/ButtonPart";

const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 1rem;
  z-index: 999;
  right: 2rem;
  width: 5rem;
  height: 5rem;
  border-radius: 100%;

  background-color: red;
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

function UseMemo() {
  const target = useRef();

  const [position, setPosition] = useState("center");
  const [targetXY, setTargetXY] = useState({ x: 0, y: 0 });

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

  return (
    <Container>
      <Label>
        x:{targetXY.x} y:{targetXY.y}
      </Label>
      <ArticleTitle>
        <ArticleTitleWrapper>
          <TopLine>{useMemoData.topLine}</TopLine>
          <Heading ref={target} lightText={useMemoData.lightText}>
            <ButtonPart foo="useRef" answer="useMemo" />
          </Heading>
          <SubTitle>{useMemoData.description}</SubTitle>
        </ArticleTitleWrapper>
      </ArticleTitle>

      <ArticleWrapper>
        {/* 1*/}
        <TextWrapper>
          <SubTitle darkText={useMemoData.darkText}>
            {useMemoData.contents.paragraph01.title}
          </SubTitle>

          <Paragraph>{useMemoData.contents.paragraph01.text1}</Paragraph>
          <Paragraph>
            <LabelWrapper position={`${position}`}>
              <LabelXL>TARGET</LabelXL>
            </LabelWrapper>
          </Paragraph>
          <Paragraph>{useMemoData.contents.paragraph01.text2}</Paragraph>
          <Paragraph>{useMemoData.contents.paragraph01.text3}</Paragraph>
        </TextWrapper>

        {/* 2 */}
        <TextWrapper>
          <SubTitle darkText={useMemoData.darkText}>
            {useMemoData.contents.paragrah02.title}
          </SubTitle>
          <Paragraph>
            <PadWrapper>
              <Span onClick={toLeft}>L</Span>
              <Span onClick={toMiddle}>M</Span>
              <Span onClick={toRight}>R</Span>
            </PadWrapper>
          </Paragraph>
          <Paragraph>{useMemoData.contents.paragrah02.text1}</Paragraph>
          <Paragraph>
            <DefaultCodeBlock
              text={useMemoData.contents.paragrah02.code1}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useMemoData.contents.paragrah02.text2}</Paragraph>
        </TextWrapper>

        {/* 3 */}
        <TextWrapper>
          <SubTitle darkText={useMemoData.darkText}>
            {useMemoData.contents.paragrah03.title}
          </SubTitle>
          <Paragraph>{useMemoData.contents.paragrah03.text1}</Paragraph>

          <Paragraph>
            <DefaultCodeBlock
              text={useMemoData.contents.paragrah03.code1}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useMemoData.contents.paragrah03.text2}</Paragraph>
        </TextWrapper>

        {/* 4 */}
        <TextWrapper>
          <SubTitle darkText={useMemoData.darkText}>
            {useMemoData.contents.paragrah04.title}
            <ButtonPart foo="O/X QUIZ" answer="눌러도 소용 없어요." />
          </SubTitle>
          <Paragraph>{useMemoData.contents.paragrah04.text1}</Paragraph>
          <Paragraph>
            {useMemoData.contents.paragrah04.quiz1.qtext1}
            <ButtonPart
              foo="______"
              answer={useMemoData.contents.paragrah04.quiz1.blank1}
            />
            {useMemoData.contents.paragrah04.quiz1.qtext2}
          </Paragraph>
          <Paragraph>
            {useMemoData.contents.paragrah04.quiz2.qtext1}
            <ButtonPart
              foo="______"
              answer={useMemoData.contents.paragrah04.quiz2.blank1}
            />
            {useMemoData.contents.paragrah04.quiz2.qtext2}
          </Paragraph>
          <Paragraph>
            {useMemoData.contents.paragrah04.quiz3.qtext1}
            <ButtonPart
              foo="______"
              answer={useMemoData.contents.paragrah04.quiz3.blank1}
            />
            {useMemoData.contents.paragrah04.quiz3.qtext2}
          </Paragraph>
          <Paragraph>
            {useMemoData.contents.paragrah04.quiz4.qtext1}
            <ButtonPart
              foo="______"
              answer={useMemoData.contents.paragrah04.quiz4.blank1}
            />
            {useMemoData.contents.paragrah04.quiz4.qtext2}
          </Paragraph>
          <Paragraph>
            {useMemoData.contents.paragrah04.quiz5.qtext1}
            <ButtonPart
              foo="______"
              answer={useMemoData.contents.paragrah04.quiz5.blank1}
            />
            {useMemoData.contents.paragrah04.quiz5.qtext2}
          </Paragraph>
        </TextWrapper>

        {/* 5 */}
        <TextWrapper>
          <SubTitle darkText={useMemoData.darkText}>
            {useMemoData.contents.paragrah05.title}
          </SubTitle>
          <Paragraph>{useMemoData.contents.paragrah05.text1}</Paragraph>
          <Paragraph>{useMemoData.contents.paragrah05.text2}</Paragraph>
        </TextWrapper>

        {/* 6 */}
        <TextWrapper>
          <SubTitle darkText={useMemoData.darkText}>
            {useMemoData.contents.paragrah06.title}
          </SubTitle>

          <Paragraph>{useMemoData.contents.paragrah06.text1}</Paragraph>
          <Paragraph>
            <DefaultCodeBlock
              text={useMemoData.contents.paragrah06.code1}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useMemoData.contents.paragrah06.text2}</Paragraph>
        </TextWrapper>

        {/* 7 */}
        <TextWrapper>
          <SubTitle darkText={useMemoData.darkText}>
            {useMemoData.contents.paragrah07.title}
          </SubTitle>
          <Paragraph>{useMemoData.contents.paragrah07.text1}</Paragraph>
          <Paragraph>{useMemoData.contents.paragrah07.text2}</Paragraph>
          <ButtonPart
            foo="________________________"
            answer="웹 사이트가 작동하지 않았습니다..."
          />
        </TextWrapper>

        {/* 8 */}
        <TextWrapper>
          <SubTitle darkText={useMemoData.darkText}>
            {useMemoData.contents.paragrah08.title}
          </SubTitle>
          <Paragraph>{useMemoData.contents.paragrah08.text1}</Paragraph>
          <Paragraph>
            <DefaultCodeBlock
              text={useMemoData.contents.paragrah08.code1}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useMemoData.contents.paragrah08.text2}</Paragraph>
        </TextWrapper>

        {/* 9 */}
        <TextWrapper>
          <SubTitle darkText={useMemoData.darkText}>
            {useMemoData.contents.paragrah09.title}
          </SubTitle>
          <Paragraph>{useMemoData.contents.paragrah09.text1}</Paragraph>
          <Paragraph>
            <DefaultCodeBlock
              text={useMemoData.contents.paragrah09.code1}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useMemoData.contents.paragrah09.text2}</Paragraph>
          <Paragraph>{useMemoData.contents.paragrah09.text3}</Paragraph>
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

export default UseMemo;
