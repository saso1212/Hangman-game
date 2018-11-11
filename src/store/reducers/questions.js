import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    purchase:false,
    qusetions:['МАЧЕ','КУЧЕ','ВОЛК','АВИОН','ДИНОСАУРУС','ОКТОПОД','ПЕПЕРУТКА','ТОПКА','ТРОТИНЕТ','КУКЛА','ФЛОМАСТЕРИ'],
    data:[],
    attempts:10,
    gameOver:false
};
//let item = items[Math.floor(Math.random()*items.length)];

const reducer = ( state = initialState, action ) => {
    const randomQuestion=state.qusetions[Math.floor(Math.random()*state.qusetions.length)].split("");
    let randomWordFromArray=randomQuestion.reduce((acc,cur,i)=>{ acc[i] = cur;return acc},{});
    const wordArray=[];
    for (let key in randomWordFromArray){
        wordArray.push({
            key:Math.random(),
            id:randomWordFromArray[key],
            show:false,
            hide:false
        })
    }
    switch ( action.type ){
        case actionTypes.GET_QUSETION :
        return updateObject(state,{data:state.data.concat(wordArray)});
        //  return updateObject(state,{data:{randomWord:randomQuestion.split('')}});
        case actionTypes.QUSETION_HANDLER:
        state.data=[];
        return updateObject(state,{data:state.data.concat(action.data)})
        case actionTypes.ATTEMPTS_HANDLER:
        return updateObject(state,{attempts:state.attempts-1})
        default:
            return state;
    }
};

export default reducer;
