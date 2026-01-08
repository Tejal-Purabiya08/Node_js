const multer = require("multer");
const productData = require("../Model/productM");
const categoryData = require("../Model/categoryM");

const PostProduct = async (req, res) => {
  const { title, price,  categoryId } = req.body;
  let image = "";

  if (req.file) {
    image = req.file.path;
  }

  await productData.create({
    title: title,
    price: price,
    categoryId: categoryId,
    image: image,
  });
  res.redirect("/product");
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const ImageUpload = multer({ storage: storage }).single("image");

const GetProduct = async (req, res) => {
  const data = await productData.find({}).populate("categoryId");
  const category = await categoryData.find({});
  res.render("product", { data, category });
};

// const GetProductAPI = async (req, res) => {
//   const data = await productData.find({}).populate("categoryId");
//   res.json(data);
// };

const GetProductsByCategory = async (req, res) => {
  const { categoryId } = req.params;
  const data = await productData.find({ categoryId }).populate("categoryId");
  res.render("category")
};

module.exports = {
  PostProduct,
  GetProduct,
  ImageUpload,
  GetProductsByCategory,  
};
