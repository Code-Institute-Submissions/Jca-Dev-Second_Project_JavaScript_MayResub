<h1>Automotive Quiz</h1>
<hr>
The Automotive Quiz website is desgined for users to test their knowledge in the mechanical aspects of cars. Its is a quiz composing of 6 questions relating to how a car works.<br> 
<a href="https://jca-dev.github.io/Second_Project_JavaScript/">Click Here</a> to go to the live website.
<hr>

![Responsive site test](/assets/images/responsive.jpg)
<hr>

<h1>User Experience (UX)</h1>
<h2>Goals</h2>
<ul>
    <li>Give the user a fun quiz to test their car knowledge.</li>
    <li>Show a clean, clear, accessible and easily navigable website/quiz for the user.</li>
    <li>Users return to play again and compete with thier friends.</li>
</ul>

<hr>
<h1>Wireframe Pages Used For Planning</h1>
<hr>
<h2>No Wireframe was used to plan this project. I let the layout evolve as I coded.</h2>
<hr>

<h1>Design And Features</h1>
<ul>
    <li>Give the user an interactive quiz.</li>
    <li>Responsive design for users to enjoy across multiple devices.</li>
    <li>The questions are randomly loaded from a set of 12 posibilities for user reusability.</li>
</ul>
<h2>Imagery</h2>
<ul>
    <li>There is only the background image relating to a car as its an automotive quiz, there is only one image to reduce distraction for the user.</li>
</ul>
<h2>Site colors</h2>
<ul>
    <li>The site uses a traffic light colour scheme, black (main), white (secondary), green - amber - red (tertiary).</li>
</ul>

<h2>Font styles</h2>
<ul>
    <li>Libre Baskerville - is used for the heading because its clear and gives a mechanical feel.</li>
    <li>M PLUS 1 - is used for the text body also because its clear and gives a mechanical feel.</li>
</ul>
<hr>
<h2>Navigation</h2>
<hr>
<ul>
    <li>Navigation is displayed as buttons below the quiz, home (takes the user to index.html from any page), feedback (takes the user to feedback.html).</li>
    <li>On the homepage (index.html) the user will see a big green button to start the quiz, clicking this button takes the user to quiz.html</li>
</ul>

<hr>

<h2>Home Page</h2>
<hr>
   <ul>
       <li>Simple clear display with an instant direction for the user to start the quiz via the lets get start button</li>
   </ul>

![Feedback Form](/assets/images/home.jpg)
<hr>

<h2>Quiz</h2>
<hr>
   <ul>
       <li>Clear layout of questions and radio answers generated from javascript on slides.</li>
       <li>Next, Previous and submit buttons are below the quiz box and clearly visable to the user.</li>
       <li>Home and Feedback buttons are below the buttons stated above, clearly visable to the user allowing navigation away from the quiz at anytime.</li>
   </ul>

![Feedback Form](/assets/images/quiz.jpg)
<hr>

<h2>Feedback Form</h2>
<hr>
   <ul>
       <li>Simple, quick and easy to fill out so the user is more inclined to fill out the form.</li>
       <li>The form collects the users first name, email address, quiz rating and feedback on the quiz.</li>
       <li>The form allows site developers to make improvements to the UX from the feedback given.</li>
   </ul>

![Feedback Form](/assets/images/feedback.jpg)
<hr>

<h2>Footer</h2>
<ul>
    <li>There is no Footer on this website to stop the user getting distracted from the quiz.</li>
</ul>

<hr>

<h1>Technologies Used</h1>
<ul>
    <li>HTML5 - coding language.</li>
    <li>CSS3 - coding language.</li>
    <li>JavaScript - coding language.</li>
    <li>Google Fonts - to import fonts used on the site.</li>
    <li>Git - Version control by utilizing the Gitpod terminal to add and commit to Git then Push to GitHub.</li>
    <li>Git Hub - stores the project code and hosts the website.</li>
    <li>Visual Code Studio - system used to write code via Git</li>
    <li>Paint 3D - to create the logo and edit screenshots for the README.md</li>
    <li>Chrome Dev Tools - to action, review and test changes without having to commit and push to the website each time.</li>
    <li>Lighthouse - testing code.</li>
    <li>W3C Validation - testing code.</li>
</ul>
<hr>
<h1>Deployment</h1>
<h2>Github</h2>
The project was deployed to GitHub Pages by:
<ol>
    <li>Logging Into GitHub and locating the GitHub Repository.</li>
    <li>Selecting Settings in the Repository</li>
    <li>Select Pages from the Nav panel on the left</li>
    <li>Select Source dropdown list and select main</li>
</ol>
The page is now published and the link is above the source section.

<br>

<h2>Making a Local Clone</h2>
<ol>
<li>Log in to GitHub and locate the [GitHub Repository](https://github.com/)</li>
<li>Under the repository name, click "Clone or download".</li>
<li>To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.</li>
<li>Open Git Bash</li>
<li>Change the current working directory to the location where you want the cloned directory to be made.</li>
<li>Type `git clone`, and then paste the URL you copied in Step 3.</li>
<li>Press Enter. Your local clone will be created.</li>
</ol>

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) for retrieve pictures and more detailed explanations of the above process.
    
<hr>
<h1>Testing</h1>
<h2>Browsers</h2>
<ul>
    <li>Google Chrome.</li>
    <li>Microsoft Edge.</li>
    <li>Mozilla Firefox.</li>
</ul>
<h2>Devices</h2>
<ul>
    <li>Galaxy S8.</li>
    <li>Galazy S21 Ultra.</li>
    <li>Iphone SE.</li>
    <li>Iphone 12 Pro.</li>
    <li>Ipad Air</li>
    <li>Surface Pro 7</li>
    <li>Laptop</li>
    <li>Nest Hub max</li>
</ul>
<h2>Softwares</h2>
<ul>
    <li><a href="https://validator.w3.org/" target="_blank" rel="noopener">W3C Markup Validation Service</a></li>

![W3C HTML](/assets/images/html.jpg)
    <li><a href="https://jigsaw.w3.org/css-validator/" target="_blank" rel="noopener">W3C CSS Validation Service</a></li>

![W3C CSS](/assets/images/css.jpg)
    <li><a href="https://developers.google.com/web/tools/lighthouse" target="_blank" rel="noopener">Google Chrome Lighthouse</a></li>

![Lighthouse Test](/assets/images/lighthouse.jpg) 
</ul>

<h2>Bugs & Fixes</h2>
<ul>
   <li>W3C HTML picked up a br within a h2 and threw an error so fixed by removing the br from quiz.html.</li>
   <li>Mozilla Firefox - the home feedback and clear buttons were too high and cutting into the feedback form box, fixed by adjusting css.</li>
</ul>

<h2>Known Bugs</h2>
<ul>
    <li>In some smaller resolutions the title bar isnt displayed in the center of the screen.</li>
</ul>
<hr>
<h2>Sources/Credits</h2>
<hr>
<ul>
    <li>My Mentors for their eagle eyes and feedback (mentor change during project)</li>
    <li>Used Form template from my <a href="https://github.com/Jca-Dev/First-Project/blob/main/contact.html" target="_blank" rel="noopener">First Project</a></li>
    <li>background image from <a href="https://www.pexels.com/" target="_blank" rel="noopener">Pexels</a></li>
     <li>Icons from <a href="https://fontawesome.com/v5/search?m=free" target="_blank" rel="noopener">https://fontawesome.com/v5/search?m=free</a></li>
    <li>Gathered information and troubleshooting from <a href="https://stackoverflow.com/" target="_blank" rel="noopener">Stackoverflow</li>