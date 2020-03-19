FROM node:12.14-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

ARG PORT
ARG baseURL

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY --chown=daemon . /usr/src/nuxt-app/
RUN npm install

RUN npm run build


ENV baseURL=${baseURL}

RUN echo $baseURL

ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=${PORT}

# expose port container
EXPOSE ${PORT}

USER daemon

# start the app
CMD [ "npm", "start" ]