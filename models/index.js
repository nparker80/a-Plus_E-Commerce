// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey:'category_id',
});

Category.hasMany(Product, {
  foreignKey:'category_id',
});

Product.belongsToMany(Product, {
  through: ProductTag,
  foreignKey:'tag_id',
});

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
