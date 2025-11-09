// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import style from './style.module.scss';

interface TabsProps {
  tabs: {
    image: string;
    content: string;
  }[];
  defaultTab?: number;
}

export const Tabs = ({ tabs, defaultTab = 0 }: TabsProps) => {
  return (
    <div class={style.tabs}>
      {tabs.map((_, index) => (
        <input
          type="radio"
          name="switches"
          class={style.tabSwitchInput}
          checked={index === defaultTab}
          id={`switch-${index}`}
        />
      ))}
      <ul class={style.tabsSwitches}>
        {tabs.map((tab, index) => (
          <li class={style.tabSwitchItem}>
            <label for={`switch-${index}`} class={style.tabSwitch}>
              {tab.image}
            </label>
          </li>
        ))}
        <li class={style.tabSwitchHover}></li>
      </ul>
      {tabs.map((tab) => (
        <div class={style.tabPanel}>
          <h3>{tab.content}</h3>
        </div>
      ))}
    </div>
  );
};
