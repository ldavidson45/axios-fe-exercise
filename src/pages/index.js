import styled from 'styled-components';
import { Carousel } from '../components/Carousel.tsx'

const Index = ({articles}) => {
    // console.log(articles)
    return (
    <div>
        <Title>Axios Front End Excerise 🚀</Title>
        <Carousel  articles={ articles }/>
    </div>
 )}


 const Title = styled.h1`
  color: red;
`;


const articleListEndpoint = 'https://api.axios.com/api/render/stream/content'
const articleDetailsEndpoint = (uuid) => `https://api.axios.com/api/render/content/${uuid}`

async function getArticleDetails(uuid) {
    const response = await fetch(articleDetailsEndpoint(uuid))
    const details = await response.json()
    return details
}

export const getStaticProps = async() => {
    const response = await fetch(articleListEndpoint)
    const articles = await response.json()
   const articlesWithDetail = await Promise.all(articles.results.map(article => getArticleDetails(article)))


    return {
        props: {
            articles: articlesWithDetail
        }
    }
}



 export default Index