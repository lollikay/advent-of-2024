// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import './style.module.scss';

export const CssChallenge03 = () => {
  return (
    <section class={containerStyle.container}>
      <h1>CSS Challenge 03: css only tooltip</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        <span data-tooltip="Lorem ipsum dolor">Labore dicta</span>{" "}
        autem ipsam delectus nisi necessitatibus iste,{" "}
        omnis pariatur temporibus aliquid rerum porro, minima,{" "}
        veniam <span data-tooltip="Lorem ipsum dolor sit amet consectetur adipisicing elit.">magnam</span>!{" "}
        Ullam, libero culpa? Id, odit.
      </p>
      <p>
        Lorem{" "}
        <span
          data-tooltip="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Provident temporibus possimus adipisci! Quod iusto hic nemo labore nihil asperiores, 
            reprehenderit omnis sunt odit, atque quae rem optio eum assumenda tenetur.
          "
          data-tooltip-position="left"
        >
          ipsum
        </span>{" "}
        dolor sit amet consectetur adipisicing elit. Autem aperiam{" "}
        tempore libero nisi sequi fugit ipsum repellat ad distinctio rerum nemo suscipit,{" "}
        modi sit optio officia ullam quia aliquid dolore.
      </p>
    </section>
  )
}