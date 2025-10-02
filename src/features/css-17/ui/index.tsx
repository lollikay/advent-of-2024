// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import style from './style.module.scss';

export const CssChallenge17 = () => {
  return (
    <>
      <h1>
        CSS Challenge 17: Newsletter signup form
      </h1>
      <section class={style.section}>
        <div class={style.container}>
          <form style={style.form} action="">
            <label class={style.formGroup}>
              First name
              <input class={style.input} type="text" name="firstName" />
            </label>
            <label class={style.formGroup}>
              Last name
              <input class={style.input} type="text" name="lastName" />
            </label>
            <label class={style.formGroup}>
              Email
              <input class={style.input} type="email" name="email" />
            </label>
            <button class={style.button} type="submit">Sign up</button>
          </form>
        </div>
      </section>
    </>
  )
};
