/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // add field
  collection.fields.addAt(12, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_482450699",
    "hidden": false,
    "id": "relation1789936913",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "os",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_933114070",
    "hidden": false,
    "id": "relation2010147023",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "software",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // remove field
  collection.fields.removeById("relation1789936913")

  // remove field
  collection.fields.removeById("relation2010147023")

  return app.save(collection)
})
