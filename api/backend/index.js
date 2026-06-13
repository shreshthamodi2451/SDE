import express from 'express';

const app= express();

app.get('/api/products', (req, res) => {
    const products =[
        {
            id: 1,
            name: 'table wooden',
            price: 200,
            image: 'https://www.angelfurniture.in/Angel-Furniture-Oakland-Dining-Table-with-Metal-Base-Leg-and-Sheesham-Wood-Top-in-Honey-Finish-%28140X90%29?srsltid=AfmBOopD_t_XEzqEIBe9Rs3tpjxYkEBXSBjOQe-ngRfMzoIOBH0vr3R_'
             
        },
         {
            id: 2,
            name: 'table glass',
            price: 500,
            image: 'https://www.amazon.in/Yusong-Glass-Round-Coffee-Table/dp/B0C1TD3ZCY'

        },
        {
            id: 3,
            name: 'table plastic',
            price: 200,
            image: 'https://www.amazon.in/Petals-Desire-Seater-Dining-Table/dp/B07M63WGJ9'

        },
        {
            id: 4,
            name: 'table polyester',
            price: 200,
            image: 'https://www.pamono.com/oval-dining-table-in-green-polyester-attributed-to-ferreiri-gardella-for-kartell-1969?srsltid=AfmBOopvS8DdNg_DgGjobf_0Z0DxbYc_a65aaCLLRSapZohRiT8kzj4r'
        },
        {
            id: 5,
            name: 'table metal',
            price: 200,
            image: 'https://www.sathyafurniture.in/products/steel-senior-executive-table-2-sides-storage-with-particle-board-top'
        }
       

    ]

    //now to have a link in which i can directly like search the product for that i will write
    //http://localhost:3000/api/products?search=metal


    if(req.query.search)
    {
        const filterProducts= products.filter( product => product.name.includes(req.query.search))
        res.send(filterProducts);
        return;
    }
    setTimeout( () => {
        res.send(products);
    }, 3000);
})






const port= process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});