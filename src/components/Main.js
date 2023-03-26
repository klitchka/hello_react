import { useState } from 'react';
import LikeButton from './Button';
import StatusButton from './StatusButton.js';

const name = 'Klitchka';
const allowedIP = '127.0.0.1'; // Dirección IP permitida para realizar cambios

export const MainSquare = ({ title }) => {

  const [status, setStatus] = useState({
    happy: false,
    love: false,
    healthy: false
  });

  const handleStatusChange = (statusName) => {
    const clientIP = window?.RTCPeerConnection?.getConfiguration()?.iceServers[0]?.urls; // Obtiene la dirección IP del cliente
    if (clientIP === allowedIP) {
      setStatus(prevStatus => ({
        ...prevStatus,
        [statusName]: !prevStatus[statusName]
      }));
    } else {
      console.log('No se permite realizar cambios desde esta dirección IP');
    }
  };

  return (
    <header>
      <div class="animated-background">
      <p>
        <h1 style={mainstyle}>Hello {name}</h1>
        <h1 style={questions}>Are you happy?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <StatusButton name="happy" onChange={() => handleStatusChange('happy')} disabled={!status.happy} />
        </h1>

        <h1 style={questions}>Are you in love? &nbsp;&nbsp;&nbsp;
        <StatusButton name="love" onChange={() => handleStatusChange('love')} disabled={!status.love} />
        </h1>

        <h1 style={questions}>Are you healthy? &nbsp;&nbsp;
        <StatusButton name="healthy" onChange={() => handleStatusChange('healthy')} disabled={!status.healthy} />
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
