"use strict";

require("dotenv").config();

//bring in package and module
const { Sequelize, DataTypes } = require("sequelize");
const customer = require("./customer");
const Collection = require("./collection");

const DATABASE_URL = process.env.NODE_ENV === "test" ? "sqlite::memory" : process.env.DATABASE_URL;
const sequelizeDataBase = new Sequelize(DATABASE_URL);
const customerModel = customer(sequelizeDataBase, DataTypes);

module.exports = {  
    sequelizeDataBase, 
    customerCollection : new Collection(customerModel)
};