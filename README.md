ES6 Node API Starter
==================================



Getting Started
---------------

```sh
# clone it
git clone git@github.com:mkamranhamid/es6-node-api-starter.git
cd es6-node-api-starter

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Sequelize 
 node_modules/.bin/sequelize init

# Environment Setup
- create a '.env' file
- add all the variables in it you can look into 'example.env'  

# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start

# To debug(in VS Code) follow the steps
- npm run compile # this guy will watch for the changes you make during debugging process
- start debugging (in vs code)  
```
Docker Support
------
```sh
cd es6-node-api-starter

# Build your docker
docker build -t es6/api-service .
#            ^      ^           ^
#          tag  tag name      Dockerfile location

# run your docker
docker run -p 8080:8080 es6/api-service
#                 ^            ^
#          bind the port    container tag
#          to your host
#          machine port   

```

License
-------

MIT
ES6 Node API Starter
==================================



Getting Started
---------------

```sh
# clone it
git clone git@github.com:mkamranhamid/es6-node-api-starter.git
cd es6-node-api-starter

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Sequelize 
 node_modules/.bin/sequelize init

# Environment Setup
- create a '.env' file
- add all the variables in it you can look into 'example.env'  

# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start

# To debug(in VS Code) follow the steps
- npm run compile # this guy will watch for the changes you make during debugging process
- start debugging (in vs code)  
```
Docker Support
------
```sh
cd es6-node-api-starter

# Build your docker
docker build -t es6/api-service .
#            ^      ^           ^
#          tag  tag name      Dockerfile location

# run your docker
docker run -p 8080:8080 es6/api-service
#                 ^            ^
#          bind the port    container tag
#          to your host
#          machine port   

```

License
-------

MIT
