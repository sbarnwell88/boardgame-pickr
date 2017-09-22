import styled from 'styled-components';

export const IndGame = styled.div`
    width:90%;
    margin:auto;
    font-family: 'Acme', sans-serif;
    font-size: 20px;
    text-align: justify;
    .show {
        padding: 100px;
        img {
            height: 400px; 
            width: 400px;
        }
    }
    h1 {
        font-size: 30px;
        padding: 10px;
        }
    .container {
        display: flex;
        justify-content: space-around;
    }
    @media screen and (max-width: 766px)  {
        font-size: 15px;
        h1 {
            font-size: 23px;
        }
        .container {
            flex-wrap: wrap;
        }
        .show {
            padding: 0;
            img {
                height: 300px;
                width: 300px;
                padding-top: 10px;
            }
        }
    }
`

export const Button = styled.button`
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    background: #941a18;
    color: white;
    border: 2px solid #941a18;
    font-size: 1em;
`

export const Buttons = styled.div`
    a:link {
        text-decoration: none;
        }
    a {
        color: white;
    }
      .buttons {
        display: flex;
        justify-content: center;
        padding: 20px;
    }
`