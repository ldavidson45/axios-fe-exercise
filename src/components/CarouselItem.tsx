import React from 'react'
import styled from 'styled-components'
import { CarouselItemProps } from '../utils/carouselTypes'

export default function CarouselItem(props: CarouselItemProps) {
    return (
        <div>
            {props.title}
        </div>
    )
}
