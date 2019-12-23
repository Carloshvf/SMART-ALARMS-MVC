FROM node:10 
COPY . /app
WORKDIR /app
RUN npm install -g @angular/cli
#RUN npm install --save-dev @angular-devkit/build-angular 
#RUN ng update --all --force
EXPOSE 4200 
ENTRYPOINT ["ng", "serve", "--host", "0.0.0.0"]