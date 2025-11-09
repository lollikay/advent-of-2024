// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';
import containerStyle from '@shared/ui/container/style.module.scss';
import style from './style.module.scss';

export const CssChallenge19 = () => {
  return (
    <div class={containerStyle.container}>
      <h1>CSS Challenge 19: news site layout</h1>
      <div class={style.cssChallenge19}>
        <section>
          <article>
            <img
              src="assets/images/css-challenge-19/capitol.jpg"
              alt="What's in and out of the government funding bill"
            />
            <h1>What's in and out of the government funding bill</h1>
          </article>

          <article>
            <img
              src="assets/images/css-challenge-19/romney.jpg"
              alt="Romney says his final vote was to ‘protest’ the ‘absurd way’ government is run"
            />
            <h1>Romney says his final vote was to ‘protest’ the ‘absurd way’ government is run</h1>
          </article>

          <article>
            <img
              src="assets/images/css-challenge-19/smerc.jpg"
              alt="Smerconish shares his take on the debt ceiling debate"
            />
            <h1>Smerconish shares his take on the debt ceiling debate</h1>
          </article>

          <article>
            <img
              src="assets/images/css-challenge-19/trump-tomlinson-split.jpg"
              alt="‘Honeymoon is over’: GOP strategist on what shutdown drama may mean for Trump"
            />
            <h1>‘Honeymoon is over’: GOP strategist on what shutdown drama may mean for Trump</h1>
          </article>
        </section>

        <section>
          <article>
            <img
              src="assets/images/css-challenge-19/christmas-market.jpg"
              alt="Saudi Arabia warned Germany three times about market attack suspect, source says"
            />
            <h1>
              Saudi Arabia warned Germany three times about market attack suspect, source says
            </h1>
          </article>

          <article>
            <img
              src="assets/images/css-challenge-19/justice.jpg"
              alt="Durbin uses new report to accuse Justices Thomas and Alito of violating disclosure laws"
            />
            <h1>
              Durbin uses new report to accuse Justices Thomas and Alito of violating disclosure
              laws
            </h1>
          </article>
        </section>

        <section>
          <article>
            <img
              src="assets/images/css-challenge-19/football.jpg"
              alt="Here’s who’s playing today in the first round of the playoffs"
            />
            <h1>Here’s who’s playing today in the first round of the playoffs</h1>
          </article>

          <article>
            <img
              src="assets/images/css-challenge-19/brain-rot.jpg"
              alt="‘Brain rot’ is increasingly common. Dr. Sanjay Gupta explains how to combat it"
            />
            <h1>‘Brain rot’ is increasingly common. Dr. Sanjay Gupta explains how to combat it</h1>
          </article>

          <article>
            <img
              src="assets/images/css-challenge-19/injuries.jpg"
              alt="An estimated 16,000 people go to the hospital for holiday decor-related injuries each year"
            />
            <h1>
              An estimated 16,000 people go to the hospital for holiday decor-related injuries each
              year
            </h1>
          </article>
        </section>
      </div>
    </div>
  );
};
