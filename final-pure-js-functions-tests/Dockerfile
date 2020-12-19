# FROM node:latest
FROM amazon/aws-lambda-nodejs:12
RUN mkdir -p /home/workspace
WORKDIR /home/workspace
COPY . .
CMD ["/home/workspace/index.handler"]
