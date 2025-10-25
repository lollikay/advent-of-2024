// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import { Layout } from "../../../app/ui";
import { Calendar } from '@widgets/calendar/ui';
import { ChallengeContainer } from '@widgets/challenge-container/ui';
import style from './style.module.scss';
import containerStyle from '@shared/ui/container/style.module.scss';

export const HomePage = () => {
  return (
    <Layout>
      <div class={containerStyle.container}>
        <div class={style.grid}>
          <Calendar id='css-calendar' title="CSS 2024" />
          <Calendar id='js-calendar' title='JavaScript 2024' />
        </div>
      </div>
      <ChallengeContainer />
    </Layout>
  );
};