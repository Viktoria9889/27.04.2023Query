console.log('work');
const chocolate = document.querySelector('.select_chocolate');
const input = document.querySelector('.input');
const choose = document.querySelector('.choose');


const item = async () => {   
    //масив шоколаду
    const result = await axios.get('/items')
    //виводим цей масив в html
    result.data.forEach(elem => {
        chocolate.innerHTML += `<option class="option">${elem.name}</option>`
    });
}

item();

const selectChoose = document.querySelector('select[name=select]');
selectChoose.addEventListener('change', async (ev) => {
    const val = ev.target.value;
    const resultChoose = await axios.get('/items/chocolate', { params: {name: val } });
    console.log(resultChoose);
    choose.innerHTML = `<div>${val}</div>`;
})

    



/*
const id = async () => {
    const items = await axios.get('/items/id',{
        params: {
            q: input.value
        }
    })
    const name = items.data.forEach(elem => {
        chocolate.innerHTML += `<li class="li">${elem.name}</li>`
    })
}

console.log(id)



input.addEventListener('keyup', (ev) => {
   

    const itemLi = document.getElementsByClassName('li');
    for(const element of itemLi) {
        if (!element.innerHTML.startsWith(ev.target.value)) {
            element.classList.add('hidden');
        }
        else {
            element.classList.remove('hidden');
        }
    }
})
*/