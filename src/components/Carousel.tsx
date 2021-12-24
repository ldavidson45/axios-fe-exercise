import React from 'react'
import styled from 'styled-components'

import CarouselItem from './CarouselItem.tsx'
import { CarouselProps } from '../utils/carouselTypes'

export const Carousel = (props: CarouselProps) => {

    const itemsList = props.articles.map((item, index) => {
        const { id, headline, authors, published_date, permalink, primary_image, topics } = item
        const articleData = {
            id, headline, authors, published_date, permalink, primary_image, topics

        }
        return <CarouselItem {...articleData} key={index}/>
    })
    
	return <CarouselContainer>
        { itemsList }
    </CarouselContainer>
}

const CarouselContainer = styled.div`
    display: flex;
	width: 100%;
    padding: 40px 60px;
`
