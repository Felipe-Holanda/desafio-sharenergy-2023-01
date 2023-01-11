import styled from "styled-components";

export const DogContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5em;
    background-color: white;
    padding: 1em;
    border-radius: 1em;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    width: 100%;
    object-fit: contain;

    img {
        max-height: 500px;
        border-radius: 1em;
    }

    button {
        padding: 1em 2em;
        border-radius: 1em;
        border: none;
        display: flex;
        align-items: center;
        color: white;
        font-weight: bold;
        background-color: #00A2A2;

        &:hover {
            cursor: pointer;
            background-color: #00B2B2;
        }

        i{
            font-size: 2em;
        }


    }
`