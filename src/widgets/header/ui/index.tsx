// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html';

export const Header = () => {
  return (
    <header class="app-header">
      <h1>Advent of 2024</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/css-challenges">CSS Challenges</a></li>
        </ul>
      </nav>
    </header>
  );
};