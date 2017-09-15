import styled from 'styled-components';

export const FormComponent = styled.div`
    padding: 30px;
    margin: 20px;
    font-family: 'Acme', sans-serif;
    font-size: 18px;
    font-weight: bold;
    input {
        width: 150px;
        height: 18px;
    }
    button {
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    background: #941a18;
    color: white;
    border: 2px solid #941a18;
    font-size: 1em;
    }
    input[type=submit] {
        background-color: black;
        border-color: black;
        color: white;
        font-weight: bold;
        padding: 5px;
        font-size: 15px;
        margin: 10px;
        height: 30px;
    }
`;