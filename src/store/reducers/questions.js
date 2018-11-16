import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    purchase:false,
    qusetions:['МАЧЕ','КУЧЕ','ВОЛК','АВИОН','ДИНОСАУРУС','ОКТОПОД','ПЕПЕРУТКА','ТОПКА','ТРОТИНЕТ','КУКЛА','ФЛОМАСТЕРИ','ТЕЛЕВИЗОР','КОМПЈУТЕР','ТАБЛЕТ','БУКВАР','БОИЦИ','ОСТРИЛКА','АГЛОМЕР','ЛЕНИАР','ШЕСТАР'],
    data:[],
    word:[],
    attempts:0,
    wrongAttempts:0,
    wordLength:0,

};
//let item = items[Math.floor(Math.random()*items.length)];

const reducer = ( state = initialState, action ) => {
    const randomQuestion=state.qusetions[Math.floor(Math.random()*state.qusetions.length)].split("");
    let uniqueArray = randomQuestion.filter((item, pos, self) =>{
        return self.indexOf(item) === pos;
    })
    let randomWordFromArray=randomQuestion.reduce((acc,cur,i)=>{ acc[i] = cur;return acc},{});
    const wordArray=[];
    //here shoul br logic for emptu space in word
    for (let key in randomWordFromArray){
        wordArray.push({
            key:Math.random(),
            id:randomWordFromArray[key],
            show:false,
            //hide is for handling empty space in word
            hide:false
        })
    }
    switch ( action.type ){
        case actionTypes.GET_QUSETION :
        return updateObject(state,{data:state.data.concat(wordArray),word:{qestionWord:randomQuestion},wordLength:uniqueArray.length});
        case actionTypes.QUSETION_HANDLER:
        state.data=[];
        return updateObject(state,{data:state.data.concat(action.data)})
        case actionTypes.ATTEMPTS_HANDLER:
        return updateObject(state,{wrongAttempts:state.wrongAttempts+action.wrongAttempts});
        case actionTypes.TRUE_ATTEMPT_HANDLER:
        return updateObject(state,{attempts:state.attempts+ action.trueAttempts})
        case actionTypes.ON_RESET_DATA:
        state.data=[];
        return updateObject(state,{data:state.data.concat(wordArray),word:{qestionWord:randomQuestion},wordLength:uniqueArray.length,attempts:0,wrongAttempts:0})
        default:
            return state;
    }
};

export default reducer;
