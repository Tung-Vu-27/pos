const router = require("express").Router();

let Sale = require("../models/Sale");

router.route("/").get((req, res) => {
    Sale.find()
        .then(sales => res.json(sales))
        .catch(err => res.status(400).json(`Error: ` + err));
});

router.route("/add").post((req, res) => {
    const salesID = req.body.salesID;
    const total = req.body.total;

    const newSale = Sale({ salesID, total });

    newSale
        .save()
        .then(() => res.json("Sale made"))
        .catch(err => res.status(400).json(`Error: ` + err));
});

module.exports = router;
