import React, { useEffect, useState } from 'react';
import './App.css';
import Repositorios from './Layout/Repositorios/Repositorios';

function App() {
  const [repositorios, setRepositorios] = useState([])
  const [login, setLogin] = useState('');
  const [foto, setFoto] = useState('');
  const [carregando, setCarregando] = useState('')

  useEffect( () =>{
    document.querySelector('#user').addEventListener('keypress',(e) =>{
      if(e.key === 'Enter'){
        setFoto(' ')
        setLogin(' ')
        setCarregando('Carregando...')
        const input = document.querySelector('#user').value
        const users = `https://api.github.com/users/${input}`
        const repos = `https://api.github.com/users/${input}/repos`

        async function Users(){
          const info = await fetch(users)
          .then(res => res.json())
          setLogin(info.login)
          setFoto(info.avatar_url)
        }
        Users();

        async function Repos(){
          const response = await fetch(repos)
          .then(res => res.json())
          setRepositorios(response)
          setCarregando('')
        }
        Repos();
      }
    })
  }, [])

  return (
    <Repositorios 
      repositorios={repositorios}
      login ={login}
      foto={foto}
    />
  );
}

export default App;
