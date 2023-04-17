import Pessoa from './script.js'
import js from '../images/logo.png'
import imagem from '../images/javascript.jpg'

const logo = document.querySelector("#logo");
logo.src = js;
const javascript = document.querySelector("#javascript");
javascript.src = imagem;

const umaPessoa = new Pessoa('Pedro', 'Rocha', 
                             'Rua das Laranjeiras', 
                             '100', 'apto 103');
const outraPessoa = new Pessoa('Ricardo', 'Lima', 
                               'Rua Cosme Velho', 
                               '232', 'apto 401');
console.log(umaPessoa.numero, umaPessoa.nome);
console.log(outraPessoa.numero, outraPessoa.nome);

Pessoa.contador = 11;

const maisUmaPessoa = new Pessoa('Roberto', 'Cruz',
                                 'Rua Cosme Velho',
                                 '524', 'apto 304');
console.log(maisUmaPessoa.numero, maisUmaPessoa.nome);
