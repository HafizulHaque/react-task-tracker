import PropTypes from 'prop-types'


function Button({color, text, onClickFunc}) {
  return (
    <button 
      className="btn"
      style={{backgroundColor: color}} 
      onClick={onClickFunc}>
      {text}
    </button>
  )
}

Button.defaultProps = { 
  color: 'black',
  text: 'default text',
  onClickFunc: (e) => {
    console.log('defalut onclick running')
  }
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClickFunc: PropTypes.func
}

export default Button
