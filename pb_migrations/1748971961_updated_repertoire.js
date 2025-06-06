/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select2165146906",
    "maxSelect": 5,
    "name": "operating_systems",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Linux",
      "Mac",
      "Mobile",
      "Raspberry Pi",
      "Windows"
    ]
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "select2010147023",
    "maxSelect": 2,
    "name": "software",
    "presentable": false,
    "required": false,
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

  // update field
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
      "novice",
      "intermediate",
      "advanced"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // remove field
  collection.fields.removeById("select2165146906")

  // remove field
  collection.fields.removeById("select2010147023")

  // update field
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
})
