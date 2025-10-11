// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import '@shared/ui/container/style.scss';
import '@shared/ui/margins/style.scss';
import style from './style.module.scss';

export const CssChallenge18 = () => {
  return (
    <section class="container mb-5">
      <h1>CSS Challenge 18: skeletons</h1>
      <div class={style.card}>
        <div class={`${style.cardImage} ${style.skeleton}`}>
          <img
            src="assets/images/css-challenge-10/avel-chuklanov-GNVn_4bC2kk-unsplash.jpg"
            alt=""
            />
        </div>
        <div>
          <p class={`${style.cardTitle} ${style.skeleton}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
          <p class={style.skeleton}>
            Autem temporibus facilis recusandae maiores.
          </p>
        </div>
        <div class={`${style.cardContent} ${style.skeleton}`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  )
};
