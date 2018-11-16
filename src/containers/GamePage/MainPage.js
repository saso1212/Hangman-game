import React ,{Component} from 'react';
import classes from './MainPage.css';
import LetterImage from '../../components/LetterImage/LetterImage';
//import Button from '../../components/UI/Buttons/Button';
class MainPage extends Component{
    state={
        firstRow:['p','o','g','o','d','i'],
        secondRow:{
            firstWord:['g','o'],
            secondWord:['z','b','o','r','o','t']
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
    },500)
    setTimeout(()=>{
        this.setState({isLoadingSecRowSecondWord:true})
    },800)
    }
    componentWillUnmount(){
        this.setState({isLoadingFirstRow:false})
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
            </div>
        )
    }
}

export default MainPage;

