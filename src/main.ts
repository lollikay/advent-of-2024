import { HomePage } from './pages/home/index.tsx';
import { ChallengesSwitcherService } from './widgets/challenge-container/model/challenges-switcher.service.ts';
import { CalendarService } from './widgets/calendar/model/calendar.service.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = HomePage().toString();

const challengesSwitcherService = new ChallengesSwitcherService();

const onCssDayClick = (day: number) => {
  challengesSwitcherService.setChallenge(day);
};

new CalendarService('css-calendar', onCssDayClick);