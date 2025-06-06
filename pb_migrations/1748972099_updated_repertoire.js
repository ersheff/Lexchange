/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "select1145591094",
    "maxSelect": 1,
    "name": "additional_hardware",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "game controllers",
      "microphones",
      "MIDI controllers",
      "sensor-based controllers",
      "webcam"
    ]
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "bool2532117366",
    "name": "visuals",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "exceptDomains": [],
    "hidden": false,
    "id": "url1766001124",
    "name": "site",
    "onlyDomains": [],
    "presentable": false,
    "required": true,
    "system": false,
    "type": "url"
  }))

  // add field
  collection.fields.addAt(14, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor1542800728",
    "maxSize": 0,
    "name": "field",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // remove field
  collection.fields.removeById("select1145591094")

  // remove field
  collection.fields.removeById("bool2532117366")

  // remove field
  collection.fields.removeById("url1766001124")

  // remove field
  collection.fields.removeById("editor1542800728")

  return app.save(collection)
})
