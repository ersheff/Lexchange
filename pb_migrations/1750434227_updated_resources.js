/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2337082678")

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation3725765462",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "created_by",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2337082678")

  // remove field
  collection.fields.removeById("relation3725765462")

  return app.save(collection)
})
