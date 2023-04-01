import { useState, useEffect } from 'react';
import LikeButton from './Button';
import StatusButton from './StatusButton.js';

const name = 'Klitchka';

export const MainSquare = ({ title }) => {
  
  // Recupera los valores almacenados en LocalStorage o inicializa el estado si no hay nada almacenado
  const [status] = useState(() => {
    const love = localStorage.getItem('love') === 'true';
    const happy = localStorage.getItem('happy') === 'true';
    const healthy = localStorage.getItem('healthy') === 'true';
    return { love, happy, healthy };
  });
  
  // Guarda los valores de love, happy y healthy en LocalStorage cada vez que cambian
useEffect(() => {
  localStorage.setItem('love', status.love.toString());
  localStorage.setItem('happy', status.happy.toString());
  localStorage.setItem('healthy', status.healthy.toString());
}, [status]);

  return (
    <header>
      <div class="animated-background">
      <p>
        <h1 style={mainstyle}>Hello {name}</h1>
        <h1 style={questions}>Are you happy?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <StatusButton name="happy"/>
        </h1>

        <h1 style={questions}>Are you in love? &nbsp;&nbsp;&nbsp;
        <StatusButton name="love" />
        </h1>

        <h1 style={questions}>Are you healthy? &nbsp;&nbsp;
        <StatusButton name="healthy"/>
        </h1>

      </p>
      <br></br><br></br><br></br>
        <p>{title}</p>
        <br></br>
        <LikeButton text='Give Love'></LikeButton>      
        </div>  
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
