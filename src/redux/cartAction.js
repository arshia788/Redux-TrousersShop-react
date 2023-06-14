
const add=(item)=>{
    return{
        type:'ADD',
        payload:item
    }
}

const removeItem=(item)=>{
    return{
        type:'REMOVE',
        payload:item
    }
}

const increase=(item)=>{
    return{
        type:'INCREASE',
        payload:item
    }
}

const decrease=(item)=>{
    return{
        type:'DECREASE',
        payload:item
    }
}

export  {add, removeItem, increase, decrease};

