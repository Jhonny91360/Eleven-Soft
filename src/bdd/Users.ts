export interface User{
    name: string
    correo: string
    password: string
    type: 'user' | 'admin'
}

const Users:User[]=[]

//Creamos el admin
Users.push(
    {
        name:"Admin",
        correo: "admin@gmail.com",
        password: "admin",
        type: "admin"
    }
)
//Creamos un usuario de prueba
Users.push(
    {
        name:"Poli",
        correo: "politecnico@gmail.com",
        password: "poli",
        type: "user"
    }
)

export const addUser=(user:User)=>{
    const userExists= Users.find( userbdd=> userbdd.correo===user.correo)
    if(userExists){
        alert("Este correo ya esta registrado")
        return
    }
    Users.push(user)
    console.log("Se agrego el usuario: ",user)
    console.log("Lista de usuarios: ",Users)
    alert("Registro exitoso, ya puede iniciar sesión")
}

export const logUser=(data:{correo:string,password:string}):{name:string,state:boolean}=>{
    const userExists= Users.find( userbdd=> {
        if(userbdd.correo===data.correo && userbdd.password===data.password){
            return true
        }
        else return false
    })
    if(userExists) {
        return{
            name: userExists.name,
            state: true
        }
    }else{
        return{
            name:"",
            state:false
        }
    }
   
}