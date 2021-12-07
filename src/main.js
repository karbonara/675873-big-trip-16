import { createListSortTeamplate } from './view/list-sort-view.js';
import { renderTemplate, RenderPosition } from './utils/render.js';

const siteHeaderElement = document.querySelector('.page-header');
// const siteControlsElement = siteHeaderElement.querySelector('.trip-controls__navigation');

renderTemplate(siteHeaderElement, createListSortTeamplate(), RenderPosition.BEFOREEND);

