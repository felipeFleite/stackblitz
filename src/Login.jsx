import './css/app.css';
import { useState } from 'react';
import {auth} from './config/firabaseconfig'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { SignJWT } from 'jose'
import {useNavigate} from 'react-router-dom'

export default function Login(){

const [email, setEmail] = useState('')
const [senha, setSenha] = useState('')

const navigation = useNavigate()

const autenticarComFirebase = async(e) =>{
  e.preventDefault()
  try{
    await signInWithEmailAndPassword(auth, email, senha)

    const secretKey = new TextEncoder().encode('minhaChaveSecreta')

    const token = await new SignJWT({ user:'admin' })
    .setProtectedHeader({ alg:'HS256' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(secretKey)

    localStorage.setItem('token', token)
    navigation('/')
  }catch(error){
    alert('Erro'+ error)
  }
}

  return (
    <main className='main'>
      <form  className="form" onSubmit={autenticarComFirebase}>

          <label className="label" htmlFor='email'>E-mail</label>
          <input className='input' placeholder="E-mail" id='email' name='e-mail'type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label className="label" htmlFor='password'>Senha</label>
          <input className='input' placeholder="Senha" id='password' name='password'type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />

        <button className='botao'>LOGAR</button>
      </form>
      <Link to="/Registrar">
      <p>Não tenho conta!</p>
    </Link>
    </main>
  )
}