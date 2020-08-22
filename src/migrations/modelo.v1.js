const db = require('mongoose');

db.roles.insertMany([
  {
    "id": 1,
    "nombre": "Paciente"
  },
  {
    "id": 2,
    "nombre": "Profesional"
  },
  {
    "id": 3,
    "nombre": "Administrativo"
  },
  {
    "id": 4,
    "nombre": "Admin"
  }
]);

db.novedades.insertMany([
  {
    "id": 1,
    "fecha_desde": "2020-04-01",
    "fecha_hasta": null,
    "descripción": "Alerta por Covid-19",
    "url": "https://s3-us-west-2.amazonaws.com/consultorio.s3.webbucket/novedades/sjker8289hdfjkdfajk348y9ghjk.jpg",
    "creado_por": {
      "id": 1
    }
  },
  {
    "id": 1,
    "fecha_desde": "2020-05-01",
    "fecha_hasta": "2020-06-01",
    "descripción": "Inscripciones - Capacitación en instrumentos de mediciones",
    "url": "https://s3-us-west-2.amazonaws.com/consultorio.s3.webbucket/novedades/asdsfdkdsf3909843895043hadfghjj.jpg",
    "creado_por": {
      "id": 1
    }
  }
]);

db.calendario.insertMany([
  {
    "id": 1,
    "fecha": "2020-08-01",
    "desde": "08:00",
    "hasta": "08:30",
    "estado": "Disponible",
    "consultorio": 1,
    "profesional": {
      "id": 3,
      "nombre": "Jack",
      "apellido": "Daniels",
      "especialidad": {
        "id": 1,
        "nombre": "Traumatología"
      }
    }
  },
  {
    "id": 2,
    "fecha": "2020-08-01",
    "desde": "09:00",
    "hasta": "09:30",
    "estado": "Disponible",
    "consultorio": 1,
    "profesional": {
      "id": 3,
      "nombre": "Jack",
      "apellido": "Daniels",
      "especialidad": {
        "id": 1,
        "nombre": "Traumatología"
      }
    }
  },
  {
    "id": 3,
    "fecha": "2020-08-01",
    "desde": "09:00",
    "hasta": "09:30",
    "estado": "Disponible",
    "consultorio": 2,
    "profesional": {
      "id": 3,
      "nombre": "Jack",
      "apellido": "Daniels",
      "especialidad": {
        "id": 1,
        "nombre": "Traumatología"
      }
    }
  },
  {
    "id": 4,
    "fecha": "2020-08-01",
    "desde": "10:00",
    "hasta": "10:30",
    "estado": "Reservado",
    "consultorio": 1,
    "profesional": {
      "id": 4,
      "nombre": "Disney",
      "apellido": "Landia Rodriguez",
      "especialidad": {
        "id": 1,
        "nombre": "Cardiología"
      }
    }
  }
]);

db.usuarios.insertMany([
  {
    "id": 1,
    "nombre": "Pepe",
    "apellido": "Argento",
    "fecha_nacimiento": ISODate("1984-04-26"),
    "dni": 10000000,
    "email": "pepe.argento@hotmail.com",
    "password": "qwerty1234567890",
    "role": {
      "id": 1,
      "nombre": "Paciente"
    },
    "paciente": {
      "estudios": [
        {
          "id": 1,
          "especialidad": {
            "id": 1,
            "nombre": "Traumatología"
          },
          "fecha": ISODate("2020-04-01"),
          "descripción": "Resonancia de rodilla derecha",
          "resultado": "No muestra anomalías"
        }
      ],
      "turnos": [
        {
          "id": 1,
          "fecha": ISODate("2020-06-01 08:00:00"),
          "profesional": {
            "id": 1,
            "nombre": "Alverso",
            "apellido": "Fernandez",
            "especialidad": {
              "id": 1,
              "nombre": "Clínico"
            }
          },
          "estado": "Presente"
        }
      ],
      "recetas": [
        {
          "id": 1,
          "descripción": "Clonazepam 1.5gr, 3 veces x día, cada 8hs",
          "url": "https://s3-us-west-2.amazonaws.com/consultorio.s3.webbucket/recetas/32434920fdjifdanl32956563.pdf",
          "profesional": {
            "id": 1
          },
          "creado_por": {
            "id": 1,
            "role": "Profesional"
          },
          "fecha": ISODate("2020-06-01 08:00:00")
        }
      ]
    }
  },
  {
    "id": 2,
    "nombre": "Alverso",
    "apellido": "Fernandez",
    "fecha_nacimiento": ISODate("1984-04-26"),
    "dni": 10000001,
    "email": "alverso.fernandez@hotmail.com",
    "password": "qwerty1234567890",
    "role": {
      "id": 2,
      "nombre": "Profesional"
    },
    "profesional": {
      "especialidad": {
        "id": 1,
        "nombre": "Traumatología"
      }
    }
  },
  {
    "id": 3,
    "nombre": "Romina",
    "apellido": "Malaspina",
    "fecha_nacimiento": ISODate("1994-07-07"),
    "dni": 10000002,
    "email": "romina.malaspina@hotmail.com",
    "password": "qwerty1234567890",
    "role": {
      "id": 3,
      "nombre": "Administrativo"
    },
    "administrativo": {}
  },
  {
    "id": 4,
    "nombre": "Emiliano",
    "apellido": "Abarca",
    "fecha_nacimiento": ISODate("1984-04-26"),
    "dni": 10000003,
    "email": "emiliano.abarca@hotmail.com",
    "password": "qwerty1234567890",
    "role": {
      "id": 4,
      "nombre": "Admin"
    },
    "admin": {}
  }
]);