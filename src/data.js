import Workdayimage from "./images/Workday.png"
import Weatherimage from"./images/Weather.png"
import jateimage from "./images/jate.png"
import NoteTakerimage from"./images/Notetaker.png"
import comingsoonimage from "./images/comingsoon.jpg"
import Earthimage from "./images/Earth.png"
export const projects = [
  // projets
    {
      title: "Work Day Scheduler",
      subtitle: "Third party API's/jQuery",
      description:
        "a simple calendar application that allows a user to save events for each hour of the day",
      image:Workdayimage,
      link: "https://seper56.github.io/Third-Party-APIs-Challenge-Work-Day-Scheduler/",
    },
    {
      title: "Weather App",
      subtitle: "Server-Side APIs",
      description:
        "weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.",
      image:Weatherimage,
      link: "https://seper56.github.io/Server-Side-APIs-Challenge-Weather-Dashboard/",
    },
    {
      title: "Jate",
      subtitle: "Progressive Web Applications",
      description:
        "The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline",
      image:jateimage,
      link: "https://github.com/seper56/Progressive-Web-Applications-PWA-Challenge-Text-Editor",
    },
    {
      title: "Note Taker",
      subtitle: "Express.js",
      description:
        "This application will use an Express.js back end and will save and retrieve note data from a JSON file",
      image:NoteTakerimage,
      link: "https://github.com/seper56/Express.js-Challenge-Note-Taker",
    },
    { 
      title: "Earthify",
      subtitle: "MERN Stack Single-Page Application",
      description:
        "MongoDB can be used to store data about the environment. Express.js can be used to create a server that will handle requests from the client. React.js can be used to create a user interface for the calculator. Node.js can be used to run the server.",
      image:Earthimage,
      link: "https://the-manhattan-project.herokuapp.com/",
    },

  ];
  
  export const testimonials = [
    {
      id: 1,
      quote:
        "",
      image:comingsoonimage,
      name: "Your Company",
      company: "Coming soon",
    },
    {
      id: 2,
      quote:
        "",
      image:comingsoonimage,
      name: "Your Company",
      company: "Coming soon",
    },
  ];
  
  export const skills = [
    "JavaScript",
    "React",
    "Html/Css",
    "Node.js",
    "API's",
    "Express.js",
  ];