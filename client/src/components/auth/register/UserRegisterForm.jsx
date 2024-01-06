import {WavyLink} from 'react-wavy-transitions'
import './UserRegisterForm.css'

export const UserRegisterForm = () => {

  return (
    <section className='register'>
        <form action="" className='register__form'>

            <h1 className='form__title'> Crear Cuenta </h1>

            <div className='form__input-box'>
                <input type="text" id='name' placeholder='Nombre' required/>
            </div>

            <div className='form__input-box'>
                <input type="text" id='UserName' placeholder='Nombre de Usuario' required/>
            </div>

            <div className='form__input-box'>
                <input type="text" id='email' placeholder='Email' required/>
            </div>

            <div className='form__input-box'>
                <input type="password" id='password'  spellCheck='false' placeholder='Contraseña' required/>
            </div>

            <button className='form__btn-register' type='submit'> Registrar Usuario </button>

            <div className='form__login-link'>
                <p className='login-link__p'> ¿ Ya tienes una cuenta ?
                    <WavyLink to="/inicio-sesion" color='#FF004D' > 
                        <span>Iniciar Sesión</span>
                    </WavyLink>
                </p>  
            </div>

        </form>
    </section>
  )
}
