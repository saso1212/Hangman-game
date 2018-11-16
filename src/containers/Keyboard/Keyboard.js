import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import classes from './Keyboard.css';
import * as actions from '../../store/actions/index';
import Aux from '../../huc/Auxilary';
import Button from '../../components/UI/Buttons/Button';
import Word from '../../components/Word/Word';
import Modal from '../../components/UI/Modal/Modal';




class Keyboard extends Component{
    state={
        keyboard:{
            firstRow:{
                А:{elementName:'А',btnClicked:false, img:'sorceForImgA'},
                Б:{elementName:'Б',btnClicked:false, img:'sorceForImgБ'},
                В:{elementName:'В',btnClicked:false, img:'sorceForImgВ'},
                Г:{elementName:'Г',btnClicked:false, img:'sorceForImgГ'},
                Д:{elementName:'Д',btnClicked:false, img:'sorceForImgA'},
                Ѓ:{elementName:'Ѓ',btnClicked:false, img:'sorceForImgБ'},
                Е:{elementName:'Е',btnClicked:false, img:'sorceForImgВ'},
                Ж:{elementName:'Ж',btnClicked:false, img:'sorceForImgГ'},
                З:{elementName:'З',btnClicked:false, img:'sorceForImgA'},
                Ѕ:{elementName:'Ѕ',btnClicked:false, img:'sorceForImgБ'},
                И:{elementName:'И',btnClicked:false, img:'sorceForImgВ'},
                Ј:{elementName:'Ј',btnClicked:false, img:'sorceForImgГ'},
                К:{elementName:'К',btnClicked:false, img:'sorceForImgA'},
                Л:{elementName:'Л',btnClicked:false, img:'sorceForImgБ'},
                Љ:{elementName:'Љ',btnClicked:false, img:'sorceForImgВ'},
                М:{elementName:'М',btnClicked:false, img:'sorceForImgГ'},
                Н:{elementName:'Н',btnClicked:false, img:'sorceForImgA'},
                Њ:{elementName:'Њ',btnClicked:false, img:'sorceForImgБ'},
                О:{elementName:'О',btnClicked:false, img:'sorceForImgВ'},
                П:{elementName:'П',btnClicked:false, img:'sorceForImgГ'},
                Р:{elementName:'Р',btnClicked:false, img:'sorceForImgA'},
                С:{elementName:'С',btnClicked:false, img:'sorceForImgБ'},
                Т:{elementName:'Т',btnClicked:false, img:'sorceForImgВ'},
                Ќ:{elementName:'Ќ',btnClicked:false, img:'sorceForImgГ'},
                У:{elementName:'У',btnClicked:false, img:'sorceForImgA'},
                Ф:{elementName:'Ф',btnClicked:false, img:'sorceForImgБ'},
                Х:{elementName:'Х',btnClicked:false, img:'sorceForImgВ'},
                Ц:{elementName:'Ц',btnClicked:false, img:'sorceForImgГ'},
                Ч:{elementName:'Ч',btnClicked:false, img:'sorceForImgA'},
                Џ:{elementName:'Џ',btnClicked:false, img:'sorceForImgБ'},
                Ш:{elementName:'Ш',btnClicked:false, img:'sorceForImgВ'}
            }
        },
       initialKeyboard:{
         firstRow:{
            А:{elementName:'А',btnClicked:false, img:'sorceForImgA'},
            Б:{elementName:'Б',btnClicked:false, img:'sorceForImgБ'},
            В:{elementName:'В',btnClicked:false, img:'sorceForImgВ'},
            Г:{elementName:'Г',btnClicked:false, img:'sorceForImgГ'},
            Д:{elementName:'Д',btnClicked:false, img:'sorceForImgA'},
            Ѓ:{elementName:'Ѓ',btnClicked:false, img:'sorceForImgБ'},
            Е:{elementName:'Е',btnClicked:false, img:'sorceForImgВ'},
            Ж:{elementName:'Ж',btnClicked:false, img:'sorceForImgГ'},
            З:{elementName:'З',btnClicked:false, img:'sorceForImgA'},
            Ѕ:{elementName:'Ѕ',btnClicked:false, img:'sorceForImgБ'},
            И:{elementName:'И',btnClicked:false, img:'sorceForImgВ'},
            Ј:{elementName:'Ј',btnClicked:false, img:'sorceForImgГ'},
            К:{elementName:'К',btnClicked:false, img:'sorceForImgA'},
            Л:{elementName:'Л',btnClicked:false, img:'sorceForImgБ'},
            Љ:{elementName:'Љ',btnClicked:false, img:'sorceForImgВ'},
            М:{elementName:'М',btnClicked:false, img:'sorceForImgГ'},
            Н:{elementName:'Н',btnClicked:false, img:'sorceForImgA'},
            Њ:{elementName:'Њ',btnClicked:false, img:'sorceForImgБ'},
            О:{elementName:'О',btnClicked:false, img:'sorceForImgВ'},
            П:{elementName:'П',btnClicked:false, img:'sorceForImgГ'},
            Р:{elementName:'Р',btnClicked:false, img:'sorceForImgA'},
            С:{elementName:'С',btnClicked:false, img:'sorceForImgБ'},
            Т:{elementName:'Т',btnClicked:false, img:'sorceForImgВ'},
            Ќ:{elementName:'Ќ',btnClicked:false, img:'sorceForImgГ'},
            У:{elementName:'У',btnClicked:false, img:'sorceForImgA'},
            Ф:{elementName:'Ф',btnClicked:false, img:'sorceForImgБ'},
            Х:{elementName:'Х',btnClicked:false, img:'sorceForImgВ'},
            Ц:{elementName:'Ц',btnClicked:false, img:'sorceForImgГ'},
            Ч:{elementName:'Ч',btnClicked:false, img:'sorceForImgA'},
            Џ:{elementName:'Џ',btnClicked:false, img:'sorceForImgБ'},
            Ш:{elementName:'Ш',btnClicked:false, img:'sorceForImgВ'}
            }
        }
    }
    
   
    componentDidMount(){
       this.props.onFetchQuestion();
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
                    >{element.id}</Word>
                ))
            }
           
            let modalData=null;
            if (this.props.gameOver){
                modalData=(
                    <Aux>
                        <div>НЕУСПЕШЕН ОБИД ОБИДИ СЕ ПОВТОРНО</div>
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
            
            <Aux>
             <Modal show={this.props.gameOver}>{modalData}</Modal>
             <Modal show={this.props.gameOverGoodAttemp}>{modalData}</Modal> 
            <div style={{fontSize:'70px'}}>{this.props.wrongAttempts}</div>
            <div style={{display:"flex",justifyContent:'center',marginTop:"100px"}}>
             {word}</div>
             {/* <MainPage/> */}
            <div className={classes.Keyboard}>
                <div> {firstRowKeyboard}</div> 
            </div>
           
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        question: state.questions.data,
        attempts:state.questions.attempts,
        wrongAttempts:state.questions.wrongAttempts,
        word:state.questions.word,
        gameOver:state.questions.wrongAttempts === 7 ,
        gameOverGoodAttemp:state.questions.wordLength === state.questions.attempts,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchQuestion: () => dispatch(actions.getQusetion()),
        onShowLetter:(letter,array)=>dispatch(actions.showLetter(letter,array)),
        onGameOverHandler:(letter,wordArray)=>dispatch(actions.gameOverHandler(letter,wordArray)),
        onResetData:()=>dispatch(actions.onResetData())
    };
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps)(Keyboard));

