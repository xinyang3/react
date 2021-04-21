import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { PostsList } from './features/posts/postsList'
import { AddPostForm } from './features/posts/AddPostForm'
import { SinglePostPage } from './features/posts/SinglePostPage'
import { EditPostForm } from './features/posts/EditPostForm'
import { UsersList } from './features/users/userList'
import { UserPage } from './features/users/userPage'
import { NotificationsList } from './features/notifications/NotificationsList'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              // <section>
              //   <h2>Welcome to the Redux Essentials example app!</h2>
              // </section>
              <React.Fragment>
                {/* <AddPostForm /> */}
                <section>
                  <Link to="/addPost" className="button btn-add">
                    Add Post
                  </Link>
                </section>
                <PostsList />
              </React.Fragment>
            )}
          />
          <Route exact path="/addPost" component={AddPostForm} />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/editPost/:postId" component={EditPostForm} />
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/users/:userId" component={UserPage} />
          <Route
            exact
            path="/notificationsList"
            component={NotificationsList}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
