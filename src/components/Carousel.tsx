import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

import CarouselItem from './CarouselItem.tsx'
import { CarouselProps } from '../utils/carouselTypes'


export const Carousel = (props: CarouselProps) => {
	const handleMediaQueryChange = isMobile => {
		setCarouselSpecs({
            ...carouselSpecs,
			countVisibleItems: isMobile ? 2 : 3,
			activeGroupIndex: 0,

		})
	}
	const isMobile = useMediaQuery(
		{ maxWidth: 980 },
		undefined,
		handleMediaQueryChange
	)
	const [carouselSpecs, setCarouselSpecs] = useState({
		countVisibleItems: isMobile ? 2 : 3,
		activeGroupIndex: 0,
        activeItemIndex: 0,
	})

    const { countVisibleItems, activeGroupIndex, activeItemIndex } = carouselSpecs

    const visibleItems = () => {
        const articles = [...props.articles]
        return articles.slice(activeItemIndex, activeItemIndex + countVisibleItems)
    }

    const nextItemIndex = () => {
        return isMobile ? activeItemIndex + 1 : activeItemIndex + countVisibleItems
    }

    const previousItemIndex = () => {
        return isMobile ? activeItemIndex - 1 : activeItemIndex - countVisibleItems
    }

    const isNavigationButtonDisabled = (direction) => {
        if (direction === 'next') {
            return !props.articles[nextItemIndex()]
        }
        if (direction === 'previous') {
            return !props.articles[previousItemIndex()]
        }


    }

    const updateActiveItem = (direction) => {
        let newActiveItem;
        if (direction === 'next') {
            newActiveItem = nextItemIndex()
        } else if (direction === 'previous') {
            newActiveItem = previousItemIndex()
        }
        
        setCarouselSpecs({
            ...carouselSpecs,
            activeItemIndex: newActiveItem
        })
    }


	const itemsList = visibleItems().map((item, index) => {
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
		return <CardContainer key={index}>
            <CarouselItem {...articleData}  />
        </CardContainer>
	})

	return (
		<CarouselContainer>
			<NavigationArrow>
				<button
					onClick={() => updateActiveItem('previous')}
					aria-label="previous"
					type="button"
                    disabled={isNavigationButtonDisabled('previous')}
				/>
			</NavigationArrow>
			<CarouselContent>
				<div className="header">
					<h4 className="header__title">More From Axios.com</h4>
					<a
						className="header__link"
						href="https://www.axios.com/"
						target="_blank"
                        rel="noreferrer"
					>
						Visit Axios.com
					</a>
				</div>
				<div className="cards">
                    {itemsList}
                </div>
                <a
						className="header__link header__link--mobile"
						href="https://www.axios.com/"
						target="_blank"
                        rel="noreferrer"
					>
						Visit Axios.com
					</a>
			</CarouselContent>

			<NavigationArrow isRight>
				<button
					onClick={() => updateActiveItem('next')}
					aria-label="next"
					type="button"
                    disabled={isNavigationButtonDisabled('next')}
				/>
			</NavigationArrow>
		</CarouselContainer>
	)
}

const CarouselContainer = styled.div`
	display: flex;
	width: 100vw;
	padding: 40px 60px;
	align-items: stretch;

    @media(max-width: 980px) {
        padding: 40px 0;
    }

`

const CarouselContent = styled.div`
	overflow: hidden;
	flex-grow: 3;

	.header {
		display: flex;
		justify-content: space-between;
        margin-bottom: 50px;

		&__title {
			font-size: 48px;
			font-weight: 300;
			color: #333335;
			padding-left: 50px;
            margin: 0;
		}

		&__link {
			align-self: center;
			color: #fff;
			background: #2257da;
			padding: 10px;
			border-radius: 6px;
			font-size: 18px;
            margin-right: 50px;

            &--mobile {
                display: none;
            }
		}

        @media(max-width: 980px) {
            &__title {
                font-size: 38px;
                padding-left: 10px;
            }

            &__link {
                display: none;

                &--mobile {
                    display: block;
                    text-align: center;
                    margin-top: 20px;
                }
            }

        }
	}

	.cards {
		display: flex;
	}
`
const CardContainer = styled.div`
flex: 1;

    @media(min-width: 980px) {
        width: 50%;
        :not(:last-of-type) {
            border-right: 1px solid #E9E9EE;
        }
    }

`
const NavigationArrow = styled.div`
	display: flex;
	align-items: center;
	width: 60px;
	button {
		width: 40px;
		height: 40px;
		border: 3px solid #bababe;
		border-top: none;
		border-right: none;
        margin: auto;
		transform: rotate(${props => (props.isRight ? '-135deg' : '45deg')});
        transform-origin: center;


        :hover:enabled {
            border-color: #2257DA
        }
        :disabled {
            border: none;
        }
	}
`
