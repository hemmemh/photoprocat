import { lazy } from 'react';
import {
  HOME_ROUTE,
  CATALOG_ROUTE,
  PRODUCT_ROUTE,
  COMPARE_ROUTE,
  BASKET_ROUTE,
  USER_ROUTE,
  REGISTRATION_ROUTE,
  NEWS_ROUTE,
  LOVES_ROUTE,
} from './routs';
import Page_404 from '../../pages/page404/Page_404';

const HomeLazy = lazy(() => import('../../pages/home/Home'));
const CatalogLazy = lazy(() => import('../../pages/catalog/Catalog'));
const ProductLazy = lazy(() => import('../../pages/product/Product'));
const CompareLazy = lazy(() => import('../../pages/compare/Compare'));
const BasketLazy = lazy(() => import('../../pages/basket/Basket'));
const UserLazy = lazy(() => import('../../pages/user/User'));
const NewsLazy = lazy(() => import('../../pages/news/News'));
const RegistrationLazy = lazy(() => import('../../pages/registration/Registration'));
const LovesLazy = lazy(() => import('../../pages/loves/Loves'));

export const publicRouts = [
  {
    path: HOME_ROUTE,
    module: HomeLazy,
  },
  {
    path: CATALOG_ROUTE,
    module: CatalogLazy,
  },
  {
    path: PRODUCT_ROUTE + '/:id',
    module: ProductLazy,
  },
  {
    path: COMPARE_ROUTE,
    module: CompareLazy,
  },
  {
    path: BASKET_ROUTE,
    module: BasketLazy,
  },
  {
    path: USER_ROUTE,
    module: UserLazy,
  },
  {
    path: NEWS_ROUTE,
    module: NewsLazy,
  },
  {
    path: REGISTRATION_ROUTE,
    module: RegistrationLazy,
  },
  {
    path: LOVES_ROUTE,
    module: LovesLazy,
  },
  {
    path: '*',
    module: Page_404,
  },
];

export const authRouts = [
  {
    path: HOME_ROUTE,
    module: HomeLazy,
  },
];
