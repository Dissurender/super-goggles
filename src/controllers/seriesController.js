import { prisma } from '../../db/index.js';

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Series[]}
 */
export const getAllSeries = async (req, res) => {
  const result = await prisma.series.findMany();
  res.json(result);
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Series}
 */
export const getSeriesByID = async (req, res) => {
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
export const getSeriesByAuthor = async (req, res) => {
  const { author } = req.body;
  const result = await prisma.series.findMany({
    where: { author: author },
  });
  res.json(result);
};
