
import { USER_ACTION_TYPES } from "./user.action"


export const INI_STATE = {
    currentUser : null,
}

export const userReducer = (state = INI_STATE , action)=>{
  const {type , payload} = action

  switch(type){
    case USER_ACTION_TYPES.SET_CURRENT_USER:
        return {
            ...state,
            currentUser:payload
        }
    default:
        return state
  }
}