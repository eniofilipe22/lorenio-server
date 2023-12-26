import express from "express";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { adicionar } from "./controllers/Pessoa.js";
import { adicionarProduto, listarProduto } from "./controllers/Produto.js";
// Agrega credenciales
const client = new MercadoPagoConfig({
  accessToken: "TEST-5310571220240007-122614-7d21912cd8d445bb276aea1bf23ea70b-273487164",
});


await mongoose.connect("mongodb://127.0.0.1:27017/teste");

const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    console.log("teste chamada");
    res.send("hello world");
});


// PESSOA
app.post("/pessoa",adicionar);

// PRODUTO
app.get("/produto", listarProduto);
app.post("/produto", adicionarProduto);


// app.post("/preference", async (req, res) => {
//     try {
//         const body = {
//             items: [
//                 {
//                   title: "Sofá",
//                   quantity: 1,
//                   unit_price: 200,
//                   currency_id: "BRL",
//                 },
//                 {
//                     title: "Mesa",
//                     quantity: 1,
//                     unit_price: 300,
//                     currency_id: "BRL",
//                   },
//               ]
//         };

//     const preference = new Preference(client);
//     const result = await preference.create({body});
//     console.log(result);

//     res.json({ id: result.id });

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: error });
//     }

    
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

