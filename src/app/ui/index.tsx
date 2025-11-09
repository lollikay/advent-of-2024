import Html from '@kitajs/html';
import { Header } from '@widgets/header/ui';
import './style.scss';

export const Layout = (props: Html.PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
};
