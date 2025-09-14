// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import container from '@shared/ui/container/style.module.scss';
import styles from './style.module.scss';

export const Header = () => {
  return (
    <header class={styles.header}>
      <div class={container.container}>
        <h1>Advent of 2024</h1>
      </div>
    </header>
  );
};