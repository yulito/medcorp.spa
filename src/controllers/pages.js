import Home from "./home.controller";
import Imc from "./imc.controller";
import Mets from "./mets.controller";
import kcal from "./calories.controller";
import NotFound from "./error404.controller";

const pages = {
  home: Home,
  imc: Imc,
  mets: Mets,
  kcal: kcal,
  notFound: NotFound,
};

export { pages };