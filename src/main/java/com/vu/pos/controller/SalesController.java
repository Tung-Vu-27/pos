package com.vu.pos.controller;


import com.vu.pos.model.Sales;
import com.vu.pos.repositories.SalesRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/sales")
public class SalesController {
    @Autowired
    private SalesRepository repository;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Sales> getAllSales() {
        return repository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Sales getSaleById(@PathVariable("id") ObjectId id) {
        return repository.findBy_id(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public void modifySaleById(@PathVariable("id") ObjectId id, @Valid @RequestBody Sales sale) {
        sale.set_id(id);
        repository.save(sale);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Sales createSale(@Valid @RequestBody Sales sale) {
        sale.set_id(ObjectId.get());
        repository.save(sale);
        return sale;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteSale(@PathVariable ObjectId id) {
        repository.delete(repository.findBy_id(id));
    }
}