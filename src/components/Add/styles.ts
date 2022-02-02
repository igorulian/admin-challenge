import styled from "styled-components";


export interface IEditInput {
    valid?: boolean
}

export const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 1;
`

export const Header = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    justify-content: space-between;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 40%;
    max-width: 600px;
    height: fit-content;
    background-color: #fff;
    border-radius: 15px;
    z-index: 1;
    padding: 20px;
    @media (max-width: 900px){
        width: 100%;
    }
`

export const Title = styled.p`
    display: flex;
    justify-content: flex-start;
    margin: 0;
    height: fit-content;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    color: #999;
`

export const Text = styled.p`
    display: flex;
    justify-content: center;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    color: #999;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const EditInput = styled.input<IEditInput>`
    height: 40px;
    color: #999;
    border: 1px solid ${props => props.valid ? '#ccc' : '#f11'};
    border-radius: 10px;
    padding-left: 10px;
    ::placeholder {
        color: #ccc
    }
`

export const EditInputLable = styled.label`
    font-family: 'Roboto', sans-serif;
    color: #ccc;
    margin-bottom: 5px;
`

export const EditInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
`

export const EditButton = styled.button`
    background-color: ${props => props.color || '#faf'};
    border-style: none;
    width: 100px;
    height: 40px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    border-radius: 15px;
    cursor: pointer;
    :hover {
        opacity: .8;
    }
`

export const EditButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
`