import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LIBRARY</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">ADD BOOK</a>
        <a class="nav-link" href="/search">SEARCH BOOK</a>
        <a class="nav-link" href="/delete">DELETE BOOK</a>
        <a class="nav-link" href="/view">VIEW BOOK</a>
      </div>
    </div>
  </div>
</nav>  
    </div>
  )
}

export default Navbar