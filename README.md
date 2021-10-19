# smart-alarms

> My fabulous Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## Docker
npm install
npm run build
docker image prune -f
docker container stop smartalarms-frontend-vue-cn
docker container rm smartalarms-frontend-vue-cn
docker build --no-cache --build-arg ENV=dev --build-arg PORT=3100  --build-arg IMG=nginx:1.15.9-alpine  --build-arg PORT=3100  --build-arg baseURL=https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000  -t smartalarms-frontend-vue-ecr .
docker run -d -p 3100:3100 --name smartalarms-frontend-vue-cn smartalarms-frontend-vue-ecr

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
