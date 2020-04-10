ARG IMG=nexus.petrobras.com.br:5000/node:12.14-alpine
FROM ${IMG}

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

ARG PORT=3100
ARG baseURL

ENV baseURL=${baseURL}
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=${PORT}

COPY --chown=daemon . /usr/src/nuxt-app/

EXPOSE ${PORT}

USER daemon

CMD [ "npm", "start" ]