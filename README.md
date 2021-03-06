# cj-app
Angularjs SPA

IMPORTANT NOTES:

    1. The backend endpoint host url is mentioned in the config module (config.js). The property name is "API_URL". 
    2. PLEASE USE THIS PROPERTY ("API_URL") WHEN YOU ARE TRYING TO CALL A BACKEND API. ALSO DON'T CHANGE THIS PROPERTY ELSE THE APP WILL NOT BUILD PROPERLY AND YOUR SUBMISSION WILL NOT BE SCORED. 
    3. PLEASE DON'T ADD ANY OTHER CONSTANT in config.js. They will get removed once the app is built. 
    4. Make sure you follow the steps mentioned under "PROJECT START STEPS" and ensure that the steps execute successfully. 
    5. Make sure you follow the steps mentioned under "DOCKER START STEPS" and ensure that the steps execute successfully. 


PROJECT START STEPS:

    Pre-requisites:
    1. Install http-server module (https://www.npmjs.com/package/http-server).
    2. Install node, npm, ruby (for gem modules), bower and grunt. (https://github.com/yeoman/generator-angular)

    Steps:
    1. To run this application, do the following:
        1.a. Go to the project root directory.
        1.b. Run the following commands in the terminal/command line to build the app:
            - npm install
            - gem install compass (if not working, then try "sudo gem install compass")
            - bower install --allow-root (if running via sudo else just enter "bower install")
            - grunt --force
        1.c. Run the following command(s) in the terminal/command line to run the app:    
            - http-server ./dist -p 4200 -a 0.0.0.0
    
    2. Go to http://localhost:4200 in your browser to view it.


DOCKER START STEPS:

    Pre-requisites:
    1. Docker is installed (http://console.codejudge.io/setup)

    Steps:
    1. Build the docker image:
        1.a. Go to the project root directory.
        1.b. Run the following command(s) in the terminal/command line:
            - docker build -t cj-app .

    2. Run the image in a container (Make sure port 4200 is available):        
        2.a. Run the following command(s) in the terminal/command line:
            - docker run -i -p4200:4200 cj-app        

    3. Go to http://localhost:4200 in your browser to view it.


DOCKER STOP STEPS:

    Steps:
    1. Run the following commands:
        - docker ps
    2. Copy the container id and run the below command:
        - docker stop <container_id> 
        - docker system prune

DOCKER LOGS:

    Steps:
    1. Run the following commans(s):
        - docker ps
    2. Copy the container id and run the below command:
        - docker logs <container_id>

DOCKER REMOVE CONTAINER:

    Steps:
    1. Run the following command(s):
        - docker ps
    2. Copy the container id and run the below command:
        - docker rm <container_id>
        - docker system prune

DOCKER REMOVE IMAGE:

    Steps:
    1. Run the following command(s):
        - docker ps
    2. Copy the image id and run the below command:
        - docker rmi <image_id>
        - docker system prune

