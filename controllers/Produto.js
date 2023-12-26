import Produto from "../models/Produto.js"

const adicionarProduto = async (req, res) => {
    try {
        const { name, description, price, image } = req.body;
        const newProduto = new Produto({
            name,
            description,
            price,
            image
        });
        await newProduto.save() ;

        res.status(200).json(newProduto);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
    
};

const listarProduto = async (req, res) => {
    try {
        const produtos = await Produto.find();
        res.status(200).json(produtos);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export { adicionarProduto, listarProduto };