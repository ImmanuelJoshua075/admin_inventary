const sql = require('./connection')


var Purchase = function (purchase) {
  this.id = product.id;
  this.companyName = product.companyName;
  this.supplierName = product.supplierName;
  this.purchaseOrderNumber = product.purchaseOrderNumber;
  this.address = product.address;
  this.buyerName = product.buyerName;
  this.modeOfShipment = product.modeOfShipment;
  this.FOB = product.FOB;
  this.productName = product.productName;
  this.quantity = product.quantity
  this.unit = product.unit;
  this.total = product.total
  this.description = product.description
};


Purchase.get = (req, res) => {
  let query = `SELECT * FROM Purchase `;
//   let query = "SELECT productName,(SELECT categoryName FROM category WHERE category.id = product.category) AS category,(SELECT brandName FROM brand WHERE brand.id = product.brand) AS brand,uniqueid,sku,description,status,productImage,barCode FROM product"
  sql.query(query, (err, result) => {
    if (err) {
      res.send(err);
      console.log(err);
    }
    else {
      console.log(result);
      res.send(result)
    }
  });

};


// add the Product

Purchase.create = (data, result) => {

 
  // let query = `insert into product (productName,category,brand,uniqueid,sku,description,status,productImage,barCode) values ('${data.productName},'${data.category}','${data.brand}','${data.uniqueid}','${data.sku}','${data.description}','${data.status}','${data.productImage}','${barCode}')`;
  sql.query("INSERT INTO Purchase SET ?",data, (err, res) => {   // 
    if (err) {
      console.log("error: ", err);
      console.log(query);
      result(err, null);
      return;
    }

    console.log("create the new user: ", { id: res.insertId, ...data });
    result(null, { id: res.insertId, ...data });
  });
}


Purchase.update = (id, data, result) => {
  sql.query(
    `UPDATE Purchase SET companyName = '${data.companyName}', supplierName = '${data.supplierName}',purchaseOrderNumber='${data.purchaseOrderNumber}',address='${data.address}',buyerName = '${data.buyerName}',modeOfShipment='${data.modeOfShipment}',FOB='${data.FOB}',productName='${data.productName}',quantity='${data.quantity}', unit = '${data.unit}', total ='${data.total}', description ='${data.description}' WHERE id = ?`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found User with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated data: ", { id: id, ...data });
      result(null, { id: id, ...data });
    }
  );
};

// delete the Product

Purchase.remove = (id, result) => {
  sql.query("DELETE FROM Purchase WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("delete product with id: ", id);
    result(null, res);
  });
};


Purchase.getbyId = (id, res) => {

  sql.query(`select * from product where id='${id}'`, (err, data) => {
    if (err) {
      console.log(err);
      res.send(err)
    }
    console.log(data);
    res.send(data)
  });
}

module.exports = Purchase;