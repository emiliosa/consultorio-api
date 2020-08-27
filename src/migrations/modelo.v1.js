const db = require('mongoose');

// password sin hash: prueba123
// conectar desde docker y popular la base: docker exec -it uade_mongodb mongo "mongodb+srv://tpointeractivas.cchj1.gcp.mongodb.net/TPOInteracticas" --username superuser

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
      "speciality": "Traumatología"
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
      "speciality": "Traumatología"
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
      "speciality": "Traumatología"
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
      "speciality": "Cardiología"
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
    "password": "$2a$08$.Q1.nb9Xo55SR2qOKsw8xuNfa0C.2R2qwc6I/wrPA9dL1.lSe5hiq",
    "role": "Paciente",
    "status": "Activo"
  },
  {
    "_id": ObjectId("5da39f17122830a9688ec9a1"),
    "name": "Alverso",
    "lastname": "Fernandez",
    "bithday": ISODate("1984-04-26"),
    "dni": 10000001,
    "email": "alverso.fernandez@hotmail.com",
    "password": "$2a$08$.Q1.nb9Xo55SR2qOKsw8xuNfa0C.2R2qwc6I/wrPA9dL1.lSe5hiq",
    "role": "Profesional",
    "status": "Activo"
  },
  {
    "_id": ObjectId("5da39f17122830a9688ec9a2"),
    "name": "Romina",
    "lastname": "Malaspina",
    "bithday": ISODate("1994-07-07"),
    "dni": 10000002,
    "email": "romina.malaspina@hotmail.com",
    "password": "$2a$08$.Q1.nb9Xo55SR2qOKsw8xuNfa0C.2R2qwc6I/wrPA9dL1.lSe5hiq",
    "role": "Administrativo",
    "status": "Activo"
  },
  {
    "_id": ObjectId("5da39f17122830a9688ec9a3"),
    "name": "Emiliano",
    "lastname": "Abarca",
    "bithday": ISODate("1984-04-26"),
    "dni": 10000003,
    "email": "emiliano.abarca@hotmail.com",
    "password": "$2a$08$.Q1.nb9Xo55SR2qOKsw8xuNfa0C.2R2qwc6I/wrPA9dL1.lSe5hiq",
    "role": "Admin",
    "status": "Activo"
  },
  {
    "_id": ObjectId("5da39f17122830a9688ec9a4"),
    "name": "Tomás",
    "lastname": "Orduna #1",
    "bithday": ISODate("1964-04-26"),
    "dni": 15098765,
    "email": "tomas.orduna1@hotmail.com",
    "password": "$2a$08$.Q1.nb9Xo55SR2qOKsw8xuNfa0C.2R2qwc6I/wrPA9dL1.lSe5hiq",
    "role": "Profesional",
    "status": "Activo"
  },
  {
    "_id": ObjectId("5da39f17122830a9688ec9a5"),
    "name": "Tomás",
    "lastname": "Orduna #2",
    "bithday": ISODate("1964-04-26"),
    "dni": 15098766,
    "email": "tomas.orduna2@hotmail.com",
    "password": "$2a$08$.Q1.nb9Xo55SR2qOKsw8xuNfa0C.2R2qwc6I/wrPA9dL1.lSe5hiq",
    "role": "Profesional",
    "status": "Activo"
  },
  {
    "_id": ObjectId("5da39f17122830a9688ec9a6"),
    "name": "Tomás",
    "lastname": "Orduna #3",
    "bithday": ISODate("1964-04-26"),
    "dni": 15098767,
    "email": "tomas.orduna3@hotmail.com",
    "password": "$2a$08$.Q1.nb9Xo55SR2qOKsw8xuNfa0C.2R2qwc6I/wrPA9dL1.lSe5hiq",
    "role": "Profesional",
    "status": "Activo"
  },
  {
    "_id": ObjectId("5da39f17122830a9688ec9a7"),
    "name": "Tomás",
    "lastname": "Orduna #4",
    "bithday": ISODate("1964-04-26"),
    "dni": 15098768,
    "email": "tomas.orduna4@hotmail.com",
    "password": "$2a$08$.Q1.nb9Xo55SR2qOKsw8xuNfa0C.2R2qwc6I/wrPA9dL1.lSe5hiq",
    "role": "Profesional",
    "status": "Activo"
  },
  {
    "_id": ObjectId("5da39f17122830a9688ec9a8"),
    "name": "Bruce",
    "lastname": "Banner",
    "bithday": ISODate("1984-01-01"),
    "dni": 30000000,
    "email": "bruce.banner@hotmail.com",
    "password": "$2a$08$.Q1.nb9Xo55SR2qOKsw8xuNfa0C.2R2qwc6I/wrPA9dL1.lSe5hiq",
    "role": "Paciente",
    "status": "Activo"
  },
  {
    "_id": ObjectId("5da39f17122830a9688ec9a9"),
    "name": "Tony",
    "lastname": "Stark",
    "bithday": ISODate("1984-01-01"),
    "dni": 30000001,
    "email": "Tony.Stark@hotmail.com",
    "password": "$2a$08$.Q1.nb9Xo55SR2qOKsw8xuNfa0C.2R2qwc6I/wrPA9dL1.lSe5hiq",
    "role": "Paciente",
    "status": "Activo"
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
      "password": "$2a$08$.Q1.nb9Xo55SR2qOKsw8xuNfa0C.2R2qwc6I/wrPA9dL1.lSe5hiq",
      "role": "Paciente",
      "status": "Activo"
    },
    "studies": [
      {
        "speciality": "Traumatología",
        "date": ISODate("2020-04-01"),
        "description": "Resonancia de rodilla derecha",
        "result": "No muestra anomalías"
      }
    ],
  },
  {
    "_id": ObjectId("5da39f17122830a9688ec9b1"),
    "user": {
      "_id": ObjectId("5da39f17122830a9688ec9a8"),
      "name": "Bruce",
      "lastname": "Banner",
      "bithday": ISODate("1984-01-01"),
      "dni": 30000000,
      "email": "bruce.banner@hotmail.com",
      "password": "$2a$08$.Q1.nb9Xo55SR2qOKsw8xuNfa0C.2R2qwc6I/wrPA9dL1.lSe5hiq",
      "role": "Paciente",
      "status": "Activo"
    },
    "studies": [
      {
        "speciality": "Traumatología",
        "date": ISODate("2020-04-01"),
        "description": "Resonancia de rodilla derecha #2",
        "result": "No muestra anomalías"
      }
    ]
  },
  {
    "_id": ObjectId("5da39f17122830a9688ec9b2"),
    "user": {
      "_id": ObjectId("5da39f17122830a9688ec9a9"),
      "name": "Tony",
      "lastname": "Stark",
      "bithday": ISODate("1984-01-01"),
      "dni": 30000001,
      "email": "Tony.Stark@hotmail.com",
      "password": "$2a$08$.Q1.nb9Xo55SR2qOKsw8xuNfa0C.2R2qwc6I/wrPA9dL1.lSe5hiq",
      "role": "Paciente",
      "status": "Activo"
    },
    "studies": [
      {
        "speciality": "Traumatología",
        "date": ISODate("2020-04-01"),
        "description": "Resonancia de rodilla derecha #2",
        "result": "No muestra anomalías"
      }
    ]
  }
]);

db.professionals.insertMany([
  {
    "_id": ObjectId("5da39f17122830a9688ec9c0"),
    "licenseNumber": "000054",
    "user": {
      "_id": ObjectId("5da39f17122830a9688ec9a1"),
      "name": "Alverso",
      "lastname": "Fernandez",
      "bithday": ISODate("1984-04-26"),
      "dni": 10000001,
      "email": "alverso.fernandez@hotmail.com",
      "password": "$2a$08$.Q1.nb9Xo55SR2qOKsw8xuNfa0C.2R2qwc6I/wrPA9dL1.lSe5hiq",
      "role": "Profesional",
      "status": "Activo"
    },
    "speciality": "Traumatología"
  },
  {
    "_id": ObjectId("5da39f17122830a9688ec9c1"),
    "licenseNumber": "000055",
    "user": {
      "_id": ObjectId("5da39f17122830a9688ec9a4"),
      "name": "Tomás",
      "lastname": "Orduna #1",
      "bithday": ISODate("1964-04-26"),
      "dni": 15098765,
      "email": "tomas.orduna1@hotmail.com",
      "password": "$2a$08$.Q1.nb9Xo55SR2qOKsw8xuNfa0C.2R2qwc6I/wrPA9dL1.lSe5hiq",
      "role": "Profesional",
      "status": "Activo"
    },
    "speciality": "Clínico"
  },
  {
    "_id": ObjectId("5da39f17122830a9688ec9c2"),
    "licenseNumber": "000056",
    "user": {
      "_id": ObjectId("5da39f17122830a9688ec9a5"),
      "name": "Tomás",
      "lastname": "Orduna #2",
      "bithday": ISODate("1964-04-26"),
      "dni": 15098766,
      "email": "tomas.orduna2@hotmail.com",
      "password": "$2a$08$.Q1.nb9Xo55SR2qOKsw8xuNfa0C.2R2qwc6I/wrPA9dL1.lSe5hiq",
      "role": "Profesional",
      "status": "Activo"
    },
    "speciality": "Cardiología"
  },
  {
    "_id": ObjectId("5da39f17122830a9688ec9c3"),
    "licenseNumber": "000056",
    "user": {
      "_id": ObjectId("5da39f17122830a9688ec9a6"),
      "name": "Tomás",
      "lastname": "Orduna #3",
      "bithday": ISODate("1964-04-26"),
      "dni": 15098767,
      "email": "tomas.orduna3@hotmail.com",
      "password": "$2a$08$.Q1.nb9Xo55SR2qOKsw8xuNfa0C.2R2qwc6I/wrPA9dL1.lSe5hiq",
      "role": "Profesional",
      "status": "Activo"
    },
    "speciality": "Dermatología"
  },
  {
    "_id": ObjectId("5da39f17122830a9688ec9c4"),
    "licenseNumber": "000058",
    "user": {
      "_id": ObjectId("5da39f17122830a9688ec9a7"),
      "name": "Tomás",
      "lastname": "Orduna #4",
      "bithday": ISODate("1964-04-26"),
      "dni": 15098768,
      "email": "tomas.orduna4@hotmail.com",
      "password": "$2a$08$.Q1.nb9Xo55SR2qOKsw8xuNfa0C.2R2qwc6I/wrPA9dL1.lSe5hiq",
      "role": "Profesional",
      "status": "Activo"
    },
    "speciality": "Clínico"
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
      "password": "$2a$08$.Q1.nb9Xo55SR2qOKsw8xuNfa0C.2R2qwc6I/wrPA9dL1.lSe5hiq",
      "role": "Administrativo",
      "status": "Activo"
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
      "password": "$2a$08$.Q1.nb9Xo55SR2qOKsw8xuNfa0C.2R2qwc6I/wrPA9dL1.lSe5hiq",
      "role": "Admin",
      "status": "Activo"
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
        "password": "$2a$08$.Q1.nb9Xo55SR2qOKsw8xuNfa0C.2R2qwc6I/wrPA9dL1.lSe5hiq",
        "role": "Paciente",
        "status": "Activo"
      },
      "studies": [
        {
          "speciality": "Traumatología",
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
        "password": "$2a$08$.Q1.nb9Xo55SR2qOKsw8xuNfa0C.2R2qwc6I/wrPA9dL1.lSe5hiq",
        "role": "Profesional",
        "status": "Activo"
      },
      "speciality": "Traumatología"
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
        "password": "$2a$08$.Q1.nb9Xo55SR2qOKsw8xuNfa0C.2R2qwc6I/wrPA9dL1.lSe5hiq",
        "role": "Paciente",
        "status": "Activo"
      },
      "studies": [
        {
          "speciality": "Traumatología",
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
        "password": "$2a$08$.Q1.nb9Xo55SR2qOKsw8xuNfa0C.2R2qwc6I/wrPA9dL1.lSe5hiq",
        "role": "Profesional",
        "status": "Activo"
      },
      "speciality": "Traumatología"
    },
    "description": "Clonazepam 1.5gr, 3 veces x día, cada 8hs",
    "file": {
      "name": "prueba",
      "mimetype": "application/pdf",
      "size": "500kb"
    },
    "createdByUser": {
      "_id": ObjectId("5da39f17122830a9688ec9f1"),
    },
    "date": ISODate("2020-06-01 08:00:00")
  }
]);