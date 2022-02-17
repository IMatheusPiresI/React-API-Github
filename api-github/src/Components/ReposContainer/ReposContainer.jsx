import React, { useEffect, useState } from "react";
import axios from 'axios'
import ReposAPI from "../ReposAPI/ReposAPI";
import Error from "../Error/Error";
import { DadosApi } from "./ReposContainerStyle";

function ReposContainer(){

    const [repositorios, setRepositorios] = useState([])
    const [login, setLogin] = useState('');
    const [foto, setFoto] = useState('');
    const [carregando, setCarregando] = useState('')
    const [erro, setErro] = useState(false)

    useEffect( () =>{
        document.querySelector('#user').addEventListener('keypress',(e) =>{
        if(e.key === 'Enter'){
            setErro(false)
            setFoto('')
            setLogin('')
            setRepositorios([])
            document.querySelector('#foto').style.display = 'none'
            document.querySelector('#loading').style.display = 'block'
            setCarregando('Carregando...')
            const input = document.querySelector('#user').value
            const users = `https://api.github.com/users/${input}`
            const repos = `https://api.github.com/users/${input}/repos`

        
            async function Users(){
                axios.get(users)
                .then(res => {
                    const response = res.data
                    setCarregando('')
                    document.querySelector('#loading').style.display = 'none'
                    setLogin(response.login)
                    setFoto(response.avatar_url)
                    document.querySelector('#foto').style.display = 'initial'
                    setErro(false)
                })
                .catch( () => {
                    setErro(true)
                    setCarregando('Usuário Não Encontrado')
                })
               
               
            }
            Users();

            async function Repos(){
                axios.get(repos)
                .then(res => {
                    const response = res.data
                    document.querySelector('#user').style.border = '3px solid #0000FF'
                    setCarregando('')
                    setRepositorios(response)
                    
                })
                .catch( () => {
                    document.querySelector('#user').style.border = '3px solid red'
                    setErro(true)
                })
                
            
            }
            Repos();
        }
        })
    }, [])

    return(
        <DadosApi>
            {erro ? <Error /> : 
            <ReposAPI
                repositorios={repositorios}
                login={login}
                foto={foto}
                carregando={carregando}
            />}
        </DadosApi>
    )
}

export default ReposContainer;