import React, { useRef, useState, useEffect } from "react";
import Router from "react-router-dom";
import styled from "styled-components";
import { useRefData } from "./UseRefData";
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
} from "./UseRefElements";
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

const LabelXL = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 10rem;
  height: 10rem;
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

function UseRef() {
  const target = useRef();
  const [mouseXY, setMouseXY] = useState({ x: 0, y: 0 });
  const [targetXY, setTargetXY] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    setMouseXY({ x: e.pageX, y: e.pageY });
  };

  const setTargetPosition = () => {
    setTargetXY({
      x: target.current.offsetLeft + 80,
      y: target.current.offsetTop + 30,
    });
  };

  useEffect(() => {
    setTargetPosition();
  }, []);

  useEffect(() => {
    // 마우스를 움직일 때마다 이벤트 생성 ---> onMove 실행
    window.addEventListener("mousemove", onMove);

    // componentWillUnMount
    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <Container>
      <Label>
        x:{mouseXY.x} y:{mouseXY.y}
      </Label>
      <ArticleTitle>
        <ArticleTitleWrapper>
          <TopLine>{useRefData.topLine}</TopLine>
          <Heading ref={target} lightText={useRefData.lightText}>
            <ButtonPart foo="useRef" answer="CLEAR!!!" />
          </Heading>
          <SubTitle>{useRefData.description}</SubTitle>
        </ArticleTitleWrapper>
      </ArticleTitle>

      <ArticleWrapper>
        {/* 1*/}
        <TextWrapper>
          <SubTitle darkText={useRefData.darkText}>
            {useRefData.contents.paragraph01.title}
          </SubTitle>

          <Paragraph>
            {useRefData.contents.paragraph01.text1}
            <ButtonPart foo="_______" answer="정답" />
            {useRefData.contents.paragraph01.text2}
          </Paragraph>
          <Paragraph>{useRefData.contents.paragraph01.text3}</Paragraph>
          <Paragraph>
            <DefaultCodeBlock
              text={useRefData.contents.paragraph01.code1}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useRefData.contents.paragraph01.text4}</Paragraph>
          <Paragraph>
            <DefaultCodeBlock
              text={useRefData.contents.paragraph01.code2}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useRefData.contents.paragraph01.text5}</Paragraph>
        </TextWrapper>

        {/* 2 */}
        <TextWrapper>
          <SubTitle darkText={useRefData.darkText}>
            {useRefData.contents.paragrah02.title}
            <ButtonPart foo="_______" answer="useRef" />
          </SubTitle>
          <Paragraph>{useRefData.contents.paragrah02.text1}</Paragraph>
          <Paragraph>
            <DefaultCodeBlock
              text={useRefData.contents.paragrah02.code1}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useRefData.contents.paragrah02.text2}</Paragraph>
          <Paragraph>
            <DefaultCodeBlock
              text={useRefData.contents.paragrah02.code2}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useRefData.contents.paragrah02.text3}</Paragraph>
        </TextWrapper>

        {/* 3 */}
        <TextWrapper>
          <SubTitle darkText={useRefData.darkText}>
            {useRefData.contents.paragrah03.title}
            <ButtonPart
              foo="무슨 일이 일어나고 있나요?"
              answer="시험을 좀 봅시다! 4번으로 넘어가세요."
            />
          </SubTitle>
          <Paragraph>{useRefData.contents.paragrah03.text1}</Paragraph>

          <Paragraph>
            <DefaultCodeBlock
              text={useRefData.contents.paragrah03.code1}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useRefData.contents.paragrah03.text2}</Paragraph>
        </TextWrapper>

        {/* 4 */}
        <TextWrapper>
          <SubTitle darkText={useRefData.darkText}>
            {useRefData.contents.paragrah04.title}
            <ButtonPart foo="O/X QUIZ" answer="눌러도 소용 없어요." />
          </SubTitle>
          <Paragraph>{useRefData.contents.paragrah04.text1}</Paragraph>
          <Paragraph>
            {useRefData.contents.paragrah04.quiz1.qtext1}
            <ButtonPart
              foo="______"
              answer={useRefData.contents.paragrah04.quiz1.blank1}
            />
            {useRefData.contents.paragrah04.quiz1.qtext2}
          </Paragraph>
          <Paragraph>
            {useRefData.contents.paragrah04.quiz2.qtext1}
            <ButtonPart
              foo="______"
              answer={useRefData.contents.paragrah04.quiz2.blank1}
            />
            {useRefData.contents.paragrah04.quiz2.qtext2}
          </Paragraph>
          <Paragraph>
            {useRefData.contents.paragrah04.quiz3.qtext1}
            <ButtonPart
              foo="______"
              answer={useRefData.contents.paragrah04.quiz3.blank1}
            />
            {useRefData.contents.paragrah04.quiz3.qtext2}
          </Paragraph>
          <Paragraph>
            {useRefData.contents.paragrah04.quiz4.qtext1}
            <ButtonPart
              foo="______"
              answer={useRefData.contents.paragrah04.quiz4.blank1}
            />
            {useRefData.contents.paragrah04.quiz4.qtext2}
          </Paragraph>
          <Paragraph>
            {useRefData.contents.paragrah04.quiz5.qtext1}
            <ButtonPart
              foo="______"
              answer={useRefData.contents.paragrah04.quiz5.blank1}
            />
            {useRefData.contents.paragrah04.quiz5.qtext2}
          </Paragraph>
        </TextWrapper>

        {/* 5 */}
        <TextWrapper>
          <SubTitle darkText={useRefData.darkText}>
            {useRefData.contents.paragrah05.title}
          </SubTitle>
          <Paragraph>{useRefData.contents.paragrah05.text1}</Paragraph>
          <Paragraph>{useRefData.contents.paragrah05.text2}</Paragraph>
        </TextWrapper>

        {/* 6 */}
        <TextWrapper>
          <SubTitle darkText={useRefData.darkText}>
            {useRefData.contents.paragrah06.title}
          </SubTitle>
          <Paragraph>
            <LabelXL>
              x:{mouseXY.x} y:{mouseXY.y}
            </LabelXL>
          </Paragraph>
          <Paragraph>{useRefData.contents.paragrah06.text1}</Paragraph>
          <Paragraph>
            <DefaultCodeBlock
              text={useRefData.contents.paragrah06.code1}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useRefData.contents.paragrah06.text2}</Paragraph>
        </TextWrapper>

        {/* 7 */}
        <TextWrapper>
          <SubTitle darkText={useRefData.darkText}>
            {useRefData.contents.paragrah07.title}
          </SubTitle>
          <Paragraph>{useRefData.contents.paragrah07.text1}</Paragraph>
          <Paragraph>{useRefData.contents.paragrah07.text2}</Paragraph>
          <ButtonPart
            foo="________________________"
            answer="웹 사이트가 작동하지 않았습니다..."
          />
        </TextWrapper>

        {/* 8 */}
        <TextWrapper>
          <SubTitle darkText={useRefData.darkText}>
            {useRefData.contents.paragrah08.title}
          </SubTitle>
          <Paragraph>{useRefData.contents.paragrah08.text1}</Paragraph>
          <Paragraph>
            <DefaultCodeBlock
              text={useRefData.contents.paragrah08.code1}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useRefData.contents.paragrah08.text2}</Paragraph>
        </TextWrapper>

        {/* 9 */}
        <TextWrapper>
          <SubTitle darkText={useRefData.darkText}>
            {useRefData.contents.paragrah09.title}
          </SubTitle>
          <Paragraph>{useRefData.contents.paragrah09.text1}</Paragraph>
          <Paragraph>
            <DefaultCodeBlock
              text={useRefData.contents.paragrah09.code1}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useRefData.contents.paragrah09.text2}</Paragraph>
          <Paragraph>{useRefData.contents.paragrah09.text3}</Paragraph>
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
          <ButtonPart foo="x" answer={targetXY.x} />
          <ButtonPart foo="y" answer={targetXY.y} />
        </ReferenceWrapper>
      </Reference>
    </Container>
  );
}

export default UseRef;
