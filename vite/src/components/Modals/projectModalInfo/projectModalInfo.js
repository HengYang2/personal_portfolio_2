import React from 'react'

export default function ProjectModalInfo(passedInProject) {

  switch (passedInProject) {
    case 'PROJECT1':
      return ({
        name: 'Know Your Hours',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid dolore reprehenderit incidunt nihil quod libero modi minima fuga eum neque illum laboriosam culpa ipsam, odit soluta! At dolore labore ad!',
        link: 'Website is currently down :( Sorry for the inconvience!',
        techStack: 'Tech Stack: Javascript, React, Redux, Sagas, PostgreSQL, NodeJS, GitHub, Express, Heroku',
        imgPATH: './planner.jpg',
      });
    case 'PROJECT2':
      return ({
        name: 'To Be Determined',
        description: 'Thanks for checking out my website! Hopefully I will have some more projects to share with you in the near future!',
        link: 'placeholderURL/in/heng-yang/cool-stuff/in/the/future/',
        techStack: 'Tech Stack: Javascript, React, Redux, Sagas, PostgreSQL, NodeJS, GitHub, Express, Heroku',
        imgPATH: './rainForest2.avif',
      });
    case 'PROJECT3':
      return ({
        name: 'To Be Determined',
        description: 'Thanks for checking out my website! Hopefully I will have some more projects to share with you in the near future!',
        link: 'placeholderURL/in/heng-yang/cool-stuff/in/the/future/',
        techStack: 'Tech Stack: Javascript, React, Redux, Sagas, PostgreSQL, NodeJS, GitHub, Express, Heroku',
        imgPATH: './desert.avif',
      });
    case 'PROJECT4':
      return ({
        name: 'To Be Determined',
        description: 'Thanks for checking out my website! Hopefully I will have some more projects to share with you in the near future!',
        link: 'placeholderURL/in/heng-yang/cool-stuff/in/the/future/',
        techStack: 'Tech Stack: Javascript, React, Redux, Sagas, PostgreSQL, NodeJS, GitHub, Express, Heroku',
        imgPATH: './snowymountains.avif',
      });
    case 'PROJECT5':
      return ({
        name: 'To Be Determined',
        description: 'Thanks for checking out my website! Hopefully I will have some more projects to share with you in the near future!',
        link: 'placeholderURL/in/heng-yang/cool-stuff/in/the/future/',
        techStack: 'Tech Stack: Javascript, React, Redux, Sagas, PostgreSQL, NodeJS, GitHub, Express, Heroku',
        imgPATH: './clearwaterfall.avif',
      });
    default:
      return null
  }
}