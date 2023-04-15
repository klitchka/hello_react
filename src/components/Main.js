import LikeButton from './Button';
import HappyButton from './HappyButton';
import LoveButton from './LoveButton';
import HealthyButton from './HealthyButton';

const name = 'Klitchka';

export const MainSquare = ({ title }) => {
  
  return (
    <header>
      <h1>Hello, {name}</h1>
      <h1 style={questions}>Are you happy?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <HappyButton />
      </h1>
      <h1 style={questions}>Are you in love? &nbsp;&nbsp;&nbsp;
        <LoveButton />
      </h1>
      <h1 style={questions}>Are you healthy? &nbsp;&nbsp;
        <HealthyButton />
      </h1>
      <br /><br /><br />
      <p>{title}</p>
      <br />
      <LikeButton text='Give Love' />
    </header>
  )
}

MainSquare.defaultProps = {
  title: "holi",
}

/*const mainstyle = {
  color: 'black', 
  backgroundColor: 'white'
}*/

const questions = {
  color: 'black',
  backgroundColor: 'white',
  fontSize: '16px'
}
