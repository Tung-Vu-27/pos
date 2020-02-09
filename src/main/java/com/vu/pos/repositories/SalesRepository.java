package com.vu.pos.repositories;

import com.vu.pos.model.Sales;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

// This interface will extend the MongoRepository class,
// which already contains generic methods like save
// (for creating/updating documents) and delete (for removing documents)
public interface SalesRepository extends MongoRepository<Sales, String> {
    Sales findBy_id(ObjectId _id);
}