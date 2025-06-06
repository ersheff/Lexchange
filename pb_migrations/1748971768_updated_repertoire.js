/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select1623165798",
    "maxSelect": 8,
    "name": "additional_instrumentation",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "brass",
      "guitar",
      "percussion",
      "piano",
      "strings",
      "voice",
      "woodwinds",
      "other"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // remove field
  collection.fields.removeById("select1623165798")

  return app.save(collection)
})
