import axios from 'axios'

export const deleteUser = ({commit}, id) => {
    axios.delete(`http://localhost:3000/table/${id}`).then((response)=>{
        commit("DELETE_USER", response.data)
    })

}

export const updateUser = ({commit}, data) => {
    console.log("data "+data)
    axios.put(`http://localhost:3000/table/${data.id}`,{
        name:data.name,
        email:data.email,
        phone:data.phone,
        birthday:data.birthday,
        penfil:data.penfil
    }).then((response)=>{
        commit("UPDATE_USER", response.data)
    })
}

export const getTable = ({commit})=>{
    axios.get('http://localhost:3000/table').then((response)=>{
        commit("GET_TABLE", response.data)
    })
}
export  const sortTableServer = ({commit}, data) => {
    console.log("Action sort "+data.sort)
    axios.get(`http://localhost:3000/table/sort/${data.sort}`, {
        sort:data.sort
    }).then((response)=>{
            commit("GET_TABLE", response.data)
    })
}

export  const createUser = ({commit}, data) =>
        axios.post('http://localhost:3000/table',{
            name:data.name,
            email:data.email,
            phone:data.phone,
            birthday:data.birthday,
            penfil:data.penfil
        }).then((response)=>{
            commit("CREATE_USER", response.data)
        })

export const register = ({commit}, data) => {
                axios.post('http://localhost:3000/register', {
                        name:data.name,
                        email:data.email,
                        phone:data.phone,
                        password:data.password
                }).then((response)=>{
                        commit("REGISTER", response.data)
                })
}
export  const  login = ({commit}, data) => {
    axios.post('http://localhost:3000/login', {
        username:data.username,
        password:data.password
    }).then((response)=>{
        localStorage.setItem("token", response.data.token)
        localStorage.setItem('profile', response.data.user)
        commit("LOGIN", response.data)
    })
}
export  const logout = ({commit}, id) =>{
    axios.delete(`http://localhost:3000/logout/${id}`).then((response)=>{
        commit('LOGOUT', response.data)
    })
}
