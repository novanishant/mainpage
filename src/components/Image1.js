import React from 'react'
import bar from './bar.png'

const image = ()=> {
    const myStyle={
        
        // position:'absolute',
        align:'center',
        
        width:'100%',
        margin:'1px',
        };

        return (
            
                <img  id="image2" style={myStyle} src={bar} alt="loading" />
            
        )
}

export default image
