import React from 'react'
import { Button, Container, Text } from './styles'
import { colors } from '../../colors'
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { enable } from '../../store/Modal/modal.actions';

export interface IUserProps {
    user: IUser
}

export interface IUser {
    [key: string]: string
}

// export interface IUser {
//     [user: string]: string,
//     [name: string]: string,
//     username: string,
//     email: string,
//     city: string
// }


export function User(props:IUserProps){
    const { user } = props
    const dispatch = useDispatch()

    return (
        <Container>
            <Text> {user.id} </Text>
            <Text> {user.name} </Text>
            <Text> {user.username} </Text>
            <Text> {user.email} </Text>
            <Text> {user.city} </Text>
            <Button>
                <FiEdit 
                    style={{cursor: 'pointer'}} 
                    color={colors.black} 
                    size={25} 
                    onClick={() => dispatch(enable({modal: 'edit', user}))}
                />
            </Button>
            <Button>
                <FiTrash2 
                    style={{cursor: 'pointer'}} 
                    size={25} 
                    color={colors.red}
                    onClick={() => dispatch(enable({modal: 'delete', user}))}
                />
            </Button>
        </Container>
    )
}