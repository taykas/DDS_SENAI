
// // // INSERTS
// db.people.insertMany([
//     {
//         name: 'Thayna',
//         lastname: 'Schaeffer',
//         salary: 2
//     },
//     {
//         name: 'Fernanda',
//         lastname: 'Chata',
//         salary: 2
//     },
//     {
//         name: 'Joyce',
//         lastname: 'Vasco',
//         salary: 2
//     },
//     {
//         name: 'Kessy',
//         lastname: 'Franca',
//         salary: 2
//     },
//     {
//         name: 'Malu',
//         lastname: 'Silva',
//         salary: 2
//     },
//     {
//         name: 'Jhenie',
//         lastname: 'Lero',
//         salary: 2
//     },
//     {
//         name: 'Julia',
//         lastname: 'Silva',
//         salary: 2
//     },
//     {
//         name: 'Helo',
//         lastname: 'Fofa',
//         salary: 2
//     },
//     {
//         name: 'Ket',
//         lastname: 'Jomes',
//         salary: 2
//     },
//     {
//         name: 'Cesar',
//         lastname: 'Stati',
//         salary: 2
//     },
// ])


// // //FIND
//db.people.find({name: 'Thayna'})


// // // FIND COM CONTAINS
// db.people.find({name: /C/})

// // // FIND COM CONTAINS COMECO E FIM
// db.people.find({name: /^J.*a$/})



// db.people.find({ $and: [{ name: 'Jane'}, {lastname: 'Doe'}]})

use('db_senai')

// db.people.insertOne(
//     {
//         name: 'Fulano',
//         lastname: 'Tal e Tal',
//         salary: 124
//     }
// )

db.people.find({salary: { $gt: 123}})
