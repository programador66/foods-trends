#!/bin/bash


# Building docker-compose
echo
echo "EXECUTE DOCKER-COMPOSE TO UP CONTAINERS"
echo "======================"
echo

sudo docker-compose up -d --build

echo
echo "[FINISHED]"
echo


