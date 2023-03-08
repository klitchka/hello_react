/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aaparici <aaparici@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/02/24 23:48:28 by aaparici          #+#    #+#             */
/*   Updated: 2023/03/01 13:33:07 by aaparici         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import {MainSquare } from "./components/Main";
//import React from "react";
import 'firebase/auth';
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function App() {
  
  return (
    <div className="container">
      <MainSquare title="Thanks for passing by."></MainSquare>
    </div>
   
  );
}

/*class Test extends React.Component 
{
  render () 
  {
   return <h1>clase</h1> 
  }
}
*/
export default App;
