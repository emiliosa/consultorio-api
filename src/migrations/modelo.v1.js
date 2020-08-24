const db = require('mongoose');

db.roles.insertMany([
  {
    "_id": ObjectId("5da39f17122830a9688ec9d0"),
    "name": "Paciente"
  },
  {
    "_id": ObjectId("5da39f17122830a9688ec9d1"),
    "name": "Profesional"
  },
  {
    "_id": ObjectId("5da39f17122830a9688ec9d2"),
    "name": "Administrativo"
  },
  {
    "_id": ObjectId("5da39f17122830a9688ec9d3"),
    "name": "Admin"
  }
]);

db.news.insertMany([
  {
    "_id": ObjectId("5da39f17122830a9688ec9e0"),
    "fromDate": ISODate("2020-04-01"),
    "toDate": null,
    "description": "Alerta por Covid-19",
    "url": "https://s3-us-west-2.amazonaws.com/consultorio.s3.webbucket/novedades/sjker8289hdfjkdfajk348y9ghjk.jpg",
    "createdBy": {
    }
  },
  {
    "_id": ObjectId("5da39f17122830a9688ec9e1"),
    "fromDate": ISODate("2020-05-01"),
    "toDate": ISODate("2020-06-01"),
    "description": "Inscripciones - Capacitación en instrumentos de mediciones",
    "url": "https://s3-us-west-2.amazonaws.com/consultorio.s3.webbucket/novedades/asdsfdkdsf3909843895043hadfghjj.jpg",
    "createdBy": {
    }
  }
]);

db.calendar.insertMany([
  {
    "_id": ObjectId("5da39f17122830a9688ec9f0"),
    "date": ISODate("2020-08-01"),
    "fromTime": "08:00",
    "toTime": "08:30",
    "status": "Disponible",
    "consultorio": 1,
    "professional": {
      "name": "Jack",
      "lastname": "Daniels",
      "speciality": {
        "name": "Traumatología"
      }
    }
  },
  {
    "_id": ObjectId("5da39f17122830a9688ec9f1"),
    "date": ISODate("2020-08-01"),
    "fromTime": "09:00",
    "toTime": "09:30",
    "status": "Disponible",
    "consultorio": 1,
    "professional": {
      "name": "Jack",
      "lastname": "Daniels",
      "speciality": {
        "name": "Traumatología"
      }
    }
  },
  {
    "_id": ObjectId("5da39f17122830a9688ec9f2"),
    "date": ISODate("2020-08-01"),
    "fromTime": "09:00",
    "toTime": "09:30",
    "status": "Disponible",
    "consultorio": 2,
    "professional": {
      "name": "Jack",
      "lastname": "Daniels",
      "speciality": {
        "name": "Traumatología"
      }
    }
  },
  {
    "_id": ObjectId("5da39f17122830a9688ec9f3"),
    "date": ISODate("2020-08-01"),
    "fromTime": "10:00",
    "toTime": "10:30",
    "status": "Reservado",
    "consultorio": 1,
    "professional": {
      "name": "Disney",
      "lastname": "Landia Rodriguez",
      "speciality": {
        "name": "Cardiología"
      }
    }
  }
]);

db.users.insertMany([
  {
    "_id": ObjectId("5da39f17122830a9688ec9a0"),
    "name": "Pepe",
    "lastname": "Argento",
    "bithday": ISODate("1984-04-26"),
    "dni": 10000000,
    "email": "pepe.argento@hotmail.com",
    "password": "qwerty1234567890",
    "role": "Paciente"
  },
  {
    "_id": ObjectId("5da39f17122830a9688ec9a1"),
    "name": "Alverso",
    "lastname": "Fernandez",
    "bithday": ISODate("1984-04-26"),
    "dni": 10000001,
    "email": "alverso.fernandez@hotmail.com",
    "password": "qwerty1234567890",
    "role": "Profesional"
  },
  {
    "_id": ObjectId("5da39f17122830a9688ec9a2"),
    "name": "Romina",
    "lastname": "Malaspina",
    "bithday": ISODate("1994-07-07"),
    "dni": 10000002,
    "email": "romina.malaspina@hotmail.com",
    "password": "qwerty1234567890",
    "role": "Administrativo"
  },
  {
    "_id": ObjectId("5da39f17122830a9688ec9a3"),
    "name": "Emiliano",
    "lastname": "Abarca",
    "bithday": ISODate("1984-04-26"),
    "dni": 10000003,
    "email": "emiliano.abarca@hotmail.com",
    "password": "qwerty1234567890",
    "role": "Admin"
  }
]);

db.patients.insertMany([
  {
    "_id": ObjectId("5da39f17122830a9688ec9b0"),
    "user": {
      "_id": ObjectId("5da39f17122830a9688ec9a0"),
      "name": "Pepe",
      "lastname": "Argento",
      "bithday": ISODate("1984-04-26"),
      "dni": 10000000,
      "email": "pepe.argento@hotmail.com",
      "password": "qwerty1234567890",
      "role": "Paciente"
    },
    "studies": [
      {
        "speciality": {
          "name": "Traumatología"
        },
        "date": ISODate("2020-04-01"),
        "description": "Resonancia de rodilla derecha",
        "result": "No muestra anomalías"
      }
    ],
  }
]);

db.professionals.insertMany([
  {
    "_id": ObjectId("5da39f17122830a9688ec9c0"),
    "user": {
      "_id": ObjectId("5da39f17122830a9688ec9a1"),
      "name": "Alverso",
      "lastname": "Fernandez",
      "bithday": ISODate("1984-04-26"),
      "dni": 10000001,
      "email": "alverso.fernandez@hotmail.com",
      "password": "qwerty1234567890",
      "role": "Profesional"
    },
    "speciality": {
      "name": "Traumatología"
    }
  }
]);

db.administratives.insertMany([
  {
    "_id": ObjectId("5da39f17122830a9688ec0a0"),
    "user": {
      "_id": ObjectId("5da39f17122830a9688ec9a2"),
      "name": "Romina",
      "lastname": "Malaspina",
      "bithday": ISODate("1994-07-07"),
      "dni": 10000002,
      "email": "romina.malaspina@hotmail.com",
      "password": "qwerty1234567890",
      "role": "Administrativo"
    }
  }
]);
db.admins.insertMany([
  {
    "_id": ObjectId("5da39f17122830a9688ec0b0"),
    "user": {
      "_id": ObjectId("5da39f17122830a9688ec9a3"),
      "name": "Emiliano",
      "lastname": "Abarca",
      "bithday": ISODate("1984-04-26"),
      "dni": 10000003,
      "email": "emiliano.abarca@hotmail.com",
      "password": "qwerty1234567890",
      "role": "Admin"
    }
  }
]);

db.appointments.insertMany([
  {
    "_id": ObjectId("5da39f17122830a9688ec0c0"),
    "patient": {
      "_id": ObjectId("5da39f17122830a9688ec9b0"),
      "user": {
        "_id": ObjectId("5da39f17122830a9688ec9a0"),
        "name": "Pepe",
        "lastname": "Argento",
        "bithday": ISODate("1984-04-26"),
        "dni": 10000000,
        "email": "pepe.argento@hotmail.com",
        "password": "qwerty1234567890",
        "role": "Paciente"
      },
      "studies": [
        {
          "speciality": {
            "name": "Traumatología"
          },
          "date": ISODate("2020-04-01"),
          "description": "Resonancia de rodilla derecha",
          "result": "No muestra anomalías"
        }
      ],
    },
    "professional": {
      "_id": ObjectId("5da39f17122830a9688ec9c0"),
      "user": {
        "_id": ObjectId("5da39f17122830a9688ec9a1"),
        "name": "Alverso",
        "lastname": "Fernandez",
        "bithday": ISODate("1984-04-26"),
        "dni": 10000001,
        "email": "alverso.fernandez@hotmail.com",
        "password": "qwerty1234567890",
        "role": "Profesional"
      },
      "speciality": {
        "name": "Traumatología"
      }
    },
    "date": ISODate("2020-06-01 08:00:00"),
    "status": "Presente",
    "createdByUser": {
      "_id": ObjectId("5da39f17122830a9688ec9f1"),
    },
  }
]);

db.recipes.insertMany([
  {
    "_id": ObjectId("5da39f17122830a9688ec0d0"),
    "patient": {
      "_id": ObjectId("5da39f17122830a9688ec9b0"),
      "user": {
        "_id": ObjectId("5da39f17122830a9688ec9a0"),
        "name": "Pepe",
        "lastname": "Argento",
        "bithday": ISODate("1984-04-26"),
        "dni": 10000000,
        "email": "pepe.argento@hotmail.com",
        "password": "qwerty1234567890",
        "role": "Paciente"
      },
      "studies": [
        {
          "speciality": {
            "name": "Traumatología"
          },
          "date": ISODate("2020-04-01"),
          "description": "Resonancia de rodilla derecha",
          "result": "No muestra anomalías"
        }
      ],
    },
    "professional": {
      "_id": ObjectId("5da39f17122830a9688ec9c0"),
      "user": {
        "_id": ObjectId("5da39f17122830a9688ec9a1"),
        "name": "Alverso",
        "lastname": "Fernandez",
        "bithday": ISODate("1984-04-26"),
        "dni": 10000001,
        "email": "alverso.fernandez@hotmail.com",
        "password": "qwerty1234567890",
        "role": "Profesional"
      },
      "speciality": {
        "name": "Traumatología"
      }
    },
    "description": "Clonazepam 1.5gr, 3 veces x día, cada 8hs",
    "url": "https://s3-us-west-2.amazonaws.com/consultorio.s3.webbucket/recetas/32434920fdjifdanl32956563.pdf",
    "createdByUser": {
      "_id": ObjectId("5da39f17122830a9688ec9f1"),
    },
    "date": ISODate("2020-06-01 08:00:00")
  }
]);