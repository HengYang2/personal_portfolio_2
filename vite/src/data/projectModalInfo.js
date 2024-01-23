export default function ProjectModalInfo(passedInProject) {

  switch (passedInProject) {
    case 'PROJECT0':
      return ({
        orderNumber: 0,
        name: 'Know Your Hours',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid dolore reprehenderit incidunt nihil quod libero modi minima fuga eum neque illum laboriosam culpa ipsam, odit soluta! At dolore labore ad!',
        link: 'Website is currently down :( Sorry for the inconvience!',
        techStack: 'Tech Stack: Javascript, React, Redux, Sagas, PostgreSQL, NodeJS, GitHub, Express, Heroku',
        imgPATH: './planner.jpg',
      });
    case 'PROJECT1':
      return ({
        orderNumber: 1,
        name: 'To Be Determined',
        description: 'Thanks for checking out my website! Hopefully I will have some more projects to share with you in the near future!',
        link: 'placeholderURL/in/heng-yang/cool-stuff/in/the/future/',
        techStack: 'Tech Stack: Javascript, React, Redux, Sagas, PostgreSQL, NodeJS, GitHub, Express, Heroku',
        imgPATH: './rainForest2.avif',
      });
    case 'PROJECT2':
      return ({
        orderNumber: 2,
        name: 'To Be Determined',
        description: 'Thanks for checking out my website! Hopefully I will have some more projects to share with you in the near future!',
        link: 'placeholderURL/in/heng-yang/cool-stuff/in/the/future/',
        techStack: 'Tech Stack: Javascript, React, Redux, Sagas, PostgreSQL, NodeJS, GitHub, Express, Heroku',
        imgPATH: './desert.avif',
      });
    case 'PROJECT3':
      return ({
        orderNumber: 3,
        name: 'To Be Determined',
        description: 'Thanks for checking out my website! Hopefully I will have some more projects to share with you in the near future!',
        link: 'placeholderURL/in/heng-yang/cool-stuff/in/the/future/',
        techStack: 'Tech Stack: Javascript, React, Redux, Sagas, PostgreSQL, NodeJS, GitHub, Express, Heroku',
        imgPATH: './snowymountains.avif',
      });
    case 'PROJECT4':
      return ({
        orderNumber: 4,
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