const { prisma } = require('../../db/index.js');

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Book[]}
 */
const getAllBooks = async (req, res) => {
  const result = await prisma.book.findMany();
  res.json(result);
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Book}
 */
const getBookByISBN = async (req, res) => {
  const result = await prisma.book.findUnique();
  res.json(result);
};

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor: async () => {},
  getBooksByGenre: async () => {},
};
