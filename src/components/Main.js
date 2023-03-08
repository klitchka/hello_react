/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Main.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aaparici <aaparici@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/02/26 14:16:51 by aaparici          #+#    #+#             */
/*   Updated: 2023/03/01 18:59:00 by aaparici         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import PropTypes from 'prop-types'
import { Button } from './Button';

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
        <Button text='Give Love'></Button>
        
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

