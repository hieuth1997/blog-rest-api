import sharp from 'sharp';
sharp.cache(false);

const resizeFile = (
  file,
  options = { width: 200, height: null, fit: 'cover' },
) => {
  file.filename = file.filename.replace(/\.[^\/.]+$/, '_resized.jpg');
  sharp(file.path)
    .resize(options)
    .toFormat('jpg')
    .toFile((file.path = file.destination + file.filename));
};

export const resize = async (req, res, next) => {
  try {
    const { width, height } = req.query;
    if (req.file) resizeFile(req.file, { width: +width, height: +height });
    else if (req.files) {
      if (req.files instanceof Array)
        req.files.map((file) => {
          resizeFile(file, { width, height });
        });
    } else {
      Object.keys(req.files).map((key) =>
        req.files[key].map((file) => {
          resizeFile(file, { width, height });
        }),
      );
    }
    next();
  } catch (error) {
    next(error);
  }
};
