import styled from 'styled-components';

export const IndGame = styled.div`
    width:90%;
    margin:auto;
    font-family: 'Acme', sans-serif;
    font-size: 20px;
    text-align: justify;
    .show {
        clear: left;
        img {
            height: 400px; 
            width: 400px;
            float: right;
            margin: 0 0 20px 20px;
            }
    }
    h1 {
        font-size: 30px;
        }
    .container {
        // display: flex;
        // justify-content: space-around;
    }
    @media screen and (max-width: 766px)  {
        font-size: 15px;
        h1 {
            font-size: 23px;
        }
        .container {
            flex-wrap: wrap;
            display: flex;
            justify-content: center;
        }
        .show {
            padding: 0;
            img {
                height: 300px;
                width: 300px;
                padding-top: 10px;
                margin: 10px 0;
            }
        }
    }

    @media screen and (max-width: 766px) and (orientation : landscape) {
    width:90%;
    margin:auto;
    font-family: 'Acme', sans-serif;
    font-size: 20px;
    text-align: justify;
    .show {
        // padding: 100px;
        clear: left;
        img {
            height: 200px; 
            width: 200px;
            float: right;
            margin: 0 0 20px 20px;
        }
    }
    h1 {
        font-size: 30px;
        }
    .container {
        // display: flex;
        // justify-content: space-around;
    }
    }

    @media screen and (min-width: 767px) and (max-width: 1200px) and (orientation : landscape) {
    width:90%;
    margin:auto;
    font-family: 'Acme', sans-serif;
    font-size: 20px;
    text-align: justify;
    .show {
        // padding: 100px;
        clear: left;
        img {
            height: 400px; 
            width: 400px;
            float: right;
            margin: 0 0 20px 20px;
        }
    }
    h1 {
        font-size: 30px;
        }
    .container {
        // display: flex;
        // justify-content: space-around;
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