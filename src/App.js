import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import MovieDetails from './components/MovieDetails'
import MovieDropdown from './components/MovieDropdown'

const App = () => {
  // state = {
  //   movieTitle: 'Batman Begins',
  // }

  const [movieTitle, setMovieTitle] = useState('Batman Begins')

  const changeMovieTitle = (newMovieSelected) => {
    // this.setState({
    //   movieTitle: newMovieSelected,
    // })
    setMovieTitle(newMovieSelected)
  }

  return (
    <div className='App mt-3'>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} md={4}>
            <MovieDropdown
              movieTitle={movieTitle} // read-only value
              changeMovieTitle={changeMovieTitle} // the function for changing it
            />
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xs={12} md={4}>
            <MovieDetails movieTitle={movieTitle} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
