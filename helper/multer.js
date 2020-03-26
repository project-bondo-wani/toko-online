const multer = require('multer');

var storage = multer.diskStorage({
    limits: {
        fileSize: 4 * 1024 * 1024,
    },
    destination: function(req, file, cb) {
        cb(null, 'public/image');
     },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});

const upload = multer({ storage: storage })

module.exports = upload