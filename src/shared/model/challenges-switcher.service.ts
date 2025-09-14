import { CssChallenge01 } from "@features/css-1/ui";
import { NoChallenge } from "@features/no-challenge/ui";

export const challengeContainerId = 'challenge-container';

export class ChallengesSwitcherService {
  challengeId: number = 0;

  challengeComponents: Record<number, () => string> = {
    1: () => CssChallenge01().toString(),
  };

  constructor() { }
  
  setChallenge(id: number) {
    this.challengeId = id;
    this.renderChallenge();
  }

  renderChallenge() {
    const container = document.getElementById(challengeContainerId);
    if (!container) return;

    container.innerHTML = ''; // Clear previous content

    const challengeComponent = this.challengeComponents[this.challengeId];
    if (challengeComponent) {
      const challengeElement = challengeComponent();
      container.innerHTML = challengeElement;
    } else {
      container.innerHTML = NoChallenge().toString();
    }
  }
}