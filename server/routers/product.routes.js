const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const productController = require('../controllers/product.controller');

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Set up multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        console.log(uniqueName);
        cb(null, uniqueName);
    }
});

const upload = multer({ storage: storage });

router.post('/create', upload.single('file'), productController.createProduct);
router.get('/', productController.getAllProducts);

module.exports = router;
