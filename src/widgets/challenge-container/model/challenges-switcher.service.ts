import { CssChallenge01 } from "@features/css-1/ui";
import { NoChallenge } from "@features/no-challenge/ui";

export const challengeContainerId = 'challenge-container';

export class ChallengesSwitcherService {
  private container = document.getElementById(challengeContainerId);

  challengeComponents: Record<number, () => JSX.Element> = {
    1: CssChallenge01,
  };

  constructor() { }

  private renderChallenge(id: number) {
    if (!this.container) return;

    this.container.innerHTML = '';

    const challengeComponent = this.challengeComponents[id] ?? NoChallenge;
    const challengeElement = challengeComponent().toString();
    this.container.innerHTML = challengeElement;
  }
  
  setChallenge(id: number) {
    this.renderChallenge(id);
  }
}