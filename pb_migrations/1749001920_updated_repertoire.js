/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // remove field
  collection.fields.removeById("select1623165798")

  // remove field
  collection.fields.removeById("select2165146906")

  // remove field
  collection.fields.removeById("select2010147023")

  // remove field
  collection.fields.removeById("select1145591094")

  // add field
  collection.fields.addAt(11, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_329383295",
    "hidden": false,
    "id": "relation3813727755",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "instruments",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // add field
  collection.fields.addAt(9, new Field({
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

  // add field
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

  // add field
  collection.fields.addAt(11, new Field({
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

  // add field
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
      "audio interfaces",
      "game controllers",
      "microphones",
      "MIDI controllers",
      "other"
    ]
  }))

  // remove field
  collection.fields.removeById("relation3813727755")

  return app.save(collection)
})
