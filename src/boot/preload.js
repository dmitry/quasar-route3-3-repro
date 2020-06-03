export default async ({ store, router, ssrContext, urlPath }) => {
  router.beforeEach(async (to, from, next) => {
    if (to.name === 'auth') {
      next({ name: 'home' })
    }
  })
}
