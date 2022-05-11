const cloneObject = obj => JSON.parse(JSON.stringify(obj));

const reducer = (state, action) => {
    if(action.type === 'LOADING') {
        return {...state, loading: true}
    }
    if(action.type === 'CLOSELOADING') {
        return {...state, loading: false}
    }
    if(action.type === 'FETCHDATA') {
        return {...state, products: action.payload}
    }
    if(action.type === 'GETPRODUCT') {
        return {...state, product: action.payload}
    }
    if(action.type === 'RATING') {
        return {...state, rating: action.payload}
    }
    if(action.type === 'GETPRODUCTSCART') {
        return {...state, productsCart: {...action.payload, number: 1}};
    }
    if(action.type === 'PRODUCTSCART') {
        return {...state, cart: [...state.cart, state.productsCart]};
    }
    if(action.type === 'REMOVEDUBLICATES') {
        const removeDuplicates  = state.cart.filter((value, index , array)=> array.findIndex( t =>(t.id === value.id)) === index)
        return {...state, removeDuplicatesCart: removeDuplicates}
    }
    if(action.type === 'INCREASETOTALCOUNT') {
        const totalNumber =  state.removeDuplicatesCart.reduce((acc, current) => {
            return current.number + acc;
        }, 0);
        return {...state, totalCount: totalNumber}
    }
    if(action.type === 'LOCALSTORAGE') {
        return {...state, cart: action.payload}
    }
    if(action.type === 'LOCALSTORAGEDUPLICATES') {
        return {...state, removeDuplicatesCart: action.payload}
    }
    if(action.type === 'REMOVEITEM') {
        const removeItemCart = state.cart.filter((item) => {
        return item.id !== action.payload;
        })
        const removeItemDuplicates = state.removeDuplicatesCart.filter((item) => {
        return item.id !== action.payload;
        })
        return {...state, cart: removeItemCart, removeDuplicatesCart: removeItemDuplicates}
    }
    if(action.type === 'INCREASENUMBERPRODUCT') {
        let newArray = [];
        for (let item of cloneObject(state.removeDuplicatesCart)) {
            if(item.id === action.payload) {
                const findPrice = state.cart.find((find) => {
                    return find.id === item.id
                })
                let oldPrice = findPrice.price;
                item.number += 1;
                item.price =  item.number * oldPrice.toFixed(2);
                newArray.push(item);
            } else {
                newArray.push(item);
            }
        }
       return {...state, removeDuplicatesCart: newArray};
    
    }
    if(action.type === 'DECREMENTNUMBERPRODUCT') {
        let newArray = [];
        for (let item of cloneObject(state.removeDuplicatesCart)) {
            if(item.id === action.payload) {
                const findPrice = state.cart.find((find) => {
                    return find.id === item.id
                })
                let oldPrice = findPrice.price;
                item.number -= 1;
                item.price =  item.number * oldPrice.toFixed(2);
                newArray.push(item);
            } else {
                newArray.push(item);
            }
        }
        return {...state, removeDuplicatesCart: newArray};
    }
    if(action.type === 'TOTALPRICE') {
        const totalPrice =  state.removeDuplicatesCart.reduce((acc, current) => {
            return current.price + acc;
        }, 0).toFixed(2);
        return {...state, totalPrice: totalPrice}
    }
}
export default reducer;