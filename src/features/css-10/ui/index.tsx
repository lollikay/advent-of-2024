// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import '@shared/ui/container/style.scss';
import '@shared/ui/margins/style.scss';
import style from './style.module.scss';

const galleryItems = [
  'assets/images/css-challenge-10/bear-bear-tQwxdyuHi5E-unsplash.jpg',
  'assets/images/css-challenge-10/jeffrey-buchbinder-aKwozKwSBgA-unsplash.jpg',
  'assets/images/css-challenge-10/avel-chuklanov-GNVn_4bC2kk-unsplash.jpg',
  'assets/images/css-challenge-10/long-ma-hxEAE88Onv0-unsplash.jpg',
  'assets/images/css-challenge-10/smitty-ZL3u4I4eOwU-unsplash.jpg',
  'assets/images/css-challenge-10/jessica-lewis-thepaintedsquare-xz1ZYspQ9Ts-unsplash.jpg',
  'assets/images/css-challenge-10/amin-alizadeh-p5N7n5W6eK8-unsplash.jpg',
  'assets/images/css-challenge-10/mathias-huysmans-fzNjcI31h3Y-unsplash.jpg',
  'assets/images/css-challenge-10/morgan-von-gunten-2dWQAI-SPnw-unsplash.jpg',
];

export const CssChallenge10 = () => {
  return (
    <section class="mb-5">
      <header class="container">
        <h1>CSS Challenge 10: horizontal slider</h1>
      </header>
      <div class={style.gallery}>
        <div class={style.galleryTrack}>
          {galleryItems.map((item) => (
            <div class={style.item}>
              <img
                class={style.image}
                src={item}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};
