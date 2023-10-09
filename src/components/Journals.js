import { Component } from 'react';
import './style.css'
import Entry1 from './Entry1';
import Entry2 from './Entry2';
import Entry3 from './Entry3';

export default class Journals extends Component {
    render() {
        return (
            <div className='journal-entries'>
              <main>
                <Entry1 />
                <hr></hr>
                <Entry2 />
                <hr></hr>
                <Entry3 />
                <hr></hr>
              </main>
            </div>
        );
    }
}