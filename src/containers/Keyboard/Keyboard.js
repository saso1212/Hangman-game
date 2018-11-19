import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import classes from './Keyboard.css';
import * as actions from '../../store/actions/index';
import Aux from '../../huc/Auxilary';
import Button from '../../components/UI/Buttons/Button';
import Word from '../../components/Word/Word';
import Modal from '../../components/UI/Modal/Modal';
import HangOut from '../../components/HangOut/HangOut';




class Keyboard extends Component{
    state={
        keyboard:{
            firstRow:{
                А:{elementName:'А',btnClicked:false},
                Б:{elementName:'Б',btnClicked:false},
                В:{elementName:'В',btnClicked:false},
                Г:{elementName:'Г',btnClicked:false},
                Д:{elementName:'Д',btnClicked:false},
                Ѓ:{elementName:'Ѓ',btnClicked:false},
                Е:{elementName:'Е',btnClicked:false},
                Ж:{elementName:'Ж',btnClicked:false},
                З:{elementName:'З',btnClicked:false},
                Ѕ:{elementName:'Ѕ',btnClicked:false},
                И:{elementName:'И',btnClicked:false},
                Ј:{elementName:'Ј',btnClicked:false},
                К:{elementName:'К',btnClicked:false},
                Л:{elementName:'Л',btnClicked:false},
                Љ:{elementName:'Љ',btnClicked:false},
                М:{elementName:'М',btnClicked:false},
                Н:{elementName:'Н',btnClicked:false},
                Њ:{elementName:'Њ',btnClicked:false},
                О:{elementName:'О',btnClicked:false},
                П:{elementName:'П',btnClicked:false},
                Р:{elementName:'Р',btnClicked:false},
                С:{elementName:'С',btnClicked:false},
                Т:{elementName:'Т',btnClicked:false},
                Ќ:{elementName:'Ќ',btnClicked:false},
                У:{elementName:'У',btnClicked:false},
                Ф:{elementName:'Ф',btnClicked:false},
                Х:{elementName:'Х',btnClicked:false},
                Ц:{elementName:'Ц',btnClicked:false},
                Ч:{elementName:'Ч',btnClicked:false},
                Џ:{elementName:'Џ',btnClicked:false},
                Ш:{elementName:'Ш',btnClicked:false}
            }
        },
       initialKeyboard:{
         firstRow:{
            А:{elementName:'А',btnClicked:false},
            Б:{elementName:'Б',btnClicked:false},
            В:{elementName:'В',btnClicked:false},
            Г:{elementName:'Г',btnClicked:false},
            Д:{elementName:'Д',btnClicked:false},
            Ѓ:{elementName:'Ѓ',btnClicked:false},
            Е:{elementName:'Е',btnClicked:false},
            Ж:{elementName:'Ж',btnClicked:false},
            З:{elementName:'З',btnClicked:false},
            Ѕ:{elementName:'Ѕ',btnClicked:false},
            И:{elementName:'И',btnClicked:false},
            Ј:{elementName:'Ј',btnClicked:false},
            К:{elementName:'К',btnClicked:false},
            Л:{elementName:'Л',btnClicked:false},
            Љ:{elementName:'Љ',btnClicked:false},
            М:{elementName:'М',btnClicked:false},
            Н:{elementName:'Н',btnClicked:false},
            Њ:{elementName:'Њ',btnClicked:false},
            О:{elementName:'О',btnClicked:false},
            П:{elementName:'П',btnClicked:false},
            Р:{elementName:'Р',btnClicked:false},
            С:{elementName:'С',btnClicked:false},
            Т:{elementName:'Т',btnClicked:false},
            Ќ:{elementName:'Ќ',btnClicked:false},
            У:{elementName:'У',btnClicked:false},
            Ф:{elementName:'Ф',btnClicked:false},
            Х:{elementName:'Х',btnClicked:false},
            Ц:{elementName:'Ц',btnClicked:false},
            Ч:{elementName:'Ч',btnClicked:false},
            Џ:{elementName:'Џ',btnClicked:false},
            Ш:{elementName:'Ш',btnClicked:false}
            }
        }
    }
    
   
    componentDidMount(){
       this.props.onFetchQuestion(+this.props.match.params.id);
    }
    btnClickedHandler=(btnName)=>{
            const updatedControls = {
                ...this.state.keyboard,
                firstRow:{
                    ...this.state.keyboard.firstRow,
                     [btnName]: {
                        ...this.state.keyboard.firstRow[btnName],
                        btnClicked:true
                    }
                },
            };
            this.setState( { keyboard: updatedControls } );
            this.props.onShowLetter(btnName,this.props.question);
            this.props.onGameOverHandler(btnName,this.props.word);
    }

    confirmNewGame=()=>{
    this.props.onResetData();
    this.props.onFetchQuestion(+this.props.match.params.id);
    const initialKeyboard={...this.state.initialKeyboard}
    this.setState({keyboard:initialKeyboard})
    }
    confirmExitOfGame=()=>{
        this.props.history.push('/');
        this.props.onResetData();
        const initialKeyboard={...this.state.initialKeyboard}
        this.setState({keyboard:initialKeyboard})
    }

    render()
    {
        const firstRowArray=[];
        for (let key in this.state.keyboard.firstRow){
            firstRowArray.push({
                id:key,
                config:this.state.keyboard.firstRow[key]
            })
        }
   
       let firstRowKeyboard=firstRowArray.map(element=>(
          <Button
             key={element.id}
             disabled={element.config.btnClicked}
             clicked={()=>this.btnClickedHandler(element.id)}
          >{element.config.elementName}</Button>

      ));

            let word=null;
            if(this.props.question){
                word=this.props.question.map(element=>(
                    <Word 
                    key={element.key}
                    show={element.show}
                    hide={element.hide}
                    letter={element.id}
                    >{element.id}</Word>
                ))
            }
           
            let modalData=null;
            if(this.props.gameOver){
                modalData=(
                    <Aux>
                        <div>НЕ ГО ПОГОДИВТЕ ЗБОРОТ <strong>{this.props.word.qestionWord.join("")}</strong> ОБИДЕТЕ СЕ ПОВТОРНО</div>
                        <Button clicked={this.confirmNewGame} btnType='Succes'>DA</Button>
                        <Button clicked={this.confirmExitOfGame} btnType='Danger'>NE</Button>
                    </Aux>
                )
            }
            else if (this.props.gameOverGoodAttemp){
                modalData=(
                    <Aux>
                        <div>УСПЕШНО ГО ПОГОДИВТЕ ЗБОРОТ ДАЛИ САКАТА ДА СЕ ОБИДЕТЕ ПОВТОРНО:</div>
                        <Button clicked={this.confirmNewGame} btnType='Succes'>DA</Button>
                        <Button clicked={this.confirmExitOfGame} btnType='Danger'>NE</Button>
                  </Aux>
                )
            }
            
            
        return(
            <div className={classes.HangPage}>
               <Modal show={this.props.gameOver}>{modalData}</Modal>
               <Modal show={this.props.gameOverGoodAttemp}>{modalData}</Modal> 
               <div style={{position:'absolute',top:'10%'}}>
               <HangOut>{this.props.wrongAttempts}</HangOut></div>
               <div style={{display:"flex",justifyContent:'center',marginTop:"15%"}}>
                 {word}</div>
                <div className={classes.Keyboard}>
                   <div> {firstRowKeyboard}</div> 
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        question: state.questions.data,
        attempts:state.questions.attempts,
        wrongAttempts:state.questions.wrongAttempts,
        word:state.questions.word,
        gameOver:state.questions.wrongAttempts === state.questions.attemtsForGameOver,
        gameOverGoodAttemp:state.questions.wordLength === state.questions.attempts,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchQuestion: (id) => dispatch(actions.getQusetion(id)),
        onShowLetter:(letter,array)=>dispatch(actions.showLetter(letter,array)),
        onGameOverHandler:(letter,wordArray)=>dispatch(actions.gameOverHandler(letter,wordArray)),
        onResetData:()=>dispatch(actions.onResetData())
    };
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps)(Keyboard));

