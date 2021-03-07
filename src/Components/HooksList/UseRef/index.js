import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useRefData } from "./UseRefData";
import { DefaultCodeBlock } from "../../CodeBlock";
import { Button } from "../../ButtonElements";
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
  BtnWrap,
  Form,
  InputWrapper,
  Input,
  UpBtn,
  Reference,
  ReferenceWrapper,
} from "./UseRefElements";

function UseRef() {
  return (
    <Container>
      <ArticleTitle>
        <ArticleTitleWrapper>
          <TopLine>{useRefData.topLine}</TopLine>
          <Heading lightText={useRefData.lightText}>
            {useRefData.headLine}
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
          <Paragraph>{useRefData.contents.paragraph01.text1}</Paragraph>
        </TextWrapper>

        {/* 2 */}
        <TextWrapper>
          <SubTitle darkText={useRefData.darkText}>
            {useRefData.contents.paragrah02.title}
          </SubTitle>
          <Paragraph>{useRefData.contents.paragrah02.text1}</Paragraph>
          <Paragraph>
            <DefaultCodeBlock
              text={useRefData.contents.paragrah02.code1}
              showLineNumbers={false}
            />
          </Paragraph>
        </TextWrapper>

        {/* 3 */}
        <TextWrapper>
          <SubTitle darkText={useRefData.darkText}>
            {useRefData.contents.paragrah03.title}
          </SubTitle>
          <Paragraph>
            <DefaultCodeBlock
              text={useRefData.contents.paragrah03.code1}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useRefData.contents.paragrah03.text1}</Paragraph>
        </TextWrapper>

        {/* 4 */}
        <TextWrapper>
          <SubTitle darkText={useRefData.darkText}>
            {useRefData.contents.paragrah04.title}
          </SubTitle>
          <Paragraph>
            <DefaultCodeBlock
              text={useRefData.contents.paragrah04.code1}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useRefData.contents.paragrah04.text1}</Paragraph>
        </TextWrapper>

        {/* 5 */}
        <TextWrapper>
          <SubTitle darkText={useRefData.darkText}>
            {useRefData.contents.paragrah05.title}
          </SubTitle>
          <Paragraph>{useRefData.contents.paragrah05.text1}</Paragraph>
          <Paragraph>
            <DefaultCodeBlock
              text={useRefData.contents.paragrah05.code1}
              showLineNumbers={false}
            />
          </Paragraph>
        </TextWrapper>

        {/* 6 */}
        <TextWrapper>
          <SubTitle darkText={useRefData.darkText}>
            {useRefData.contents.paragrah06.title}
          </SubTitle>
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
        </TextWrapper>

        {/* 10 */}
        <TextWrapper>
          <SubTitle darkText={useRefData.darkText}>
            {useRefData.contents.paragrah10.title}
          </SubTitle>
          <Paragraph>{useRefData.contents.paragrah10.text1}</Paragraph>

          <Paragraph>
            <DefaultCodeBlock
              text={useRefData.contents.paragrah10.code1}
              showLineNumbers={false}
            />
          </Paragraph>
          <Paragraph>{useRefData.contents.paragrah10.text2}</Paragraph>
        </TextWrapper>
      </ArticleWrapper>

      <Reference>
        <ReferenceWrapper></ReferenceWrapper>
      </Reference>
    </Container>
  );
}

export default UseRef;
