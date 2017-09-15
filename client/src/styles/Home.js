import styled from 'styled-components';

export const Nav = styled.div`
    background-color: #941a18;
    padding: 25px;
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
            font-weight: bold;
            font-size: 20px;
        }
    }
`

export const LandingPage = styled.div`
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
        color: black;
    }
`