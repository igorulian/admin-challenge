import React, { useEffect, useState } from "react"
import { Background, Container, Content, EditButton, EditButtonContainer, EditInput, EditInputContainer, EditInputLable, Header, Title} from "./styles"
import { IoMdClose } from 'react-icons/io'
import { colors } from "../../colors"
import { useDispatch, useSelector } from "react-redux"
import { IState } from "../../store/store"
import { disable } from "../../store/Modal/modal.actions"
import { IUser } from "../User"
import { IValidFields } from "../Add"
import { edit } from "../../store/Users/users.actions"


export function Edit(){
    const [updateState, setUpdateState] = useState(0)
    const dispatch = useDispatch()
    const modal = useSelector((state: IState) => state.modal)
    const usersState = useSelector((state: IState) => state.users)
    console.log(modal)
    const enable = modal.modal === 'edit'
    const olduser = modal.user
    const [validFileds, setValidFields] = useState<IValidFields>({id: true, name: true, username: true, email: true, city: true})
    const [user, setUser] = useState<IUser|undefined>()

    useEffect(() => {
        setUser(modal.user)
    },[modal])
    
    if(!enable || !modal.user)
        return <></>

    function editUser(){
        if(!user || !olduser) return
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
        dispatch(edit({user, position: usersState.indexOf(olduser)}))
        dispatch(disable())
    }

    if(!user) return <></>

    return (
        <Background>
            <Container>
                <Header>
                    <Title> Edit User </Title>
                    <IoMdClose size={25} color="#999" onClick={() => dispatch(disable())} style={{cursor: 'pointer'}}/>
                </Header>

                <Content>
                    <EditInputContainer>
                        <EditInputLable> ID </EditInputLable>
                        <EditInput 
                            defaultValue={user.id} 
                            onChange={({target}) => setUser({...user, id: target.value})}
                            valid={validFileds.id}
                        />
                    </EditInputContainer>

                    <EditInputContainer>
                        <EditInputLable> Name </EditInputLable>
                        <EditInput 
                            defaultValue={user.name} 
                            onChange={({target}) => setUser({...user, name: target.value})}
                            valid={validFileds.name}
                        />
                    </EditInputContainer>

                    <EditInputContainer>
                        <EditInputLable> Username </EditInputLable>
                        <EditInput 
                            defaultValue={user.username} 
                            onChange={({target}) => setUser({...user, username: target.value})}
                            valid={validFileds.username}
                        />
                    </EditInputContainer>

                    <EditInputContainer>
                        <EditInputLable> Email </EditInputLable>
                        <EditInput 
                            defaultValue={user.email} 
                            onChange={({target}) => setUser({...user, email: target.value})}
                            valid={validFileds.email}
                        />
                    </EditInputContainer>

                    <EditInputContainer>
                        <EditInputLable> City </EditInputLable>
                        <EditInput 
                            defaultValue={user.city} 
                            onChange={({target}) => setUser({...user, city: target.value})}
                            valid={validFileds.city}
                        />
                    </EditInputContainer>
                </Content>
                <EditButtonContainer>
                    <EditButton onClick={() => dispatch(disable())} color={colors.red} style={{marginRight: '15px'}}> Cancel </EditButton>
                    <EditButton onClick={() => editUser()} color={colors.green}> Save </EditButton>
                </EditButtonContainer>
            </Container>
        </Background>
    )
}