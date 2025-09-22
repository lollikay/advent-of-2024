import { CssChallenge01 } from "@features/css-1/ui";
import { CssChallenge10 } from "@features/css-10/ui";
import { CssChallenge11 } from "@features/css-11/ui";
import { CssChallenge02 } from "@features/css-2/ui";
import { CssChallenge03 } from "@features/css-3/ui";
import { CssChallenge04 } from "@features/css-4/ui";
import { CssChallenge05 } from "@features/css-5/ui";
import { CssChallenge06 } from "@features/css-6/ui";
import { CssChallenge07 } from "@features/css-7/ui";
import { CssChallenge08 } from "@features/css-8/ui";
import { CssChallenge09 } from "@features/css-9/ui";
import { NoChallenge } from "@features/no-challenge/ui";

export const challengeContainerId = 'challenge-container';

export class ChallengesSwitcherService {
  private container = document.getElementById(challengeContainerId);

  private challengeComponents: Record<number, () => JSX.Element> = {
    1: CssChallenge01,
    2: CssChallenge02,
    3: CssChallenge03,
    4: CssChallenge04,
    5: CssChallenge05,
    6: CssChallenge06,
    7: CssChallenge07,
    8: CssChallenge08,
    9: CssChallenge09,
    10: CssChallenge10,
    11: CssChallenge11,
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