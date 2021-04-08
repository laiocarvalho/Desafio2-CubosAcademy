import React, {useState} from 'react'
import Shoplist from '../../Components/Shoplist/Shoplist'
import './Page2.css'
import Inputs from '../../Components/Inputs/Inputs'
import ConfirmPurchase from '../../Components/Buttons/ConfirmPurchase'


export default function Page2() { 
 const [disable, setDisable] =  useState(true);
 const [valorCep, setvalorCep] = useState();
 const [valorTel, setvalorTel] = useState();
 const [valorNumCartao, setvalorNumCartao] = useState();
 const [dataCartao, setdataCartao] = useState();
 const arrayInputs = document.getElementsByName("confirm-data-inputs");

 const formataCep = (e)=>{
   const valor = e.target.value
   const length = e.target.value.length;
   let valorFormatado;
    if(length === 8){
      valorFormatado = valor.slice(0,5) +'-' +valor.slice(-3)
      console.log(valorFormatado)
    }
    setvalorCep(valorFormatado);
 }

 const formataTelefone = (e)=>{
   const valor = e.target.value.trim();
   const length = e.target.value.length;
   let valorFormatado;
   if(length ===11){
    valorFormatado = `(${valor.slice(0,2)}) 9${valor.slice(3,7)}-${valor.slice(-4)}`
    console.log(valorFormatado)
   }
   else if(length === 10){
    valorFormatado = `(${valor.slice(0,2)}) 9${valor.slice(2,6)}-${valor.slice(-4)}`
   }
   else if(length === 9){
     valorFormatado =`${valor.slice(0,5)} - ${valor.slice(-4)}` 
   }else if(length === 8){
     valorFormatado = `9${valor.slice(0,4)} - ${valor.slice(-4)}`
   }
   setvalorTel(valorFormatado);
 }

 const formataNumeroDoCartao = (e)=>{
  const valor = e.target.value;
  const length = e.target.value.length;
  let valorFormatado;
  if(length===16){
    valorFormatado=`${valor.slice(0,4)}-${valor.slice(4,8)}-${valor.slice(8,12)}-${valor.slice(12,16)}`
    valorFormatado.trim()
  }
  setvalorNumCartao(valorFormatado)
}

const formataDataDoCartao = (e)=>{
  const valor = e.target.value;
  const length = e.target.value.length;
  let valorFormatado;

  if(length === 6){
    valorFormatado=`${valor.slice(0,2)}/${valor.slice(-4)}`
  }
  setdataCartao(valorFormatado)
}

const verificaInputs = ()=>{
  let contador = 0;
  arrayInputs.forEach((e)=>{
    if(e.value === ""){
      contador++;
    }
  })
  if(contador === 0){
   setDisable(false)
  }else{
    setDisable(true)
  }
}


  return (
    <>
    <div className="page2-wrapper">
      <div className="page2-main-column">
        <div className="page2-information-container-style">
          <h2 className="page2-information-title">Informações Iniciais</h2>
      
          <div className="page2-input-containers"> 
            <Inputs 
              label="Insira seu nome completo"
              placeholder ="Ex:Laio Carvalho"
              id="naame-input"
              name="confirm-data-inputs"
              onBlur={()=>{verificaInputs()}}
            />
        
            <Inputs 
              label="Insira seu email"
              placeholder ="Ex:carvalholaio@arroba.com"
              id="email-input"
              type="email"
              name="confirm-data-inputs"
              onBlur={()=>{verificaInputs()}}
            />
           
            <Inputs 
              label="Telefone"
              placeholder ="(71) 00000-0000"
              id="tel-input"
              name="confirm-data-inputs"
              maxLength="16"
              onBlur={(e)=>{
                formataTelefone(e) 
                verificaInputs()
              }}
              value={valorTel}
            />
          </div>
        </div>
        <div className="page2-information-container-style">
          <h2 className="page2-information-title">Informações de Endereço</h2>
          <div className="page2-input-containers">
            <Inputs
              label="CEP"
              placeholder="Ex:00000-000"
              id="input-cep"
              name="confirm-data-inputs"
              maxLength="9"
              onBlur= {(e)=>{
                formataCep(e) 
                verificaInputs()
              }}
              value={valorCep}
            />
            <Inputs
              label="País"
              placeholder="Ex:Brasil"
              id="input-país"
              name="confirm-data-inputs"
              onBlur={()=>{verificaInputs()}}
            />
            <Inputs
              label="Cidade"
              placeholder="Ex:Salvador"
              id="input-cidade"
              name="confirm-data-inputs"
              onBlur={()=>{verificaInputs()}}
            />
            <Inputs
              label="Bairro"
              placeholder="Ex:Graça"
              id="input-bairro"
              name="confirm-data-inputs"
              onBlur={()=>{verificaInputs()}}
            />
            <Inputs
              label="Número"
              placeholder="Ex:00"
              id="input-número"
              name="confirm-data-inputs"
              maxLength="5"
              onBlur={()=>{verificaInputs()}}
            />
          </div>
        </div>
        <div className="page2-information-container-style">
          <h2 className="page2-information-title">Informações de Pagamento</h2>
          <div className="page2-input-containers">
            <Inputs 
              label="Número do cartão"
              placeholder="Ex:00000 00000 0000"
              id="input-card-number"
              name="confirm-data-inputs"
              maxLength="19"
              onBlur= {(e)=>{
                formataNumeroDoCartao(e) 
                verificaInputs()
              }}
              value={valorNumCartao}
            />
            <Inputs
              label="Nome do cartão"
              placeholder="Ex: Laio Carvalho"
              id="input-card-name"
              name="confirm-data-inputs"
              onBlur={()=>{verificaInputs()}}
            />
            <Inputs
              label="Data de expiração"
              placeholder="MM/YYYY"
              id="input-date"
              name="confirm-data-inputs"
              maxLength="7"
              onBlur= {(e)=>{
                formataDataDoCartao(e) 
                verificaInputs()
              }}
              value={dataCartao}
              
            />
            <Inputs
              label="CVV"
              placeholder="000"
              id="input-cvv"
              name="confirm-data-inputs"
              maxLength='3' 
              onBlur={()=>{verificaInputs()}}
            />
          </div>
        </div>
      </div>
      <div className="page2-aside-column">
        <Shoplist Botao={<ConfirmPurchase disable={disable}/>}/>
      </div>
    </div>
    </>
  )
}
