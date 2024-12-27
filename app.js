const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Empresa', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const clienteSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    email: String,
});

//const Cliente = mongoose.model('Cliente', clienteSchema);
//
//const nuevoCliente = new Cliente({
//    nombre: 'Juan',
//    edad: 30,
//    email: 'juan@example.com',
//});

//const result = nuevoCliente
//    .save()
//    .then(() => {
//        console.log('cliente guardado exisotosamente');
//    })
//    .catch((err) => {
//        console.log(err);
//    });


Cliente.find({})
    .then((clientes) => {
        console.log('clientes encintrados:', clientes);
    })
    .catch((err) => {
        console.error('error al recuperar los cleintes', error);
    });