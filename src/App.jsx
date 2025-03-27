import './css/app.css';
import { useState } from 'react';
import {auth} from './config/firabaseconfig'
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function App(){

const [email, setEmail] = useState('')
const [senha, setSenha] = useState('')

const autenticarComFirebase = async(e) =>{
  e.preventDefault()
  try{
    await signInWithEmailAndPassword(auth, email, senha)
    alert('Logado')
  }catch(err){
    alert('Erro', err)
  }
}

  return (
    <main className='main'>
      <form  className="form" onSubmit={autenticarComFirebase}>

          <label className="label" htmlFor='email'>E-mail</label>
          <input className='input' id='email' name='e-mail'type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label className="label" htmlFor='password'>Senha</label>
          <input className='input' id='password' name='password'type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />

        <button className='botao'>LOGAR</button>
      </form>
    </main>
  )
}