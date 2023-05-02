import React from "react"; 
import styled from "styled-components";

const Wrapper = styled.div`
    padding: lem;
    background: grey;
`;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: white;
    `;

function MainPage(props) {
    return (
        <Wrapper>
            <Title>
                안녕, 리액트!
            </Title>
        </Wrapper>
    )
}

export default MainPage;