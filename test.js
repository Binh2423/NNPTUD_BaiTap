let categories = db.categories.find().toArray();

categories.forEach(category => {
    for (let i = 1; i <= 5; i++) {
        db.products.insertOne({
            name: "Sản phẩm " + i + " - " + category.name,
            slug: "san-pham-" + i + "-" + category._id,
            price: Math.floor(Math.random() * 9000000) + 1000000, // Random từ 1tr đến 10tr
            description: "Mô tả sản phẩm " + i + " thuộc danh mục " + category.name,
            quantity: Math.floor(Math.random() * 50) + 1, // Random từ 1 đến 50
            imgURL: "https://via.placeholder.com/150?text=Product" + i,
            category: category._id,
            isDeleted: false,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }
});
