const router = require("express").Router();

let Sale = require("../models/Sale");

// @route   GET api/sales
// @desc    Get all sales
// @access  Public
router.get("/", (req, res) => {
  Sale.find()
    .sort({ dateCreated: -1 })
    .then(sales => res.json(sales));
});

// @route   POST api/sale
// @desc    Create a new sale
// @access  Private
router.post("/", (req, res) => {
  const newSale = new Sale({
    salesID: req.body.salesID,
    total: req.body.total
  });

  newSale
    .save()
    .then(() => res.json("Sale made"))
    .catch(err => res.status(400).json(`Error: ` + err));
});

// @route   DELETE api/sales/:id
// @desc    Delete a sale
// @access  Private
router.delete('/:id', (req, res) => {
    Sale.findById(req.params.id)
      .then(sale => sale.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }));
  });

module.exports = router;
