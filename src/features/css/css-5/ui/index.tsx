// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import style from './style.module.scss';
import { TextContent } from '@features/text-content/ui';

export const CssChallenge05 = () => {
  return (
    <>
      <section class={`${containerStyle.container} ${style.cssChallenge05}`}>
        <h1>CSS Challenge 05: footer appears on scroll</h1>
        <TextContent />
        <footer>
          <p>
            &copy; Advent of 2024 - Css Challenge 05: footer appears on scroll
          </p>
        </footer>
      </section>
    </>
  )
}