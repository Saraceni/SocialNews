# Social News - Angular 2 and Node Fullstack Project

Social News is a portal of content from different sources like:

* [Reddit](http://reddit.com/)
* [Twitter](http://twitter.com/)
* [Imgur](http://imgur.com/)

The project has a client written in Angular 2 responsible for requesting content from the server and 
displaying it to the user. The client was written in Node.js using typescript and receives the query 
from the client, gather the information from the APIs of all the services, map the information received 
and send it back to the client.

The main focus was creating an entire application (Front and Back End) using typescript.

There are is a Gulp script for automating the compilation and deployment of the node server.

## Getting Started

As the project depends on the integration with third party APIs you are required to have at least 
a [Twitter Consumer Key (API Key) and Secret](https://dev.twitter.com/oauth/overview/application-owner-access-tokens) and an [Imgur Client Key](https://apidocs.imgur.com/).

The [Reddit Client Key & Secret](https://github.com/reddit/reddit/wiki/OAuth2) is optional. It is not required for the search query but it was added for 
future development ( integration with features who depend on access token ).

In the /NodeServer/config.ts file you have to include all the Keys and Secrets ( all strings ) for the APIs.

### Prerequisites

The project requires the server to be running before the client can make requests to the API.

It also requires the installation of: 

* [Gulp](http://gulpjs.com/) for compiling and building automation
* [Node](https://nodejs.org/) for the backend
* [Angular2](https://angular.io/) for the frontend
* [Angular CLI](https://github.com/angular/angular-cli) for the frontend
* [Typescript](https://www.typescriptlang.org/) for both Back and Front End

### Installing

In order to support development of client and server in the same machine, CORS was enabled so the user 
can run the client on the default localhost:4200 endpoint and the server on the default localhost:3000 endpoint.

-- Server

In order to compile, build and deploy the server you need to go to ./NodeServer/ folder.
The first thing to do after downloading the project is installing all the packages. Once inside the 
./NodeServer/ folder you can run the command:


```
npm install
```

This will install all the packages needed.

As the program was written in Typescript it is necessary to compile it before running. A Gulp script defined 
in the file ./NodeServer/gulpfile.ts has two tasks: Clean and Build. It is also defined a default task which 
will call Clean and then Build. The clean task deletes all files and folders inside the ./NodeServer/dist folder.
This folder is where de compiled .ts filed ( turned into .js files after compilation ) will be. The compilation 
is done in the Build task.

In order to compile and build the project all you need to do is to run ( inside the ./NodeServer/ folder ):

```
gulp
```

After performing the above steps you can deploy the server with the command ( inside the ./NodeServer/ folder ):

```
npm start
```

If everything works fine you will receive logs of the port the server is listening and the twitter token received.

-- Client

In order to install all the dependencies you need to go to the folder ./client/ and run the command:

```
npm install
```

If you are in development mode you can compile and run the client in your local machine using the [Angular CLI](https://github.com/angular/angular-cli) by going to the folder ./client/ and running the command:

```
ng serve
```

This will compile, build and serve your application on the endpoint localhost:4200/

If you want to serve the application from the Node.js server you need first to build your application 
issuing the command ( inside the folder ./client/):

```
ng build
```

This will generate the required files in the folder ./client/dist and now you can get you Angular 2 web page 
from you Node server by accessing the server endpoint without any parameters. If you are running in your local 
machine using the defaul configuration you just have to issue a GET on the localhost:3000/ and it will serve 
your web page.

## Authors

* **Rafael Saraceni**  
* [Linkedin](https://www.linkedin.com/in/rafaelsaraceni/)
* [GitHub](https://github.com/Saraceni)
* [Youtube](https://www.youtube.com/channel/UCHAcbRZJxLzlP5GiMj_jM1g)
* [Twitter](https://twitter.com/saraceni_br)

