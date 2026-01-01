// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import style from './style.module.scss';
import { Button, CheckInput, Label, TextInput } from '../components';
import { controlNames, movies, reindeers } from '../model/data';
import marginStyle from '@shared/ui/margins/style.module.scss';

export const JsChallenge09 = () => {
  return (
    <div class={style.jsChallenge09}>
      <section class={containerStyle.container} data-js-challenge="09">
        <h1>JS Challenge 09: Persistent data in a form</h1>
        <form
          class={style.form}
          data-js-persistent-form
        >
          <div class={style.formControl}>
            <Label label="Full Name" required controlName={controlNames.fullName} />
            <TextInput name={controlNames.fullName} required />
          </div>
          <div class={style.formControl}>
            <Label label="Email Address" required controlName={controlNames.email} />
            <TextInput name={controlNames.email} required />
          </div>
          <div class={style.formControl}>
            <Label label="Favorite Reindeer" required controlName={controlNames.reindeer} />
            <div class={style.grid}>
              {reindeers.map((reindeer) => (
                <CheckInput
                  type="radio"
                  name={controlNames.reindeer}
                  value={reindeer.value}
                  label={reindeer.label}
                  required
                />
              ))}
            </div>
          </div>
          <div class={style.formControl}>
            <Label
              label="What holiday movies have you watched this year?"
              controlName={controlNames.movies}
            />
            {movies.map((movie) => (
              <div class={marginStyle.mb4}>
                <CheckInput
                  type="checkbox"
                  name={controlNames.movies}
                  value={movie.value}
                  label={movie.label}
                />
              </div>
            ))}
          </div>
          <div>
            <Button type="submit" label="Submit" />
          </div>
        </form>
      </section>
    </div>
  );
};
