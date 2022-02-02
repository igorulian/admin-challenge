import styled from 'styled-components'
import { colors } from '../colors'

export const Page = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #fff;
`

export const MainContainer = styled.div`
    width: 60%;
    height: 70%;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    @media (max-width: 900px) {
        width: 100%;
        height: 100%;
        background-color: #fff;
        box-shadow: none;
    }
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    border-radius: 15px 15px 0 0;
    background-color: #fff;
`

export const Title = styled.p`
    color: #ccc;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    margin-left: 20px;
`

export const AddButton = styled.button`
    width: 100px;
    height: 50px;
    color: #fff;
    border-radius: 10px;
    background-color: ${colors.green};
    border-style: none;
    margin-right: 20px; 
    font-weight: bold;
    font-size: 17px;
    cursor: pointer;
    :hover {
        opacity: .8;
    }
`

export const Line = styled.h2`
    border: 1px solid #f1f1f1;
    justify-self: center;
    margin: 0;
`

export const UsersContainer = styled.div`
    width: 100%;
    height: 100%;
`