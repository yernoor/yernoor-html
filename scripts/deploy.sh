#!/bin/bash
dist="/home/ec2-user/project"
aws s3 cp $dist/index.html s3://yernoor.halykmart.live/index.html

node app/app.js