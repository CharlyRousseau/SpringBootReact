FROM node:16.17.1-alpine3.15

WORKDIR /app

COPY package.json package-lock.json .

RUN npm install

COPY . .

ARG VITE_API_URL=http://backend:8080/
ENV VITE_API_URL=${VITE_API_URL}

RUN npm run build

EXPOSE "3000"

CMD ["npm", "run", "start"]
