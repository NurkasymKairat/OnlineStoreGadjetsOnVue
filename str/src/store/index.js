import { createStore } from "vuex";
import { BurgersModule } from "./BurgersModule";
import { SlidesModule } from "./SlidesModule";
import { AllProducts } from "./AllProducts";
import { CatalogFilter } from "./Catalog";
export default createStore({
  modules: {
     BurgersModule,
     SlidesModule,
     AllProducts,
     CatalogFilter,
  }
});
