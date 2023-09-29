#!/bin/bash
dist="/home/ec2-user/project"

if [ -d "$dist" ]; then
  rm -rf "$dist"/*
else
  echo "Directory $dist does not exist, skipping."
fi