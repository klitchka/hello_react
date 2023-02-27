/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Header.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aaparici <aaparici@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/02/26 14:16:51 by aaparici          #+#    #+#             */
/*   Updated: 2023/02/27 20:54:33 by aaparici         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import PropTypes from 'prop-types'

const name = 'Klitchka';
const happy = true;
const love = true;
const healthy = false;


export const Header = ({ title }) => {
  return (
    <header>
        <h1 style={headerstyle}>Hello {name}</h1>
        <h2 style={headerstyle}>Are you happy? {happy ? 'Yes' : 'No'}</h2>
        <h2 style={headerstyle}>Are you in love? {love ? 'Yes' : 'No'}</h2>
        <h2 style={headerstyle}>Are you healthy? {healthy ? 'Yes' : 'No'}</h2>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p>{title}</p>
        <button>Give love</button>
    </header>
  )
  
}

Header.defaultProps = {
  title: "holi",
}

const headerstyle = {
  color: 'black', 
  backgroundColor: 'white'
}

