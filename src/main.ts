import './style.scss'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { WelcomeCard, StatusIndicator, FeatureList } from './components.tsx'

// Use @kitajs/html components to build the app content
const features = [
  'TypeScript support with Vite',
  'SCSS preprocessing',
  '@kitajs/html for TSX components',
  'Hot module replacement',
  'Modern build tooling'
]

const appContent = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript + SCSS + @kitajs/html</h1>
    
    ${WelcomeCard({ name: 'Advent of Code 2024', count: 0 })}
    
    ${StatusIndicator({ isOnline: true, status: 'Development Ready' })}
    
    ${FeatureList({ features })}
    
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = appContent

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
