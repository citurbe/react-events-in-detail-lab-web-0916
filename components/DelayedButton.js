const React = require('react')
class DelayedButton extends React.Component {
  constructor() {
    super()
    this.activate = this.activate.bind(this)
  }

  activate(event){
    event.persist();
    setTimeout(()=>{
    this.props.onDelayedClick(event)}, this.props.delay
  )
  }

  render(){
    return (
      <button onClick={this.activate} />
    )
  }
}
module.exports = DelayedButton
