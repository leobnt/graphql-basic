var express = require('express');
var express_graphql = require('express-graphql');
var {
    buildSchema
} = require('graphql');

// GraphQL schema
var schema = buildSchema(`
    type Query {
        employee(id: String!): Employee
        employees(jobTitle: String): [Employee]
        allEmployees: [Employee]
    },
    type Employee {
        id: String
        firstName: String
        lastName: String
        age: Int
        company: String
        jobTitle: String
    }
`);
var employeesData = [
    {
      "id": "5ca4b528188b8ca9812cb15f",
      "firstName": "Anastasia",
      "lastName": "Mitchell",
      "age": 25,
      "company": "GUSHKOOL",
      "jobTitle": "Director"
    },
    {
      "id": "5ca4b52829b16c066d43e405",
      "firstName": "Leach",
      "lastName": "Lyons",
      "age": 34,
      "company": "CINESANCT",
      "jobTitle": "Sales"
    },
    {
      "id": "5ca4b5281c91089bbf679cc0",
      "firstName": "Sheppard",
      "lastName": "Grimes",
      "age": 35,
      "company": "ISOSURE",
      "jobTitle": "Cooker"
    },
    {
      "id": "5ca4b528bf957c2cb693dc08",
      "firstName": "Delacruz",
      "lastName": "Mcgee",
      "age": 23,
      "company": "NIQUENT",
      "jobTitle": "Consultant"
    },
    {
      "id": "5ca4b528783dd3b17127f654",
      "firstName": "Shirley",
      "lastName": "Carey",
      "age": 24,
      "company": "ZEDALIS",
      "jobTitle": "Consultant"
    },
    {
      "id": "5ca4b52874385295c4b69e5a",
      "firstName": "Claudine",
      "lastName": "Stevens",
      "age": 23,
      "company": "PLASTO",
      "jobTitle": "Consultant"
    },
    {
      "id": "5ca4b5283aa3b985a34cb7a5",
      "firstName": "Gonzales",
      "lastName": "Sweeney",
      "age": 28,
      "company": "ELEMANTRA",
      "jobTitle": "Engineer"
    },
    {
      "id": "5ca4b528dba88c65856247de",
      "firstName": "Ramsey",
      "lastName": "Norman",
      "age": 25,
      "company": "GLOBOIL",
      "jobTitle": "Engineer"
    },
    {
      "id": "5ca4b528d64e6e7d3e2a7520",
      "firstName": "Anna",
      "lastName": "Vincent",
      "age": 39,
      "company": "PHEAST",
      "jobTitle": "Engineer"
    },
    {
      "id": "5ca4b5289b7a4d82b79410d5",
      "firstName": "Little",
      "lastName": "Morton",
      "age": 38,
      "company": "ENTOGROK",
      "jobTitle": "Director"
    }
  ]
var getEmployee = function (args) {
    var id = args.id;
    return employeesData.filter(employee => {
        return employee.id == id;
    })[0];
}
var getEmployees = function (args) {
    if (args.jobTitle) {
        var jobTitle = args.jobTitle;
        return employeesData.filter(employee => employee.jobTitle === jobTitle);
    } else {
        return employeesData;
    }
}
var getAllEmployees = function (args) {
        return employeesData;
}
var root = {
    employee: getEmployee,
    employees: getEmployees,
    allEmployees: getAllEmployees,

};
// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));