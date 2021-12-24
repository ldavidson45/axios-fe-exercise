/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'

import { CarouselItemProps } from '../utils/carouselTypes'

export default function CarouselItem(props: CarouselItemProps) {
	const { primary_image } = props
    const topicToDisplay = props.topics[0].name
    const [displayDate] = useState(format(new Date(props.published_date), 'MMMM dd, yyyy'))

	return (
		<ArticleWrapper>
            <a href={props.permalink} target="_blank">
			<ArticleImage
				src={primary_image?.base_image_url}
				alt={primary_image?.alt_text}
			/>
            </a>
            <ArticleTopic>{ topicToDisplay }</ArticleTopic>
			<ArticleHeadline href={props.permalink} target="_blank">{ props.headline }</ArticleHeadline>
            <ArticleSubhed>
                <p className="date">{displayDate}</p>
                <a className="link" href={props.permalink} target="_blank">Go deeper --></a>
            </ArticleSubhed>
		</ArticleWrapper>
	)
}

const ArticleWrapper = styled.div`
    padding: 0 3.125rem;
`

const ArticleTopic = styled.p`
	font-size: 0.75rem;
	color: #ab7d36;
    margin: 5px 0;
`

const ArticleImage = styled.img`
	height: 205px;
	width: 333px;
    margin-bottom: 23px;
`

const ArticleHeadline = styled.a`
    font-size: 1.125rem;
    line-height: 22.5px;
    color: #333335;
`

const ArticleSubhed = styled.div `
    display: flex;
    justify-content: space-between;
    margin-top: 1.25rem;
    font-weight: 300;

    .date {
        font-size: 0.875rem;
        color: #656568;
        margin: 0;
        line-height: 150%;
    }

    .link {
        font-size: 1.125rem;
        color: #2257DA;
    }
`