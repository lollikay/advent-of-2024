// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import './style.scss';

export const PhotoGalleryCard = (props: { src: string; overflowLength: number; }) => {
  return (
    <div
      class={`photo-gallery-card ${props.overflowLength > 0 ? 'with-overflow' : ''}`}
      data-overflow={props.overflowLength > 0 ? `+${props.overflowLength}` : undefined}
    >
      <img
        src={props.src}
        loading='lazy'
        alt=""
      />
    </div>
  )
};