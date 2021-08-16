import { createStore } from "redux";

const BUY_CAKE = "BUY_CAKE";
const MAKE_CAKE = "MAKE_CAKE";

const initialState = {
    numberOfCakes: 10,
};

const buyCake = () => {
    return {
        type: BUY_CAKE,        
    };
};

const makeCake = () => {
    return {
        type: MAKE_CAKE,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1,
            };
        case MAKE_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + 1,
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

console.log("initial State ", store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("current State ", store.getState());
});

console.log("One Cake Sold...");
store.dispatch(buyCake());
console.log("One Cake Sold...");
store.dispatch(buyCake());
console.log("One Cake Sold...");
store.dispatch(buyCake());
console.log("One Cake Made...");
store.dispatch(makeCake());

unsubscribe();
