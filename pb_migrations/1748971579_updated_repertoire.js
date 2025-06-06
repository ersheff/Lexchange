/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select4189630469",
    "maxSelect": 1,
    "name": "experience_level",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "Novice",
      "Intermediate",
      "Advanced"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // remove field
  collection.fields.removeById("select4189630469")

  return app.save(collection)
})
