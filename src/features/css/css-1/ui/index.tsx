// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import marginStyle from '@shared/ui/margins/style.module.scss';
import style from './style.module.scss';
import { PhotoGalleryCard } from '../components/gallery-card/ui';

const photos = [
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

const maxVisiblePhotos = 5;
const overflowLength = photos.length - maxVisiblePhotos;
const galleries = Array.from({ length: 6 });

export const CssChallenge01 = () => {
  return (
    <section class={containerStyle.container}>
      <h1>CSS Challenge 01: photo gallery card</h1>
      {galleries.map((_, index) => (
        <>
          <h2>Photo gallery with {index + 1} photos</h2>
          <div class={style.photoGalleryContainer}>
            <div class={`${style.photoGallery} ${marginStyle.mb5}`}>
              {photos.map((photo, photoIndex) => {
                /**
                 * Generate 6 examples with different number of photos
                 * Show overflow only on the last gallery.
                 * This is purely convenience generation logic for the demo page.
                 */
                if (photoIndex > index) return null;
                if ((photoIndex + 1) > maxVisiblePhotos) return null;
                const shouldShowOverflow =
                  index === (galleries.length - 1) &&
                  photoIndex === (maxVisiblePhotos - 1) &&
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