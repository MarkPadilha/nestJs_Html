import { Pedido } from "./Pedido"

export class Prato extends Pedido{

    id
    nome
    preco
    

    constructor (nome, preco, id){
        this.id = id
        this.nome = nome
        this.preco = preco
        
    }

    get nome(){
        return this.nome
    } 

    set nome(nome){
        this.nome = nome
    }

    get preco(){
        return this.preco
    }

    set preco(preco){
        this.preco = preco
    }

    get id(){
        return this.id
    }

    set id(id){
        this.id = id
    }

}