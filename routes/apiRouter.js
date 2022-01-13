const express= require ("express");
const router= express.Router();
const apiController= require ("../controllers/apiController.js")

router.get('/characters', apiController.charactersList)





module.exports = router;