/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "number2998737378",
    "max": null,
    "min": null,
    "name": "max_perf",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3263580390")

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "number2998737378",
    "max": null,
    "min": null,
    "name": "max_performers",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
