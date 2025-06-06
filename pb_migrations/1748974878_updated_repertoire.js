/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // update field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "select1145591094",
    "maxSelect": 5,
    "name": "additional_hardware",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Arduino",
      "audio interface",
      "game controllers",
      "microphones",
      "MIDI controllers",
      "other"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // update field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "select1145591094",
    "maxSelect": 5,
    "name": "additional_hardware",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Arduino",
      "game controllers",
      "microphones",
      "MIDI controllers",
      "other"
    ]
  }))

  return app.save(collection)
})
