#!/bin/bash
dist="/home/ec2-user/project"
aws s3 cp $dist/index.html s3://yernoor.halykmart.live/index.html

cd $dist

docker stop appie || true
docker rm appie || true

docker rmi appie || true

docker build -t appie .

docker run -d -p 8080:8080 --name appie