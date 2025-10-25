// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';

export const NoChallenge = () => {
  return (
    <section class={containerStyle.container}>
      <h1>No Challenge on this day</h1>
    </section>
  );
};