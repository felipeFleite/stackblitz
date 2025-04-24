import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react";
import { auth } from "./config/firabaseconfig"
import { useNavigate } from "react-router-dom"
import './css/registrar.css';

export default function Registrar() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    const navigation = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, senha);
            navigation('/login');
            alert('Cadastro concluido com sucesso')
        } catch (erro) {
            if(erro == "FirebaseError: Firebase: Error (auth/email-already-in-use)."){
                alert("Este E-mail já esta cadastrado!")
            }if(erro == "FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password)."){
                alert("Sua senha deve ter no mínimo 6 caracteres")
            }if(erro == "FirebaseError: Firebase: Error (auth/invalid-email)."){
                alert("E-mail inválido")
            }
            else{alert("Erro ao cadastrar: " + erro);}
        }
    };

    return (
        <div className="body-registrar">
            <main className="registrar-container">
                <h2 className="registrar-title">Registrar</h2>
                <form onSubmit={handleRegister} className="registrar-form">
                    <input
                        className="registrar-input"
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="registrar-input"
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                    <button className="registrar-button" type="submit">Terminar Cadastro</button>
                </form>
            </main>
        </div>
    );
}
