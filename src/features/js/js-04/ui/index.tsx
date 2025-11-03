// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import style from './style.module.scss';

export const JsChallenge04 = () => {
  return (
    <section class={containerStyle.container}>
      <h1>JS Challenge 04: Resizeable panels</h1>
      <div
        class={style.verticalGrid}
        data-js-challenge="04"
      >
        <div
          class={style.topPanel}
          data-js-panel="top"
        ></div>
        <button
          class={[style.resizer, style.horizontal].join(" ")}
          type="button"
          data-js-resizer="vertical"
        ></button>
        <div
          class={style.bottomPanel}
          data-js-panel="bottom"
        >
          <div class={style.horizontalGrid}>
            <div
              class={style.leftPanel}
              data-js-panel="left"
            ></div>
            <button
              class={[style.resizer, style.vertical].join(" ")}
              type="button"
              data-js-resizer="horizontal"
            ></button>
            <div
              class={style.rightPanel}
              data-js-panel="right"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
