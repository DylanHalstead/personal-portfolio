FROM node:18-alpine AS frontend-build
WORKDIR /app/client
COPY ./client/package.json .
RUN npm install
COPY ./client/ .
RUN npm run build

FROM node:18-alpine AS backend-build
WORKDIR /app/server
COPY ./server/package.json .
RUN npm install
COPY ./server/ .

FROM node:18-alpine

WORKDIR /app
COPY --from=frontend-build /app/client/dist ./client/dist
COPY --from=backend-build /app/server ./server

WORKDIR /app/server
EXPOSE 3000

ARG BACKEND_PORT
ARG DATABASE_URL
ENV BACKEND_PORT=$BACKEND_PORT
ENV DATABASE_URL=$DATABASE_URL

CMD ["node", "server.js"]
