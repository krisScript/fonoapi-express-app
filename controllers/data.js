const Data = require('../models/data');
exports.getData = (req, res, next) => {
  const { modelName } = req.body;
  const { modelBrand } = req.body;
  const data = new Data(modelBrand, modelName);
  data.getData().then(data => {
    res.render('models', {
        models:data,
        path: '/models',
        title: 'Models'
      });
  });
  
};
