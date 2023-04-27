const express = require('express');
//стандартнй код
const router = express.Router();
// /main обєднання
router.get('/', (req, res) => {
    res.render('page');
});



const items = [
    { 
        id: 1,
        name: 'шоколад молочний',
        brand: 'Світоч',
    },
    { 
        id: 2,
        name: 'шоколад білий',
        brand: 'Roshen',
    },
    { 
        id: 3,
        name: 'шоколад чорний',
        brand: 'АВК',
    },
    { 
        id: 4,
        name: 'шоколад пористий',
        brand: 'Корона',
    },
    { 
        id: 5,
        name: 'шоколад з полуничним смаком',
        brand: 'Світоч',
    },
    { 
        id: 6,
        name: 'шоколад з горіхами',
        brand: 'Корона',
    },
    { 
        id: 7,
        name: 'шоколад з родзинками',
        brand: 'АВК',
    },
    
];

router.get('/items', (req,res) => {
    // json - спеціальний формат передачі даних який дозволяє вивести масив як текст
    console.log(items)
    res.json(items);
});


// добавляєм query параметри
router.get('/items/chocolate', (req,res) =>{
    let data = items;
    data = data.filter(item=> item.name === req.query.name);
    //const id = items.find(item => item.id === req.query.q)
    res.json(data)
    
})

//стандартний код
module.exports = router;