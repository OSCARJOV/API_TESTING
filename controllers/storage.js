
const {storageModel} = require("../models")
const PUBLIC_URL = process.env.PUBLIC_URL

const getItems = async (req, res) => {  // async y await para esperar al servidor
    
       const data = await storageModel.find({})
    res.send({data})

    // tracksModel.find({}).then((res) => {console.log(res)})  // SEGUNDA OPCION

    }

const getItem = (req,res) => {};

const createItems = async (req,res) => {
    const {body , file} = req
    const fileData = {
        fileData: file.filename,
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    console.log(file);
    res.send({data})
};
const updatetems = (req,res) => {};
const deletetems = (req,res) => {};


module.exports = { getItem,getItems,createItems,updatetems,deletetems};
