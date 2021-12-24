export interface CarouselItemProps {
	id: string
	headline: string
	authors: Author[]
	published_date: string
	permalink: string
	primary_image: Image
	topics: any[]
}

interface Author {
	display_name: string
	username: string
}

interface Image {
	alt_text: string
	base_image_url: string
	blurred_data: string
    caption: string
    crops: any
    embed: any
    id: any
    is_animated: any
    source: any


}
export interface CarouselProps {
	articles: CarouselItemProps[]
}
