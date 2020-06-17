# GraphQL Basic

## Install

```javascript
npm install
```

## Launch Project

```javascript
npm start
```

Open GraphiQL http://localhost:4000/graphql

## Query Example

### Get Employee by Id
```json
{employee (id: "5ca4b52829b16c066d43e405"){
  id,
  firstName,
  lastName,
  age,
  jobTitle
}}
```


### Get All Employees
```json
{allEmployees {
  id,
  firstName,
  lastName
}}
```
