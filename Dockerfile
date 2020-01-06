FROM node:10

# copy project files and folders to the current working directory (i.e. 'app' folder) 
COPY  --chown=daemon . /app   

WORKDIR /app

ARG PORT 
ENV PORT=$PORT 

RUN npm install -g @angular/cli
RUN npm install --save-dev @angular-devkit/build-angular

EXPOSE ${PORT}

CMD ng serve --host 0.0.0.0 --port ${PORT} --disableHostCheck true
