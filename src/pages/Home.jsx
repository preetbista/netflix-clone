import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
    return (
        <>
            <Main />
            <Row title='Up coming' fetchURL={requests.requestUpcoming} />
            <Row title='Popular' fetchURL={requests.requestPopular} />
            <Row title='Trending' fetchURL={requests.requestTrending} />
            <Row title='Top Rated' fetchURL={requests.requestTopRated} />
            <Row title='Horror' fetchURL={requests.requestHorror} />
        </>
    )
}

export default Home