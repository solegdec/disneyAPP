const express= require ("express");
const router= express.Router();
const apiController= require ("../controllers/apiController.js")

router.get('/characters', apiController.charactersList)
router.get('/characters/:id', apiController.charactersDetail)







module.exports = router;