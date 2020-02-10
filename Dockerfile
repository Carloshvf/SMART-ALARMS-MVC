FROM node:10

# install simple http server for serving static content
RUN npm install -g http-server

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY  --chown=daemon . /app  

WORKDIR /app/

ARG PORT
ENV PORT=$PORT

# install project dependencies
RUN npm install

# build app for production with minification
RUN npm run build

# Make port 80 available to the world outside this container
EXPOSE ${PORT}

<<<<<<< HEAD
USER daemon

CMD ng serve --host 0.0.0.0 --port ${PORT} --disableHostCheck true
=======
# Muda o usuário
USER daemon

ENTRYPOINT http-server dist -p ${PORT}
>>>>>>> vue
