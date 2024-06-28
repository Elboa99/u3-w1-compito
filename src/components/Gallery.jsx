import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    const { query } = this.props;
    fetch(`http://www.omdbapi.com/?apikey=1bd895af&s=${query}`)
      .then(response => response.json())
      .then(data => {
        if (data.Response === "True") {
          this.setState({ movies: data.Search, loading: false });
        } else {
          this.setState({ error: data.Error, loading: false });
        }
      })
      .catch(error => {
        this.setState({ error: error.message, loading: false });
      });
  };

  render() {
    const { title } = this.props;
    const { movies, loading, error } = this.state;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <Container className="mb-4">
        <h4>{title}</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6">
          {movies.map(movie => (
            <Col key={movie.imdbID} className="mb-2 text-center px-1">
              <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Gallery;
