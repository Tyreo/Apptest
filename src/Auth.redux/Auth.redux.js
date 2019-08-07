import axios from "axios"
const LOGIN = 'login'
const LOGOUT = 'logout'
const USERDATA = 'userdata'
const STATIC = {
    isAuth:false,
    user:'李云龙',
    age:38
}
export function authState(state=STATIC,action) {
    console.log(state,action)
    switch (action.type) {
        case LOGIN:
            return (
                {...state,isAuth: true}
            )
        case LOGOUT:
            return (
                {...state,isAuth: false}
            )
        case USERDATA:
            return (
                {...state,user: action.payload[0].user,age: action.payload[0].age}
            )
        default:
            return state
    }
}
export function getUserData() {
    return(
        dispatch=>{
            axios.get('/data')
                .then(res=>{
                    dispatch(userDate(res.data))
                })
        }
    )


}
export function userDate(data) {
    return {type:USERDATA,payload:data}
}
export function login() {
    return {type:LOGIN}
}
export function logout() {
    return {type:LOGOUT}
}