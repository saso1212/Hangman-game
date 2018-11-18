import React ,{Component} from 'react';
import classes from './MainPage.css';
import LetterImage from '../../components/LetterImage/LetterImage';
import BtnMainPage from './BtnsMainPage/BtnsMainPage';
//import Button from '../../components/UI/Buttons/Button';
class MainPage extends Component{
    state={
        firstRow:['П','О','Г','О','Д','И'],
        secondRow:{
            firstWord:['Г','О'],
            secondWord:['З','Б','О','Р','О','Т']
        },
        isLoadingFirstRow:false,
        isLoadingSecRowFirstWord:false,
        isLoadingSecRowSecondWord:false
    }
    componentWillMount(){
       setTimeout(()=>{
           this.setState({isLoadingFirstRow:true})
      },200)
       setTimeout(()=>{
        this.setState({isLoadingSecRowFirstWord:true})
        },400)
       setTimeout(()=>{
        this.setState({isLoadingSecRowSecondWord:true})
       },900)
    }
    componentWillUnmount(){
        this.setState({isLoadingFirstRow:false,isLoadingSecRowFirstWord:false,isLoadingSecRowSecondWord:false})
    }
    render()
    {
        let firstRowText=this.state.firstRow.map((element,index)=>(
            <LetterImage 
                key={index}
                letter={require(`../../assets/Letters/bk/${element}.svg`)}
                letterDescription={`letter ${element}` }
            />
        ));
        let secondRowFirstWord=this.state.secondRow.firstWord.map((element,index) =>(
              <LetterImage 
                key={index}
                letter={require(`../../assets/Letters/bk/${element}.svg`)}
                letterDescription={`letter ${element}` }
              />
        ));
        let secondRowSecondWord=this.state.secondRow.secondWord.map((element,index) =>(
            <LetterImage 
                key={index}
                letter={require(`../../assets/Letters/bk/${element}.svg`)}
                 letterDescription={`letter ${element}` }
             />
      ));


        return(
         <div className={classes.MainPage}>
               <div className={classes.FirstRow}  >
                    <div   style={{
                        transform: this.state.isLoadingFirstRow ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity:  this.state.isLoadingFirstRow? '1' : '0'
                    }}> {firstRowText}</div>
            </div>
            <div className={classes.SecondRow}>
                   <div className={classes.FirstWord}
                       style={{
                       transform: this.state.isLoadingSecRowFirstWord ? 'translateX(0)' : 'translateX(-100vw)',
                       opacity:  this.state.isLoadingSecRowFirstWord? '1' : '0'
                    }}>{secondRowFirstWord}</div> 
                    <div className={classes.SecondWord}
                       style={{
                       transform: this.state.isLoadingSecRowSecondWord ? 'translateX(0)' : 'translateX(100vw)',
                       opacity:  this.state.isLoadingSecRowSecondWord? '1' : '0'
                     }}>{secondRowSecondWord}</div> 
             </div>
             <BtnMainPage/>
         </div>
        )
    }
}

export default MainPage;

