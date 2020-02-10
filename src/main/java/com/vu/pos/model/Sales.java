package com.vu.pos.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class Sales {
    @Id
    public ObjectId _id;
    public String date;
    public double total;

    // Constructors
    public Sales() {
    }

    public Sales(ObjectId _id, String date, String itemList, double total) {
        this._id = _id;
        this.date = date;
        this.total = total;
    }

    public String get_id() {
        return _id.toHexString();
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

}
