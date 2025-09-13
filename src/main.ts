import { HomePage } from './pages/home'

const appContent = `
  <div>
    ${HomePage()}
  </div>
`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = appContent
