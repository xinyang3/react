import React from "react";
import "./App.css";
import Nav from "./Nav";
import ItemPage from "./ItemPage";
import { items } from "./stattic-data";

class App extends React.Component {
  state = { activeTab: 0 };
  handleTabChange = index => {
    this.setState({
      activeTab: index,
      cart: []
    });
  };

  //   renderContent() {
  //     return <span>Empty</span>;
  //   }

  handleAddToCart = item => {
    this.setState({ cart: [...this.state.cart, item.id] });
  };

  renderContent() {
    switch (this.state.activeTab) {
      default:
      case 0:
        return <ItemPage items={items} onAddToCart={this.handleAddToCart} />;
      case 1:
        return <span>cart</span>;
    }
  }

  render() {
    return (
      <div className="App">
        <main className="App-content">
          <Nav onTabChange={this.handleTabChange} />
          {this.renderContent()}
        </main>
      </div>
    );
  }
}

export default App;
