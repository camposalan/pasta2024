
import "../styles/styles.scss"

import NavBar from "../componentes/navbar"
//import { Linkedin } from "lucide-react";



import Image from 'next/image';

import foto from "C:/single/filmes/src/app/sobre/alan.png" 

export default function Sobre(){
    return(
        <main className="flex min-h-screen flex-col ">
        <NavBar/>

        <div className="faixa2">

          <Image className="image" src={foto} />

          <div className="f2-textos">
            <h1 className="lugar">Alan Campos da Silva</h1>
            <p >Graduado em Sistemas para Internet, onde foram estudas e aplicadas tecnologias para desenvolvimento Web!</p>
            <h2 className="lugar"> Tecnologias Estudas e Aplicadas:</h2>
            <p>PHP, Java, React, ReactNative, Node, Express, Mysql, Postegress.
            </p>
            <h2>Objetivo é vaga de desenvolvimento web, mobile, desktop e ou suporte técnico.</h2>
          </div>
        

        </div>
          <div className="lugar">
          <h1 className="contato"> Contato</h1>
          <p> 22997315476</p>
          <p>camposalan@hotmail.com</p>
          
          <a href="https://linkedin.com/in/alan-campos-da-silva-b57774165">meu linkedin</a>
          </div>
    
          
        
     

        
          
        
          <br></br>

          <hr></hr>
          <div className="exp">
            <h1 className="contato">Experiência:</h1>
            <h3 className="diversos">Wesley Conceição</h3>
            <p> Técnico de Informática, manutenção de computadores, configuração de redes, wifi e cabeadas.</p>
            <h3 className="diversos">Lider Tecnologia</h3>
            <p> Desenvolvimento Web, Suporte técnico respeitando o SLA, instalação e configuração de estações de trabalho
              infraestrura de Redes, 
            </p>
            <h3 className="diversos">Friaça Tintas</h3>
            <p>Estoquista, técnico de informática</p>
            <h3 className="diversos">Cartório Ofício Único de Casimiro de Abreu</h3>
            <p>Auxiliar de Cartório</p>
            <h3 className="diversos">CDL ITAPERUNA</h3>
            <p>Auxiliar de Escritório</p>
          </div>

      
  
        
  

  
  
      
      </main>
    )
}