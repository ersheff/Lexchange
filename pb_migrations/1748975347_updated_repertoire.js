/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // update field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "select2165146906",
    "maxSelect": 5,
    "name": "operating_systems",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "Linux",
      "Mac",
      "Mobile (Android/iOS)",
      "Raspberry Pi",
      "Windows",
      "other"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // update field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "select2165146906",
    "maxSelect": 5,
    "name": "operating_systems",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "Linux",
      "Mac",
      "Mobile (Android/iOS)",
      "Raspberry Pi",
      "Windows"
    ]
  }))

  return app.save(collection)
})
