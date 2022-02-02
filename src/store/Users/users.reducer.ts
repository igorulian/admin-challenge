import { IUser } from '../../components/User'
import { IAction } from './users.actions'


export default function UsersReducer(state:IUser[] = [], action:IAction) {
    
    switch(action.type){
        case 'ADD':
        return [...state, action.payload]
        case 'REMOVE':
            return state.filter(user => state.indexOf(user) !== action.payload.position)
        case 'EDIT':
            state[action.payload.position] = action.payload.user
            return [...state]
        case 'SET':
            return [...action.payload]
        default:
            return state
    }
}