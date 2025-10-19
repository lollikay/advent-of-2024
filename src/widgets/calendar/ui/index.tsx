// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import { dayAttribute } from '../model/calendar.service';
import './style.scss';
import '@shared/ui/container/style.scss';

const days = Array.from({ length: 24 }, (_, i) => i + 1);
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

interface CalendarProps {
  id: string;
}

export const Calendar = ({
  id
}: CalendarProps) => {
  return (
    <section class="calendar container" id={id}>
      <h1>December 2024</h1>
      <div class="calendar-grid">
        {daysOfWeek.map(day => (
          <div
            class="calendar-day-header"
          >
            {day}
          </div>
        ))}
        {days.map(day => {
          const props = {[dayAttribute]: day.toString()};
          return (
            <button
              {...props}
              class="calendar-day"
              type="button"
            >
              {day}
            </button>
          )
        })}
      </div>
    </section>
  );
};