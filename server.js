import express from "express";
import cors from "cors";
import { MercadoPagoConfig, Preference } from "mercadopago";
// Agrega credenciales
const client = new MercadoPagoConfig({
  accessToken: "TEST-5310571220240007-122614-7d21912cd8d445bb276aea1bf23ea70b-273487164",
});

const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    console.log("teste chamada");
    res.send("hello world");
});

app.post("/preference", async (req, res) => {
    try {
        const body = {
            items: [
                {
                  title: "Sofá",
                  quantity: 1,
                  unit_price: 200,
                  currency_id: "BRL",
                },
                {
                    title: "Mesa",
                    quantity: 1,
                    unit_price: 300,
                    currency_id: "BRL",
                  },
              ]
        };

    const preference = new Preference(client);
    const result = await preference.create({body});
    console.log(result);

    res.json({ id: result.id });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }

    
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

