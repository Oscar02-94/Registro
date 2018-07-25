const express = require('express');
const morgan = require('morgan');
 const cors = require('cors');
const app = express();

const  { mongoose } = require('./database.')
 
// seting,configuracion
app.set('port', process.env.PORT||3000);

//midelware
app.use(morgan('dev'));
//con esto le decimos como veremos los mensajes en consola
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200'}));

//rutes
app.use('/api/empleados',require('./routers/personas.router'))

//starting the server 
app.listen(app.get('port'),() => {
    console.log('server on run ei de port', app.get('port'));
});
    
    