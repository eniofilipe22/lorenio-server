import mongoose, { Mongoose } from "mongoose";

const ProdutoSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true
    },
    name: String,
    description: String,
    price: Number,
    image: String
});

const Produto = mongoose.model("Produto", ProdutoSchema);

export default Produto;