import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  getFilteredList = reviewsList => {
    const {count} = this.state
    console.log(reviewsList[count])
    return reviewsList[count]
  }

  fun = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    } else {
      this.setState(prevState => ({count: prevState.count}))
    }
  }

  fun1 = () => {
    const {count} = this.state
    console.log(count)
    if (count < 3) {
      this.setState(prevState => ({count: prevState.count + 1}))
    } else {
      this.setState(prevState => ({count: prevState.count}))
    }
  }

  render() {
    const {reviewsList} = this.props

    const {imgUrl, username, companyName, description} = this.getFilteredList(
      reviewsList,
    )
    return (
      <div className="mainDiv">
        <div className="subDiv">
          <h1>Reviews</h1>

          <img src={imgUrl} className="imgsty" alt={username} />
          <div className="buttonCon">
            <button
              className="btnn"
              onClick={this.fun}
              type="button"
              testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <p>{username}</p>
            <button
              className="btnn"
              onClick={this.fun1}
              type="button"
              testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p>{companyName}</p>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
