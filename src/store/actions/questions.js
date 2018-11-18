import * as actionTypes from './actionTypes';



export const getQusetion=(id)=>{
    return {
        type:actionTypes.GET_QUSETION,
        id:id
    }
};

export const guestionHandler=(data)=>{
    return{
        type:actionTypes.QUSETION_HANDLER,
        data:data
    }
}
export const wrongAttemptsHandler=(wrongAttempts)=>{
    return{
        type:actionTypes.ATTEMPTS_HANDLER,
        wrongAttempts:wrongAttempts
        
    }
}
export const trueAttemptHandler=(trueAttempts)=>{
    return{
        type:actionTypes.TRUE_ATTEMPT_HANDLER,
        trueAttempts:+trueAttempts
    }
   
}
export const onResetData=()=>{
    return{
        type:actionTypes.ON_RESET_DATA
    }
}

export const gameOverHandler=(letter,wordArray)=>{
   return dispatch=>{
       let wrongAttempts=0; let trueAttempts=0;
        for (let i=0; i<=wordArray.qestionWord.length ;i++){
            if (letter!==wordArray.qestionWord[i]){
                wrongAttempts=1
            }
            else{
                wrongAttempts=0;
                trueAttempts=1;
                dispatch(wrongAttemptsHandler(wrongAttempts))
                dispatch(trueAttemptHandler(trueAttempts))
                return;
            }
        }
        dispatch(wrongAttemptsHandler(wrongAttempts))
        dispatch(trueAttemptHandler(trueAttempts))
    }
    
}


export const showLetter=(letter,resievedData)=>{
    return (dispatch,getSate)=>{
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


