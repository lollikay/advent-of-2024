// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import './style.scss';

interface EmailControlProps {
  className?: string;
  value?: string;
}

export const EmailControl = ({
  className = '',
  value = '',
}: EmailControlProps) => {
  return (
    <label class={`form-control ${className}`}>
      <span class="form-control__label">
        Email address
      </span>
      <input
        placeholder='some@mail.com'
        name="email-1"
        class="form-control__input"
        type="email"
        value={value}
        required
      />
    </label>
  );
};