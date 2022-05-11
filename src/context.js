import React, {useContext, useReducer} from 'react';
import reducer from './reducer';

const url = 'https://fakestoreapi.com/products';

const AppContext = React.createContext();

const initialState = {
    loading: false,
    products: [],
    product: {},
    rating: {},
    productsCart: {},
    cart: [],
    removeDuplicatesCart: [],
    totalCount: 0,
    singelCount: 0,
    totalPrice: 0,
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchData = async() => {
        dispatch({type: 'LOADING'})
        const response = await fetch(url);
        const data = await response.json();
        dispatch({type: 'FETCHDATA', payload: data})
        dispatch({type: 'CLOSELOADING'})
    };
    React.useEffect(() => {
        fetchData();
    }, []);

    const singleProduct = async(id) => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await response.json();
        dispatch({type: 'GETPRODUCT', payload: product});
        dispatch({type: 'RATING', payload: product.rating});
    };
    const cartProducts = async(id) => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const productsCard = await response.json();
        dispatch({type: 'GETPRODUCTSCART', payload: productsCard});
        dispatch({type: 'PRODUCTSCART'});
        dispatch({type: 'REMOVEDUBLICATES'});
    };

    React.useEffect(() => {
        const localData = localStorage.getItem("cart");
        if(state.cart) {
            dispatch({type: 'LOCALSTORAGE', payload: JSON.parse(localData)})
        }
        const localDataDublicates = localStorage.getItem("removeDuplicatesCart");
        if(state.removeDuplicatesCart) {
            dispatch({type: 'LOCALSTORAGEDUPLICATES', payload: JSON.parse(localDataDublicates)})
        }
    }, []);

    React.useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart));
        localStorage.setItem('removeDuplicatesCart', JSON.stringify(state.removeDuplicatesCart));
        dispatch({type: 'INCREASETOTALCOUNT'});
        dispatch({type: 'TOTALPRICE'});
    }, [state.cart, state.removeDuplicatesCart]);

    const removeitemcart = (id) => {
        dispatch({type: 'REMOVEITEM', payload: id})
    }

    const increaseNumber = (id) => {
        dispatch({type: 'INCREASENUMBERPRODUCT', payload: id})
    }
    const decermentNumber = (id) => {
        dispatch({type: 'DECREMENTNUMBERPRODUCT', payload: id})
    }

    return (
        <AppContext.Provider value={{
            ...state,
            singleProduct,
            cartProducts,
            removeitemcart,
            increaseNumber,
            decermentNumber
        }}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider}
