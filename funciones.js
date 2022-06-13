

try {
    console.log('Todo bien');
    noExiste;
    console.log('Esto no se va a leer por el error');
} catch (error) {
    console.log('Hubo un error');
    console.log(error);
} finally {
    console.log('Esto siempre se ejecuta');
}


try {
    let numero = "false";

    if (isNaN(numero)) {
        throw new Error('No es un número');
    }

    console.log(numero * numero);


} catch (error) {
    console.log(error);
}