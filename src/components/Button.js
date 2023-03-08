import PropTypes from 'prop-types'

export const Button = ({text}) => {

    const onClick = () => {
        console.log('click')
      
    }
  return (
    <button onClick={onClick}className='btn'>{text}</button>
  )
}

Button.propTypes =
{
    text: PropTypes.string,
}