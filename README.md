# Football API - Front end build with React
### How to run
From root of the project, in your terminal run:
 ```
 npm install
 ```
 and then
 ```
 npm start
 ```
 Go to the browser to http://localhost:3000.
 
 ### Technologies and tools used in the project
 - For React I used [create-react-app](https://github.com/facebook/create-react-app). This is an industry-standard and it offers a modern build setup with no configuration.
 - For styling, I decided to go with [Ant Design](https://ant.design/docs/react/introduce) as a UI Kit. It's a rich library, that helps to prototype apps really quick. For custom styling, I used SASS Modules. That allowed me to use the functionality of SASS with scoping and ease of use of modules.
 - For communication with WebSocket API, I've created a single service file, that opens one connection for entire up and expose multiple methods for fetching the data. That helps to keep the communication with API separated from the business logic.
 - For type checking, I decided to go with [Prop Types](https://reactjs.org/docs/typechecking-with-proptypes.html). They ensure that components are passing the right data needed for the component.
 - I've decided to build components as functions instead of classes. Thanks to introducing React Hooks, I can do everything that was possible in the class-based approach. And Hooks are slowly starting to become an industry standard.
 - For route handling, I've used [Reach Router](https://reach.tech/router) because of its ease of use and flexibility.