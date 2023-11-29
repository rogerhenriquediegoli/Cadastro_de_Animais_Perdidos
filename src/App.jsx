import { useState } from 'react'
import './App.css'
import Cadastro from './components/Cadastro'
import Listagem from './components/Listagem'

function App() {
  const [listaTarefa, setListaTarefa] = useState([
    {id: 1, nomeAnimal: "Frederico", imgAnimal: "https://pegadanatural.com.br/wp-content/uploads/3-maneiras-de-cuidar-do-seu-filhote-de-cachorro-com-qualidade.jpg", racaAnimal: "Labrador", localAnimal: "Perto do rio da Prata", isEncontrado: false},
    {id: 2, nomeAnimal: "Frederico", imgAnimal: "images/animais.png", racaAnimal: "Labrador", localAnimal: "Perto do rio da Prata", isEncontrado: false},
    
  ])
  
  const addAnimal = (nome, url, raca, encontrado, local)=>{
    const newListaTarefa = [...listaTarefa, {
      id: Math.floor(Math.random() * 100000), 
      nomeAnimal: nome,
      imgAnimal: url,
      racaAnimal: raca, 
      localAnimal: local,
      isEncontrado: encontrado
    }]
    setListaTarefa(newListaTarefa)
  }

  const concluirTarefa = (id) =>{
    const newListaTarefa = [...listaTarefa]
    newListaTarefa.map((item) =>{
      if(item.id === id){
        item.isEncontrado = !item.isEncontrado;
      }
    })
    setListaTarefa(newListaTarefa)
  }

  const removerTarefa = (id) =>{
    const newListaTarefa = [...listaTarefa].filter(item => item.id !== id)
    setListaTarefa(newListaTarefa)
  }

  return (
    <>
    <div className='app'>
      <h1>Cadastro de Animais Perdidos</h1>
        <Cadastro addAnimal={addAnimal}/>
        {
          listaTarefa
          .map((item) => (
            <Listagem item={item} concluirTarefa={concluirTarefa} removerTarefa={removerTarefa}/>
          ))
        }
    </div>
    </>
  )
}

export default App