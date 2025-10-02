import {
  CssChallenge01,
  CssChallenge10,
  CssChallenge11,
  CssChallenge12,
  CssChallenge13,
  CssChallenge14,
  CssChallenge15,
  CssChallenge16,
  CssChallenge17,
  CssChallenge02,
  CssChallenge03,
  CssChallenge04,
  CssChallenge05,
  CssChallenge06,
  CssChallenge07,
  CssChallenge08,
  CssChallenge09,
  NoChallenge
} from "@features/index";

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
    12: CssChallenge12,
    13: CssChallenge13,
    14: CssChallenge14,
    15: CssChallenge15,
    16: CssChallenge16,
    17: CssChallenge17,
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