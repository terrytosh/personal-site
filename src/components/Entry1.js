import { Component } from 'react';
import './style.css'

export default class Entry1 extends Component {
    render() {
        return (
            <div>
                <h4>Sunday, October 8th, 2023</h4>
                <p>
                  Today I believe I decided on the purpose I want this site to serve myself. In the beginning, I wanted to use it as a personal portfolio.
                   A way to showcase my educational, engineering, and career achievements, but that was not very interesting to me. When trying to design and 
                   create the site it felt all too mundane. So instead, I've decided to just use it as a way of learning and to simply document my own personal
                   interests. Things like music, journal entries, technology, and video games. Coming up with this type of content made more sense as usually the
                   words flow out much more easily. I'm hoping it will help me learn the technologies I am using with a better depth of knowledge and to help me
                   portray my thoughts in a more productive manner. Speaking of technology, I want to cover the technologies I am using to create this site at this
                   point in time, so I can then compare and contrast with the technologies I am using at a later date. They are very simple technologies that I hope
                   to expand upon, but they are what I currently know how to use and feel comfortable using.
                </p>

                <p>They include:</p>

                <ul>
                  <li>
                    React
                  </li>
                  <li>
                    HTML/CSS
                  </li>
                  <li>
                    Node.js
                  </li>
                  <li>
                    GitHub Pages
                  </li>
                </ul>
                <p>
                  <b>React</b> is a JavaScript library for building user interfaces. I will mainly be using it for the components, as components are a way to
                  encapsulate small pieces of the UI and construct them together in a manner that I find very intuitive. Much like using legos to create smaller
                  sections of a building and then piecing these smaller sub-sections together to create the whole building.
                </p>
                <p>
                  <b>HTML/CSS</b> will be used in combination with each other to layout the structure and styling of the website. <b>HTML (Hypertext Markup Language)</b> provides
                  the structure and semantic meaning to the content I add to the website. It allows me to give meaning to the contents on my website using certain tags that
                  the language contains. On the flip side, <b>CSS (Cascading Style Sheets)</b> will be used to style the content. After giving meaningful tags to sections of the content using HTML, I am
                  then able to style these tags as I see fit.
                </p>
                <p>
                  <b>Node.js</b> is a technology that I admittedly do not know too much about. This is something that I plan to improve my knowledge upon in the developement of this website.
                  As for what I do know about it, it serves as a developement server for my React project. It allows for the use of a local developement server to test my ideas on, without the
                  need for a full web server. Lastly, it is used to manage my project dependencies and scripts through npm (Node Package Manager). I can manage project dependencies, install
                  packages, and execute custom scripts using npm. As of right now, the dependencies for my project include: react, react-dom, and react-router-dom.
                </p>
                <p>
                  <b>GitHub Pages</b> will be used to host my website. They offer free hosting through GitHub Pages which is an extremely simple technology to setup. This way, I can focus more on
                  designing my website, without the worry of how I will be hosting a public site. Thank you GitHub!
                </p>
            </div>
        );
    }
}