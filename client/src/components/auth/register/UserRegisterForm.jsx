import { WavyLink } from 'react-wavy-transitions'
import { useForm } from 'react-hook-form'
import {createUser} from '../../../api/users.api'
import {useNavigate} from 'react-router-dom'
import './UserRegisterForm.css'

export const UserRegisterForm = () => {

    const { register, handleSubmit, formState:{errors}} = useForm()

    const navigate = useNavigate()

    // ** Verificar datos ingresados
    const onSubmit = handleSubmit(async data => {
        const res = await createUser(data)
        console.log(res)
        navigate('/inicio-sesion')
    })

    return (
        <section className='register' onSubmit={onSubmit}>
            <form className='register__form'>

                <h1 className='form__title'> Crear Cuenta </h1>

                <div className='form__input-box'>
                    <input type="text" id='name' placeholder='Nombre' {...register('name', {required: true})}  />
                </div>
                {errors.name && console.log('Campo Requerido')}

                <div className='form__input-box'>
                    <input type="text" id='UserName' placeholder='Nombre de Usuario'{...register('user_name', {required: true})}/>
                </div>
                {errors.UserName && console.log('Campo Requerido')}

                <div className='form__input-box'>
                    <input type="text" id='email' placeholder='Email' {...register('email', {required: true})} />
                </div>
                {errors.email && console.log('Campo Requerido')}

                <div className='form__input-box'>
                    <input type="password" id='password' spellCheck='false' placeholder='Contraseña' {...register('password', {required: true})} />
                </div>
                {errors.password && console.log('Campo Requerido')}

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
