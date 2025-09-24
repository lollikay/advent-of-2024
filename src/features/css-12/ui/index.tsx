// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import '@shared/ui/container/style.scss';
import '@shared/ui/margins/style.scss';
import style from './style.module.scss';

const layouts = [
  "straight",
  "zebra",
  "centered",
  "columns",
];

const testies = [
  {
    image: 'avatar-1',
    author: 'Samantha L.',
    position: 'Junior Developer',
    text: 'Advent of CSS was exactly what I needed to level up my design skills. Each day\'s challenge gave me the perfect mix of creativity and problem- solving.By Christmas, I felt like a CSS wizard!'
  },
  {
    image: 'avatar-2',
    author: 'James T.',
    position: 'Aspiring Frontend Developer',
    text: 'I looked forward to every challenge during Advent of CSS! The tasks were engaging and varied, making me excited to tackle something new each day.My portfolio is shining brighter than ever now.'
  },
  {
    image: 'avatar-3',
    author: 'Ryan G.',
    position: 'CSS Newbie',
    text: 'As someone just starting out in web design, Advent of CSS was incredibly approachable. The challenges ranged from beginner- friendly to mildly complex, so I always felt like I was learning without being overwhelmed.'
  },
  {
    image: 'avatar-4',
    author: 'Elena S.',
    position: 'Frontend Developer',
    text: 'Advent of CSS was the gift I didn’t know I needed. By the end of the month, my understanding of layouts, animations, and modern techniques had completely transformed. Can\'t wait for next year!'
  }
];

export const CssChallenge12 = () => {
  return (
    <div class="container">
      <h2>Testimonials</h2>
      {layouts.map((layout, index) => (
        <div class={index % 2 === 1 ? style.invertedSection : ''}>
          <h3>Style {index + 1}</h3>
          <section class="mb-5">
            <div class={`${style.testimonials} ${style[layout]}`}>
              {testies.map((testy) => (
                <article>
                  <div class={style.avatar}>
                    <img
                      srcset={`
                          assets/images/css-challenge-12/${testy.image}@2x.png 2x,
                          assets/images/css-challenge-12/${testy.image}@.png 1x
                        `}
                      alt={testy.author}
                    />
                  </div>
                  <div class={style.testimonial}>
                      {testy.text}
                  </div>
                  <div class={style.cite}>
                    <strong>
                        {testy.author}
                    </strong>,{' '}
                    <em>
                      {testy.position}
                    </em>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      ))}
    </div>
  )
};
