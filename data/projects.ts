import musicBox from '../assets/images/music-box.png';
// import deepDiive from '../assets/images/deepdiive.png';
import filmVibe from '../assets/images/movie-info.png';
// import globalWeather from '../assets/images/global-weather.png';
import githubFinder from '../assets/images/github-finder.png';
// import tekBlog from "../assets/images/tek-blog.png";
// import portfolio from '../assets/images/portfolio-v4.png';
// import decagon from '../assets/images/placement-tracker.png';
import placementTracker from '../assets/images/placementTracker.png';
import decagonHQ from '../assets/images/decagonHq.png';
import veedez from '../assets/images/veedez.png';
import alerzo from '../assets/images/alerzo.png';
import alerzoPay from '../assets/images/alerzoPay.png';
import touchMark from '../assets/images/touchMark.png';

export const projectData = [
  {
    id: 9,
    title: 'Veedez',
    image: veedez,
    slug: 'veedez',
    url: ' https://veedez.com',
    description:
      'Veedez is an-all-in one bookkeeping and inventory tool for retailers and SMEs that allows them to efficiently manage available stock, send invoices, track transactions, and receive insight into their business performance all from their smartphones.',
    stacks: 'React, TypeScript, Next.js, GraphQL, Redux.js, React Native',
  },
  {
    id: 10,
    title: 'alerzoPay',
    image: alerzoPay,
    slug: 'alerzo-pay',
    url: ' https://alerzopay.com/',
    description:
      'Alerzopay is an all-round financial solution that offers ease in making and accepting payment with a user-friendly interface and diverse payment options',
    stacks: 'React, TypeScript, Next.js, React Query, Redux.js',
  },
  {
    id: 11,
    title: 'Alerzo Website',
    image: alerzo,
    slug: 'alerzo',
    url: 'https://alerzo.com/',
    description:
      'Alerzo is an all-in-one technology platform designed to equip micro-businesses with the digital products and services necessary to run profitable and sustainable businesses.',
    stacks: 'React, Next.js',
  },
  {
    id: 12,
    title: 'TouchMark',
    image: touchMark,
    slug: 'touchmark',
    // url: 'https://fellowship.decagonhq.dev/',
    description: '...',
    stacks: 'React, TypeScript, Tailwind',
  },
  {
    id: 2,
    title: 'Decagon Placement Tracker',
    image: placementTracker,
    slug: 'decagon-placement-tracker',
    url: 'https://decagonhq.com/fellowship/',
    description:
      'An enterprise application that helps process and track the placement of engineers to companies for their fellowship.',
    stacks: 'React, TypeScript, CSS, Github Actions',
  },
  {
    id: 13,
    title: 'Decagon',
    image: decagonHQ,
    slug: 'decagon',
    url: 'https://decagonhq.com/',
    description:
      'Decagon institute is an elite software engineering and leadership training school that equips high potential individuals with world-class software engineering skills. \n Decagon also outsources its talents to external organisations',
    stacks: 'React, TypeScript, CSS, Github Actions',
  },
  {
    id: 1,
    title: 'Music Box',
    image: musicBox,
    slug: 'music-box',
    url: 'https://themusicbox.netlify.app/',
    github:
      'https://github.com/dimola7/music-box-web-music-box-frontend-group-b',
    description:
      'A music streaming web application, where users can stream songs, create playlists, add songs to the playlists, and a few other features. \n A user can also search for songs, albums, artists and playlists. \n A user is required to sign in or sign up to use the application.',
    stacks:
      'React, TypeScript, CSS, Material UI, Node, Express, MongoDB, Jest, Github Actions ',
  },
  // {
  //   id: 3,
  //   title: 'DeepDiive',
  //   image: deepDiive,
  //   slug: 'deep-diive',
  //   url: 'https://deepdiive.netlify.app/',
  //   // github: "https://github.com/Co-Lab-You-Belong-in-Tech/deep-diive",
  //   description:
  //     'DeepDiive is not your average ice-breaker. The MVP is a web app experience that accommodates two players. The goal of this web-app is to trigger more meaningful conversations among remote workmates. Scientific study and user research was used to gauge what makes conversations meaningful and this was used to inform the questions included in the card deck. We hypothesize that there is a positive correlation between the impact of these conversations and the overall happiness at work per user.',
  //   stacks: 'React, CSS, Node, Express, MongoDB, SocketIo',
  // },
  {
    id: 4,
    title: 'FilmVibe',
    image: filmVibe,
    slug: 'film-vibe',
    url: 'https://filmvibe.netlify.app/',
    github: 'https://github.com/dimola7/movie-search',
    description:
      'A web application to search for and get information about any movie or tv show. Users can also see comments made about the movie. The movie data is gotten from theMovieDB API.',
    stacks: 'HTML, CSS, JavaScript',
  },
  {
    id: 5,
    title: 'Github Finder',
    image: githubFinder,
    slug: 'github-finder',
    url: 'https://viewgithub.netlify.app/',
    github: 'https://github.com/dimola7/github-finder',
    description:
      "A web application that allows you to search for users on Github and also see their basic information. I made use of GitHub's Developer API.",
    stacks: 'React, Typescript, CSS, Tailwind',
  },
  // {
  //   id: 6,
  //   title: 'Global Weather',
  //   image: globalWeather,
  //   slug: 'global-weather',
  //   url: 'https://theglobalweather.netlify.app/',
  //   github: 'https://github.com/dimola7/Weather-App',
  //   description:
  //     'A weather application that allows you to search for any city in the world, and gets the weather conditions of that city. It shows the weather for 5 days, the current day and 4 days after. It leverages the Accuweather API to fetch the weather data.',
  //   stacks: 'HTML, CSS, JavaScript',
  // },
  // {
  //   id: 7,
  //   title: "TekBlog",
  //   image: tekBlog,
  //   slug: "tek-blog",
  //   // url: "https://tekblog.netlify.app/",
  //   // github: "https://github.com/dimola7/MERN-stack-tekblog",
  //   description: "...",
  //   stacks: "React, TypeScript, CSS, Node, Express, MongoDB",
  // },
  // {
  //   id: 8,
  //   title: 'Portfolio Website v4',
  //   image: portfolio,
  //   slug: 'my-portfolio',
  //   url: 'https://adedimola.tech/',
  //   github: 'https://github.com/dimola7',
  //   description: 'This is the 4th version of my portfolio',
  //   stacks: 'React, Typescript, CSS',
  // },
];
