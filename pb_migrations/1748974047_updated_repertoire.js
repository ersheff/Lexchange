/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // update field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "select2010147023",
    "maxSelect": 9,
    "name": "software",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "Ableton Live",
      "ChucK",
      "Max",
      "Mobile app (native)",
      "Processing",
      "Pure Data",
      "SuperCollider",
      "Web-based",
      "other"
    ]
  }))

  // update field
  collection.fields.addAt(11, new Field({
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
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // update field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "select2010147023",
    "maxSelect": 2,
    "name": "software",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "Ableton Live",
      "ChucK",
      "Max",
      "Mobile app (native)",
      "Processing",
      "Pure Data",
      "SuperCollider",
      "Web-based",
      "other"
    ]
  }))

  // update field
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

  return app.save(collection)
})
