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
				alt={primary_image?.alt_text}
                url={primary_image?.base_image_url}
			/>
            </a>
            <ArticleTopic>{ topicToDisplay }</ArticleTopic>
            <ArticleHeadlineWrapper>
            <ArticleHeadline href={props.permalink} target="_blank">{ props.headline }</ArticleHeadline>

            </ArticleHeadlineWrapper>
            <ArticleSubhed>
                <p className="date">{displayDate} <span className="topic"> - { topicToDisplay }</span></p>
                <a className="link" href={props.permalink} target="_blank">Go deeper --></a>
            </ArticleSubhed>
		</ArticleWrapper>
	)
}

const ArticleWrapper = styled.div`
    max-width: 433px;
    padding: 0 3.125rem;
    flex: 1;

    @media (max-width: 980px) {
        padding: 0 10px;
        min-width: 237px;
        width: 100%;

      }
`

const ArticleTopic = styled.p`
	font-size: 0.75rem;
	color: #ab7d36;
    margin-bottom: 5px;

    @media (max-width: 980px) {
        display: none;
    }


`

const ArticleImage = styled.div`
	height: 205px;
    background-image: url(${props => props.url});
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;

    @media(max-width: 980px) {
        width: 100%;
    }
`

const ArticleHeadlineWrapper = styled.div`
    height: 66px;
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

    .topic {
        display: none;
    }

    @media (max-width: 980px) {
        .date {
            font-size: 12px;
        }
        .topic {
            display: inline;
        }

        .link {
            display: none;
        }
    }
`