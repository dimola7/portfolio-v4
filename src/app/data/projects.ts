import musicBox from "../assets/images/music-box.png";
import deepDiive from "../assets/images/deepdiive.png";
import filmVibe from "../assets/images/movie-info.png";
import globalWeather from "../assets/images/global-weather.png";
import tekBlog from "../assets/images/tek-blog.png";
import portfolio from "../assets/images/portfolio-v4.png";

export const projectData = [
  {
    id: 1,
    title: "Music Box",
    image: musicBox,
    slug: "music-box",
    url: "https://themusicbox.netlify.app/",
    github: "https://github.com/dimola7/music-box-web-music-box-frontend-group-b",
    description: "A music streaming web application, where users can stream songs, create playlists, add songs to the playlists, and a few other features. \n A user can also search for songs, albums, artists and playlists. \n A user is required to sign in or sign up to use the application.",
    stacks: "React, TypeScript, CSS, Material UI, Node, Express, MongoDB, Github Actions ",
  },
  {
    id: 2,
    title: "DeepDiive",
    image: deepDiive,
    slug: "deep-diive",
    url: "https://deepdiive.netlify.app/",
    // github: "https://github.com/Co-Lab-You-Belong-in-Tech/deep-diive",
    description: "DeepDiive is not your average ice-breaker. The MVP is a web app experience that accommodates two players. The goal of this web-app is to trigger more meaningful conversations among remote workmates. Scientific study and user research was used to gauge what makes conversations meaningful and this was used to inform the questions included in the card deck. We hypothesize that there is a positive correlation between the impact of these conversations and the overall happiness at work per user.",
    stacks: "React, CSS, Node, Express, MongoDB, SocketIo",
  },
  {
    id: 3,
    title: "FilmVibe",
    image: filmVibe,
    slug: "film-vibe",
    url: "https://filmvibe.netlify.app/",
    github: "https://github.com/dimola7/movie-search",
    description: "A web application to search for and get information about any movie or tv show. Users can also see comments made about the movie. The movie data is gotten from theMovieDB API.",
    stacks: "HTML, CSS, JavaScript",
  },
  {
    id: 4,
    title: "Global Weather",
    image: globalWeather,
    slug: "global-weather",
    url: "https://theglobalweather.netlify.app/",
    github: "https://github.com/dimola7/Weather-App",
    description: "A weather application that allows you to search for any city in the world, and gets the weather conditions of that city. It shows the weather for 5 days, the current day and 4 days after. It leverages the Accuweather API to fetch the weather data.",
    stacks: "HTML, CSS, JavaScript",
  },
  {
    id: 5,
    title: "TekBlog",
    image: tekBlog,
    slug: "tek-blog",
    // url: "https://tekblog.netlify.app/",
    // github: "https://github.com/dimola7/MERN-stack-tekblog",
    description: "...",
    stacks: "React, TypeScript, CSS, Node, Express, MongoDB",
  },
  {
    id: 6,
    title: "Portfolio Website v4",
    image: portfolio,
    slug: "my-portfolio",
    url: "https://adedimola.tech/",
    github: "https://github.com/dimola7",
    description: "This is the 4th version of my portfolio",
    stacks: "React, Typescript, CSS",
  },
];