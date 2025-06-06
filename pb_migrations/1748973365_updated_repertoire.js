/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number1765844990",
    "max": null,
    "min": 1,
    "name": "parts",
    "onlyInt": true,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "number2998737378",
    "max": null,
    "min": 1,
    "name": "max_players",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(9, new Field({
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
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number1765844990",
    "max": null,
    "min": null,
    "name": "parts",
    "onlyInt": true,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "number2998737378",
    "max": null,
    "min": null,
    "name": "max_players",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
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

  // update field
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

  return app.save(collection)
})
