let apiHitCount = 0;
const logger = require('../logger/logger');
const apiCounter = require('../counter/apiHitCounter');


module.exports.testPost = async (req, res) => {
  apiCounter.increment();

  try {
    res.status(200).json({
      success: true,
      message: 'Data received successfully',
      data: req.body
    });
  } catch (error) {
    logger.error('Error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
