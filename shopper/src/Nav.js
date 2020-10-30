import React from "react";
// const Nav = () => (
//   <nav className="App-nav">
//     <ul>
//       <li className="App-nav-item">
//         <a>Items</a>
//       </li>
//       <li className="App-nav-item">
//         <a>Cart</a>
//       </li>
//     </ul>
//   </nav>
// );

const Nav = ({activeTab, onTabChange}) => (
    <nav className="App-nav">
        <ul>
            <li className={`App-nav-item ${activeTab === 0 && 'selected'}`}>
                <NavLink index={0} onClick={onTabChange}>items</NavLink>
            </li>
            <li className={`App-nav-item ${activeTab === 1 && 'selected'}`}>
            <NavLink index={1} onClick={onTabChange}>cart</NavLink>
        </li>
        </ul>
    </nav>
)

class NavLink extends React.Component {
    handleClick = () => {
        this.props.onClick(this.props.index);
    }

    render () {
        return (
            <a onClick={this.handleClick}>
                {this.props.children}
            </a>
        )
    }
}

export default Nav