import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 70px;
    background-color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export const TextContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const Text = styled.p`
    display: flex;
    flex-wrap: wrap;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    word-break: break-all;
    align-items: center;
    justify-content: center;
    color: #121212;
    justify-content: center;
    text-align: center;
    font-size: 15px;
    @media (max-width: 900px) {
        font-size: 12px;
        max-width: 100px;
    }
    @media (max-width: 1400px) {
        font-size: 14px;
    }
`

export const Button = styled.div`
    display: flex;
    border-style: none;
    width: 100%;
    justify-content: center;
`