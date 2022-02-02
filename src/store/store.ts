import { createStore, combineReducers} from 'redux'
import { IUser } from '../components/User'
import { IModalState } from './Modal/modal.actions'
import ModalReducer from './Modal/modal.reducer'
import UsersReducer from './Users/users.reducer'
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer } from 'redux-persist'

export interface IState {
    users: IUser[],
    modal: IModalState
}

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    users: UsersReducer,
    modal: ModalReducer
})

const persistReduced = persistReducer(persistConfig, rootReducer)

const store = createStore(persistReduced)
const persistor = persistStore(store as any)

export {store, persistor}