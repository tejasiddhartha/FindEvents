export const AddEvent = (value) => async dispatch =>{
    dispatch({
        type:"ADD",
        payload: value
    })
}
export const RemoveEvent = (value) => async dispatch =>{
dispatch({
    type:"REMOVE",
    payload: {name:value}
})
}