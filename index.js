import { createStore, combineReducers, applyMiddleware } from "redux";
import pkg from 'redux-logger';
const { createLogger } = pkg;

// const reduxLogger = require('redux-logger');
// const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";

const BUY_ICE_CREAM = "BUY_ICE_CREAM";

const MAKE_CAKE = "MAKE_CAKE";

const MAKE_ICE_CREAM = "MAKE_ICE_CREAM";

const logger = createLogger({
    collapsed: true,
    duration: true,
    timestamp: true
});

const initialState = {
    numberOfCakes: 10,
};

const initialCakeState = {
    numberOfCakes: 10,
};

const initialIceCreamState = {
    numberOfIceCreams: 10,
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

const buyIceCream = () => {
    return {
        type: BUY_ICE_CREAM,        
    };
};

const makeIceCream = () => {
    return {
        type: MAKE_ICE_CREAM,
    };
};

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 numberOfCakes: state.numberOfCakes - 1,
//             };
//         case MAKE_CAKE:
//             return {
//                 ...state,
//                 numberOfCakes: state.numberOfCakes + 1,
//             };
//         default:
//             return state;
//     }
// };

const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - 1,
            };
        case MAKE_CAKE:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams + 1,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    cakeReducer,
    iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

// console.log("initial State ", store.getState());

const unsubscribe = store.subscribe(() => {
    // console.log("current State ", store.getState());
});

// console.log("One Cake Sold...");

store.dispatch(buyCake());

// console.log("One Ice Cream Sold...");

store.dispatch(buyIceCream());

// console.log("One Ice Cream Sold...");

store.dispatch(buyIceCream());

// console.log("One Cake Made...");

store.dispatch(makeCake());

// console.log("One Cake Sold...");

store.dispatch(buyCake());

// console.log("One Cake Sold...");

store.dispatch(buyCake());

// console.log("One Cake Sold...");

store.dispatch(buyCake());

// console.log("One Ice Cream Made...");

store.dispatch(makeIceCream());

unsubscribe();
