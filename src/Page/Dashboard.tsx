import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Add } from '../components/Add'
import { Confirmation } from '../components/Confirmation'
import { Edit } from '../components/Edit'
import { Lable } from '../components/Lable'
import { IUser, User } from '../components/User'
import { Header, Title, MainContainer, Page, AddButton, Line, UsersContainer } from './styles'
import { IState } from '../store/store'
import { enable } from '../store/Modal/modal.actions'

function Dashboard() {
  const users:IUser[] = useSelector((state: IState) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("ALTEROU ALGUMA COISA")
  },[users])

  return (
    <Page> 
      <Edit/>
      <Confirmation/>
      <Add/>
      <MainContainer>

        <Header>
          <Title> User list </Title>
          <AddButton onClick={() => dispatch(enable({modal: 'add'}))}> Add new </AddButton>
        </Header>

        <Line/>

        <UsersContainer>
            <Lable/>
            {users.map(user => 
              <User key={user.id} user={user}/> 
            )}
        </UsersContainer>

      </MainContainer>

    </Page>
  )
}

export default Dashboard
