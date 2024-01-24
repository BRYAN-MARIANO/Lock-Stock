

const AccountsForm =() => {
    return (
        <>
        
            <section className="form-password w-screen h-screen flex justify-center items-center flex-col gap-16 bg-white">
            <div className="flex gap-8 justify-center items-center">
                <img src="/src/images/account-icon.png" alt="account-icon" className="h-10"/>
                <h1 className="
            text-primary font-medium text-5xl flex-1">Cuentas</h1>
            </div>    

            <form action="" className="flex flex-col w-2/4 gap-3 mt-6">
                <div className="flex items-center border border-black rounded bg-white">
                    <input type="text" className="flex-1 p-2 bg-white" />
                    <div className="p-2">
                    <img src="/src/images/search-icon.png" alt="search-icon" />
                    </div>
                </div>
            </form>

        <section className="flex flex-col w-full items-center gap-4">

            <div className="flex gap-4 border bg-white w-4/5">
                <div className="w-16 h-full">

                </div>
        
                <div className="p-4 text-black text-sm font-bold w-40">
                    Aplicaciones
                </div>
                <div className="p-4 text-black text-sm font-bold w-40">
                    Correo Electrónico
                </div>
                <div className="p-4 text-black text-sm font-bold w-40">
                    Categoría
                </div>
                <div className="p-4 text-black text-sm font-bold w-40">
                Contraseña
                </div>
                <div className="p-4 text-black text-sm font-bold w-40">
                Ver
                </div>
                <div className="p-4 text-black text-sm font-bold w-40">
                Editar / Eliminar
                </div>
            </div>

            <div className="flex gap-4 border bg-white w-4/5">
                <div className="p-4 text-black text-sm font-bold w-16">
                    <img src="/src/images/linkedin-icon.png" alt="LinkedIn icon" className="h-8" />
                </div>
                <div className="p-4 text-black text-sm font-bold w-40">
                    LinkedIn
                </div>
                <div className="p-4 text-black text-sm font-bold w-40">
                    prueba@gmail.com
                </div>
                <div className="p-4 text-black text-sm font-bold w-40">
                    Redes Sociales
                </div>
                <div className="p-4 text-black text-sm font-bold w-40">
                LJu34gT@#
                </div>
                <div className="p-4 text-black text-sm font-bold w-40">
                <img src="/src/images/open-eye-icon.png" alt="open-eye-icon" className="h-5" />
                </div>
                <div className="flex p-4 text-black text-sm font-bold w-40 gap-4">
                    <img src="/src/images/pen-icon.png" alt="pen-icon-icon" className="h-5 "/>
                    <img src="/src/images/trash-icon.png" alt="trash-icon" className="h-5"/>
                </div>
            </div>

        </section>

            <div className="flex items-center w-2/4 justify-start gap-4">
                <img src="/src/images/plus-icon.png" alt="plus-icon" />
                <small className="
            text-primary font-small text-xl">Añadir nueva aplicación</small>
            </div>

        </section>
    </>
    )
}

export default AccountsForm;