/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select4189630469",
    "maxSelect": 1,
    "name": "experience",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "1",
      "2",
      "3"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select4189630469",
    "maxSelect": 1,
    "name": "experience_level",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "1",
      "2",
      "3"
    ]
  }))

  return app.save(collection)
})
