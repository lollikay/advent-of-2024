import { CssChallenge01 } from "@features/css-1/ui";
import { CssChallenge02 } from "@features/css-2/ui";
import { CssChallenge03 } from "@features/css-3/ui";
import { CssChallenge04 } from "@features/css-4/ui";
import { NoChallenge } from "@features/no-challenge/ui";

export const challengeContainerId = 'challenge-container';

export class ChallengesSwitcherService {
  private container = document.getElementById(challengeContainerId);

  private challengeComponents: Record<number, () => JSX.Element> = {
    1: CssChallenge01,
    2: CssChallenge02,
    3: CssChallenge03,
    4: CssChallenge04,
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