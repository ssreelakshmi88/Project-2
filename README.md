# Quiz Game

“Quiz spel”is an online game developed to test user’s general knowledge via a series of 20 questions that covers various topics. This quiz application has been developed with HTML and CSS for visualization, while the user interaction interface is based on JavaScript. As the game progresses, the application will display the remaining questions. A final appended HTML page show the total score and contains the correct answer list. 





![Home Page](https://user-images.githubusercontent.com/97182442/167926745-e56b95ab-78e3-4da8-9e8b-f7bed8acfba3.png)





![Quiz Page_screenshot](https://user-images.githubusercontent.com/97182442/167912904-d94d03f3-38ce-474b-8b9f-38ad94edaa3a.png)





## UX (User Experience)

### User stories

- First Time Visitor Goals


 1.	As a first time visitor, I want to understand the rules to play the game.

 2.	Upon commencement, I want to be able to track my progress and know instantaneously whether my response to the questions are correct.
 
 3.	As the game ends, I want to see the final score and a table summarizing my response and the correct answers. 
  
  
  - Returning Visitor Goals
  
  
 1.	As a returning visitor, I want to play a new questionnaire to test my knowledge in multiple rounds.
 
 2.	As a returning visitor, I want to contact the developer with any questions that I may have.
 
### Design

- **Color scheme**

i.	 The main colours used in the website are shades of blue and white.

- **Typography**

i.	The Montserrat font is the main font used throughout the website with Sans Serif as the fallback font. 

- **Imagery**

   No background image has been placed
   
   
###    Wireframes


- Desktop Wireframe


![Desktop Wireframe (Page1)](https://user-images.githubusercontent.com/97182442/167911491-c690c4a1-abfa-4e3b-bf4a-f35c1e21ccc6.png)




![Desktop Wireframe (Page2)](https://user-images.githubusercontent.com/97182442/167911549-397317b6-f464-4853-9a2a-3c33d1d72d45.png)




![Desktop Wireframe (Page3)](https://user-images.githubusercontent.com/97182442/167911794-3db705f9-9224-4b00-8b4e-53d6b2c5cde5.png)


![Desktop Wireframe ((Page4)](https://user-images.githubusercontent.com/97182442/167911819-69a97c0a-ac3e-41a0-98ff-519b87b955b7.png)



- Mobile Wireframe


![Mobile Wireframe](https://user-images.githubusercontent.com/97182442/167911923-ceca627e-4a92-4a32-8a95-382e02fc980a.png)




### Features


- Responsive on different devices.

- Interactive elements for getting attention of users and making the website more attractive.


### Features Left to Implement

- Adding a timer functionality to make the game more exciting.

- Adding difficulty levels for e.g., easy, medium and hard.

- Segregating questions based on topics for e.g., science, general knowledge, animal kingdom etc.

### Technologies Used

**Languages Used**

- HTML
- CSS
- Javascript

 
1. **Google Fonts:**

Google fonts were used to import the 'Titillium Web' font into the style.css file which is used on all pages throughout the project.

2. **Git** 


Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

3. **GitHub**

 
GitHub is used to store the projects code after being pushed from Git.

4. **Balsamiq Wireframes**

Downloadable software to create the wireframe mockups.


5. **OpenTrivia Database**

A web API supplying quiz questions in JSON format.

### Testing

The W3C Markup Validator, W3C CSS Validator Services, Jshint validator were used to validate every page of the project to ensure there were no syntax errors in the project.

- W3C Markup Validator

 - HTML No errors were found when passing through the official W3C Markup validator.


![Html validation](https://user-images.githubusercontent.com/97182442/167913626-fd28bfa6-cddd-43c3-b244-9e2e08f0e756.png)



- W3C CSS Validator Services

   - CSS No errors were found when passing through the official Jigsaw validator.


![CSS validation](https://user-images.githubusercontent.com/97182442/167913585-1d41c4e1-c567-4cfa-89fc-e3e5df8e270a.png)



- Jshint validator


  - I discovered certain warnings like "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)". All of these warnings were removed by installing a Eslintrc file in my gitpod.
  


![JSHint Validation](https://user-images.githubusercontent.com/97182442/167932047-3687c360-f8f1-47ed-9067-9743e3929338.png)



- Lighthouse testing

   -In Google Chrome devtools, I checked that the colors and the fonts are contrasting and easy to read. It is accessible while running through the lighthouse devtool. The results ranged from 92 to 100. Below are the results.



![Lighthouse testing](https://user-images.githubusercontent.com/97182442/167925879-89438987-6183-4c5d-bf5b-b6383f3afa9b.png)


### Testing User Stories from User Experience (UX) Section

- First Time Visitor Goals

1. As a first time visitor, I want to understand the rules to play the game.


   a. The homepage features a navigation bar with a “Help” tab. Clicking the tab will take the user to an appended HTML page describing, on a high level, the basic rules to play the game.
   
   
   
   
![Help page](https://user-images.githubusercontent.com/97182442/167933068-25c03d56-db46-4c97-bdd4-b1545d6eb150.png)


2. Upon commencement, I want to be able to track my progress and know instantaneously whether my response to the questions are correct.

 a.  A progress bar that shows the number of questions answered and the remaining number of questions is displayed.
 
 
 
![Progress bar](https://user-images.githubusercontent.com/97182442/167935041-5fc2970f-4547-441f-ba32-4795dc9c2c88.png)

 b. Multiple choice answers are enabled with hover functionality to highlight the choice and colour coded to indicate if the answer is correct   (green) or not (red) instantaneously.
 
 
 
 
 ![Quiz page_1](https://user-images.githubusercontent.com/97182442/167935166-c7b6b884-188b-4cf5-892b-fada014f9425.png)
 
 
 
![Quiz page_2](https://user-images.githubusercontent.com/97182442/167935204-375f6940-bb2e-4214-ba52-d7cebb6f5e91.png)





 c. A “Skip” button to take to the appended HTML pages that contains subsequent questions is included to skip questions.
 
 
 
 ![Progress bar](https://user-images.githubusercontent.com/97182442/167935316-c77c7c1c-a5bf-48a3-8c4e-0e7066c5de06.png)


3. As the game ends, I want to see the final score and a table summarizing my response and the correct answers.

    a. An appended HTML page that summarize the final score calculated by the number of correct answers to total questions.
    
    
    
    
    ![Score page](https://user-images.githubusercontent.com/97182442/167935752-a6592d95-8c5b-4eff-9201-3ca34e136a19.png)


    b. Contains a button “Check Answers”, that will take to an appended HTML page with a table summarizing the correct answers to each question and user response.


    
 ![Score page](https://user-images.githubusercontent.com/97182442/167935752-a6592d95-8c5b-4eff-9201-3ca34e136a19.png)


![Answers](https://user-images.githubusercontent.com/97182442/167936244-68be2a1f-3f44-48d4-b9f4-78974cc3f72b.png)


- Returning Visitor Goals

1. As a returning visitor, I want to play a new questionnaire to test my knowledge in multiple rounds.

   a. The score section contains a button “Play Again”, to start a new game with a new questionnaire
    
   
 ![Play Again](https://user-images.githubusercontent.com/97182442/167936965-d9b84b8a-150f-4e41-8211-e4df1f140c99.png)
 
 
b. With the "New Game" button in navigation bar a user can start a new game when they are already in middle of the game.



![New Game](https://user-images.githubusercontent.com/97182442/167938424-0f89f7d9-ce30-41b7-aa21-ad2f8adb25a5.png)

2. As a returning visitor, I want to contact the developer with any questions that I may have.


  a. A “contact” tab in the navigation bar will take the user to an appended HTML page to get in touch with the developer via email by filling in relevant information.
 
 
 
 ![Contact Page](https://user-images.githubusercontent.com/97182442/167938821-3db29b26-a0b7-4b53-a8df-d70a4389c52b.png)

 
###  Further Testing

 1.	The website was tested on Google Chrome, Internet Explorer and Microsoft Edge.
 
 2.	The website was checked on different standard devices such as desktop, laptop and iPhone using the devtools device toolbar.
 
During development of this application, I regularly tested the responsiveness of the site using Google Chrome's Developer tools. In my CSS media query rules, I used 3 separate breakpoints to design the site for different screen sizes.
 
- 1200 px width and below (medium screen size)
- 600px width and below (small screen size)
- 414px width and below





![Mobile Page](https://user-images.githubusercontent.com/97182442/167939763-96f7ad20-5985-4b2b-ac39-1198a3765470.jpeg)


![Mobile page_1](https://user-images.githubusercontent.com/97182442/167939825-5efeba2a-7be0-46b3-bb05-3bcd6e287c93.jpeg)



### Known Bugs



 During evaluation few questions loaded from API database contained special characters as shown below:
 
 
 
 
![Bugs in table](https://user-images.githubusercontent.com/97182442/167941710-cadc469f-86ea-4e9f-9752-d7732a7ad30d.png)



### Deployment

**GitHub Pages**

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the GitHub Repository.

2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.

3. Scroll down the Settings page until you locate the "GitHub Pages" Section.

4. Under "Source", click the dropdown called "None" and select "Master Branch".

5. The page will automatically refresh.

6. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.


**Making a Local Clone**

1.	Log in to GitHub and locate the GitHub Repository

2.	Under the repository name, click "Clone or download".

3.	To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.

4.	Open Git Bash

5.	Change the current working directory to the location where you want the cloned directory to be made.

6.	Type git clone, and then paste the URL you copied in Step 3.

$ git clone https://github.com/ssreelakshmi88/Quiz-Game-Project-2.git

7.	Press Enter. Your local clone will be created.

### Credits

**Code**

•	The code to import the questions by way of an API call came from the OpenTrivia Database API website, with the selected parameters available to modify at this link: [https://opentdb.com/api_config.php]

•	Stack overflow website

•	Youtube tutorials

**Acknowledgements**

- A continuous and supportive feedback from the mentor.

- Tutor support at Code Institute.





  
  

