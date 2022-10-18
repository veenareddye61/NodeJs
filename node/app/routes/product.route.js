const router = require("express").Router();
// const express = require("express");
// const app = express();
const Products = require("../models/product.model");

//new conv
const path = require('path');
// app.use(express.json()) 


  router.post("/", async (req, res) => {
    const name = req.body.name;
    const type = req.body.type;
    const cost = req.body.cost;
    const quantity = req.body.quantity;
    const newProducts = new Products({
        name,type,cost,quantity
    });
  

  try {
    const savedProducts = await newProducts.save();
    res.status(200).json(savedProducts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get products

router.get("/", async (req, res) => {
 
    Products.find().then(
        Products => {
            res.send(Products)
        }
    ).catch( err => {
        res.status(500).send({
            msg : "error occured while fetching "
        })
    })
    })

module.exports = router;

