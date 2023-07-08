'use client'

import styled from 'styled-components';

export const Main = styled.li`
    border: 2px solid;
    border-radius: 0.5rem;
    width: 50rem;
    padding: 1rem;
`;

export const Question = styled.div`
    text-align: center;
`;

export const Answer = styled.div`

`;

export const AnswerWrapper = styled.div`
    transition: height 2s ease-out;
    overflow: hidden;
`;

export const UL = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`;