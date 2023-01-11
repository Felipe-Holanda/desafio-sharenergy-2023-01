import styled from "styled-components";

export const Card = styled.div`
    background-color: white;
    border-radius: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    width: 26em;
    line-height: 1.5em;
    margin-top: 1em;
    box-shadow: 0 0 .6em rgba(0,0,0,0.1);

    img{
        border-radius: 50%;
        box-shadow: 0 0 .2em rgba(0,0,0,0.1)
    }

    p{
        font-size: .9em;
    }

`