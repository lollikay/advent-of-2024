// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import style from './style.module.scss';
import { BlueSkyIcon, CloseIcon, GithubIcon, InstagramIcon, MegaphoneIcon, ThreadsIcon, YoutubeIcon } from '../components';

const socialIcons = [
  BlueSkyIcon,
  GithubIcon,
  InstagramIcon,
  ThreadsIcon,
  YoutubeIcon,
];

export const JsChallenge10 = () => {
  return (
    <section class={style.section}>
      <header class={containerStyle.container}>
        <h1>JS Challenge 10: Floating button</h1>
      </header>
      <main>
        <div class={style.toggleContainer} data-js-challenge="10">
          <button
            type="button"
            class={style.toggle}
            data-js-toggle
          >
            <span class={style.toggleOpen}>
              <MegaphoneIcon />
            </span>
            <span class={style.toggleClose}>
              <CloseIcon />
            </span>
          </button>
          <ul class={style.socialIcons}>
            {socialIcons.map((Component, index) => {
              return (
                <li
                  class={style.socialIcon}
                  style={{
                    '--i': index - 1,
                  } as JSX.CSSProperties}
                >
                  <a href="" class={style.socialLink}>
                    <Component />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </section>
  );
};
