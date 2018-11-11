import * as actionTypes from './actionTypes';


export const getQusetion=()=>{
    return {
        type:actionTypes.GET_QUSETION
    }
};

export const guestionHandler=(data)=>{
    return{
        type:actionTypes.QUSETION_HANDLER,
        data:data
    }
}
export const attemptsHandler=()=>{
    return{
        type:actionTypes.ATTEMPTS_HANDLER
    }

}
export const showLetter=(letter,resievedData)=>{
    return dispatch=>{
        const letterArray=[];
        for(let key in resievedData){
            if(resievedData[key].id===letter){
                letterArray.push({
                    ...resievedData[key],
                    show:true
                })
            }
            else{
                letterArray.push({
                    ...resievedData[key]
                })
               }
            }
            dispatch(guestionHandler(letterArray))
        }
    }


