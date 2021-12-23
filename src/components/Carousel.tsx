import React from 'react'
import styled from 'styled-components'
import CarouselItem from './CarouselItem'

export const Carousel = () => {
    const carouselItems = [{title: 'Item1'}, {title: 'Item2'}, {title: 'Item3'}]
    const itemsList = carouselItems.map((item, index) => {
        return <CarouselItem title={item.title} key={index}/>
    })
	return <CarouselContainer>
        {itemsList}
    </CarouselContainer>
}

const CarouselContainer = styled.div`
    display: flex;
	width: 100%;
    padding: 40px 60px;
`
