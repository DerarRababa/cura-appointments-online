export default async ({ app, store, route, redirect }, inject) => {
  let isUserLoggedIn = store.state.auth.isUserLoggedIn;
  if (isUserLoggedIn) {
    let firstDirectory = route.path.split("/")[1];
    let segment = firstDirectory.split("-")[1];
    let urlHasCountryCode = app.$LocationService.isCountryCodeExist(segment);

    // In case the page is user level like: /dashboard or /settings
    // then we need to set the Locale one more time, yes this logic is
    // in the language middleware, but we need to do it on the client as
    // well, due to limitation to nuxti18n in dealing with routes that are
    // ignored from nuxti18n, they always go to the fallback language
    if (!urlHasCountryCode) {
      let languageInDatabase = store.state.auth.userInfo.language;
      await app.i18n.setLocale(languageInDatabase)
    }
  }
};
