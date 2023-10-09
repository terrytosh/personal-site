import { Component } from 'react';
import './style.css'

export default class Entry2 extends Component {
    render() {
        return (
            <div>
                <details>
                  <summary>
                    <h3>Monday, October 9th, 2023</h3>
                  </summary>
                  <u><h4>Website Technology</h4></u>
                  <p>
                    Today I implemented a feature that allows every journal entry to be collapsible (open and closed). In order to do this
                    I utilized the &lt;details&gt; and &lt;summary&gt; tags in HTML with some basic styling done on them in CSS. Here is a basic
                    overview of what these two tags do:
                  </p>
                  <ul>
                    <li>
                      &lt;details&gt; - This is the container element that wraps the content you want to hide or reveal. It creates a disclosure widget that
                      can be toggled open or closed.
                    </li>
                    <li>
                      &lt;summary&gt; - This element serves as the title or heading you want displayed and is contained inside the &lt;details&gt; tag. Clicking
                      on this toggles the rest of the content inside the &lt;details&gt; tag to be open or closed.
                    </li>
                  </ul>
                  <p>
                    By default, a small arrow to open and close the collapsible section is added, but it gets added directly above the content contained in the
                    &lt;summary&gt; tag. I instead wanted the arrow icon to be displayed inline and directly to the left of the journal entry heading. To achieve
                    this, I targeted the selector 'details summary &gt; *' with the CSS styling 'display: inline' to correctly display them together. Lastly, in order
                    to be able to also click the journal entry heading to toggle the &lt;details&gt; section, I simply targeted the selector 'summary' with the
                    CSS styling 'cursor: pointer'.
                  </p>
                  <p>
                    After adding the ability to open and close the journal entries, I noticed some extra space above the first journal entry and below the first horizontal line.
                    In order to fix this, I just needed to modify the margin, padding, and border spacing between these two. The horizontal line is contained in the title component,
                    so I used CSS to change the 'margin-bottom', 'padding-bottom', and 'border-bottom' all to 0%. This took away some of the extra space, so I then needed to do something
                    similar to the journal entries container. I modified this container so that 'margin-top', 'padding-top', and 'border-top' were all 0%. After making this change, it successfully
                    eliminated the extra space between the two elements and looks much more pleasing to the eye in my opinion.
                  </p>
                  <u><h4>Future Feature Ideas</h4></u>
                  <ul>
                    <li>
                      Searchable Journal Entries by day, month, and year.
                    </li>
                    <li>
                      Ability to sort journal entries in ascending and descending order.
                    </li>
                    <li>
                      Ability to add/delete journal entries through the site instead of through modifying the source code.
                    </li>
                    <li>
                      Icon located on the bottom of the navigation bar to toggle/change the current theme (light/dark mode).
                    </li>
                    <li>
                      CSS modifications to work better for mobile users.
                    </li>
                  </ul>
                </details>
            </div>
        );
    }
}