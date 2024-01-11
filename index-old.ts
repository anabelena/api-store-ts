const nombre: string = "Belen";
const edad: number = 20;
const esMayor: boolean = true;

if (esMayor) {
  console.log(`Hola me llamo ${nombre} y tengo ${edad}`);
} else {
  console.log("Te falta crecer ...");
}

// interface
// por convencion van en MAYUS
interface User {
  name: string;
  lastname: string;
  email: string;
  password: string;
  address?: string;
}

const user: User = {
  name: "Belen",
  lastname: "Arista",
  email: "ana@gmail.com",
  password: "123456",
};


const users : User[] = [];

function insertUser(user:User){
 users.push(user)
}

function getNameFromUser(user:User){
    return `${user.name} ${user.lastname}`;
}

//type 

type Status = 'created' | 'on-hold' | 'in-progress' | 'done'

interface Task{
    title:string;
    date:Date;
    status:Status;
}

const task:Task = {
    title:'pagar cuentas',
    date: new Date(),
    status:'done'
}