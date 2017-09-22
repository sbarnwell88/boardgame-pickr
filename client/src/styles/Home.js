import styled from 'styled-components';

export const Nav = styled.div`
    background-color: #941a18;
    padding: 20px;
    font-family: 'Acme', sans-serif;
    #logo {
        font-family: 'Frijole', cursive;
        font-size: 30px;
    }
    .nav-links: {
        display: flex;
    }
    .link {
        display: flex;
        justify-content: space-around;
        a:link {
        text-decoration: none;
        }
        a {
            color: white;
            font-size: 20px;
        }
    }

    @media screen and (max-width: 766px)  { 
        #logo {
            font-size: 15px;
        }
        .link {
            justify-content: space-between;
            a {
                font-size: 10px;
            }
        }
    }
`

export const LandingPage = styled.div`
    background-image: url('https://il6.picdn.net/shutterstock/videos/13437293/thumb/1.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    color: white;
    font-family: 'Acme', sans-serif;
    img {
        width: 250px;
        height: 250px;
    }
    .hot-games {
        display: flex;
        justify-content: center;
        padding: 20px;
        font-size: 40px;
        font-weight: bold;
    }
    .game-list {
        display: flex;
        justify-content: center;
        font-size: 15px;
        font-weight: bold;
        color: white;
        font-family: 'Acme', sans-serif;
    }
    .random {
        display: flex;
        justify-content: center;
    }
    @media screen and (max-width: 766px)  {
        img {
            width: 100px;
            height: 100px;
        }
        .game-list {
            font-size: 10px;
        }
        .hot-games {
            text-align: center;
            font-size: 25px;
        }
    }
`