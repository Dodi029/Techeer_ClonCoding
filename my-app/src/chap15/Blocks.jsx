import styled from "styled-components";

const Wrapper = styled.div`
    padding: lem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: grey;
`;

const Block = styled.div`
    padding: ${(props) => [rp[styled.padding]]};
    border: 1px solid black;
    border-radius: 1rem;
    background-color: ${(props) => props.bgColor};
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`;

const blockItems = [
    {
        label: "1",
        padding: "1rem",
        backgroundColor: "red",
    },
    {
        label: "2",
        padding: "3rem",
        backgroundColor: "green",
    },
    {
        label: "3",
        padding: "2rem",
        backgroundColor: "blue",
    },
];

function Blocks(props) {
    return (
        <Wrapper>
            {blockItems.map((blockitem) => (
                return (
                    <Block
                    padding={blockitem.padding}
                    backgroundColor={blockitem.backgroundColor}
                    >
                        {blockitem.label}
                    </Block>
                );
            ))}
        </Wrapper>
    );
}

export default Blocks;