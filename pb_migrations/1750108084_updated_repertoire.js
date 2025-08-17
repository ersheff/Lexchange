/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // update collection data
  unmarshal({
    "updateRule": "@request.auth.id = created_by || @request.body.flag != \"\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // update collection data
  unmarshal({
    "updateRule": "@request.auth.id = created_by"
  }, collection)

  return app.save(collection)
})
