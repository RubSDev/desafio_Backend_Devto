const Writer = require("../models/writers");
const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')

function getAllWriters() {
  return Writer.find({});
}

async function signUp(dataWriter){
 
  const {email, password, name} = dataWriter
  
  const writerFound = await Writer.findOne({email})
  
  if(writerFound) throw new Error('Writer already exists')
  
  
  const passwordEncrypted = await bcrypt.hash(password)
  
  return Writer.create({name, email, password: passwordEncrypted})
  }
  
  async function login (email, password){
      
      const writerFound = await Writer.findOne({email})
  
      if(!writerFound) throw new Error('Invalid credentials')
  
     const isValidPassword = await bcrypt.compare(password, writerFound.password)
  
     if(!isValidPassword) throw new Error ('Invalid credentials')
  
     // regresar
     return jwt.sign({id:writerFound._id})
  
  }

  function createWriter(dataWriter) {
    const { name, lastName, nationality, dateCreated, biography } = dataWriter;
    return Writer.create({ name, lastName, nationality, dateCreated, biography });
  }
  function getById(idWriter) {
    return Writer.findById(idWriter);
  }
  function patchById(idWriter, dataToUpdate) {
    return Writer.findByIdAndUpdate(idWriter, dataToUpdate, { new: true });
  }
  function deleteById(idWriter) {
    return Writer.findById(idWriter);
  }
  

module.exports = { 
  getAllWriters,
  createWriter,
  getById,
  patchById,
  deleteById,
signUp,
login };
