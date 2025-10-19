// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import '@shared/ui/container/style.scss';
import '@shared/ui/margins/style.scss';
import style from './style.module.scss';

export const CssChallenge22 = () => {
  return (
    <section class="container mb-5">
      <h1>
        CSS Challenge 22: Product Grid
      </h1>
      <ol class={style.products}>
        <li>
          <div class={style.productImage}>
            <img
              src="assets/images/css-challenge-22/image-1.png"
              srcset="assets/images/css-challenge-22/image-1@2x.png 2x, assets/images/css-challenge-22/image-1.png 1x"
              alt="Made in Dutch Oven"
            />
          </div>
          <h1>Made in Dutch Oven</h1>
          <div class={style.productInfo}>
            <a href="#">Check Price on Made In</a>
            <p>The Made In blew us away with its nonstick qualities, heat distribution, and moisture retention. Plus it's
              available in
              several beautiful colors. <a href="#">Read More</a></p>
            <h2>Pros</h2>
            <ul class={style.pros}>
              <li>Excellent cooking results</li>
              <li>Comfortable handles</li>
              <li>Affordable</li>
            </ul>
            <h2>Cons</h2>
            <ul class={style.cons}>
              <li>None we could find</li>
            </ul>
          </div>
        </li>

        <li>
          <div class={style.productImage}>
            <img
              src="assets/images/css-challenge-22/image-2.png"
              srcset="assets/images/css-challenge-22/image-2@2x.png 2x, assets/images/css-challenge-22/image-2.png 1x"
              alt="Le Creuset Enameled Cast Iron Signature Round Dutch Oven, 5.5 qt., Marseille"
            />
          </div>
          <h1>Le Creuset Enameled Cast Iron Signature Round Dutch Oven, 5.5 qt., Marseille</h1>
          <div class={style.productInfo}>
            <a href="#">Check Price on Amazon</a>
            <a href="#">Check Price on Walmart</a>
            <p>A long-time favorite, Le Creuset's Dutch oven does not disappoint. Note that the slightly larger size means it
              needs a
              bit more space than others. <a href="#">Read More</a></p>
            <h2>Pros</h2>
            <ul class={style.pros}>
              <li>Large handles</li>
              <li>Excellent cooking results</li>
              <li>A long-time cook's favorite</li>
            </ul>
            <h2>Cons</h2>
            <ul class={style.cons}>
              <li>Large size can crowd out other cookery</li>
            </ul>
          </div>
        </li>

        <li>
          <div class={style.productImage}>
            <img
              src="assets/images/css-challenge-22/image-3.png"
              srcset="assets/images/css-challenge-22/image-3@2x.png 2x, assets/images/css-challenge-22/image-3.png 1x"
              alt="Lodge Enameled Cast Iron 6-Quart Dutch Oven"
            />
          </div>
          <h1>Lodge Enameled Cast Iron 6-Quart Dutch Oven</h1>
          <div class={style.productInfo}>
            <a href="#">Check Price on Amazon</a>
            <a href="#">Check Price on Target</a>
            <p>This Dutch oven cooks as well as any high-end version and is a great buy in any color, as long as you don't
              mind it's
              slightly narrow bottom. <a href="#">Read More</a></p>
            <h2>Pros</h2>
            <ul class={style.pros}>
              <li>Cleans easily</li>
              <li>Multiple color options</li>
              <li>Scores high in a variety of cooking tests</li>
            </ul>
            <h2>Cons</h2>
            <ul class={style.cons}>
              <li>Smaller-than-average-base</li>
            </ul>
          </div>
        </li>

        <li>
          <div class={style.productImage}>
            <img
              src="assets/images/css-challenge-22/image-4.png"
              srcset="assets/images/css-challenge-22/image-4@2x.png 2x, assets/images/css-challenge-22/image-4.png 1x"
              alt="HexClad 5-Quart Dutch Oven"
            />
          </div>
          <h1>HexClad 5-Quart Dutch Oven</h1>
          <div class={style.productInfo}>
            <a href="#">Check Price on Amazon</a>
            <p>This stainless steel Dutch oven is lightweight and excels at browning and baking bread. However, its
              lightweight build
              means cooking results can vary. <a href="#">Read More</a></p>
            <h2>Pros</h2>
            <ul class={style.pros}>
              <li>Lightweight</li>
              <li>Even, fast heating</li>
              <li>Dishwasher safe</li>
            </ul>
            <h2>Cons</h2>
            <ul class={style.cons}>
              <li>Baking results sometimes take longer</li>
              <li>Unable to produce fond</li>
            </ul>
          </div>
        </li>

        <li>
          <div class={style.productImage}>
            <img
              src="assets/images/css-challenge-22/image-5.png"
              srcset="assets/images/css-challenge-22/image-5@2x.png 2x, assets/images/css-challenge-22/image-5.png 1x"
              alt="Staub Cast Iron 5.5-Quart Round Cocotte"
            />
          </div>
          <h1>Staub Cast Iron 5.5-Quart Round Cocotte</h1>
          <div class={style.productInfo}>
            <a href="#">Check Price on Amazon</a>
            <p>Highly rated and a pro with any cooking task you throw at it, the Staub Cast Iron Dutch oven is well worth its
              price...and weight. <a href="#">Read More</a></p>
            <h2>Pros</h2>
            <ul class={style.pros}>
              <li>Cleans easily</li>
              <li>Well built, solid</li>
              <li>Cooks evenly</li>
            </ul>
            <h2>Cons</h2>
            <ul class={style.cons}>
              <li>Heavy</li>
            </ul>
          </div>
        </li>
      </ol>
    </section>
  );
};
