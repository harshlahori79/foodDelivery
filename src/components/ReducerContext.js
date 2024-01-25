import { createContext, useContext, useReducer } from "react";



const cartStateContext = createContext();
const cartDispatchContext = createContext();




export const CartProvider = ({ children }) => {

    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                return [...state, { id: action.id, name: action.name, price: action.price, qty: action.qty, size: action.size, img: action.img }]

            case "REMOVE":
                let newArr = [...state]
                newArr.splice(action.index, 1)
                return newArr;

            case "DROP" :
                let newA = [];
                return newA;

            default:
                console.log("error in reducer");
        }
    }

    const [state, dispatch] = useReducer(reducer, []);

    return (

        <cartDispatchContext.Provider value={dispatch} >
            <cartStateContext.Provider value={state} >
                {children}
            </cartStateContext.Provider>
        </cartDispatchContext.Provider>
    )



}

export const useCartState = () => useContext(cartStateContext);
export const useCartDispatch = () => useContext(cartDispatchContext);





