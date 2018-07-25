 const mongoose = require('mongoose');

 const URI ='mongodb://localhost:27017/Registro';

 mongoose.connect(URI,{ useNewUrlParser: true })
    .then(db => console.log('base de datos conectada'))
    .catch(err =>  console.error('err'));


    module.exports = mongoose;
