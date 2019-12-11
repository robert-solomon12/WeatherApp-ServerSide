import express from 'express';
import Weather from './weatherInfoModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line

// Get all weather input infos, using try/catch to handle errors
router.get('/', async (req, res) => {
  try {
    const weatherInfos = await Weather.find();
    res.status(200).json(weatherInfos);
  } catch (error) {
    handleError(res, error.message);
  }
});

// Get all weather input information, using try/catch to handle errors
router.get('/', async (req, res) => {
  try {
    const weatherInfos = await Weather.find();
    res.status(200).json(weatherInfos);
  } catch (error) {
    handleError(res, error.message);
  }
});

// Create a WeatherInfo, using async handler
router.post('/', asyncHandler(async (req, res) => {
  const weatherInfo = await Weather.create(req.body);
  res.status(201).json(weather);
}));

// Update a weatherInfo
router.put('/:id', asyncHandler(async (req, res) => {
  if (req.body._id) delete req.body._id;
  const weather = await Weather.update({
    _id: req.params.id,
  }, req.body, {
    upsert: false,
  });
  if (!weather) return res.sendStatus(404);
  return res.status(200).json(weather);
}));

// Delete a weather Input information
router.delete('/:id', asyncHandler(async (req, res) => {
  const weather = await Weather.findById(req.params.id);
  if (!weather) return res.send(404);
  await weather.remove();
  return res.status(204).send(weather);
}));


/**
 * Handle general errors.
 * @param {object} res The response object
 * @param {object} err The error object.
 * @return {object} The response object
 */
function handleError(res, err) {
  return res.send(500, err);
}

export default router;