import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
   qusetions:['МАЧЕ','КУЧЕ','ВОЛК','АВИОН','ДИНОСАУРУС','ОКТОПОД','ПЕПЕРУТКА','ТОПКА','ТРОТИНЕТ','КУКЛА'],
   qusetion:[],
   purchase:false
};
//let item = items[Math.floor(Math.random()*items.length)];

const reducer = ( state = initialState, action ) => {
    const randomQuestion=state.qusetions[Math.floor(Math.random()*state.qusetions.length)];
    switch ( action.type ){
        case actionTypes.GET_QUSETION :
        return updateObject(state,{qusetion:randomQuestion.split('')});
        default:
            return state;
    }
};

export default reducer;
