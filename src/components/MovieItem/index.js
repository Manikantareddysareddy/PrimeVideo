import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {Item} = props
  const {thumbnailUrl, videoUrl, categoryId} = Item
  return (
    <div>
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" className="image" />}
        className="popup-content"
      >
        {close => (
          <div className="popUp-container">
            <div className="button-container">
              <button
                data-testid="closeButton"
                type="button"
                onClick={() => close()}
                className="buttonStyle"
              >
                {' '}
                <IoMdClose className="close-icon" />
              </button>
            </div>
            <div className="video-player-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
