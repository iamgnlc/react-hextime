import React, { PureComponent } from "react"
import { Helmet } from "react-helmet"

import "./HexTime.scss"

class HexTime extends PureComponent {
  state = {
    hours: null,
    minutes: null,
    seconds: null,
    textColor: null,
  }

  setTime = (value) => {
    return String(value).length < 2 ? "0" + String(value) : String(value)
  }

  setColors = () => {
    var now = new Date()

    let hours = this.setTime(now.getHours())
    let minutes = this.setTime(now.getMinutes())
    let seconds = this.setTime(now.getSeconds())

    let textColor =
      hours * 0.299 + minutes * 0.587 + seconds * 0.114 > 186 ? "#000" : "#fff"

    this.setState({
      hours,
      minutes,
      seconds,
      textColor,
    })
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setColors(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    let { hours, minutes, seconds, textColor } = this.state
    let hexTime = "#" + hours + minutes + seconds
    return hexTime && textColor ? (
      <div
        className="hex-time"
        style={{
          transition: "all 1s",
          color: textColor,
          backgroundColor: hexTime,
        }}
      >
        <Helmet>
          <title>{hexTime}</title>
        </Helmet>
        <span className="hex">{hexTime}</span>
        <a
          style={{ color: textColor }}
          className="repo"
          href={process.env.REACT_APP_REPO_URL}
        >
          {process.env.REACT_APP_REPO_URL}
        </a>
      </div>
    ) : null
  }
}

export default HexTime
