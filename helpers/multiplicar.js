const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base=5, listar=false, hasta=10)=>{

    try{
        let salida, consola = '';
       

        for (let i = 0; i< hasta+1; i++) {
            const result = base*i;
            salida+=`${base} x ${i} = ${result}\n`;
            consola+=`${base} ${'x'.green} ${i} ${'='.green} ${result}\n`;
        
        }

        if(listar){
            console.log('=========================='.green);
            console.log('     Tabla del:'.green, colors.blue(base) );
            console.log('=========================='.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `Tabla-${base}.txt`;
    }catch(err) {
        throw err;
    }

}



module.exports = {
    crearArchivo
}

