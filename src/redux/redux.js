export function counter(state=10,action) {
    switch (action.type) {
        case 'add':
            return state+1
        case 'sub':
            return state-1
        default:
            return state
    }
}
export function add() {
    return {type:'add'}
}
export function sub() {
    return {type:'sub'}
}
export function addAsync() {
    return dispatch=>{
        setTimeout(()=>{
            dispatch(add())
        },2000)
    }
}