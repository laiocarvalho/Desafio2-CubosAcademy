const arr = [
    {titulo:'sadmad passando fome',
     adulte: false,
     genero_ids:[1,16]
    },
    {titulo:'sadmad passando fome o retorno',
     adulte: true,
     genero_ids:[1,40,225,16]
    }
];


const filtragenero=(el)=>{
   if(el.genero_ids.indexOf(16) != -1){
       
    
    return   el.genero_ids
   
   
   
    }
}


const filtrados = arr.filter(filtragenero);


console.log(filtrados)