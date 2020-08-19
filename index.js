const redux = require('redux');
//Need to install redux npm..

const initialState = {
    totalLikes : 0,
    totalDislikes : 0
}
const mainReducer = (prevState = initialState, action) => {
    if(action.type === 'INCREMENT_LIKES_BY_ONE'){
        const updatedLikes = prevState.totalLikes + 1;
        return{...prevState, totalLikes : updatedLikes }
    }else if(action.type === 'INCREMENT_DisLIKES_BY_ONE'){
        const updatedDislikes = prevState.totalDislikes + 1;
        return{...prevState, totalDislikes : updatedDislikes }
    };
    return {...prevState}
}
const globalStore = redux.createStore(mainReducer);
globalStore.subscribe(()=>{
   console.log(globalStore.getState());
});
globalStore.dispatch({type : "INCREMENT_LIKES_BY_ONE"});
globalStore.dispatch({type : "INCREMENT_LIKES_BY_ONE"});
globalStore.dispatch({type : "INCREMENT_DisLIKES_BY_ONE"});
globalStore.dispatch({type : "INCREMENT_DisLIKES_BY_ONE"});