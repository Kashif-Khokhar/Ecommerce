const fs = require("fs");
const path = require("path");
const User = require("../models/User");
const Product = require("../models/Product");
const Order = require("../models/Order");
const Cart = require("../models/Cart");

const syncDataToLocal = async () => {
    try {
        const rootDir = path.join(__dirname, "../../");
        const dbTablesDir = path.join(rootDir, "ecommerce_test");

        if (!fs.existsSync(dbTablesDir)) {
            fs.mkdirSync(dbTablesDir);
        }

        const collections = [
            { name: "users", model: User },
            { name: "products", model: Product },
            { name: "orders", model: Order },
            { name: "carts", model: Cart },
        ];

        for (const collection of collections) {
            const data = await collection.model.find();
            const filePath = path.join(dbTablesDir, `${collection.name}.json`);
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        }

        console.log(`Database tables mirrored to: ${dbTablesDir}`);
    } catch (err) {
        console.error("Error syncing database to local folder:", err);
    }
};

module.exports = syncDataToLocal;
