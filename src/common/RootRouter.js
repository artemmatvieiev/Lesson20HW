import React from "react"
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import RegisterContainer from "../containers/Register"
import LoginContainer from "../containers/Login"
import TodoContainer from "../containers/Todo"
import FeaturesContainer from "../containers/Features"
import HelpContainer from "../containers/Help"
import HomeContainer from "../containers/Home"
import TeamContainer from "../containers/Team"

export default class RootRouter extends React.PureComponent {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute component={HomeContainer} />
          <Route path="home" component={HomeContainer} />
          <Route path="features" component={FeaturesContainer} />
          <Route path="team" component={TeamContainer} />
          <Route path="help" component={HelpContainer} />
          <Route path="login" component={LoginContainer} />
          <Route path="register" component={RegisterContainer} />
          <Route path="todo" component={TodoContainer} />
        </Route>
      </Router>
    )
  }
}