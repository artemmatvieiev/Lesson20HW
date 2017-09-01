import React from "react"
import { Link } from "react-router"

export default (props) => {
  const { 
    linkText,
		linkClass,
		linkPath
} = props

  return (
    <a className={ linkClass }>
			<Link to={ linkPath }>
				{ linkText }
			</Link>
		</a>
  )
}