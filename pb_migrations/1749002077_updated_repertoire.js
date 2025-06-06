/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // add field
  collection.fields.addAt(12, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3201806841",
    "hidden": false,
    "id": "relation4271499744",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "hardware",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // remove field
  collection.fields.removeById("relation4271499744")

  return app.save(collection)
})
