import { Component } from 'react';
import './style.css'
import RandomKitty from './RandomKitty';

export default class Contact extends Component {
    render() {
        return (
            <div>
              <main>
                <h1>Links to my various accounts</h1>
                <h3>Email: pterrytosh@gmail.com</h3>
                <h3>Discord: _.terry_</h3>
                <h3><a href="https://github.com/terrytosh">GitHub</a></h3>
                <h3><a href="https://www.linkedin.com/in/terry-tosh">LinkedIn</a></h3>
                <h3><a href="https://soundcloud.com/terry-tosh">Soundcloud</a></h3>
                <hr></hr>
                <RandomKitty />
              </main>
            </div>
        );
    }
}