import { createListSortTeamplate } from './view/list-sort-view.js';
import { createListFilterTeamplate } from './view/list-filter-view.js';
import { createFormSortTeamplate } from './view/form-sort-view.js';
import { createTripEventsListTemplate } from './view/trip-events-list-view.js';
import { renderTemplate, RenderPosition } from './utils/render.js';

// const EVENTS_COUNT = 5;

const siteHeaderElement = document.querySelector('.page-header');
const siteControlsElement = siteHeaderElement.querySelector('.trip-controls__navigation');
const siteTripElement = siteHeaderElement.querySelector('.trip-main');

renderTemplate(siteTripElement, createListSortTeamplate(), RenderPosition.AFTERBEGIN);
renderTemplate(siteControlsElement, createListFilterTeamplate(), RenderPosition.BEFOREEND);

const siteMainElement = document.querySelector('.trip-events');
renderTemplate(siteMainElement, createFormSortTeamplate(), RenderPosition.BEFOREEND);

// for (let i = 0; i < EVENTS_COUNT; i++) {
//   renderTemplate(siteMainElement, createTripEventsListTemplate(), RenderPosition.BEFOREEND);
// }

renderTemplate(siteMainElement, createTripEventsListTemplate(), RenderPosition.BEFOREEND);
