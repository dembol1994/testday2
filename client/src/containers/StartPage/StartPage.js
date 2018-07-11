import React, {Component} from 'react';

import classes from './StartPage.css';

import ToolbarStart from '../../components/Layout/ToolbarStartPage/ToolbarStartPage'
class StartPage extends Component {
        state = {
            blocks: {           
                cleaning: {
                    textAbove: 'Cleaning',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                    count: 21        
                },
                cooking: {
                    textAbove: 'Cooking',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                    count: 25
                },      
                cleaning2: {
                    textAbove: 'Cleaning',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                    count: 27       
                },
                cooking2: {
                    textAbove: 'Cooking',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                    count: 29
                },
            
        }
        }


    render() {
        let arrOfEl = [];
        for (let key in this.state.blocks) {
            arrOfEl.push({
                key: key,
                config: this.state.blocks[key]
            })
        }
        return (
            <div className={classes.wrapper}>
            <ToolbarStart/>
            <div className={classes.blocks}>                
                    {arrOfEl.map(el => {
                    return <div key={el.key} className={classes.el}> 
                    <div className={classes.TextDiv}>
                        <h3>{el.config.textAbove}</h3>
                        <span>{el.config.text}</span>
                        <span>Booking Count: {el.config.count}</span>
                    </div>
                    <div className={classes.ImgDiv}></div>
                    </div>
                })}
            </div>
            </div>
        )
    }
}

export default StartPage;