import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

import CarouselItem from './CarouselItem.tsx'
import { CarouselProps } from '../utils/carouselTypes'

export const Carousel = (props: CarouselProps) => {
	const handleMediaQueryChange = isMobile => {
		setCarouselSpecs({
			countVisibleItems: isMobile ? 1 : 3,
			isMobile,
			activeGroupIndex: 0
		})
	}
	const isMobile = useMediaQuery(
		{ maxWidth: 990 },
		undefined,
		handleMediaQueryChange
	)
	const [carouselSpecs, setCarouselSpecs] = useState({
		countVisibleItems: isMobile ? 1 : 3,
		isMobile,
		activeGroupIndex: 0
	})

	const { countVisibleItems, activeGroupIndex } = carouselSpecs

    const itemGroups = () => {
        const allItems = [...props.articles]
        let groups = []
        while(allItems.length > 0) {
            const group = allItems.splice(0, countVisibleItems)
            groups.push(group)
        }
        return groups
    }
    const visibleItems = itemGroups()[activeGroupIndex]


	const updateVisibleItems = direction => {
        let newActiveGroup;
        const lastGroupIndex = itemGroups().length - 1
        const isLastGroup = activeGroupIndex === lastGroupIndex
        const isFirstGroup = activeGroupIndex === 0

        if (direction === 'next') {
            newActiveGroup = isLastGroup ? 0 : activeGroupIndex + 1
        } 
        if (direction === 'previous') {
            newActiveGroup = isFirstGroup ? lastGroupIndex : activeGroupIndex - 1
        }
       
        setCarouselSpecs({
            ...carouselSpecs,
            activeGroupIndex: newActiveGroup
        })
	}

	const itemsList = visibleItems.map((item, index) => {
		const {
			id,
			headline,
			authors,
			published_date,
			permalink,
			primary_image,
			topics
		} = item
		const articleData = {
			id,
			headline,
			authors,
			published_date,
			permalink,
			primary_image,
			topics
		}
		return <CarouselItem {...articleData} key={index} />
	})

	return (
		<CarouselContainer>
			<button onClick={() => updateVisibleItems('previous')}>Previous</button>
			{itemsList}
			<button onClick={() => updateVisibleItems('next')}>next</button>
		</CarouselContainer>
	)
}

const CarouselContainer = styled.div`
	display: flex;
	width: 100%;
	padding: 40px 60px;
`
