import mongoose, { Mongoose } from "mongoose";

const pessoaSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true
    },
    name: String
});

const Pessoa = mongoose.model("Pessoa", pessoaSchema);

export default Pessoa;