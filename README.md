This is just a very basic example of how to set up a node js api with mongo on a docker image

To run this please execute 
    docker-compose build
    docker-compose up

mongoDB logs are being supressed since the container is pretty verbose and the following option is no longer compatible with docker
    logging:
        driver: none
    