<h1 align="center">DevOps project</h1>
<p align="center">
  Simple http-server with user API
</p>

—————————————————————————
##<h2> Features</h2>
* Start http-server
* Create/Delete an user
* Get an user information
* Unit tests
* Travis CI deployment
* Heroku deployment
* Docker deployment
* Minikube & Kubernetes
* Itsio (Work still in progress)

### Bonus features
* Connecting to mongodb database

—————————————————————————
##<h2> To Install the project</h2>

git clone « url of the GitHub project »
npm install

—————————————————————————
##<h2> Usage</h2>

npm start


### Using Postman application to test the routes

1. [POST] Create an user:

http://localhost:8000/user/

List of Body Parameters:

{
  username: 'sergkudinov',
  firstname: 'Sergei',
  lastname: 'Kudinov'
}


2. [GET] Get an user by his username

http://localhost:8000/user/:username

List of Params Parameters:

{
  username: 'sergkudinov'
}



3. [DELETE] Delete an user by his username

http://localhost:8000/user/:username

Params parameters:

{
  username: 'sergkudinov'
}

—————————————————————————
##<h2> Unit Tests</h2>
//There is a problem in this part,
//The routes works correctly with POSTMAN app but do not work with the command npm test

Go to the root of the project then run:

npm test

—————————————————————————
##<h2> Deployment</h2>

### Heroku
Deploy on Heroku -Synchronized with GitHub :

git add --all
git commit -m "commit message"
git push heroku master


### Docker

* To build a docker image:

docker build -t <docker-account-name>/<custom-image-name>

* To run a docker image:

docker run -p <PORT_1>:<PORT_2> <docker-account-name>/<custom-image-name>

* To run docker container with the option -v

docker run -p [PORT_1]:[PORT_2] -v
<path_to_dir_on_your_host>:<path_to_dir_inside_container> <your name>/<image name>

### Kubernetes

1. Create a deployment

kubectl create deployment <your_deployment_name> --image=<username>/<imagename>:<tag>


2. To access your app deployment, you have to expose it as a service:

kubectl expose deployment <your_deployment_name> --type=NodePort --port=<YOUR_PORT>


3. Explore docker containers and images, pods, deployments, services using:

- docker ps
- kubectl
- the Dashboard

4. Access to your app

Run :

minikube service <your_deployment_name> --url

Then, navigate with the given url

Deploy an app using Manifest yaml file: deployment.yml (Change deployment.yml if your deployment file has another name)

Run with kubectl apply [OPTIONS] deployment.yml

—————————————————————————
##<h2> Verification</h2>

* To verify if docker is installed on your VM:

vagrant ssh docker_server
docker --version

—————————————————————————
##<h2> Authors</h2>
-Joris Dufresne  
-Sid Ahmed Yousfi
