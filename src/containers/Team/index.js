import React from "react"
import HeaderContainer from "../Header"

export default () => ({
  render () {
		
		return (
			<div>
				<HeaderContainer />
				<section className="section">
							<div className="container content">
								<p className="has-text-centered">This is team page</p>
							</div>
				</section>
			</div>
		)
	}
})