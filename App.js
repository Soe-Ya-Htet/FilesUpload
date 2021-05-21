import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <li>
        {this.props.name},
        ${this.props.price}
      </li>
    );
  }
}

class App extends React.Component {

  state = {
      items: [
        {id: 1, name: "Apple", price: "2.99"},
        {id: 2, name: "Orange", price: "4.35"},
        {id: 3, name: "Mango", price: "1.99"},
      ]
  };

  nameRef = React.createRef();
  priceRef = React.createRef();

  add = () => {
    let id = this.state.items.length + 1;

    this.setState({
      items: [
      ...this.state.items,
      {id, name: `Item ${id}`, price: 0.01 * id}
      ]
    });
  }

  addByInputRef = () => {
    let id = this.state.items.length + 1;
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;

    this.setState({
      items: [
      ...this.state.items,
      {id, name, price}
      ]
    });
  }

  render() {
    return (
      <div>
          <h1>Hello React, this my first react project.</h1>
          <ul>
            {this.state.items.map( i => {
              return (
                <Item key={i.id}
                  name={i.name} price={i.price}
                />
              )
            })}
          </ul>
          Name : <input type="text" ref={this.nameRef} /><br />
          Price :  <input type="text" ref={this.priceRef} /><br />
          <button onClick={this.add}>Add Increment</button>
          <button onClick={this.addByInputRef}>Add By Input</button>
      </div>
    );
  }
}

export default App;
