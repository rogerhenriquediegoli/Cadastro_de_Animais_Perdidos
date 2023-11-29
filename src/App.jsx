import { useState } from 'react'
import './App.css'
import Cadastro from './components/Cadastro'
import Listagem from './components/Listagem'

function App() {
  const [listaAnimais, setListaAnimais] = useState([
    {"id": 1, "nomeAnimal": "Frederico", "imgAnimal": "https://petanjo.com/blog/wp-content/uploads/2021/11/labrador-tudo-sobre-a-raca-768x576.jpg", "racaAnimal": "Labrador", "localAnimal": "Perto do rio da Prata", "isEncontrado": false},
  {"id": 2, "nomeAnimal": "Bella", "imgAnimal": "https://image.cachorrogato.com.br/thumb/315/245/1/imagens/racas/imagem142.jpg", "racaAnimal": "Golden Retriever", "localAnimal": "No parque central", "isEncontrado": true},
  {"id": 3, "nomeAnimal": "Max", "imgAnimal": "https://www.zooplus.pt/magazine/wp-content/uploads/2020/11/pastor-alemao-1024x681.jpg", "racaAnimal": "Pastor Alemão", "localAnimal": "Na rua principal", "isEncontrado": false},
  {"id": 4, "nomeAnimal": "Charlie", "imgAnimal": "https://blog.arbolez.com/wp-content/uploads/2018/09/raca-de-cachorro-beagle.jpg", "racaAnimal": "Beagle", "localAnimal": "Ao lado da escola", "isEncontrado": true},
  {"id": 5, "nomeAnimal": "Luna", "imgAnimal": "https://s2-vidadebicho.glbimg.com/ZNcL1miFpbb9Rj7yKHmsBf4m0jw=/0x0:1200x800/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fb623579cd474803aedbbbbae014af68/internal_photos/bs/2022/O/c/whnsEUTTuL7hdqK8ojOg/2022-07-18-5-por-que-o-cachorro-e-considerado-o-melhor-amigo-do-homem.jpeg", "racaAnimal": "Husky Siberiano", "localAnimal": "No parque da cidade", "isEncontrado": false},
  {"id": 6, "nomeAnimal": "Cooper", "imgAnimal": "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3076881:1621519209/shih-tzu.jpg?f=16x9&h=720&q=0.8&w=1280&$p$f$h$q$w=1a0f04b", "racaAnimal": "Shih Tzu", "localAnimal": "Próximo ao mercado", "isEncontrado": true},
  {"id": 7, "nomeAnimal": "Lucy", "imgAnimal": "https://www.petz.com.br/blog/wp-content/uploads/2022/10/como-dar-banho-em-poodle.jpg", "racaAnimal": "Poodle", "localAnimal": "No jardim botânico", "isEncontrado": false},
  {"id": 8, "nomeAnimal": "Rocky", "imgAnimal": "https://www.petz.com.br/blog/wp-content/uploads/2023/06/bulldog-frances-e-docil.jpg", "racaAnimal": "Bulldog Francês", "localAnimal": "No centro da cidade", "isEncontrado": true}
  ])
  
  const addAnimal = (nome, url, raca, encontrado, local) => {
    const newListaAnimais = [
      ...listaAnimais,
      {
        id: Math.floor(Math.random() * 100000),
        nomeAnimal: nome,
        imgAnimal: url,
        racaAnimal: raca,
        localAnimal: local,
        isEncontrado: encontrado,
      },
    ];
    setListaAnimais(newListaAnimais);
  };
  

  const atualizarStatus = (id) => {
    const newListaAnimais = listaAnimais.map((item) =>
      item.id === id ? { ...item, isEncontrado: !item.isEncontrado } : item
    );
    setListaAnimais(newListaAnimais);
  };  

  const removerAnimal = (id) =>{
    const newListaAnimais = [...listaAnimais].filter(item => item.id !== id)
    setListaAnimais(newListaAnimais)
  }

  return (
    <>
    <div className='app'>
      <h1>Cadastro de Animais Perdidos/Encontrados</h1>
        <Cadastro addAnimal={addAnimal}/>
        {
          listaAnimais
          .map((item) => (
            <Listagem item={item} atualizarStatus={atualizarStatus} removerAnimal={removerAnimal}/>
          ))
        }
    </div>
    </>
  )
}

export default App