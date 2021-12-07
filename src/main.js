import {createSiteMenuTemplate} from './view/site-menu-view.js';
import {createSiteFilterTemplate} from './view/site-filter-view.js';
import {createSiteSortTemplate} from './view/site-sort-view.js';
import {createEditPointTemplate} from './view/edit-point-view.js';
import {createPointTemplate} from './view/point-view.js';

import {renderTemplate, RenderPosition} from './render.js';

const POINT_COUNT = 3;

const siteHeaderElement = document.querySelector('.trip-main');
const siteHeaderControlElement = siteHeaderElement.querySelector('.trip-controls');

renderTemplate(siteHeaderControlElement, createSiteMenuTemplate(), RenderPosition.AFTERBEGIN);
renderTemplate(siteHeaderControlElement, createSiteFilterTemplate(), RenderPosition.BEFOREEND);

const siteMainElement = document.querySelector('.trip-events');
const siteListElement = siteMainElement.querySelector('.trip-events__list');

renderTemplate(siteListElement, createSiteSortTemplate(), RenderPosition.BEFOREBEGIN);

renderTemplate(siteListElement, createEditPointTemplate(), RenderPosition.AFTERBEGIN);

for (let i = 0; i < POINT_COUNT; i++) {
  renderTemplate(siteListElement, createPointTemplate(), RenderPosition.BEFOREEND);
}
