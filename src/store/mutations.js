import router from '../router/index'

export  const  DELETE_USER = (state, id) => {
        let userIndex = state.users.findIndex((e)=>e.id===id)
        state.users.splice(userIndex, 1)
}

export  const CREATE_USER = (state, data) => {
        state.users.push(data)
}
export const UPDATE_USER = (state, data) => {
        let index = state.users.findIndex((e)=> e._id === data._id)
        state.users[index] = data
}

export  const GET_TABLE = (state, data) => {
        state.users = data
}

export const REGISTER = (state, data) => {
        router.push('/')
        state.users = data
}

export  const  LOGIN = (state, data) => {
        if(data.token){
                state.profile = data.user
                router.push('/test')
        }else{
                alert(data.massege)
        }
}
export  const  LOGOUT = (state, data) =>{
        state.profile = data
}