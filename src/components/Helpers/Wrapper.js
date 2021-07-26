import React from 'react'

// <Wrapper></Wrapper> have the same function
// as < React.Fragment ></ > or <></>
const Wrapper = (props) => {
  return props.children
}

export default Wrapper
