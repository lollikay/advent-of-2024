import Html from '@kitajs/html';
import { Header } from "../../widgets/header/ui";

export const Layout = (props: Html.PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>
        {props.children}
      </main>
    </>
  );
}