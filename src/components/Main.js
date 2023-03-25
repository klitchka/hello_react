import LikeButton from './Button'
import StatusButton from './StatusButton.js';

const name = 'Klitchka';

export const MainSquare = ({ title }) => {

  return (
    <header>
      <p>
        <h1 style={mainstyle}>Hello {name}</h1>
        <h1 style={questions}>Are you happy?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <StatusButton name="happy" />
        </h1>

        <h1 style={questions}>Are you in love? &nbsp;&nbsp;&nbsp;
        <StatusButton name="love" />
        </h1>

        <h1 style={questions}>Are you healthy? &nbsp;&nbsp;
        <StatusButton name="healthy" />
        </h1>

      </p>
      <br></br><br></br><br></br>
        <p>{title}</p>
        <br></br>
        <LikeButton text='Give Love'></LikeButton>        
    </header>
  )
  
}

MainSquare.defaultProps = {
  title: "holi",
}

const mainstyle = {
  color: 'black', 
  backgroundColor: 'white'
}

const questions = {
  color: 'black',
  backgroundColor: 'white',
  fontSize: '16px'
}
