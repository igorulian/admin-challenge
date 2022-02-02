import React, { useState } from 'react'
import { Background, Container, Content, EditButton, EditButtonContainer, EditInput, EditInputContainer, EditInputLable, Header, Title} from "./styles"
import { IoMdClose } from 'react-icons/io'
import { colors } from '../../colors'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../../store/Users/users.actions'
import { IUser } from '../User'
import { IState } from '../../store/store'
import { disable } from '../../store/Modal/modal.actions'

export interface IValidFields {
    [key: string]: boolean
}


export function Add(){
    const [updateState, setUpdateState] = useState(0)
    const enable = (useSelector((state: IState) => state.modal.modal) === 'add')
    const [user, setUser] = useState<IUser>({id: '', name: '', username: '', email: '', city: ''})
    const [validFileds, setValidFields] = useState<IValidFields>({id: true, name: true, username: true, email: true, city: true})
    const dispatch = useDispatch()
    
    function resetValid(field:string){
        setValidFields(fields => {
            fields[field] = true
            return fields
        })
    }
    
    function addUser(){
        let allValid = true
        console.log(updateState)
        let vfields = validFileds

        Object.keys(user).forEach(item => {
            if(!((item === 'name') || (item === 'email'))) return
            
            if((user[item] === '') || (!user[item])){
                allValid = false
                vfields[item] = false
            }else {
                vfields[item] = true
            }
        })
        
        if(!(user.email.includes('@') || user.email.includes('.'))){
            vfields.email = false
            allValid = false
        }

        setValidFields(vfields)
        
        setUpdateState(v => v + 1)

        if(!allValid) return
        dispatch(add(user))
        dispatch(disable())
        setUser({id: '', name: '', username: '', email: '', city: ''})
    }

    function disableModal(){

        dispatch(disable())
    }

    if(!enable) return <></>

    return (
        <Background>
            <Container>
                <Header>
                    <Title> Add User </Title>
                    <IoMdClose size={25} color="#999" onClick={() => disableModal()} style={{cursor: 'pointer'}}/>
                </Header>

                <Content>
                    <EditInputContainer>
                        <EditInputLable> ID </EditInputLable>
                        <EditInput 
                            type='number'
                            placeholder={"Enter user ID"} 
                            onChange={({target}) => {setUser({...user, id: target.value}); resetValid('id')}}
                            valid={validFileds.id}
                        />
                    </EditInputContainer>

                    <EditInputContainer>
                        <EditInputLable> Name </EditInputLable>
                        <EditInput
                            placeholder={"Enter user name"} 
                            onChange={({target}) => {setUser({...user, name: target.value}); resetValid('name')}}
                            valid={validFileds.name}
                        />
                    </EditInputContainer>

                    <EditInputContainer>
                        <EditInputLable> Username </EditInputLable>
                        <EditInput 
                            placeholder={"Enter user username"} 
                            onChange={({target}) => {setUser({...user, username: target.value}); resetValid('username')}}
                            valid={validFileds.username}
                        />
                    </EditInputContainer>

                    <EditInputContainer>
                        <EditInputLable> Email </EditInputLable>
                        <EditInput 
                            placeholder={"Enter user email"} 
                            onChange={({target}) => {setUser({...user, email: target.value}); resetValid('email')}}
                            valid={validFileds.email}
                        />
                    </EditInputContainer>

                    <EditInputContainer>
                        <EditInputLable> City </EditInputLable>
                        <EditInput 
                            placeholder={"Enter user city"} 
                            onChange={({target}) => {setUser({...user, city: target.value}); resetValid('city')}}
                            valid={validFileds.city}
                        />
                    </EditInputContainer>
                </Content>
                <EditButtonContainer>
                    <EditButton onClick={() => disableModal()} color={colors.red} style={{marginRight: '15px'}}> Cancel </EditButton>
                    <EditButton onClick={() => addUser()} color={colors.green}> Add </EditButton>
                </EditButtonContainer>
            </Container>
        </Background>
    )
}