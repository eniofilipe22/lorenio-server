import Pessoa from "../models/Pessoa.js"

const adicionar = async (req, res) => {
    try {
        const newPessoa = new Pessoa({
            name: "Enio",
        });
        await newPessoa.save() ;

        res.status(200).json(newPessoa);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
    
};

export { adicionar };