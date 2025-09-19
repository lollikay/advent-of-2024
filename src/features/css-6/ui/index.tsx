// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import '@shared/ui/container/style.scss';
import './style.scss';

export const CssChallenge06 = () => {
  return (
    <>
      <section class="container css-challenge-06">
        <h1>CSS Challenge 06: scroll progress</h1>
        {Array(10).fill(null).map(() => (
          <>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
              Iusto, maiores dolore. Natus tenetur, voluptas soluta quis minima labore veniam{' '}
              quasi consequuntur, placeat praesentium quae impedit{' '}
              at molestiae necessitatibus neque id?
            </p>
            <p>
              Ducimus quibusdam totam et nesciunt iure, autem repellendus corrupti molestiae?{' '}
              Ipsum tenetur fugit deserunt soluta laboriosam modi sunt, natus porro quidem aut.{' '}
              Nobis, possimus. Impedit suscipit dicta laudantium consequatur qui.
            </p>
            <p>
              Nulla, pariatur laboriosam? Fuga a quos esse odit ipsum earum ipsa{' '}
              cupiditate quia est voluptatem quae nostrum ut aliquid id,{' '}
              facere possimus eveniet magni, blanditiis saepe odio obcaecati alias aspernatur.
            </p>
          </>
        ))}
      </section>
    </>
  )
}