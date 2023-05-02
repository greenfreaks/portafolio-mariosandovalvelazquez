import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';

const CarouselComponent = ({children}) =>{
    const breakPoints =[
        {width: 480, itemsToShow: 1},
        {width: 768, itemsToShow: 2},
        {width: 1200, itemsToShow: 2},
        {width: 1500, itemsToShow: 3},
        
    ]
        
    return(
        <div className='carousel' breakPoints={breakPoints}>
            {children}
        </div>    
    )
}

export default Carousel;