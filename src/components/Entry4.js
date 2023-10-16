import { Component } from 'react';
import './style.css'

export default class Entry4 extends Component {
    render() {
        return (
            <div>
                <details>
                  <summary>
                    <h3>Sunday, October 15th, 2023</h3>
                  </summary>
                  <u><h4>Website Technology</h4></u>
                  <p>
                    I've been quite busy lately with work and school, but I finally got a little time to take a break and come work on my site.
                    I had a small bug that had to do with the React Routes. I actually wouldn't necessarily call it a bug, because the code worked
                    correctly, I just needed to add more to it for the correct functionality that I wanted it to perform. Upon loading the site, the 'Title'
                    component showed, as it should across all pages, but there was no default body being loaded in. To fix this problem, all I had to do was
                    add a default route within my React Routes section in the 'App.js' file. By using 'path="*"', any non-existing routes enetered into the
                    URL will be directed to the element set within this line. In my case, I chose it to show the 'Homepage' element. Now, upon entering the site, the 'Homepage'
                    will be shown in the body initially, until a new navigation link is chosen. This is the correct behavior that I had planned upon. Yay! That was the
                    biggest change I have made today, but other than that I added some content to both the 'Homepage' and 'Contacts' page. I added some of my projects that
                    I've done and more information about myself to the 'Homepage'. On the 'Contacts' page, I simply added my Discord username. That'll be all for today, but hopefully
                    I can find a larger chunk of time in the coming days to really sit down and add some cooler, more complex features to my website. I've been enjoying the time
                    I get to come and work on this site lately, as it helps me breakdown learning larger things, like React and all its features, into smaller sub-sections. I'm hoping
                    that through all this small, sequential learning, it will greatly benefit me in the bigger picture. Anyways though, keep learning and finding new things to distract yourself
                    from this world. I belive hobbies and passions are something that will keep me interested in life in the days to come. Things have become quite mundane, but by having
                    a dedicated place to come learn and share my thoughts has been quite enjoyable. Keep it up and don't be too hard on yourself! &lt;3
                  </p>
                </details>
            </div>
        );
    }
}