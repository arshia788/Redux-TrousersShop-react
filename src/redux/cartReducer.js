




const reducer = (state = [], action) => {

    switch (action.type) {
        case "ADD":
            if (!state.find(item => item.id === action.payload.id)) {
                state.push(action.payload)
            } else {
                alert('you have this item in your basket')
            }
            return [...state]

        case "REMOVE":
            const removeItem = state.filter(item => item.id !== action.payload.id)
            return [...removeItem]

        case "INCREASE":
            let tempCart = state.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, qty: item.qty + 1 }
                }
                return item
            })
            return tempCart

        case "DECREASE":
            let lastCart = state.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, qty: item.qty - 1 }
                }
                return item
            })
            return lastCart
        
        default:
            return state;
    }
}


export default reducer;
