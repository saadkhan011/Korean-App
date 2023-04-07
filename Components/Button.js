import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
    padding: 10px;
    width: 50%;
    color: #aaaaaa;
    border: none;
    font-size: var(--text-size);
    font-weight: var(--text-weight);
    letter-spacing: -1;
    background-color: black;
`;
const BorderButton = styled.button`
    padding: 10px;
    width: 50%;
    color: #aaaaaa;
    border: none;
    font-size: var(--text-size);
    font-weight: var(--text-weight);
    letter-spacing: -1;
    background-color: black;
    border-right: 1px solid #aaaaaa;
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    max-width: 500px;
    position: fixed;
    bottom: 0px;
    background-color: black;
    padding: 10px;
`;
function Button() {
    return (
        <Container>
            <BorderButton>카카오톡 공유</BorderButton>
            <Btn>링크로 공유</Btn>
        </Container>
    )
}

export default Button;