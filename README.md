# FLOOF

## Documentation
[Postman](https://documenter.getpostman.com/view/4451044/TzzBqGAJ)

## Deployed URL
[Floof API](https://floof-backend.herokuapp.com/api/v1)

## Tools Used
- Express
- Sequelize
- PostgreSQL
- Winston and Morgan
- Redis
- Babel for transpiling

## Local Setup
- Clone repo and name your folder using `git clone https://github.com/Chiazokam/floof.git [folder name]`
- cd into cloned folder using: `cd [folder name]`
- Set up redis locally. Check out [redis docs](https://redis.io/topics/quickstart) for how to set up locally.
- Set up postgres locally in order to get the database name, host and password. Check out their docs here on setting up [postgres](https://www.postgresql.org/download/)
- Create a `.env` file at the root of the folder and populate it taking queue from the `.env.example` file
- Run `npm install` to install all dependencies
- Run the following scripts to migrate and seed the database respectively:
    * `npm run run:db`
    * `npm run seed`

- Now, youre set to run the app.
  Run the app using `npm start:dev`
- You are good to go!