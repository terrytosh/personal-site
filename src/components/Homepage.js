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
                  My name is Terry and I am currently a senior pursuing a Bachelors of Science (B.S.) in Computer Science with a minor in Mathematics. I've dipped my toe into
                  the career field of software engineering only slightly. I've completed a single internship in the Summer of 2022 at General Motors. There I worked on a small
                  project that included the automation of a monthly task for the team I was working with.
                </p>
                <hr></hr>
                <h2>Projects</h2>
                <p>
                  <ul>
                    <li>Local image file encryption/decryption</li>
                    <li>Memory cache simulator</li>
                    <li>Machine learning Kaggle solution to Spaceship Titanic</li>
                    <li>John Conway's game of life simulator</li>
                    <li>Simon says game with breadboard and LED hardware integrations</li>
                    <li>Small autogeneration makefile for C++ programs</li>
                  </ul>
                </p>
                <h2>Skills/Technologies</h2>
                <p>Programming Languages:
                  <ul>
                    <li>C/C++</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>HTML/CSS</li>
                  </ul>
                </p>
                <hr></hr>
              </main>
            </div>
        );
    }
}