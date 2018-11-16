import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    purchase:false,
    qusetions:['МАЧЕ','МАСТИЛО','МАКЕДОНИЈА','ТАБЛЕТ','КОМПЈУТЕР','АВИОН','ДИНОСАУРУС','ТЕЛЕВИЗОР','МОБИЛЕН ТЕЛЕФОН','БАНАНА','УЧИЛИШНА ЧАНТА','ЛЕНИАР','ШЕСТАР','ФЛОМАСТЕРИ','МАТЕМАТИКА','ФИЗИКА','АГЛОМЕР','КОШАРКА','МЕЧКА','МАША И МЕДО','ГАРФИЛД'],
    data:[],
    word:[],
    attempts:0,
    wrongAttempts:0,
    wordLength:0,

};

const reducer = ( state = initialState, action ) => {
    const randomQuestion=state.qusetions[Math.floor(Math.random()*state.qusetions.length)].split("");
    let flag=0;
    let uniqueArray = randomQuestion.filter((item, pos, self) =>{
        return self.indexOf(item) === pos;
    })
    let randomWordFromArray=randomQuestion.reduce((acc,cur,i)=>{ acc[i] = cur;return acc},{});
    const wordArray=[];
    for (let key in randomWordFromArray){
        if (randomWordFromArray[key] !==" "){
            wordArray.push({
               key:Math.random(),
               id:randomWordFromArray[key],
               show:false,
               hide:false
            })
        }
        else{
            flag=1;
            wordArray.push({
                key:Math.random(),
                id:randomWordFromArray[key],
                show:false,
                hide:true
             })
        }
    }
    switch ( action.type ){
        case actionTypes.GET_QUSETION :
        state.data=[];
        return updateObject(state,{data:state.data.concat(wordArray),word:{qestionWord:randomQuestion},wordLength:uniqueArray.length-flag});
        case actionTypes.QUSETION_HANDLER:
        state.data=[];
        return updateObject(state,{data:state.data.concat(action.data)})
        case actionTypes.ATTEMPTS_HANDLER:
        return updateObject(state,{wrongAttempts:state.wrongAttempts+action.wrongAttempts});
        case actionTypes.TRUE_ATTEMPT_HANDLER:
        return updateObject(state,{attempts:state.attempts+ action.trueAttempts})
        case actionTypes.ON_RESET_DATA:
        state.data=[];
        return updateObject(state,{data:state.data.concat(wordArray),word:{qestionWord:randomQuestion},wordLength:uniqueArray.length-flag,attempts:0,wrongAttempts:0})
        default:
        return state;
    }
};

export default reducer;
