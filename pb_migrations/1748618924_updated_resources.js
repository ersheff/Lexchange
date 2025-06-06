/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2337082678")

  // remove field
  collection.fields.removeById("json1874629670")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2337082678")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "json1874629670",
    "maxSize": 0,
    "name": "tags",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
})
