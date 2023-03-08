import PropTypes from 'prop-types'

export const Button = ({text}) => {

    const onClick = () => {
        console.log('click')
    }
  return (
    <button className='btn'>{text}</button>
  )
}

Button.propTypes =
{
    text: PropTypes.string,
}