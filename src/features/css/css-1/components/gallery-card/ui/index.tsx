// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import style from './style.module.scss';

export const PhotoGalleryCard = (props: { src: string; overflowLength: number }) => {
  return (
    <div
      class={`${style.photoGalleryCard} ${props.overflowLength > 0 ? style.withOverflow : ''}`}
      data-overflow={props.overflowLength > 0 ? `+${props.overflowLength}` : undefined}
    >
      <img src={props.src} loading="lazy" alt="" />
    </div>
  );
};
