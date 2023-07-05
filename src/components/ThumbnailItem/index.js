// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onChangeImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const thumbnailClassName = isActive ? 'thumbnail-active' : ''
  const changeImage = () => {
    onChangeImage(id)
  }

  return (
    <li className="thumbnail-image">
      <button type="button" className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail ${thumbnailClassName}`}
          onClick={changeImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
