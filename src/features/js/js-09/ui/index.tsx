// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import style from './style.module.scss';
import { Button, CheckInput, Label, TextInput } from '../components';
import { movies, reindeers } from '../model/data';

export const JsChallenge09 = () => {
  return (
    <div class={style.dark}>
      <section class={containerStyle.container} data-js-challenge="09">
        <h1>JS Challenge 09: Persistent data in a form</h1>
        <form class={style.form}>
          <div class={style.formControl}>
            <Label label="Full Name" required controlName="fullName" />
            <TextInput name="fullName" required />
          </div>
          <div class={style.formControl}>
            <Label label="Email Address" required controlName="email" />
            <TextInput name="email" required />
          </div>
          <div class={style.formControl}>
            <Label label="Favorite Reindeer" required controlName="reindeer" />
            <div class={style.grid}>
              {reindeers.map((reindeer) => (
                <CheckInput
                  type="radio"
                  name="reindeer"
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
              controlName="movies"
            />
            {movies.map((movie) => (
              <CheckInput
                type="checkbox"
                name="movies"
                value={movie.value}
                label={movie.label}

              />
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
