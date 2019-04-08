var { graphql, buildSchema } = require('graphql');

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
});