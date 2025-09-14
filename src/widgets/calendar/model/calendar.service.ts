export const calendarSelector = 'calendar';
export const dayAttribute = 'data-calendar-day';

export class CalendarService {
  private selector: string;
  private callback?: (day: number) => void;

  constructor(selector: string, callback?: (day: number) => void) {
    this.selector = selector;
    if (callback) {
      this.callback = callback;
    }
    this.init();
  }

  init() {
    const calendar = document.getElementById(this.selector);
    if (!calendar) return;
    calendar.addEventListener('click', this.handleDayClick.bind(this));
  }

  private handleDayClick(event: Event) {
    console.debug('CalendarService: handleDayClick event', event);
    const target = event.target as HTMLElement;
    if (!target.matches(`[${dayAttribute}]`)) {
      return;
    }
    const dayValue = target.getAttribute(dayAttribute);
    if (!dayValue) {
      return;
    }
    const day = parseInt(dayValue);
    if (!isNaN(day)) {
      this.callback?.(day);
    }
  }
}