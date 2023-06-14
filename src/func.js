
const splitNum=(num)=>{
    return Number(num.toFixed(3)).toLocaleString()
}

const checkItem=(item)=>{
    if(item.qty > 1){
        return true
    }else{
        return false
    }
}

export {splitNum, checkItem};

