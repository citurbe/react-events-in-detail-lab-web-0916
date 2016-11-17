const React = require('react')
class CoordinatesButton extends React.Component {

  constructor () {
    super()
    this.makeArray = this.makeArray.bind(this)
  }

  makeArray(event){
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.makeArray} />
    )
  }
}

module.exports = CoordinatesButton
