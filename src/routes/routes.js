const { Router } = require('express');
const controllers = require('../controllers/controllers');
const router = Router();

router.get('/api',(req,res)=>{
    res.json({mensasage: 'welcome to api'})
})

router.get('/api/read',controllers.read);
router.post('/api/create',controllers.create);
router.put('/api/update/:id',controllers.update);
router.delete('/api/delete/:id',controllers.delete);
router.get('/api/read/:id',controllers.listar)

module.exports = router;