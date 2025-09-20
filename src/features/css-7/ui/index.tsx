// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import '@shared/ui/container/style.scss';
import '@shared/ui/margins/style.scss';
import { ControlsList } from '../components/controls-list/ui';

export const CssChallenge07 = () => {
  return (
    <>
      <section class="container mb-5">
        <h1>CSS Challenge 07: input with floating label</h1>
        <h2>Original challenge</h2>
        <ControlsList />
        <h2>Themed inputs</h2>
        <ControlsList elementClass="themed" />
      </section>
    </>
  )
}