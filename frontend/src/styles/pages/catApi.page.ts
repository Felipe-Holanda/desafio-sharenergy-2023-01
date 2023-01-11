import styled from "styled-components";

export const ElementsBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1em;
    background-color: white;
    border-radius: 0 0 .5em .5em;

    a{
        color: #000;
        margin: .5em;
        i{
            font-size: 1.5em;
        }
    }

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`

export const CatImage = styled.img`
    width: 370px;
    height: 100%;
    object-fit: cover;
    border-radius: .5em;
`
export const StyledInput = styled.input`
    background-color: #eee;
    border: none;
    padding: 1em;
    border-radius: .5em 0 0 .5em;

    &:focus {
        outline: .5px solid #00A2A2;
        background-color: #fff;
    }
`
export const StyledBtn = styled.button`
    background-color: #00A2A2;
    color: white;
    padding: .5em;
    border-radius: 0 .5em .5em 0;
    border: none;
    i{
        font-size: 2.1em;
    }

    &:hover{
        cursor: pointer;
        background-color: #00B2B2;
    }
`

export const StyledDiv = styled.div`
    background-color: white;
    border-radius: .5em;
    margin-top: 1em;
    padding: 1em;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`