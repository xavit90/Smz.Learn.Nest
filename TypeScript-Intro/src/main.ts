import './style.css'
import { setupCounter } from './counter.ts'
import { name, mark } from './bases/01-types'
import { bulbasaur } from './bases/02-objects.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello ${name}${mark}!!!</h1>
    <h1>My Pokemon is ${bulbasaur.name}!!!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
