import { Component } from 'react';
import './style.css'

export default class Homepage extends Component {
    render() {
        return (
            <div>
              <main>
                <h2>What's The Purpose?</h2>
                <p>This site will serve as a place to increase my knowledge of website developement technology and to document some of my own personal interests.
                   As of right now, I want to include a 'Journals' section to devote some time to discuss the things I am currently learning and applying to this site.
                   Also, I would like to use it as a place to document my thoughts, without the boring and traditional method of simply keeping a pen and paper journal.
                </p>
                <h2>Bits About Me</h2>
                <p>
                  My name is Terry and I am currently a senior pursuing a Bachelors of Science (B.S.) in Computer Science with a minor in Mathematics.
                </p>
              </main>
            </div>
        );
    }
}