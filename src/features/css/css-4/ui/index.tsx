// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import '@shared/ui/container/style.scss';
import '@shared/ui/margins/style.scss';
import './style.scss';

export const CssChallenge04 = () => {
  return (
    <>
      <section class="container mb-5">
        <h1>CSS Challenge 04: headings with decorative horizontal separators</h1>
      </section>
      <div class="css-challenge-04 mb-5">
        <section class="container mb-5">
          <h1>Shorter heading</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
            Eius rem ab esse ullam ut a reprehenderit accusamus cupiditate fugiat corrupti,{' '}
            neque veniam quidem iste maxime consectetur qui alias deleniti illum.
          </p>
        </section>
        <section class="container mb-5">
          <h1 style="color: var(--c-accent-1);">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,{' '}
            architecto commodi modi facilis magni assumenda. Earum,{' '}
            error fugiat perferendis accusamus optio consequatur iste deleniti maiores,{' '}
            voluptates voluptatem aspernatur obcaecati aut.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
            Eius rem ab esse ullam ut a reprehenderit accusamus cupiditate fugiat corrupti,{' '}
            neque veniam quidem iste maxime consectetur qui alias deleniti illum.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.{' '}
            Mollitia minus sapiente eveniet, earum accusamus qui architecto?{' '}
            Ipsum expedita iste necessitatibus doloremque, quis libero saepe facilis{' '}
            sed eos eum cupiditate ipsam?
          </p>
        </section>
      </div>
      <div class="css-challenge-04 css-challenge-04--01">
        <section class="container">
          <h1>Some heading with colored lines</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
            Eius rem ab esse ullam ut a reprehenderit accusamus cupiditate fugiat corrupti,{' '}
            neque veniam quidem iste maxime consectetur qui alias deleniti illum.
          </p>
        </section>
      </div>
    </>
  )
}