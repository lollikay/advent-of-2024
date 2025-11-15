// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import style from './style.module.scss';

const cards = [
  {
    src: 'assets/images/css-challenge-24/GRAND-TETON.jpg',
    alt: 'Grand Teton National Park',
  },
  {
    src: 'assets/images/css-challenge-24/ACADIA.jpg',
    alt: 'Acadia National Park',
  },
  {
    src: 'assets/images/css-challenge-24/YOSEMITE.jpg',
    alt: 'Yosemite National Park',
  },
];

export const CssChallenge24 = () => {
  return (
    <section class={`${containerStyle.container} ${style.section}`}>
      <h1>CSS Challenge 24: Stacking on scroll cards</h1>
      <ul class={style.cards}>
        {cards.map((card) => (
          <li class={style.cardsItem}>
            <div class={style.card}>
              <img src={card.src} alt={card.alt} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
