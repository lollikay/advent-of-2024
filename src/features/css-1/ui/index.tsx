// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import '@shared/ui/container/style.scss';
import '@shared/ui/margins/style.scss';
import './style.scss';
import { PhotoGalleryCard } from '../components/gallery-card/ui';

const photoes = [
  {
    src: '/assets/images/css-challenge-01/josh-harrison-jY_fTS7ZE98-unsplash.jpg',
  },
  {
    src: '/assets/images/css-challenge-01/annie-spratt-zh7GEuORbUw-unsplash.jpg',
  },
  {
    src: '/assets/images/css-challenge-01/toa-heftiba-WsDF95mSUsI-unsplash.jpg',
  },
  {
    src: '/assets/images/css-challenge-01/monika-grabkowska-yuAEcsAe4lk-unsplash.jpg',
  },
  {
    src: '/assets/images/css-challenge-01/erwan-hesry-e9jV1ZyrOmg-unsplash.jpg',
  },
  {
    src: '/assets/images/css-challenge-01/brooke-lark-F_IST8bKxhI-unsplash.jpg',
  },
];

const maxVisiblePhotoes = 5;
const overflowLength = photoes.length - maxVisiblePhotoes;
const galleries = Array.from({ length: 6 });

export const CssChallenge01 = () => {
  return (
    <section class="container">
      <h1>CSS Challenge 01: photo gallery card</h1>
      {galleries.map((_, index) => (
        <>
          <h2>Photo gallery with {index + 1} photoes</h2>
          <div class="photo-gallery-container">
            <div class="photo-gallery mb-5">
              {photoes.map((photo, photoIndex) => {
                /**
                 * Generate 6 examples with different number of photoes
                 * Show overflow only on the last gallery.
                 * This is purely convenience generation logic for the demo page.
                 */
                if (photoIndex > index) return null;
                if ((photoIndex + 1) > maxVisiblePhotoes) return null;
                const shouldShowOverflow =
                  index === (galleries.length - 1) &&
                  photoIndex === (maxVisiblePhotoes - 1) &&
                  overflowLength > 0;
                return (
                  <PhotoGalleryCard
                    src={photo.src}
                    overflowLength={shouldShowOverflow ? overflowLength : 0}
                  />
                )
              })}
            </div>
          </div>
        </>
      ))}
    </section>
  );
};