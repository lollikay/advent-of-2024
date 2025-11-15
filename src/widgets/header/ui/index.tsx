// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import './style.scss';

export const Header = () => {
  return (
    <header class="header">
      <div class={containerStyle.container}>
        <h1>Advent of 2024</h1>
      </div>
    </header>
  );
};
