package com.vu.pos.repositories;

import com.vu.pos.model.Sales;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SalesRepository extends JpaRepository<Sales, Long> {

}