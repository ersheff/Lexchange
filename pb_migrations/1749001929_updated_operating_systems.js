/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_482450699")

  // update collection data
  unmarshal({
    "name": "os"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_482450699")

  // update collection data
  unmarshal({
    "name": "operating_systems"
  }, collection)

  return app.save(collection)
})
