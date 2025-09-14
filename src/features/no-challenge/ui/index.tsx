// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import container from '@shared/ui/container/style.module.scss';

export const NoChallenge = () => {
  return (
    <section class={container.container}>
      <h1>No Challenge on this day</h1>
    </section>
  );
};