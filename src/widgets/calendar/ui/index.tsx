// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import { dayAttribute } from '../model/calendar.service';
import style from './style.module.scss';
import container from '@shared/ui/container/style.module.scss';

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

interface CalendarProps {
  id: string;
}

export const Calendar = ({
  id
}: CalendarProps) => {
  return (
    <section class={`${style.calendar} ${container.container}`} id={id}>
      <h1>December 2024</h1>
      <div class={style['calendar-grid']}>
        {daysOfWeek.map(day => (
          <div class={`${style.header} ${style['calendar-day']}`}>
            {day}
          </div>
        ))}
        {days.map(day => {
          const props = {[dayAttribute]: day.toString()};
          return (
            <button
              {...props}
              class={style['calendar-day']}
            >
              {day}
            </button>
          )
        })}
      </div>
    </section>
  );
};