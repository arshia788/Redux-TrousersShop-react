
const add=(item)=>{
    return{
        type:'add',
        payload:item
    }
}

const remove=(item)=>{
    return{
        type:'remove',
        payload:item
    }
}

const increase=(item)=>{
    return{
        type:'increase',
        payload:item
    }
}

const decrease=(item)=>{
    return{
        type:'decrease',
        payload:item
    }
}

export  {add, remove, increase, decrease};

