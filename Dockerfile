FROM node:17-alpine3.15
WORKDIR /app
COPY package.json .
RUN npm install --force
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]