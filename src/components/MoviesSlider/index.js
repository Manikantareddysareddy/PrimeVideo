import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

import './index.css'

const MoviesSlider = props => {
  const {actionMovies, comedyMovies} = props
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div>
      <h1 className="heading">Action Movies</h1>
      <div className="slider-container ">
        <Slider {...settings}>
          {actionMovies.map(eachMovie => (
            <MovieItem Item={eachMovie} key={eachMovie.id} />
          ))}
        </Slider>
      </div>
      <h1 className="heading">Comedy Movies</h1>
      <div className="slider-container ">
        <Slider {...settings}>
          {comedyMovies.map(eachMovie => (
            <MovieItem Item={eachMovie} key={eachMovie.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default MoviesSlider
