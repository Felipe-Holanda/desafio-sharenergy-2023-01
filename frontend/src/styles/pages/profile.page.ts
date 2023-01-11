import styled from "styled-components";

export const HeadBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    background-color: white;
    border-radius: 0 0 .5em .5em;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

    button{
        background-color: #00A2A2;
        color: white;
        padding: .5em;
        border-radius: .5em;
        border: none;
        display: flex;
        flex-direction: row;
        align-items: center;

        i{
            font-size: 1.5em;
            margin: 0 .5em;
        }

        span{
            font-size: 1.5em;
            color: white;
            margin: 0 .5em;
        }

        &:hover{
            cursor: pointer;
            background-color: #00B2B2;
        }
    }

    span{
        font-size: 1em;
        color: gray;
    }
`

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em;
    background-color: white;
    border-radius: .5em;
    margin-top: 1em;

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1em;
    }

    form button{
        background-color: #00A2A2;
        color: white;
        padding: .5em;
        border-radius: .5em;
        border: none;
        padding: 1em;

        &:hover{
            cursor: pointer;
            background-color: #00B2B2;
        }

        &:disabled{
            background-color: gray;
            cursor: not-allowed;
        }

    }

    form input:disabled{

        border: 1px solid black;

        &:hover{
            cursor: not-allowed;
        }
    }
`

export const ErrorText = styled.span`
    color: red;
    font-size: .8em;
    text-align: center;
    margin-bottom: .5em;
`