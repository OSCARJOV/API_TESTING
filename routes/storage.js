const multer = require("multer") // paquete para cargar archivos
const express = require("express");
const uploadMiddleware = require("../utils/handleStorage");
const { createItems } = require("../controllers/storage");
const router = express.Router();




router.post("/",  uploadMiddleware.single("myfile"), createItems)


module.exports = router;