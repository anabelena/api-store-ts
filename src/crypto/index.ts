/*Importa la función createHmac del módulo crypto 
proporcionado por Node.js. 
Este módulo se utiliza para realizar operaciones criptográficas, 
y en este caso, se utiliza para crear un objeto HMAC (Hash-based Message Authentication Code).*/ 

import { createHmac } from "node:crypto"; 

/** createHmac("sha256", "secret"): 
 * Crea un objeto HMAC utilizando el algoritmo SHA-256 y la clave secreta proporcionada.
.update(text): Actualiza el objeto HMAC con el contenido del parámetro text.
.digest("hex"): Devuelve el resultado del hash en formato hexadecimal.*/

export function hash(text:string):string{
    return createHmac("sha256","secret").update(text).digest("hex")
}

