const express= require ("express");
const router= express.Router();
const charactersController= require ("../controllers/charactersController.js")


router.get('/characters', charactersController.list)