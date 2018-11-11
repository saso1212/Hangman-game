import React ,{Component} from 'react';
import classes from './GamePage.css';
import Button from '../../components/UI/Buttons/Button';

class GamePage extends Component{
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
                Ј:{elementName:'Ј',btnClicked:false, img:'sorceForImgГ'}
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
            <div className={classes.GamePage}>
                 {firstRowKeyboard}
            </div>
        )
    }
}

export default GamePage;

