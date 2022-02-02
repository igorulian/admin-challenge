import { IUser } from "../../components/User";

export interface IAction {
    type: string,
    payload: any
}

interface IEdit {
    user: IUser,
    position: number
}

export function add(user:IUser){
    return {
        type: 'ADD',
        payload: user
    }
}

export function remove(prop:IEdit){
    return {
        type: 'REMOVE',
        payload: prop
    }
}

export function edit(prop:IEdit){
    return {
        type: 'EDIT',
        payload: prop
    }
}