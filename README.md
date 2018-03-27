Carsales APP task by QianPeng

## setup

Alone of download the project

run ```npm install``` 

After installed all the dependencies

run ```json-server --watch --port 4000 api/db.json``` 

then open a new terminal tab and run ```ng serve --open```

### db.json (in the api folder)

```{
  "carType": [
    {
      "id": 1,
      "name": "hatchback"
    },
    {
      "id": 2,
      "name": "sedan"
    }
  ],
  "vehicles": [
    {
      "id": 1,
      "made": "Holden",
      "model": "A1",
      "wheels": "6",
      "carType": "hatchback",
      "features": [
        "Seatbelts"
      ]
    },
    {
      "id": 2,
      "made": "Ford",
      "model": "A3",
      "wheels": 4,
      "carType": "hatchback",
      "features": [
        "Airbags",
        "Seatbelts",
        "Navigation",
        "Aircon"
      ]
    },
    {
      "id": 3,
      "made": "Holden",
      "model": "A2",
      "wheels": 6,
      "carType": "sedan",
      "features": [
        "Seatbelts",
        "Aircon"
      ]
    },
    {
      "id": 4,
      "made": "Ford",
      "model": "A3",
      "wheels": 4,
      "carType": "sedan",
      "features": [
        "Airbags",
        "Seatbelts",
        "Navigation",
        "Aircon",
        "Bluetooth"
      ]
    },
    {
      "id": 5,
      "made": "Hyundai",
      "model": "A5",
      "wheels": 4,
      "carType": "sedan",
      "features": [
        "Airbags",
        "Seatbelts",
        "Navigation",
        "Aircon",
        "Bluetooth"
      ]
    },
    {
      "id": 6,
      "made": "Audi",
      "model": "A3",
      "wheels": 4,
      "carType": "sedan",
      "features": [
        "Airbags",
        "Bluetooth",
        "Seatbelts"
      ]
    },
    {
      "id": 7,
      "made": "Audi",
      "model": "A1",
      "wheels": 4,
      "carType": "hatchback",
      "features": [
        "Navigation"
      ]
    },
    {
      "id": 8,
      "made": "Audi",
      "model": "A1",
      "wheels": 4,
      "carType": "hatchback",
      "features": [
        "Airbags",
        "Seatbelts"
      ]
    },
    {
      "id": 9,
      "made": "Audi",
      "model": "A4",
      "wheels": "6",
      "carType": "hatchback",
      "features": [
        "Bluetooth",
        "Aircon"
      ]
    }
  ]
}
```

### dependencies used

```ngx-bootstrap```
```json-server```

### Web API used

```json-server```

```More details: https://github.com/typicode/json-server```
