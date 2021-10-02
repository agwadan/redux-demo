const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

//Defining string constant defining the type of action
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

//Creating the action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First Redux Action'
  }
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: 'Ice Cream Sold'
  }
}

//Implementing reducer
const initialIceCreamState = {
  numOfIceCreams: 20
}

const initialCakeState = {
  numOfCakes: 10,
}

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state;
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }
    default: return state;
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));
console.log('initial state', store.getState());

const unsubscribe = store.subscribe(() => { });

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe();