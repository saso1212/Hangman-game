import React ,{Component} from 'react';
import classes from './Keyboard.css';
import Button from '../../components/UI/Buttons/Button';

class Keyboard extends Component{
    state={
        keyboard:{
            firstRow:{
                A:{elementName:'А',btnClicked:false, img:'sorceForImgA'},
                B:{elementName:'Б',btnClicked:false, img:'sorceForImgБ'},
                C:{elementName:'В',btnClicked:false, img:'sorceForImgВ'},
                D:{elementName:'Г',btnClicked:false, img:'sorceForImgГ'},
                E:{elementName:'Д',btnClicked:false, img:'sorceForImgA'},
                F:{elementName:'Ѓ',btnClicked:false, img:'sorceForImgБ'},
                G:{elementName:'Е',btnClicked:false, img:'sorceForImgВ'},
                J:{elementName:'Ж',btnClicked:false, img:'sorceForImgГ'},
                I:{elementName:'З',btnClicked:false, img:'sorceForImgA'},
                Р:{elementName:'Ѕ',btnClicked:false, img:'sorceForImgБ'},
                K:{elementName:'И',btnClicked:false, img:'sorceForImgВ'},
                L:{elementName:'Ј',btnClicked:false, img:'sorceForImgГ'}
            }
        }
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
        console.log(firstRowArray);

      let firstRowKeyboard=firstRowArray.map(element=>(
          <Button
             key={element.id}
             disabled={element.config.btnClicked}
             clicked={()=>this.btnClickedHandler(element.id)}
          >{element.config.elementName}</Button>

      ))


        return(
            <div className={classes.Keyboard}>
                 {firstRowKeyboard}
            </div>
        )
    }
}

export default Keyboard;