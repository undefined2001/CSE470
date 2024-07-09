const Product = require('../models/product.model');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch products' });
    }
};

const createProduct = async (req, res) => {
    console.log(req);
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const region = req.body.region;
    const imgPath = req.file ? req.file.filename : null;

    console.log(title, description, price, region);

    try {
        const product = await Product.create({
            title: title,
            description: description,
            region: region,
            price: price,
            imgPath: imgPath
        });
        console.log(product);
        return res.status(201).json({ message: "Product Created Successfully", product });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to create product' });
    }
};

module.exports = { createProduct, getAllProducts };
