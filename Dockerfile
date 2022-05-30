FROM node:14 as builder

ARG VITE_BACKEND_URL
ARG VITE_WEATHER_API
ARG VITE_GOOGLE_PLACES_API

COPY . /app
WORKDIR /app

RUN cd ./backend && npm install && npm run build
RUN mv ./backend/build ./app
RUN cp ./backend/package.json ./app

RUN cd ./weather && npm install && npm run build
RUN mv ./weather/dist ./app/public

# 
#  RUNNER APP
#

FROM node:14-alpine as runner

ARG VITE_WEATHER_API
ENV WEATHER_API=${VITE_WEATHER_API}
ENV DATABASE_URL=${DATABASE_URL}
ENV PORT=80

COPY --from=builder /app/app /app
WORKDIR /app
RUN npm install --production

EXPOSE ${PORT}
CMD ["npm", "start"]