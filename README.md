# Northcoders House of Games API

## Summary of project

This project is a backend server for a boardgame review website. 
The below link takes you to a hosted version of the project, as well as providing a complete list of available api requests, what queries they take and what the returned value looks like.


### Hosted version

https://boargames-backend.herokuapp.com/api/

---

## Set-up 

If you wish you use this repo locally you will need to do the following steps;

---

- ### Cloning

Follow [this link](https://github.com/MattLBC/backend-project-heroku) to the github repo hosting the project.

In your terminal navigate to the directory you wish to store the repo in, then run the following command

```
git clone REPO_URL_HERE
```

For any issues or further instructions please check the github docs on [cloning a repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

---

- ### Dependencies 

To install all dependencies required for the app to run use the following command;

```
npm install
```

Your package.json should now contain the following:

```
  "dependencies": {
    "express": "^4.18.1",
    "husky": "^7.0.4",
    "jest": "^27.5.1",
    "jest-extended": "^2.0.0",
    "pg-format": "^1.0.4",
    "pg": "^8.7.3",
    "dotenv": "^16.0.0"
  }
```
If you are missing any packages, run the following for each package

```
npm install PACKAGE_NAME_HERE
```

For further info please view check the docs for each package.

---

- ### Seeding the local database

To set-up and seed your database run the following two commands in order

```
npm run setup-dbs
npm run seed
```

This should seed your database and populate it with the correct data

---

- ### Running tests

To run testing on the app, you will need to install both jest-sorted and supertest. 
To do this, run the following 

```
npm install -D jest-sorted 
npm install -D supertest
```

---

- ### Setting up .env files

To run this backend server locally you first need to configure your enviroment files. 

Please create the following two files;  
```
.env.development
.env.test
```
Inside these files add the following line;
```
PGDATABASE=DATABASE_NAME_HERE
```
If you are unsure of what to call them, check the /db/setup.sql for the correct name for each database.
Please ensure that the enviroment files are added to your .gitignore if they are not automatically.

---

**Minimum node and postgres versions required**
 
- Node - v17.6.0 
- PSQL - 12.9