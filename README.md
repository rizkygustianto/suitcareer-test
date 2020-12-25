# suitcareer-test
Test for Suitcareer

# Installation
- Make sure NodeJS is installed in your system
- Make sure PostgreSQL is installed in your system
- Make sure Sequelize CLI is installed in your system
- Navigate to the root folder of the project
- Type this command on your terminal to install all the project dependencies
```
npm install
```
- Wait until all dependecies have finished installing
- Before you can use the server, you need to connect the server to your database
- The server assumes that the credential to connect to your PostgreSQL database is still the default option. Feel free to change the DB connection parameters at **/config/config.json**
- Run this command on your terminal to create the 'suitcareer-gorry' database on your PostgreSQL machine.
```
sequelize db:create
```
- After that, run this command to create all the tables in the database
```
sequelize db:migrate
```
- And finally, run this command to insert seed data to the database
```
sequelize db:seed:all
```
- The server is now ready to use
