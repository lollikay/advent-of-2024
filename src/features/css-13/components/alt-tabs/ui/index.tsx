// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import style from './style.module.scss';

interface AltTabsProps {
  tabs: {
    title: string;
  }[];
}

export const AltTabs = ({
  tabs
}: AltTabsProps) => {
  return (
    <div class={style.tabs}>
      {tabs.map((tab, index) => (
        <>
          <label class={style.tab}>
            <input type="radio" name="themed-switches" checked={index === 1} />
            {tab.title}
          </label>
          <div class={style.tabContent}>
            <h3>{tab.title}</h3>
            {index === 0 &&
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate excepturi magni ullam ipsum ea odio, sed,
                labore nam omnis reprehenderit, totam repudiandae consectetur
                velit fugiat aliquid earum? Vel, nam. Corporis.
              </p>
            }
            {index % 3 === 1 &&
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Alias accusamus numquam incidunt nesciunt? Corporis, quisquam debitis
                facilis mollitia id laborum tempore magnam perferendis nulla!
                Aperiam quisquam amet laboriosam vero perferendis.
              </p>
            }
            <p>
              Saepe iure facere velit libero eum recusandae ut.
              Maxime quo similique asperiores, rem dolorem illum impedit quos laudantium?
              Quam placeat qui quo!
            </p>
          </div>
        </>
      ))}
    </div>
  );
};
