import * as React from 'react';
import { useState } from 'react';
import { Button, Grid } from '@material-ui/core';


function MatrixGame() {
    const [myMap, setMyMap] = useState(new Map());
    const [currentClicked, setCurrentClicked] = useState(1);
    const [lastClicked, setLastClicked] = useState(-1);
    const [secondLastClicked, setSecondLastClicked] = useState(-1);
    var items = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    const handleClick = (index) => {
        if(!myMap.has(index)){
            setMyMap(new Map(myMap.set(index, currentClicked)));
            var temp = lastClicked;
            setLastClicked(index);
            setSecondLastClicked(temp);
            setCurrentClicked(currentClicked + 1);
        }
    }

    return (
        <div style={{
            width: '500px', 
            padding: '0px',
            backgroundColor: 'blue',
        }}>
            <Grid 
                container 
                spacing={0} 
                style={{padding: '0px',margin: '0px',borderColor: 'black',borderWidth: '1px',}}
            >
                {items.map((key,index) => <Grid item xs={3} key={key}>
                    <Button
                        
                        fullWidth onClick={() => handleClick(index)}
                        style={{
                            padding: '20px',
                            borderStyle: 'solid',
                            borderColor: 'black',
                            borderWidth: '1px',
                            maxHeight: '30px', 
                            minWidth: '30px',
                            borderRadius: '0px',
                            margin: '0px',
                            background: (index == lastClicked || index == secondLastClicked) ? "yellow" : "blue" 
                        }}
                    >
                        {myMap.get(key) ? "Box " + myMap.get(key) : ""}
                    </Button>
                </Grid>)}
            </Grid>
        </div>
    );
}

export default MatrixGame;