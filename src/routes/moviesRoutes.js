const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

/* -- lista de peliculas --*/
router.get('/movies', moviesController.list);
/* -- creacion --*/
router.get('/movies/new', moviesController.new);
router.post('/movies/', moviesController.newMovie);

/* -- edicion de pelicula --*/
router.get('/movies/edit/:id', moviesController.edit);
router.get('/movies/:id', moviesController.getOne);
router.put('/movies/:id', moviesController.update);


//router.get('/movies/recommended', moviesController.recomended);

/* --Detalle de Producto--*/
//router.get('/movies/:id', moviesController.detail);

/* ---- DELETE ---- */
//router.delete('/movies/:id')

module.exports = router;