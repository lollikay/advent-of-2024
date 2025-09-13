import { HomePage } from './pages/home/index.tsx'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = HomePage().toString()
