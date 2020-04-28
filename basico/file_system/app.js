const fs = require('fs');

// fs.readFileSync('data.txt', 'utf-8', (error, data) => {
//     if (error) {
//         console.log(`Error ${error}`);
//     } else {
//         console.log(data)
//     }
// });

console.log('Iniciado...')

// let data = fs.readFileSync('data.txt', 'utf-8');
// console.log(data);



// fs.rename('data.txt', 'data_renombrado.txt', (error) => {
//     if (error) throw error;
//     console.log('¡Renombrado!');
// });

// fs.appendFile('data.txt', '\nGracias por suscribirte', (error) => {
//     if (error) console.log(`Error ${error}`);
// });

// fs.unlink('data2.txt', (error) => {
//     if (error) throw error;
//     console.log('Eliminado');
// });

// fs.createReadStream('data.txt').pipe(fs.createWriteStream('data3.txt'));

fs.readdir('./../../basico/file_system', (error, files) => {
    files.forEach(file => {
        console.log(file);
    })
});

// fs.readdirSync('./../../basico/file_system').forEach(file => {
// console.log(file);
// });


console.log('Finalizado...')