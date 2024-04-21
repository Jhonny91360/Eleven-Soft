

const LoginTag=()=>{
    const userData:{name:string}={name:""}
    const  storedData= window.localStorage.getItem('userData')
    if(storedData){
         const userParse = JSON.parse(storedData);
         userData.name= userParse.name
    }
    //const  user= localStorage.getItem('userData');
    console.log("Datos del local storage: ",storedData)
    return(
        <button className="bg-black opacity-50 rounded-3xl px-2 text-white text-[24px] font-bold w-[180px] ">
            <a href={`/log-register`} className="">{userData&& userData.name?userData.name:"Iniciar sesión"}</a>
        </button>
    )
}

export default LoginTag