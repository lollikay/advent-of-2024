// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import '@shared/ui/container/style.scss';
import '@shared/ui/margins/style.scss';
import './style.scss';

export const CssChallenge02 = () => {
  return (
    <section class="container">
      <h1>CSS Challenge 02: toggle</h1>
      <h2>Original challenge</h2>
      <div class="mb-5">
        <label class="toggle">
          <input type="checkbox" class="toggle-checkbox" checked />
          <span class="toggle-element"></span>
        </label>
      </div>
      <div class="mb-5">
        <label class="toggle">
          Toggle the toggle!
          <input type="checkbox" class="toggle-checkbox" />
          <span class="toggle-element"></span>
        </label>
      </div>
      <div class="mb-5">
        <label class="toggle">
          <input type="checkbox" class="toggle-checkbox" disabled />
          <span class="toggle-element"></span>
        </label>
      </div>
      <div>
        <label class="toggle">
          <input type="checkbox" class="toggle-checkbox" checked disabled />
          <span class="toggle-element"></span>
        </label>
      </div>
      <h2>Themed toggle</h2>
      <div class="mb-5">
        <label class="toggle themed">
          <input type="checkbox" class="toggle-checkbox" checked />
          <span class="toggle-element"></span>
        </label>
      </div>
      <div class="mb-5">
        <label class="toggle themed">
          <input type="checkbox" class="toggle-checkbox" />
          <span class="toggle-element"></span>
          Toggle the toggle!
        </label>
      </div>
      <div class="mb-5">
        <label class="toggle themed">
          <input type="checkbox" class="toggle-checkbox" disabled />
          <span class="toggle-element"></span>
        </label>
      </div>
      <div>
        <label class="toggle themed">
          <input type="checkbox" class="toggle-checkbox" checked disabled />
          <span class="toggle-element"></span>
        </label>
      </div>
    </section>
  )
}