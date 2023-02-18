"use strict";

const express = require("express");
const { customerCollection } = require("../models/");

const router = express.Router();

// get specific data by id
router.get("/customer/:id", async (req, res, next) => {
    const id = req.params.id;
    try {
        const customer = await customerCollection.read(id);
        res.status(200).send(customer);
    } catch (e) {
        next(e);
    };
});
// bug: need to consider if id is not exist in data

//Get All Records
router.get("/customer", async (req, res, next) => {
    const customers = await customerCollection.read();
    res.status(200).send(customers);

});


// create data
router.post("/customer", async (req, res, next) => {
    try {
        const newCustomer = await customerCollection.create(req.body);
        console.log(newCustomer);
        res.status(200).send(newCustomer);
    } catch (e) {
        next(e);
    }
});

//update
router.put("/customer/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
        const updateCustomer = await customerCollection.update(req.body, id)
        console.log(updateCustomer);
        res.status(200).send(updateCustomer);
    } catch (e) {
        next(console.log(e));
    };
});


//delete
router.delete("/customer/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
        const deleteCustomer = await customerCollection.delete({id});
        res.status(200).send('data deleted');
    } catch {
        next(e);
    };
});

module.exports = router;