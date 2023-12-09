//import { Pedido } from "./Pedido";
// import { Prato } from "./Prato";

//const Prato = require('./Prato')

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', (event)=>{
        event.preventDefault();
        
        const prato = new Prato()

    });
});

/*
function submitForm(event) {
    
    event.preventDefault();


    url = 'http://localhost:3000/post';
    const nome = document.getElementById('nome_completo').value
    const mesa = document.getElementById('mesa').value
    const num_pedido = document.getElementById('id_prato').value
  
    
    const prato_cliente = new Prato()
    prato_cliente.setId(num_pedido);

    //let pedido = {
     //   nome_completo: nome,
      //  status_pedido: false,
       // em_atendimento: false,
       // prato: id,
        // nummero_mesa: mesa,
      //  preco_total: prato_cliente.getPreco()
    //}

    const pedido = {
        nome_completo: nome,
        status_pedido: false,
        em_atendimento: false,
        numero_mesa: mesa,
        prato: num_pedido,
        preco_total: prato_cliente.getPreco()
      }   

      console.log(pedido);

    fetch(url, {
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(pedido),
    })
    .then(response => alert(response))
    .then(pedido =>{
        console.log('Success', pedido);
    })
    .catch(error => {
        console.error('error', pedido)
    })
}
*/