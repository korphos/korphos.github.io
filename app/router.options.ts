export default {
  scrollBehavior(_to, _from, savedPosition) {
    // Back/forward navigation: restore the browser-remembered position.
    if (savedPosition) return savedPosition
    // Every other navigation on this single-page site is just a locale
    // switch between the same page - never move the scroll for that.
    return false
  },
}
