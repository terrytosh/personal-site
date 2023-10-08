import { Component } from 'react';
import './style.css';
import devilgirl from '../images/devilgirl.JPG';

export default class Title extends Component {
    render() {
        return (
            <div className='title'>
              <main>
                <h1>Terry's Personal Site &lt;3 Come & Stay Awhile</h1>
                <img src={devilgirl} alt='Devil Girl'></img>
                <hr></hr>
              </main>
            </div>
        );
    }
}