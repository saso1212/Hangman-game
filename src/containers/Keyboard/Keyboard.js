import React ,{Component} from 'react';
import {connect} from 'react-redux';
import classes from './Keyboard.css';
import * as actions from '../../store/actions/index';
import Button from '../../components/UI/Buttons/Button';



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
        }
    }

    componentDidMount(){
       console.log(this.props.purchased);
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
            this.props.onFetchQuestion();
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

      ))


        return(
            <div className={classes.Keyboard}>
                <div> {firstRowKeyboard}</div>  
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         ings: state.burgerBuilder.ingredients,
//         purchased: state.order.purchased
//     }
// };

const mapStateToProps = state => {
    return {
        somequestion: state.quest.questions,
        purchased:    state.quest.purchased
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchQuestion: () => dispatch(actions.getQusetion())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Keyboard);

