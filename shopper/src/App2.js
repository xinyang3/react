import React from "react";
import "./App.css";
import	CartPage	from	'./CartPage';


class App extends Component {
  state = { items: [] };

  nextItemId = 0;
  makeItem() {
    return { id: this.nextItemId++, value: Math.random() };
  }
  //	The	Right	Way:		//	copy	the	existing	items	and	add	a	new	one
  addItemImmutably = () => {
    this.setState({ items: [...this.state.items, this.makeItem()] });
  };
  //	The	Wrong	Way:		//	mutate	items	and	set	it	back
  addItemMutably = () => {
    this.state.items.push(this.makeItem());
    this.setState({ items: this.state.items });
  };
  render() {
    return (
      <div>
        <button onClick={this.addItemImmutably}>
          Add item immutably (good){" "}
        </button>
        <button onClick={this.addItemMutably}>
          Add item mutably (bad){" "}
        </button>{" "}
        <ItemList items={this.state.items} />{" "}
      </div>
    );
  }
}

export default App
