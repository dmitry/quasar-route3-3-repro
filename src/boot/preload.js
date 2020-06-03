export default async ({ store, router, ssrContext, urlPath }) => {
  router.beforeEach(async (to, from, next) => {
    if (to.name === 'auth' && !to.query.x) {
      next({ path: '/' })
    } else {
      next()
    }
  })
}
