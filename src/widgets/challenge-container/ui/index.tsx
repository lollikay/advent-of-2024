// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import { challengeContainerId } from '@shared/model/challenges-switcher.service';

export const ChallengeContainer = () => {
  return (
    <div id={challengeContainerId}></div>
  );
}