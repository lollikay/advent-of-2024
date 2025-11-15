// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import { dayAttribute } from '../model/calendar.service';
import style from './style.module.scss';

const days = Array.from({ length: 24 }, (_, i) => i + 1);
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

interface CalendarProps {
  id: string;
  title?: string;
}

export const Calendar = ({ id, title = 'December 2024' }: CalendarProps) => {
  return (
    <section class={style.calendar} id={id}>
      <h1>{title}</h1>
      <div class={style.calendarGrid}>
        {daysOfWeek.map((day) => (
          <div class={style.calendarDayHeader}>{day}</div>
        ))}
        {days.map((day) => {
          const props = { [dayAttribute]: day.toString() };
          return (
            <button {...props} class={style.calendarDay} type="button">
              {day}
            </button>
          );
        })}
      </div>
    </section>
  );
};
