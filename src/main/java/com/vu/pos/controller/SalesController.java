package com.vu.pos.controller;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.vu.pos.model.Sales;
import com.vu.pos.repositories.SalesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class SalesController {

    @Autowired
    SalesRepository repository;

    @GetMapping("/sales")
    public ResponseEntity<List<Sales>> getAllSales() {
        List<Sales> sales = new ArrayList<>();
        try {
            repository.findAll().forEach(sales::add);

            if (sales.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(sales, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/sales/{id}")
    public ResponseEntity<Sales> getSaleById(@PathVariable("id") long id) {
        Optional<Sales> salesData = repository.findById(id);

        if (salesData.isPresent()) {
            return new ResponseEntity<>(salesData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping(value = "/sales")
    public ResponseEntity<Sales> postSale(@RequestBody Sales sale) {
        try {
            Sales newSale = repository.save(new Sales(sale.getDate(), sale.getTotal()));
            return new ResponseEntity<>(newSale, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @DeleteMapping("/sales/{id}")
    public ResponseEntity<HttpStatus> deleteSale(@PathVariable("id") long id) {
        try {
            repository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    @DeleteMapping("/customers")
    public ResponseEntity<HttpStatus> deleteAllSales() {
        try {
            repository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }

    }

    @PutMapping("/sales/{id}")
    public ResponseEntity<Sales> updateSale(@PathVariable("id") long id, @RequestBody Sales sale) {
        Optional<Sales> salesData = repository.findById(id);

        if (salesData.isPresent()) {
            Sales _sale = salesData.get();
            _sale.setDate(sale.getDate());
            _sale.setTotal(sale.getTotal());
            return new ResponseEntity<>(repository.save(_sale), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}