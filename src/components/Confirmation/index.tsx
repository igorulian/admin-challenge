import React from "react"
import { Background, Container, Content, EditButton, EditButtonContainer, EditInput, EditInputContainer, EditInputLable, Header, Text, Title} from "./styles"
import { IoMdClose } from 'react-icons/io'
import { colors } from "../../colors"
import { useDispatch, useSelector } from "react-redux"
import { IState } from "../../store/store"
import { disable } from "../../store/Modal/modal.actions"
import { remove } from "../../store/Users/users.actions"


export function Confirmation(){
    const {users, modal} = useSelector((state: IState) => state)
    const dispatch = useDispatch()

    const enable = (modal.modal === 'delete')
    const user = modal.user
    
    if(!enable || !user) return <></>

    const position = users.indexOf(user)

    function deleteUser(){
        if(user)
        dispatch(remove({user, position}))
        dispatch(disable())
    }


    return (
        <Background>
            <Container>
                <Header>
                    <Title> Confirmation </Title>
                    <IoMdClose size={25} color="#999" onClick={() => dispatch(disable())} style={{cursor: 'pointer'}}/>
                </Header>

                <Content>
                    <Text> Do you want to delete the user #{user.id}?  </Text>
                </Content>
                <EditButtonContainer>
                    <EditButton onClick={() => dispatch(disable())} color={colors.gray} style={{marginRight: '15px'}}> Cancel </EditButton>
                    <EditButton onClick={() => deleteUser()} color={colors.red}> Delete </EditButton>
                </EditButtonContainer>
            </Container>
        </Background>
    )
}