import { useRef, useState } from "react";
import * as S from "./AccordianEffect.styles";

export default function AccordianItem({
  question,
  answer,
  isActive,
  handleClick,
}) {
  const content = useRef();
  return (
    <S.Main onClick={handleClick}>
      <S.Question>{question}</S.Question>
      <S.AnswerWrapper
        ref={content}
        style={{
          height: isActive ? `${content.current.scrollHeight}px` : "0px",
        }}
      >
        <S.Answer>{answer}</S.Answer>
      </S.AnswerWrapper>
    </S.Main>
  );
}
