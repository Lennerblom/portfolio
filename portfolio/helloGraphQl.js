var { graphql, buildSchema } = require('graphql');
//import superagent from 'superagent';

const url = 'api.openweathermap.org/data/2.5/forecast?zip=98021' + process.env.weatherKey;

var schema = buildSchema(`
  type Query {
    hello: String
    goodbye: String
  }
`);

var root = { 
  hello: () => 'Hello world!',
  goodbye: () => 'good bye'

};

graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});
graphql(schema, '{ goodbye }', root).then((response) => {
  console.log(response);
  console.log(url);
});

// const weatherFetch = () => {
//   return dispatch => {
//     fetch(url)
//       .then(function(res) { 
//         return res.json();
//       })
//       .then((forcast) => {
//         console.log('fetch data: ', forcast);
//       });
//   };
// };
