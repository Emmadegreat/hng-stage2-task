HNG STAGE TWO TASK
Project: Develop an application that fetch and displays Top Rated movies by consuming TMDB API.

This application was build with React JS and Sass.
The JavaScript frontend framework (React JS) is the main building block of the application while synthetically Awesome Styling Sheet (Sass) was used for the user interface design.

Steps:

I created account on the TMDB website, generate my API KEY, with this I was able to gain access to the API url for the top rated movies which I was asked to consume.

Top Rated API:
const API_KEY = "api_key=7248317da58d3e1b7fe495fc4dd8aaf1";
    const base_url = 'https://api.themoviedb.org/3/movie/top_rated?'
    const url = base_url+API_KEY;

The above API was consumed using axios, which displayed the stated data(response) of the movies such as movie poster, movie title, movie release date, run time.

Following the instruction of the task, I fetched the above movie information and displayed the ten (10) top rated movies on the home page.
Using React Hooks - useState and useEffect, the fetch data was mapped to display the movies.
Each movie is displayed in a card that has the title, release date, and a link to the movie detail page.

The Sass was used to design the visually appealing structure of the entire website.

Clicking the "View" button of each movie card triggers an action that redirects to the movie_detail page, which shows the full detail of each movie.

The application also performs a search query that allows users to search for movies on the search bar, if found it will be displayed if not found a message will be displayed to show that it is not in the list of top rated movies.

The link "see more" when clicked will redirect to the page where all the movies other than the first top ten(10) rated will be shown.

The application is fully responsive.

The Application structure:
Components:
Pages: This folder conatin all the pages and components used, namely:
card.jsx, footer.jsx, home.jsx, moviedetail.jsx, and seemore.jsx.

Styles:
This folder contain all the style file for each component. Each component or page has 3 styles(.scss, .css, .css.map) in the style folder.

App.js
This file, is the root of all the components, using react-router-dom, routes was created for each components making it easier to navigate to different routes and pages.
All other components are imported into this file as the case may be.

Index.js:
This folder wraps the App.js file bringing all the components to a common root.

A GitHub repository named "hng-stage2-task" and link https://github.com/Emmadegreat/hng-stage2-task where the codes are saved virtually and can be accessed by anybody that has access to the link.

The project was also hosted on Vercel as:
https://hng-stage2-task-blond.vercel.app/
, the application can be used by visting the above hosted link.

Some commands used in the application:
Run the following command in the CMD or vscode terminal.

npx create-react-app stage-2-task ==> created the application.

cd stage-2-task ==> task you to the directory of the project.

npm start ==> starts the application.

git git add . ==> add all to the repository.

git commit -m  'committed' ==> commit to the repository.

git push ==> pushes the committed changes to the repository.

git pull ==> pulls any change made on the repository via GitHub to the application in my local machine.