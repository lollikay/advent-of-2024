import { NoChallenge } from '@features/index';

export const challengeContainerId = 'challenge-container';

export class ChallengesSwitcherService {
  private container = document.getElementById(challengeContainerId);

  constructor() {}

  renderChallenge(challengeComponent: () => JSX.Element = NoChallenge) {
    if (!this.container) return;

    this.container.innerHTML = '';

    const challengeElement = challengeComponent().toString();
    this.container.innerHTML = challengeElement;
  }
}
