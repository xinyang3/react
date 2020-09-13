import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { func } from "prop-types";

// const title = 'react';

const welcome = {
  greeting: "hey",
  title: "react"
};

const stories = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

function getTitle(title) {
  return title;
}

// 列表
function List(props) {
  return props.list.map(item => {
    return (
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
    );
  });
}

// search

const Search = props => {
  return (
    <div>
      <label htmlFor="search">search:</label>
      <input id="search" type="text" onChange={props.onSearch}/>
    </div>
  )
}

function App() {

  const [searchTerm, setSearchTerm] = React.useState('');
  const handleChange = (event) => {
    console.log(event);
    setSearchTerm(event.target.value)
  }

  // return (
  //   <div className="App">
  //     <h1>
  //       {welcome.greeting} {welcome.title}
  //     </h1>
  //     <h1>hello {getTitle("react")}</h1>
  //     <label htmlFor="search">Search: </label>
  //     <input id="search" type="text"></input>

  //     <hr />
  //     <List list={stories}></List>

  //     <hr/>
  //     <h1>
  //       my hacker stories
  //     </h1>
  //     <label>event handler:</label>
  //     <input id="search" type="text" onChange={handleChange}></input>
  //     <p>
  //       search for <strong>{searchTerm}</strong>
  //     </p>

  //   </div>
  // );
  
  // search组件分离
  const searchStories = stories.filter((story) => {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase())
  })
  return (
    <div>
      <h1>
        hacker stories
      </h1>
      <Search onSearch={handleChange}/>
      <List list={searchStories}/>

    </div>

  )

}

export default App;
