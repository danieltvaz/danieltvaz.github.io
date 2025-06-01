#!/bin/bash

IMAGE_NAME="mywebsite:dev"
CONTAINER_NAME="mywebsite"
PORT=3000
PROJECT_DIR=$(pwd)

docker build -t $IMAGE_NAME .

docker rm -f $CONTAINER_NAME 2>/dev/null || true

docker run -it --rm \
  --name $CONTAINER_NAME \
  -v "$PROJECT_DIR:/app" \
  -w /app \
  -p $PORT:$PORT \
  -e CHOKIDAR_USEPOLLING=true \
  -e BROWSER=none \
  $IMAGE_NAME \
  npm start
