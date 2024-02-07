import React from 'react'
import HeaderLogin from '../../templates/HeaderLogin'
import AuthenticationPage from '../../templates/RegisterLoginCard'

const RegisterLogin = ():React.JSX.Element => {
  return (
    <>
    <HeaderLogin />
    <section className='min-h-screen flex items-center justify-center p-8'>
    <AuthenticationPage />
    </section>
    </>
  )
}

export default RegisterLogin