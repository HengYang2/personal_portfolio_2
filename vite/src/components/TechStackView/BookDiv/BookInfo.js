export default function BookInfo(passedInBook) {

    switch (passedInBook) {
      case 'PROJECT1':
        return ({
          GBV: blueBook, //GBV stands for global book variable
          question: 'sada' //What should be sent into the setSelectedQuestion function.
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