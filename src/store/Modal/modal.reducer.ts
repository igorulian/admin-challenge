import { IAction } from "../Users/users.actions"
import { IModalState } from "./modal.actions"

export default function ModalReducer(state:IModalState = {modal: ''}, action:IAction) {
    
    switch(action.type){
        case 'ENABLE':
            return action.payload
        case 'DISABLE':
            return {modal: ''}
        default:
            return state
    }
}