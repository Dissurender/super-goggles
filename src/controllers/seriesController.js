const { prisma } = require('../../db/index.js');

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @returns {Series[]}
 */
const getAllSeries = async (req, res) => {
  const result = await prisma.series.findMany();
  res.json(result);
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @returns {Series}
 */
const getSeriesByID = async (req, res) => {
  const { id } = req.body;
  const result = await prisma.series.findUnique({
    where: { id: Number(id) },
  });
  res.json(result);
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @returns {Series[]}
 */
const getSeriesByAuthor = async (req, res) => {
  const { author } = req.body;
  const result = await prisma.series.findUnique({
    where: { author: author },
  });
  res.json(result);
};

module.exports = {
  getAllSeries,
  getSeriesByID,
  getSeriesByAuthor,
};
