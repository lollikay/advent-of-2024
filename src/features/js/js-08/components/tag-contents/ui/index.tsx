// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import style from './style.module.scss';
import { CloseIcon } from '../../close-icon/ui';

interface TagProps {
  text: string;
}

export const TagContents = ({ text }: TagProps) => {
  return (
    <>
      {text}
      <button
        class={style.button}
        aria-label="Remove tag"
        data-js-input-tag-remove
      >
        <CloseIcon />
      </button>
    </>
  );
};
