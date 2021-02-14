import React, {Component} from 'react';
import FormularioCadastro from './components/FormularioCadastro/';
import ListaDeNotas from './components/ListaDeNotas/';
import ListaDeCategorias from './components/ListaDeCategorias';
import "./assets/App.css";
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas';

class App extends Component {

  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render(){
    return (
      <section>
        <FormularioCadastro 
          criarNota={this.notas.adicionarNota.bind(this.notas)}
          categorias = {this.categorias}
        />
        <main>
          <ListaDeCategorias 
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias}
          />
          <ListaDeNotas 
            notas={this.notas}
            apagarNota={this.notas.apagarNota.bind(this.notas)}
          />
        </main>
      </section>
    )
  }
}

export default App;
