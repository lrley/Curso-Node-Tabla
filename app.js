
const {crearArchivo} = require('./helpers/multiplicar');
const colors=require('colors')

const argv= require('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    })
                    .option('h',{
                        alias: 'hasta',
                        type: 'number',
                        default: 12,
                        describe:'Este es el numero hasta donde quieres la tabla '
                      
                    })
                    .option('l',{
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: true,
                        default: false,
                        describe:'Muestra la tabla en consola'
                    })                  
                    .check( (argv, options)=>{
                        if( isNaN(argv.b) ){
                            throw 'La base tiene que ser un numero';
                        }
                        return true;
                    })
                    .argv;

console.clear(); 



crearArchivo(argv.b, argv.l,argv.h)
.then(nombreArchivo=>console.log(nombreArchivo.rainbow,'Creado'))
.catch(error=>console.log(error))













/*
for(let i=1; i<=12; i++){
   salida+=`${base} x ${i} = ${base*i}\n`;
}

console.log(salida)*/

/*fs.writeFile(`Table-${base}.txt`, salida, (error)=>{
    if(error) throw error;
    console.log(`Archivo Tabla-${base} creada`);
})*/

/*
fs.writeFileSync(`Tabla- ${base}.txt`,salida);
console.log(`Tabla-${base}.txt Creada`)*/