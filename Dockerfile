ARG IMG=nexus.petrobras.com.br:5000/nginx:1.15.9-alpine
FROM ${IMG}
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html
ARG PORT=3100
ARG baseURL
ENV PORT=${PORT}
ENV baseURL=${baseURL}
COPY . /app
EXPOSE ${PORT}
CMD ["nginx", "-g", "daemon off;"]
