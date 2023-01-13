
module.exports = app => {
    const Purchase = require("../controller/purchase")

    app.get('/api/purchase', Purchase.getall);    // get all the fields

    app.get('/api/purchase/', Purchase.getbyId);   // get purchase by id

    app.post('/api/purchase', Purchase.create);    // add the Purchase

    app.patch('/api/purchase/', Purchase.update);  // update by id

    app.delete('/api/purchase/', Purchase.delete);  // delete Purchase by id
}
