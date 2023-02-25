import PropTypes from 'prop-types'

const name = 'Klitchka';
const x = true;


export const Header = ({ title }) => {
  return (
    <header>
        <h1>{title}</h1>
        <h1>Hello {name}</h1>
        <h2>Are you happy? {x ? 'Sí' : 'No'}</h2>
    </header>
  )
  
}

Header.defaultProps = {
  title: "holi",
}

