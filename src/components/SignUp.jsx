import React from 'react'

function SignUp() {
  return (
    <div class="container">
    <h2>Sign Up</h2>
    <form>
      <input type="text" placeholder="Name"/>
      <input type="text" placeholder="Email"/>
      <input type="password" placeholder="Password"/>
      <button type="submit">Sign Up</button>
    </form>
  </div>
  )
}

export default SignUp
