// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import '@shared/ui/container/style.scss';
import './style.scss';
import { TextContent } from '@features/text-content/ui';

export const CssChallenge06 = () => {
  return (
    <>
      <section class="container css-challenge-06">
        <h1>CSS Challenge 06: scroll progress</h1>
        {Array(3).fill(null).map(() => (
          <TextContent />
        ))}
      </section>
    </>
  )
}