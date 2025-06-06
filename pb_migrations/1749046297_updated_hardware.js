/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3201806841")

  // update collection data
  unmarshal({
    "name": "hware"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3201806841")

  // update collection data
  unmarshal({
    "name": "hardware"
  }, collection)

  return app.save(collection)
})
