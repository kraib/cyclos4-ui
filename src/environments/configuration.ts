// This file defines the environment variables shared by both development and production
import { DataForUi } from 'app/api/models';

// The root URL for the API. Don't forget to include the /api in the end
const API_URL = 'http://localhost:8888/api';

// Application title
const APP_TITLE = 'Cyclos Local';
// The application title displayed on the title bar inside the menu on small devices
const APP_TITLE_MENU = 'Cyclos menu';

// Available choices for number of results in a search. The default is the smallest one
const SEARCH_PAGE_SIZES = [40, 100, 200];
// Number of results displayed on quick searches, such as on user selection
const QUICK_SEARCH_PAGE_SIZE = 10;

// Translations
// It is possible to set the application to be statically translated by commenting the
// var declarations, uncommenting the import statements and adjusting the json files
// to include the correct language, such as '../translations/messages_es.json' for Spanish.
// This will embed the translations in the generated web application resources and
// will prevent additional requests from being performed on runtime, but will force
// a single language for the application.

const TRANSLATIONS = null;
// import * as TRANSLATIONS from '../translations/messages.json';

// This defines the available locales. Not used when translations are statically compiled.
const LOCALES = ['en'];

export const configuration = {
  appTitle: APP_TITLE,
  appTitleMenu: APP_TITLE_MENU,
  apiRoot: API_URL,
  searchPageSizes: SEARCH_PAGE_SIZES,
  quickSearchPageSize: QUICK_SEARCH_PAGE_SIZE,
  translations: TRANSLATIONS,
  locales: LOCALES
};
