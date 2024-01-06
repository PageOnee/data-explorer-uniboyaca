import { WavyLink } from 'react-wavy-transitions'
import './LoginForm.css'

export const LoginForm = () => {
    return (
        <section className='login'>
            <form className='login__form' action="">

                <h1 className='form__title-login'> Inicio de Sesion </h1>

                <div className='form__input-box-login'>
                    <input type="text" id='emailUsername' placeholder='Email o Nombre de Usuario' required />
                </div>

                <div className='form__input-box-login'>
                    <input type="password" id='password' placeholder='Contraseña' required />
                </div>

                <div className='form__remember'>
                    <label htmlFor="remember"> <input type="checkbox" id='remember' /> Recuerdame </label>
                    <a href="https://www.google.com/?hl=es"> Olvidaste tu contrasena ? </a>
                </div>

                <button className='form__btn-login' type='submit'> Iniciar Sesion </button>

                <div className='form__register-link'>
                    <p className='register-link__p'> ¿ No tienes una cuenta ?
                        <WavyLink to="/registro-usuario" color='#FF004D' >
                            <span>Crear Cuenta</span>
                        </WavyLink>
                    </p>
                </div>
            </form>
        </section>
    )
}
