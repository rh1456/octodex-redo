import React from 'react'
import Format from './components/Format'
import steroidToCat from './images/steroidtocat.png'
import barackToCat from './images/baracktocat.jpg'
import castello from './images/catstello.png'
import labToCat from './images/labtocat.png'
import jetPackToCat from './images/jetpacktocat.png'
import octotron from './images/octotron.jpg'
console.log(labToCat)
const App = () => {
  return (
    <>
      <nav class="navBar">
        <section class="navContainer">
          <i class="fab fa-github"></i>
          <h1 class="Octodex">Octodex</h1>
          <ul class="leftMenu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </section>
        <ul class="rightMenu">
          <li>
            {' '}
            <a href="#">Follow us on Twitter</a>
          </li>
          <li>
            {' '}
            <a href="#">Back go Github</a>
          </li>
        </ul>
      </nav>
      <main>
        <Format
          imageUrl={steroidToCat}
          imgAlt="steroid"
          catNumber="#130"
          catID="Catstello"
        />
        <Format
          imageUrl={barackToCat}
          imgAlt="barack"
          catNumber="#57"
          catID="Baracktocat"
        />
        <Format
          imageUrl={castello}
          imgAlt="cat"
          catNumber="#130"
          catID="catstello"
        />
        <Format
          imageUrl={labToCat}
          imgAlt="labCat"
          catNumber="#106"
          catID="Labtocat"
        />
        <Format
          imageUrl={jetPackToCat}
          imgAlt="jetcat"
          catNumber="#119"
          catID="Jetpacktocat"
        />
        <Format
          imageUrl={octotron}
          imgAlt="octocat"
          catNumber="#58"
          catID="Octotron"
        />
      </main>
    </>
  )
}

export default App
