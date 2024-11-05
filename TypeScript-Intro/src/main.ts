import './style.css'
import { setupCounter } from './counter.ts'
import { name, mark } from './bases/01-types'
import { bulbasaur } from './bases/02-objects'
// import { charmander } from './bases/03-classes'
import { charmander } from './bases/04-injection'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2>01-Types</h2>
    <p>Hello ${name}${mark}!!!</p>
    <h2>02-objects</h2>
    <p>My Pokemon is ${bulbasaur.name}!!!</p>
    <h2>03-Classes</h2>
    <p>Id: ${charmander.id} - Pokemon: ${charmander.name} - Url: ${charmander.imageUrl}</p>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
