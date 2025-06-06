/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_329383295")

  // update collection data
  unmarshal({
    "name": "inst"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_329383295")

  // update collection data
  unmarshal({
    "name": "instruments"
  }, collection)

  return app.save(collection)
})
