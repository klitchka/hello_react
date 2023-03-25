import { useState } from 'react';
import LikeButton from './Button'
import Status from './StatusButton.js';

const name = 'Klitchka';

export const MainSquare = ({ title }) => {
  const [happy, setHappy] = useState(true);
  const [love, setLove] = useState(true);
  const [healthy, setHealthy] = useState(false);

  return (
    <header>
      <p>
        <h1 style={mainstyle}>Hello {name}</h1>
        <h1 style={questions}>Are you happy?
        <Status>
        {happy ? 'Yes' : 'No'}</Status></h1>


        <h1 style={questions}>Are you in love? 
        <Status>
        {love ? 'Yes' : 'No'}</Status></h1>


        <h1 style={questions}>Are you healthy? 
        <Status>
        {healthy ? 'Yes' : 'No'}</Status></h1>

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