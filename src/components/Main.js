import LikeButton from './Button'

const name = 'Klitchka';
const happy = true;
const love = true;
const healthy = false;


export const MainSquare = ({ title }) => {
  return (
    <header>
      <p>
        <h1 style={mainstyle}>Hello {name}</h1>
        <h2 style={mainstyle}>Are you happy? {happy ? 'Yes' : 'No'}</h2>
        <h2 style={mainstyle}>Are you in love? {love ? 'Yes' : 'No'}</h2>
        <h2 style={mainstyle}>Are you healthy? {healthy ? 'Yes' : 'No'}</h2>
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

