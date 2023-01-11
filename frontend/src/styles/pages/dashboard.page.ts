import styled from "styled-components";

export const ElementsBar = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    border-radius: 0 0 .5em .5em;
    box-shadow: 0 0 .6em rgba(0,0,0,0.1);

    .elements{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .searchBar{
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        align-items: center;

        input{
            height: 2.3em;
            border: none;
            background-color: #eee;
            padding: 1em;
            width: 10em;
            border-radius: .5em 0 0 .5em;

            &:focus{
                background-color: #fff;
                outline: .5px solid #00A2A2;
            }
        }

        button{
            background-color: #00A2A2;
            border: none;
            padding: .1em .3em;
            color: white;
            border-radius: 0 .5em .5em 0;

            &:hover{
                background-color: #00B2B2;
                cursor: pointer;
            }
        }

        button i{
            font-wheight: bold;
            font-size: 2em;
        }
    }

    nav{
        margin-right: 10px;
    }

    nav i{
        font-size: 1.4em;
        cursor: pointer;
    }

    nav input{
        width: 20px;
        text-align: center;
        border: none;
        border-bottom: 1px solid #000;
        font-size: 1.2em;
        &:focus{
            outline: none;
            border: none;
        }
    }
`

export const CardsPlace = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;

    .noResult{
        background-color: white;
        margin-top: 1.5em;
        padding: 1em;
        border-radius: .5em;
        box-shadow: 0 0 .6em rgba(0,0,0,0.1);
    }
`