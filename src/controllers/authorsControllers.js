const { prisma } = require('../../db/index.js');

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @returns {Author[]}
 */
const getAllAuthors = async (req, res) => {
  const result = await prisma.author.findMany();
  res.json(result);
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @returns {Author}
 */
const getAuthorByID = async (req, res) => {
  const { id } = req.body;
  const result = await prisma.author.findUnique({
    where: { id: Number(id) },
  });
  res.json(result);
}

module.exports = {
  getAllAuthors,
  getAuthorByID,
  getAuthorsByGenre: async () => {},
};
