package com.vu.pos.repositories;

import com.vu.pos.model.Sales;

import org.springframework.data.repository.CrudRepository;

public interface SalesRepository extends CrudRepository<Sales, Long> {

}