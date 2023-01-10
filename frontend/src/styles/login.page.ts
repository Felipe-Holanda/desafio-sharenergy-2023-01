import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMain = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const StyledForm = styled.form`
    background-color: #fff;
    width: 25em;
    max-width: 350px;
    padding: 1em;
    margin: 0 auto;
    box-shadow: 0 0 .6em rgba(0, 0, 0, 0.1);
    border-radius: 1.2em;

    #checkboxset{
        display: flex;
        justify-content: center;
        align-items: center;
        input{
            margin-right:.5em;
        }
    }

    i{
        font-size: 2em;
        position: fixed;
        transform: translate(-120%, 10%);
        color: gray;
        cursor: pointer;
    }
`

export const StyledInput = styled.input`
    background-color: #EEE;
    width: 100%;
    padding:.5em;
    border: none;
    height: 3em;
    border-radius:.5em;
    margin-bottom:.5em;

    :focus {
        outline: .5px solid #00A2A2;
        background-color: #FFF;
    }
`

export const StyledLabel = styled.label`
    display: block;
    margin-bottom:.5em;
    font-size: 1em;
`

export const StyledHeadline = styled.h1`
    font-size: 2em;
    text-align: center;
    margin: 0 auto;
    margin-bottom:.5em;
`

export const OutlineBtn = styled(Link)`
    background-color: #fff;
    outline: 2px solid #00A2A2;
    color: #00A2A2;
    border: none;
    border-radius:.8em;
    font-size: 1.2em;
    padding:.8em;
    text-decoration: none;

    &&:hover{
        background-color: #00A2A2;
        color: #FFF;
        cursor: pointer;
        outline: none;
    }
`
export const FilledBtn = styled.button`
    background-color: #00A2A2;
    color: white;
    border: none;
    border-radius:.8em;
    font-size: 1.2em;
    padding:.8em;

    &&:hover{
        background-color: #00b8b8;
        cursor: pointer;
    }
`

export const BtnSet = styled.div`
    margin: .5em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`

export const StyledError = styled.span`
    color: red;
    font-size: .8em;
    margin-bottom: .5em;
    display: block;
    text-align: center;
`