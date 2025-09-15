export const calendarSelector = 'calendar';
export const dayAttribute = 'data-calendar-day';
export const selectedDayClass = 'selected';

export class CalendarService {
  private selector: string;
  private callback?: (day: number) => void;

  private calendar: HTMLElement | null = null;

  constructor(selector: string, callback?: (day: number) => void) {
    this.selector = selector;
    if (callback) {
      this.callback = callback;
    }
    this.init();
  }

  private init() {
    this.calendar = document.getElementById(this.selector);
    if (!this.calendar) return;
    this.calendar.addEventListener('click', this.handleDayClick.bind(this));
  }

  private clearActiveClasses() {
    if (!this.calendar) return;
    const activeElements = this.calendar.querySelectorAll(`.${selectedDayClass}`);
    activeElements.forEach(el => el.classList.remove(selectedDayClass));
  }

  private toggleDayClass(element: HTMLElement) {
    element.classList.toggle(selectedDayClass);
  }

  private handleDayClick(event: Event) {
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
      this.clearActiveClasses();
      this.toggleDayClass(target);
      this.callback?.(day);
    }
  }
}