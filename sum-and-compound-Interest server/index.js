const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/sum", (req,res) => {
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    const sum = a+b;
    res.send(sum.toString());
});
app.get("/interest", (req,res)=> {
    const p= parseFloat(req.query.p);
    const r= parseFloat(req.query.r);
    const n= parseFloat(req.query.n);
    const result = p*r*n 
    res.send(result.toString());
})
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
