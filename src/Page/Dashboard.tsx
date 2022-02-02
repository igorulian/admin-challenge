import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Add } from '../components/Add'
import { Confirmation } from '../components/Confirmation'
import { Edit } from '../components/Edit'
import { Lable } from '../components/Lable'
import { IUser, User } from '../components/User'
import { Header, Title, MainContainer, Page, AddButton, Line, UsersContainer } from './styles'
import { IState } from '../store/store'
import { enable } from '../store/Modal/modal.actions'
import axios from 'axios'
import { set } from '../store/Users/users.actions'

function Dashboard() {
  const users:IUser[] = useSelector((state: IState) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchAPIData(){
      const firstTime = (localStorage.getItem('persist:root') === null)
      if(firstTime){
        try{
          const {data} = await axios.get('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data')
          let newUsers:IUser[] = []

          data.forEach((user:any) => {
            const {id,name,username,email,address} = user
            const {city} = address
            newUsers.push({ 
              id,
              name,
              username,
              email,
              city
            })
          })

          dispatch(set(newUsers))
        }catch(err){
          console.log('ERROR', err)
        }
      }
    }
    fetchAPIData()
  })

  return (
    <>
      <>
        <Edit/>
        <Confirmation/>
        <Add/>
      </>
      <Page> 
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
    </>
  )
}

export default Dashboard
