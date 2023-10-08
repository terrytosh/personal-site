import { Component } from 'react';
import './style.css'
import joydeparted from '../images/joydeparted.jpg';

export default class Entry1 extends Component {
    render() {
        return (
            <div>
                <h3>Sunday, October 8th, 2023</h3>
                <u><h4>Website Technology</h4></u>
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

                <p>As of today, the website runs properly on both Chrome and Edge, but there is a small error on Firefox that I am still trying to figure out. On Firefox, when hovering over
                   the navigation bar, the SVG icons increase to a much larger width and height than they are supposed to. I'm not too sure why this is happening only in Firefox, but I believe
                   it is due to the differences in the browser's rendering engines. For now, I am still focusing on other properties of the website, so I will have to put off this bug fix until
                   later. Just wanted to note that it was there. That's all for the technology side of things today.
                </p>
                <u><h4>Music</h4></u>
                <p>Lately, I've been listening to a lot of Midwest Emo, some would say too much, but I don't think that's possible at all. 'Using' and 'Blonde Hair, Black Lungs' by Sorority
                   Noise have been stuck on repeat for me recently. These two songs perfectly express some of the things I think and feel, but just don't know how to say it myself. The album
                   'Joy, Departed' is just a fucking genius name to me. Paired with the amazing album cover, it is pure joy to my eyes and ears. 
                   Click <a href='https://soundcloud.com/sorority-noise/sets/joy-departed-1?si=5f0ab13af2204f9b8dc2d5c4301cdc94&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'>here</a> to check it 
                   out for yourself though, don't just take my word for it. That'll be all for today as I've run out of time. Till next time &lt;3.
                </p>
                <img src={joydeparted} alt='Joy, Departed Album Cover' width={350} height={350}></img>
            </div>
        );
    }
}