import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Musicians from './components/musicians_page';
import * as serviceWorker from './serviceWorker';

let musiciansData = [
  {name: 'Nirvana', genre: 'Grunge'},
  {name: 'Kavinsky', genre: 'Outrun'},
  {name: 'Michael Jackson', genre: 'Pop'},
  {name: 'Ozzy Osbourne', genre: 'Heavy Metal'},
  {name: 'Biggie Smalls', genre: 'Hip Hop'},
  {name: 'Tupac Shakur', genre: 'Hip Hop'},
  {name: 'DJ Isaac', genre: 'Hardstyle'},
  {name: 'Vaporwave', genre: 'Macintosh Plus'},
  {name: 'The Rolling Stones', genre: 'Pop'},
  {name: 'Kumar Sanu', genre: 'Rock'},
  {name: 'Arijit Singh', genre: 'Pop'},
  {name: 'Atif Aslam', genre: 'Pop'},
  {name: 'Mohit Chauhan', genre: 'Pop'},
  {name: 'Rahat Fateh Ali Khan', genre: 'Ghazal'},
  {name: 'Anup Jalota', genre: 'Bhajan'}
];

ReactDOM.render(<Musicians data={musiciansData} />, document.getElementById('root'));

serviceWorker.unregister();
