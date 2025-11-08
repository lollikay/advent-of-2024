import { HomePage } from './pages/home/ui/index.tsx';
import { ChallengesSwitcherService } from './widgets/challenge-container/model/challenges-switcher.service.ts';
import { CalendarService, eventActiveDayClickByCalendar } from './widgets/calendar/model/calendar.service.ts';
import {
  CssChallenge01,
  CssChallenge02,
  CssChallenge03,
  CssChallenge04,
  CssChallenge05,
  CssChallenge06,
  CssChallenge07,
  CssChallenge08,
  CssChallenge09,
  CssChallenge10,
  CssChallenge11,
  CssChallenge12,
  CssChallenge13,
  CssChallenge14,
  CssChallenge15,
  CssChallenge16,
  CssChallenge17,
  CssChallenge18,
  CssChallenge19,
  CssChallenge20,
  CssChallenge21,
  CssChallenge22,
  CssChallenge23,
  CssChallenge24,
  JsChallenge01,
  JsChallenge02,
  JsChallenge03,
  JsChallenge04,
  JsChallenge05,
} from '@features/index.ts';
import { destroyChallengeEventName } from '@shared/model/index.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = HomePage().toString();

const cssChallengeComponents: Record<number, () => JSX.Element> = {
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
  18: CssChallenge18,
  19: CssChallenge19,
  20: CssChallenge20,
  21: CssChallenge21,
  22: CssChallenge22,
  23: CssChallenge23,
  24: CssChallenge24,
};

const jsChallengeComponents: Record<number, () => JSX.Element> = {
  1: JsChallenge01,
  2: JsChallenge02,
  3: JsChallenge03,
  4: JsChallenge04,
  5: JsChallenge05,
};

const challengesSwitcherService = new ChallengesSwitcherService();

const onCssDayClick = (day: number) => {
  challengesSwitcherService.renderChallenge(cssChallengeComponents[day]);
};

const destroyPreviousScriptsEvent = new CustomEvent(destroyChallengeEventName);

const onJsDayClick = (day: number) => {
  document.dispatchEvent(destroyPreviousScriptsEvent);

  challengesSwitcherService.renderChallenge(jsChallengeComponents[day]);
  const fileNameDay = day < 10 ? `0${day}` : day;
  import(`./features/js/js-${fileNameDay}/model/script.ts`)
    .then((module) => {
      if (module && typeof module.init === 'function') {
        module.init();
        return;
      }
      console.error(`JS Challenge ${fileNameDay} script module does not have an init function`);
    })
    .catch((error) => {
      console.error(`No JS Challenge ${fileNameDay} script module:`, error);
    });
};

const calendars = [
  new CalendarService('css-calendar', onCssDayClick),
  new CalendarService('js-calendar', onJsDayClick),
];

document.addEventListener(eventActiveDayClickByCalendar, (event) => {
  const { detail, target } = event as CustomEvent;
  const activeInstance = detail.calendarInstance as CalendarService;
  for (const calendar of calendars) {
    if (calendar !== activeInstance) {
      calendar.clearActiveClassesIfNotThisCalendar(target as HTMLElement);
    }
  }
});
