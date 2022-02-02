import { IUser } from "../../components/User"

export interface IModalState {
    modal: string,
    user?: IUser
}

export function enable(props:IModalState){
    return {
        type: 'ENABLE',
        payload: props
    }
}

export function disable(){
    return {
        type: 'DISABLE',
        payload: ''
    }
}