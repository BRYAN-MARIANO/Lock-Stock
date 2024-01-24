

const RecoverPasswordForm =() => {
    return (
        <>
        
        <section className="form-password w-screen h-screen flex justify-center items-center flex-col gap-16 bg-white">
            <div className="flex gap-8 justify-center items-center">
                <img src="/src/images/padlock-icon.png" alt="padlock-icon" className="h-10"/>
                <h1 className="
            text-primary font-medium text-5xl flex-1">Recuperar Contraseña Maestra</h1>
            </div>

        <form action="" className="flex flex-col w-2/4 gap-3">
            <label htmlFor="" className="flex flex-col text-black"><span>Pregunta de seguridad</span>
                <input type="text" className="border border-black rounded bg-white" />
            </label>
            <label htmlFor="" className="flex flex-col text-black"><span>Respuesta</span> 
                <input type="text" className="border border-black rounded bg-white"/>
            </label>

            <input className="bg-primary border border-black rounded p-3" type="submit" value="Confirmar" />
        </form>

        <div className="flex flex-col gap-16 items-center">
        <div className="flex gap-4 justify-center items-center w-full">
            <h1 className="text-primary space-y-10">#/lisay-maggi35</h1>
            <img src="/src/images/file-upload-icon.png" alt="file-upload-icon.png" />
        </div>

            <small className="text-black font-bold text-lg">¿Quieres establecer una nueva contraseña maestra?</small>

            <small className="text-primary font-bold text-lg">Establecer nueva contraseña maestra</small>
            </div>
        </section>
    </>
    )
}

export default RecoverPasswordForm;