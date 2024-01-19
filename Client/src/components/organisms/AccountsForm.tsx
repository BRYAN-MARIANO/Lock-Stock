

const AccountsForm =() => {
    return (
        <>
        
            <section className="form-password w-screen h-screen flex justify-center items-center flex-col gap-4 bg-white">
            <div className="flex justify-between items-center space-x-10 mb-6">
                <img src="/src/images/account-icon.png" alt="account-icon" className="h-10 align-middle"/>
                <h1 className="
            text-primary font-medium text-5xl mb-6 flex-1">Cuentas</h1>
            </div>    

            <form action="" className="flex flex-col w-2/4 gap-3 mt-6">
                <div className="flex items-center border border-black rounded bg-white">
                    <input type="text" className="flex-1 p-2 bg-white" />
                    <div className="p-2">
                    <img src="/src/images/search-icon.png" alt="search-icon" />
                    </div>
                </div>
            </form>

            <div className="grid grid-cols-8 grid-rows-8 gap-4">
                <div className="col-start-1 row-start-1 bg-gray-200 p-4 text-black text-sm">Celda 1</div>
                {Array.from({ length: 64 }, (_, i) => (
                <div key={i}
                className={`col-start-${(i % 8) + 1} row-start-${Math.floor(i / 8) + 1} bg-gray-200 p-4 text-center`}>
                {i + 1}
                </div>
            ))}
            </div>

            <div className="flex items-center justify-start gap-4 text-left">
                <img src="/src/images/plus-icon.png" alt="plus-icon" />
                <small className="
            text-primary font-small text-xl">Añadir nueva aplicación</small>
            </div>

        </section>
    </>
    )
}

export default AccountsForm;