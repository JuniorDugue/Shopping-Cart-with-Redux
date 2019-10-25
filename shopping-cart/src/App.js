import React, {Component} from 'react';
import Products from "./components/Products";
import './App.scss';
import Filter from './components/Filter';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {products: [], filteredProducts: [],};
    this.handleChangeSort = this.handleChangeSort.bind(this);
  }

  componentDidMount(){
    fetch("http://localhost:8000/products").then(res => res.json())
    .then(data => this.setState({
      products: data,
      filteredProducts: data,
    }))
  }

  handleChangeSort(e){
    this.setState({sort: e.target.value});
    this.listProducts();
  }

  listProducts(){
    this.setState(state => {
      if(state.sort !== ''){
        state.products.sort((a,b) => (state.sort === 'lowest' ? ((a.price > b.price) ? 1 : -1) : ((a.price < b.price) ? 1 : -1)));
      } else {
        state.products.sort((a,b) => (a.id > b.id) ? 1 : -1);
      }
      return {filteredProducts: state.products}
    })
  }

  render(){
      return (
        <div className="container">
          <h1>E-Commerce Shopping Cart App</h1>
          <hr/>

          <div className="row">
            <div className="col-md-8">
              <Filter size={this.state.size} sort={this.state.sort} handleChangeSize={this.handleChangeSize} handleChangeSort={this.handleChangeSort} count={this.state.filteredProducts.length}/>
              <hr/>
              <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart}/>
            </div>
            <div className="col-md-4">

            </div>
          </div>
        </div>
    );
  }
}

export default App;
