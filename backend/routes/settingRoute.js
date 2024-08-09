const express = require('express'); 
const multer = require("multer");
const {editForm,updateRecord,deleteImage,apiGetSingleRecord} = require('../contollers/settingsController');
const { isAuthenticatedUser,authorizeRoles } = require('../middleware/auth');
const Model = require('../models/settingModel');
const module_slug = Model.module_slug;
const router = express.Router();

var Storage = multer.diskStorage({
    destination: function(req, file, callback) {
     console.log(file);
        callback(null,"./uploads/settings");
    },
    filename: function(req, file, callback) {
     console.log(file);
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

var upload = multer({ storage: Storage });


router.route('/'+module_slug).get(isAuthenticatedUser,authorizeRoles('admin'),editForm)
router.route('/'+module_slug+'/update/:id').post(upload.single('header_logo'),isAuthenticatedUser,authorizeRoles('admin'),updateRecord)
router.route('/'+module_slug+'/delete-image/:id').get(isAuthenticatedUser,authorizeRoles('admin'),deleteImage);   

/** REST API**/
router.route('/api-'+module_slug).get(apiGetSingleRecord)

module.exports = router