import { genresRoutes, routes } from "./routes";
import { MenuItemInt,SubmenuItemInt } from "./interfaces";

export const submenuGenres:Array<SubmenuItemInt> = [
  { id: '1', path: genresRoutes.ACTION_MOVIE, title: 'Боевики', value: 'боевик' },
  { id: '2', path: genresRoutes.MILITARY, title: 'Военные', value: 'военный' },
  { id: '3', path: genresRoutes.DETECTIVE, title: 'Детективы', value: 'детектив' },
  { id: '4', path: genresRoutes.FAMILY, title: 'Семейные', value: 'семейный' },
  { id: '5', path: genresRoutes.DRAMA, title: 'Драмы', value: 'драма' },
  { id: '6', path: genresRoutes.COMEDY, title: 'Комедии', value: 'комедия' },
  { id: '7', path: genresRoutes.CRIMINAL, title: 'Криминал', value: 'криминал' },
  { id: '8', path: genresRoutes.MELODRAMA, title: 'Мелодрамы', value: 'мелодрама' },
  { id: '9', path: genresRoutes.THRILLER, title: 'Триллеры', value: 'триллер' },
  { id: '10', path: genresRoutes.HORROR, title: 'Ужасы', value: 'ужасы' },
  { id: '11', path: genresRoutes.FANTASTIC, title: 'Фантастика', value: 'фантастика' },
  { id: '12', path: genresRoutes.FANTASY, title: 'Фэнтези', value: 'фэнтези' },
];

export const menu: Array<MenuItemInt> = [
  {
    id: '1',
    path: routes.INDEX,
    title: 'Главная',
  },
  {
    id: '2',
    path: routes.MOVIES,
    title: 'Фильмы',
  },
  {
    id: '3',
    path: routes.GENRES,
    title: 'По жанру',
    submenu: submenuGenres,
  },
  {
    id: '4',
    path: routes.SERIALS,
    title: 'Сериалы',
  },
  {
    id: '5',
    path: routes.CARTOONS,
    title: 'Мультфильмы',
  },
];

