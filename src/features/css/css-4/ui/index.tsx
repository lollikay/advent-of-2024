// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import marginStyle from '@shared/ui/margins/style.module.scss';
import style from './style.module.scss';

export const CssChallenge04 = () => {
  return (
    <>
      <section class={`${containerStyle.container} ${marginStyle.mb5}`}>
        <h1>CSS Challenge 04: headings with decorative horizontal separators</h1>
      </section>
      <div class={`${style.cssChallenge04} ${containerStyle.mb5}`}>
        <section class={`${containerStyle.container} ${marginStyle.mb5}`}>
          <h1>Shorter heading</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius rem ab esse ullam ut a
            reprehenderit accusamus cupiditate fugiat corrupti, neque veniam quidem iste maxime
            consectetur qui alias deleniti illum.
          </p>
        </section>
        <section class={`${containerStyle.container} ${marginStyle.mb5}`}>
          <h1 style="color: var(--c-accent-1);">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, architecto commodi
            modi facilis magni assumenda. Earum, error fugiat perferendis accusamus optio
            consequatur iste deleniti maiores, voluptates voluptatem aspernatur obcaecati aut.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius rem ab esse ullam ut a
            reprehenderit accusamus cupiditate fugiat corrupti, neque veniam quidem iste maxime
            consectetur qui alias deleniti illum.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia minus sapiente
            eveniet, earum accusamus qui architecto? Ipsum expedita iste necessitatibus doloremque,
            quis libero saepe facilis sed eos eum cupiditate ipsam?
          </p>
        </section>
      </div>
      <div class={`${style.cssChallenge04} ${style.themed}`}>
        <section class={containerStyle.container}>
          <h1>Some heading with colored lines</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius rem ab esse ullam ut a
            reprehenderit accusamus cupiditate fugiat corrupti, neque veniam quidem iste maxime
            consectetur qui alias deleniti illum.
          </p>
        </section>
      </div>
    </>
  );
};
