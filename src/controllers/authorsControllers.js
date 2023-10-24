import { prisma } from '../../db/index.js';

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Author[]}
 */
export const getAllAuthors = async (req, res) => {
  const result = await prisma.author.findMany();
  res.json(result);
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Author}
 */
export const getAuthorByID = async (req, res) => {
  const { id } = req.body;
  const result = await prisma.author.findUnique({
    where: { id: Number(id) },
  });
  res.json(result);
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Author[]}
 */
export const getAuthorsByGenre = async (req, res) => {
  const { genre } = req.body;
  const result = await prisma.author.findMany({
    where: { genre: Number(genre) },
  });
  res.json(result);
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Book}
 */
export const createNewAuthor = async (req, res) => {
  const { name } = req.body;

  const result = await prisma.book.create({
    data: {
      name: name,
    },
  });
  res.json(result);
};
