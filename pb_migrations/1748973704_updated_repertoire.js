/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
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
      "Mobile App (native)",
      "p5",
      "Processing",
      "Pure Data",
      "SuperCollider",
      "other"
    ]
  }))

  return app.save(collection)
})
