import React,{useState}from 'react';
import {FaUserAlt,FaLock,FaEyeSlash,FaEye} from 'react-icons/fa';
import UserImage from '../image/userImaage.png'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

function LoginPage() {

    const {register,handleSubmit, formState:{errors}} = useForm({
        mode:`onChange`
    })
    const [passwordEye,SetPasswordEye]=useState(false)
    //Eye password
        const HandlepassEye=(()=>{
            SetPasswordEye(!passwordEye)
        })
const navigate = useNavigate()
  return (
    <div className='loginPage flex flexDir'>
        <div className='UserImagae'>
            <img src={UserImage} alt="user Photos"  className='loginPage_image'/>
        </div>
        <div className='form_div'>
        <form className='loginPage_form' onSubmit={handleSubmit(()=>{
            navigate('/uplode')
            })}>

            {errors?.LoginId && <samll className='Login_error_message'>{errors.LoginId.message}</samll> }

            <div className='Login_input flex'>
                <label className='Lform_lable'><FaUserAlt/></label>
                <input type='email' {...register('LoginId', {required:"*invalide ID", 
                pattern:({
                    value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message:'*invalide ID'
                })
                })} className={` Lform_input ${errors.LoginId && `emailError`}`} placeholder='User ID' />
            </div>

            {errors?.Password && <samll className='Login_error_message'>{errors.Password.message}</samll> }

            <div className='Login_input flex PassSVG'>
                <label className='Lform_lable'><FaLock/></label>
                <input type={(passwordEye === false ? 'password': 'text')} {...register('Password', {required:"*invalide password",
                minLength:({
                    value:8,
                    message:'*Min charater is 8'
                }),
                maxLength:({
                    value:20,
                    message: '*Max length is 20'
                }),
                pattern:({
                    value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/,
                    message:`*At leat one required`
                })
                    })} placeholder='Password' className={`passwordin Lform_input ${errors.Password && `passError`}`}/>
                {(passwordEye === false ? <FaEyeSlash onClick={HandlepassEye} className='passeye'/> : <FaEye onClick={HandlepassEye} className='passeye'/> )}
            </div>
            
            <div className='forget_Action flex Login_input'>
                <div className='flex'>
                   <input className='Lform_remberMe' type="checkbox"/><span>&nbsp;Rember Me</span>
                </div>
                <em className='fortget_pass'>forget password?</em>
            </div>
            
            <button className='LoginBtn' >LOGIN</button>

        </form>
        </div>
    </div>
  )
}

export default LoginPage