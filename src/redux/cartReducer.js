

const reducer= (state=[], action)=>{

    switch(action.type){
        case "add":
            if(!state.find(item=> item.id === action.payload.id)){
                state.push(action.payload)
            }else{
                alert('you have this item in your basket')
            }
            return [...state]
    }
}


export default reducer;
