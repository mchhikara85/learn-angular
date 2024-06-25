FROM node:alpine
LABEL authors="mchhikara"
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli
RUN npm install
EXPOSE 8081
ENTRYPOINT ["ng", "serve", "--host", "0.0.0.0", "--port", "8081"]
