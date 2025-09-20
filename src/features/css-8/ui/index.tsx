// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import '@shared/ui/container/style.scss';
import './style.scss';
import { ScrollHint } from '../components/scroll-hint/ui';
import { Navigation } from '../components/navigation/ui';

export const CssChallenge08 = () => {
  return (
    <div class="css-challenge-08">
      <section>
        <header>
          <div class="container">
            <Navigation />
          </div>
        </header>
        <main>
        </main>
        <footer>
          <div class="container">
            <ScrollHint />
          </div>
        </footer>
      </section>
    </div>
  )
}