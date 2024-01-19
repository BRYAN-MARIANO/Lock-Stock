

const RecoverPasswordForm =() => {
    return (
        <>
        
        <section className="form-password w-screen h-screen flex justify-center items-center flex-col gap-4 bg-white">
            <div className="flex justify-between items-center space-x-10 mb-6">
                <img src="/src/images/padlock-icon.png" alt="padlock-icon" className="h-10 align-middle"/>
                <h1 className="
            text-primary font-medium text-5xl mb-6 flex-1">Recuperar Contraseña Maestra</h1>
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

        <div className="flex justify-between items-center space-y-10">
            <h1 className="text-primary space-y-10">#/lisay-maggi35</h1>
            <img src="/src/images/file-upload-icon.png" alt="file-upload-icon.png" />
        </div>

            <small className="text-black font-bold text-lg">¿Quieres establecer una nueva contraseña maestra?</small>

            <small className="text-primary font-bold text-lg">Establecer nueva contraseña maestra</small>

        </section>
    </>
    )
}

export default RecoverPasswordForm;