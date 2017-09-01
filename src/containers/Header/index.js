import React from "react"
import bulmaImg from "./Images/bulma.png"
import LinkComponent from "./Link"
import "./index.scss"

const links = [
  {
    linkText: "Home",
		linkClass: "nav-item is-tab is-active",
		linkPath: "/"
  },
  {
    linkText: "Features",
		linkClass: "nav-item is-tab",
		linkPath: "/features"
  },
  {
    linkText: "Team",
		linkClass: "nav-item is-tab",
		linkPath: "/team"
  },
  {
    linkText: "Help",
		linkClass: "nav-item is-tab",
		linkPath: "/help"
  }
]
const buttons = [
  {
    linkText: "Log in",
		linkClass: "button",
		linkPath: "/login"
  },
  {
    linkText: "Sign up",
		linkClass: "button is-info",
		linkPath: "/register"
  }
]

export default class MainContainer extends React.PureComponent {
	constructor(props) {
		super(props)
	} 
	
	render() {
		
		return (
			<div>
				<nav className="nav has-shadow" id="top">
					<div className="container">
						<div className="nav-left">
							<a className="nav-item" href="/">
								<img src={ bulmaImg } alt="Description" />
							</a>
						</div>
						<span className="nav-toggle">
							<span></span>
							<span></span>
							<span></span>
						</span>
						<div className="nav-right nav-menu">
							{
								links.map((link, index) => (
									<LinkComponent 
										key={index}
										linkText={link.linkText}
										linkClass={link.linkClass}
										linkPath={link.linkPath}
									/>
								))
							}
							<span className="nav-item">
								{
								buttons.map((button, index) => (
									<LinkComponent 
										key={index}
										linkText={button.linkText}
										linkClass={button.linkClass}
										linkPath={button.linkPath}
									/>
								))
							}
							</span>
						</div>
					</div>
				</nav>
				
			</div>
		)
	}
}