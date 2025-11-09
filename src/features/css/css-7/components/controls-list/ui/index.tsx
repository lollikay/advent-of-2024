// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import { EmailControl } from '../../email-control/ui';
import style from '@shared/ui/margins/style.module.scss';

interface ControlsListProps {
  elementClass?: string;
}

export const ControlsList = ({ elementClass = '' }: ControlsListProps) => {
  return (
    <>
      {Array(3)
        .fill(0)
        .map((_, i) => {
          const isValid = i % 3 === 1;
          const isInvalid = i % 3 === 2;
          const classes = [isValid ? 'valid' : '', isInvalid ? 'invalid' : '', elementClass].filter(
            Boolean
          );
          return (
            <div class={style.mb4}>
              <EmailControl
                className={classes}
                value={isValid ? 'meh@feh.com' : isInvalid ? 'meh.feh.com' : ''}
              />
            </div>
          );
        })}
    </>
  );
};
