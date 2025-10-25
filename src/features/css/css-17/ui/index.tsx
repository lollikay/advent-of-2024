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
          <h1>
            NEWSLETTER SIGNUP
          </h1>
          <form
            class={style.form}
            action=""
            id="newsletter"
            method="POST"
          >
            <label class={style.formGroup}>
              <span class={style.formLabel}>First name</span>
              <input class={style.formInput} type="text" name="firstName" />
            </label>
            <label class={style.formGroup}>
              <span class={style.formLabel}>Last name</span>
              <input class={style.formInput} type="text" name="lastName" />
            </label>
            <label class={style.formGroup}>
              <span class={style.formLabel}>Email</span>
              <input class={style.formInput} type="email" name="email" />
            </label>
          </form>
          <button
            form="newsletter"
            class={style.formButton}
            type="submit"
          >Sign up</button>
        </div>
      </section>
    </>
  )
};
