import React, { PureComponent } from "react"
import "./HexTime.scss"

class HexTime extends PureComponent {
  state = {
    hours: null,
    minutes: null,
    seconds: null,
    fontColor: null,
  }

  repo = "https://github.com/iamgnlc"

  setTime = (value) => {
    return String(value).length < 2 ? "0" + String(value) : String(value)
  }

  setColors = () => {
    var now = new Date()

    let hours = this.setTime(now.getHours())
    let minutes = this.setTime(now.getMinutes())
    let seconds = this.setTime(now.getSeconds())

    let fontColor =
      hours * 0.299 + minutes * 0.587 + seconds * 0.114 > 186 ? "#000" : "#fff"

    this.setState({
      hours,
      minutes,
      seconds,
      fontColor,
    })
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setColors(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    let { hours, minutes, seconds, fontColor } = this.state
    let hexTime = "#" + hours + minutes + seconds
    return hexTime && fontColor ? (
      <>
        <div
          className="hex-time"
          style={{
            transition: "all 1s",
            color: fontColor,
            backgroundColor: hexTime,
          }}
        >
          <span>{hexTime}</span>
        </div>
        <a style={{ color: fontColor }} className="github" href={this.repo}>
          {this.repo}
        </a>
      </>
    ) : null
  }
}

export default HexTime
