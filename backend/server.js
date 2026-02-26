import express, {urlencoded} from 'express';
import db from "./config/db.js";
import cors from "cors";
const app = express();
app.use(urlencoded({ extended: true }));
app.use(cors())

app.get('/categories', async (req, res) => {
    let [row]=await db.query("SELECT * FROM categories");
    res.json(row);
});

app.get("/products/:id", async (req, res) => {
    let id=req.params.id;
    let [row]=await db.query("SELECT * FROM products WHERE id=?", [id])
    res.json(row);
})

app.post("/categories", async (req, res) => {
let {name}=req.body;

let [query]=await  db.query('INSERT INTO categories (name,product) values (?,?)',[name,product]);

res.json({
    id:query.insertId,
    name,
    product,


})
})

app.post('/product', async (req, res) => {
    const {id, name, cat_id, product} = req.body;
    if(!id || !name || !cat_id || !product){
        return res.json({
            error:'please enter a valid product name'
        })
    }


    const [query]=await db.query('insert into products (id,name, cat_id,product) values (?,?,?,?)',[id,name, cat_id,product]);
res.json({
    id:query.insertId,
    name,
    cat_id,
    product,
})

})


app.get('/products/:id', async (req, res) => {
    let id=req.params.id;
    const [query]=await db.query('SELECT * FROM products WHERE id=?', [id]);
    res.json(query);
})
app.delete('/product/:id', async (req, res) => {
    let id=req.params.id;
    const [query]=await db.query('DELETE FROM products WHERE id=?', [id]);
    res.json({
        message:`Product deleted successfully.`,
    })
})
app.get('/products', async (req, res) => {
    const [query]=await  db.query('select * from products ');
    res.json(query);
})










const port = process.env.PORT;
app.listen(port, () => {
     console.log(`Server listening on port ${port}`);
 })


