
export const numeroDeAes = (cadena, letra="a", bandera=true) => {
    let cont = 0;
    cadena.split("").forEach(char => {
        if (char === letra && bandera) cont ++; 
        else if (char === letra.toUpperCase()) cont++; 
            cont += 1;
        });
        return cont;
    }
