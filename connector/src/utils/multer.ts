import multer from 'multer';
import path from 'path';

const imagesExtensions = ['.png', '.jpg', '.gif', '.jpeg', '.svg'];

const upload = multer({
  storage: multer.memoryStorage(), // TODO: do not use memory storage!!
  fileFilter(req, file, callback) {
    const ext = path.extname(file.originalname);

    if (!imagesExtensions.includes(ext.toLowerCase())) {
      throw new Error('Only images are allowed');
    }

    callback(null, true);
  },

  limits: {
    fileSize: 25 * 1024 * 1024, // TODO: make it configurable from the config
  },
});
export default upload;
