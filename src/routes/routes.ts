import { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
import { ShopingPage } from "../02-component-patterns/pages/ShopingPage";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}
// Para importar el componente lazy, este debe exportarse por defecto
// export default LazyPage1;
// Para renombrar el chunk al bundle de producción, se debe poner tal cual
// como el ejemplo de abajo (como si fuera comentario)
// const Lazy1 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage1" */ "../01-lazyload/pages/LazyPage1")
// );
// const Lazy2 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage2" */ "../01-lazyload/pages/LazyPage2")
// );
// const Lazy3 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage3" */ "../01-lazyload/pages/LazyPage3")
// );
const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
);

export const routes: Route[] = [
  {
    to: "/lazyload",
    path: "lazyload/*",
    Component: LazyLayout,
    name: "Lazy Layout",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
  {
    to: "/shopping",
    path: "shopping",
    Component: ShopingPage,
    name: "Shopping",
  },
];
