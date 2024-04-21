import React from "react"
import { useState } from "react"
import { addUser, logUser, type User } from "../bdd/Users"

const FormLogRegister=()=>{

    const [formDefault,setFormdefault] = useState(true)

    const submitLogin=(e:any)=>{
        e.preventDefault();
        const email = e.target.correo.value;
        const password = e.target.contra.value;
        console.log("Inicio de sesión - Correo:", email, "Contraseña:", password);

        const responseLogin= logUser({correo:email,password})

        if(responseLogin.state){
            alert("Login exitoso")
            const userData = { name:responseLogin.name };
            localStorage.setItem('userData', JSON.stringify(userData));
            window.location.href = "/";
        }else{
            alert("correo y/o contraseña inválidos")
        }
    }

    const submitRegister=(e:any)=>{
        e.preventDefault();
        const name = e.target.nombre.value;
        const email = e.target.correo.value;
        const password = e.target.contra.value;
        const acceptTerms = e.target.aceptar.checked;
        if(!acceptTerms){
            alert("Debe aceptar terminos y condiciones")
            return
        }
        const newUser:User={
            correo:email,
            name:name,
            password:password,
            type:'user'
        }
        addUser(newUser)
        console.log("Registro - Nombre:", name, "Correo:", email, "Contraseña:", password, "Acepta términos y condiciones:", acceptTerms);
    }

    console.log({formDefault})
    return(
        <section className="bg-[#75B4A8] w-[25%]  min-w-[300px]  -wmd:min-w-[400px] max-h-[450px] bg-opacity-75 flex flex-col p-4 rounded-2xl">

            <div className="flex justify-center gap-4">
                <button className="bg-white text-[#75B4A8] font-extrabold p-4 rounded-xl cursor-pointer"
                        onClick={()=>setFormdefault(true)}
                        > 
                    Iniciar sesión
                    </button>
                <button className="bg-white text-[#75B4A8] font-extrabold p-4 rounded-xl cursor-pointer"
                        onClick={()=>setFormdefault(false)}
                        > 
                    Registrarse
                    </button>
            </div>

            {/* Formulario iniciar sesion*/}
            {formDefault&&<form action="" onSubmit={submitLogin} className="flex flex-col gap-2">
                <label htmlFor="correo" className="mt-8 text-white font-semibold"> Correo</label>
                <input type="text" name="correo" id="correo" />
                <label htmlFor="contra" className="mt-8 text-white font-semibold"> Contraseña</label>
                <input type="password" name="contra" id="contra" />
                <button 
                className="bg-white text-[#75B4A8] border-[1px] font-extrabold p-4 rounded-xl cursor-pointer mt-8 hover:bg-[#75B4A8] hover:text-white hover:border-white"
                type="submit">Ingresar</button>
            </form>}
            
            {/* Formulario registro */}
            {!formDefault&&<form action="" onSubmit={submitRegister} className="flex flex-col gap-2">
                <label htmlFor="nombre" className="text-white font-semibold"> Nombre</label>
                <input type="text" name="nombre" id="nombre" />
                <label htmlFor="correo" className="text-white font-semibold"> Correo</label>
                <input type="text" name="correo" id="correo" />
                <label htmlFor="contra" className="text-white font-semibold"> Contraseña</label>
                <input type="password" name="contra" id="contra" />
                <div className="flex gap-4">
                    <input type="checkbox" name="aceptar" id="aceptar" />
                    <label htmlFor="aceptar" className="text-white font-semibold">Acepto términos y condiciones</label>
                </div>
                <button 
                className="bg-white text-[#75B4A8] border-[1px] font-extrabold p-4 rounded-xl cursor-pointer mt-4 hover:bg-[#75B4A8] hover:text-white hover:border-white"
                type="submit">Registrarse</button>
            </form>}

        </section>
    )
}

export default FormLogRegister