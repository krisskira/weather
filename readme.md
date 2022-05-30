# Enviroment Vars.
- Copy the ´.env.template´ in the same directory and rename it like ´.env´ and fill with correspondly api values.

# Running Project
After install dependences in each folder, you must to run the script depend on each environment.

## Development Mode
- docker-compose -f docker-compose.yml up -d
- Backend: `cd backend && yarn run dev`
- Frontend `cd weather && yarn run dev`

## Production Mode
- docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
