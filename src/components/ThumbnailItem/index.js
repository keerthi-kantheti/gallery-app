// Write your code here.
import './index.css'

const ThumbNailItem = props => {
  const {itemDetails, onClickThumbnail, isSelected} = props
  const {imageUrl, imageAltText, thumbnailUrl, thumbnailAltText} = itemDetails

  const clickOnThumbnail = () => {
    onClickThumbnail(imageUrl, imageAltText)
  }

  const selectedImageClassName = isSelected
    ? 'thumbnail-image-without-opacity'
    : 'thumbnail-image-with-opacity'
  return (
    <li>
      <button
        type="button"
        className={selectedImageClassName}
        onClick={clickOnThumbnail}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default ThumbNailItem
