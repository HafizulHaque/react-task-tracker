import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  const func = (e) => {
    console.log('button clicked');
  }

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Hello" onClickFunc={func}></Button>
      <Button color="red" text="Hello 2" onClickFunc={func}></Button>
      <Button color="blue" text="Hello 3"></Button>
    </header>
  )
}

Header.defaultProps = { 
  title: "Default title goes here"
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

// CSS in js 
// const headerStyle = {
//   color: 'red', 
//   backgroundColor: '#000'
// }

export default Header
