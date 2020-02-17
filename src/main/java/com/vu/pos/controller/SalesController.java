package com.vu.pos.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import com.vu.pos.exceptionHandlers.ResourceNotFoundException;
import com.vu.pos.model.Sales;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.vu.pos.repositories.SalesRepository;
import org.springframework.web.bind.annotation.*;

@RestController @CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class SalesController {
    @Autowired
    private SalesRepository salesRepository;

    @GetMapping("/sales")
    public List<Sales> getAllSales() {
        return salesRepository.findAll();
    }

    @GetMapping("/sales/{id}")
    public ResponseEntity<Sales> getSaleById(@PathVariable(value = "id") Long salesId)
            throws ResourceNotFoundException {
        Sales sale = salesRepository.findById(salesId)
                .orElseThrow(() -> new ResourceNotFoundException("Sale not found for this id :: " + salesId));
        return ResponseEntity.ok().body(sale);
    }

    @PostMapping("/sales")
    public Sales createSale(@Valid @RequestBody Sales sale) {
        return salesRepository.save(sale);
    }

    @PutMapping("/sales/{id}")
    public ResponseEntity<Sales> updateSale(@PathVariable(value = "id") Long salesId,
                                                   @Valid @RequestBody Sales saleDetails) throws ResourceNotFoundException {
        Sales sale = salesRepository.findById(salesId)
                .orElseThrow(() -> new ResourceNotFoundException("Sale not found for this id :: " + salesId));

        sale.setDate(saleDetails.getDate());
        sale.setTotal(saleDetails.getTotal());
        final Sales updatedSale = salesRepository.save(sale);
        return ResponseEntity.ok(updatedSale);
    }

    @DeleteMapping("/sales/{id}")
    public Map<String, Boolean> deleteSale(@PathVariable(value = "id") Long salesId)
            throws ResourceNotFoundException {
        Sales sale = salesRepository.findById(salesId)
                .orElseThrow(() -> new ResourceNotFoundException("Sale not found for this id :: " + salesId));

        salesRepository.delete(sale);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}