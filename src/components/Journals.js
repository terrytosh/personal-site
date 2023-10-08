import { Component } from 'react';
import './style.css'
import Entry1 from './Entry1';
import Entry2 from './Entry2';

export default class Journals extends Component {
    render() {
        return (
            <div>
              <main>
                <Entry1 />
                <hr></hr>
                <Entry2 />
                <hr></hr>
              </main>
            </div>
        );
    }
}