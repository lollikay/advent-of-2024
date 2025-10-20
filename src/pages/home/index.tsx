// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import { Layout } from "../../app/ui";
import { Calendar } from '@widgets/calendar/ui';
import { ChallengeContainer } from '@widgets/challenge-container/ui';

export const HomePage = () => {
  return (
    <Layout>
      <Calendar id='css-calendar' />
      <Calendar id='js-calendar' title='JavaScript 2024' />
      <ChallengeContainer />
    </Layout>
  );
};