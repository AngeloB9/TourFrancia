const mongoose = require('../db'),
  Schema = mongoose.Schema;

const schemas = {
  participantes: new Schema({
    dni: { type: Number },
    nombres: { type: String },
    apellidos: { type: String },
    fecha_de_nacimiento: { type: Date },
    nacionalidad: { type: String },
    equipo: { type: String },
    foto: { type: String },
    datos_relevantes: { type: String },
  }),

  etapas: new Schema({
    tipo: { type: String },
    numero: { type: Number },
    fecha: { type: Date },
    salida: { type: String },
    llegada: { type: String },
    longitud: { type: Number },
    desnivel_acumulado: { type: Number },
    datos_relevantes: { type: String },
  }),

  ganadores: new Schema({
    dni: { type: Number },
    nombres: { type: String },
    apellidos: { type: String },
    fecha_de_nacimiento: { type: Date },
    nacionalidad: { type: String },
    equipo: { type: String },
    numero_etapa: { type: Number },
    foto: { type: String },
    datos_relevantes: { type: String },
  }),

  noticias: new Schema({
    portada: { type: String },
    titulo: { type: String },
    fecha: { type: Date },
    resumen: { type: String },
    noticia: { type: String },
  }),

  usuarios: new Schema({
    dni: { type: String },
    password: { type: String },
    admin: { type: Boolean },
  }),

  comentarios: new Schema({
    comentario: { type: String },
    numero_etapa: { type: Number },
  }),
};

module.exports = schemas;
