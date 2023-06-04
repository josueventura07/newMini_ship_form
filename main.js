import {listComp, listHorno, listReactive, UM, listTypes, listBathroom, listOffice, blanks, tShirtSizes} from './data.js'


const containerSelectByDescrip1 = document.querySelector('.input_descript1')
const containerSelectByDescrip2 = document.querySelector('.input_descript2')
const containerSelectByUM = document.querySelector('.input_um')
const containerSelectByType = document.querySelector('.input_type')
const containerSelectByStyle = document.querySelector('.input_style')
const containerSelectSize = document.querySelector('.input_size')
const form1 = document.querySelector('#form1')
const form1_1 = document.querySelector('#form1_1')
const form2 = document.querySelector('#form2')
const headTipo = document.querySelector('#tipo')
const headDescription = document.querySelector('#description')
const headUm = document.querySelector('#um')
const headQuantity = document.querySelector('#quantity')
const bodyList = document.querySelector('#details')
const selectWarehouse = document.querySelector('.warehouse_input')
const selectWarehouseContainer = document.querySelector('#select_warehouse')
const btnChangeWarehouse = document.querySelectorAll('.btn_change_warehouse')
const defaultOption = document.querySelector('.warehouse_input')
const lista = document.querySelector('#lista')



btnChangeWarehouse.forEach(e => {
    e.addEventListener('click', e => {
        form1.classList.add('form_hidden')
        form1_1.classList.add('form_hidden')
        selectWarehouseContainer.classList.remove('form_hidden')
        defaultOption.selectedIndex = 0
       
    })
})

selectWarehouse.addEventListener('change', (e) => {
    const clientBox = document.querySelector('.box_client')
    let value = e.currentTarget.value
    
    if(value === 'QUIMICOS, PINTURAS Y COMP') {
        form1.classList.remove('form_hidden')
        selectWarehouseContainer.classList.add('form_hidden')
        clientBox.classList.add('box_client_hidden')
    } else if (value === 'BLANKS') {
        form1_1.classList.remove('form_hidden')
        selectWarehouseContainer.classList.add('form_hidden')
        clientBox.classList.remove('box_client_hidden')
    }
        
})



const Items = []
let id = 1 
const newListBlanks = []
const tShirtStyles = []

function pintarTextArea() {
    lista.innerHTML = ''
    Items.forEach(element => {
        lista.insertAdjacentText('beforeend', `
        Id = ${element.id}   
        Tipo/Estilo = ${element.type}   
        Description = ${element.description}
        UM = ${element.um}
        Cantidad = ${element.quantity}\n`)
    })
}

blanks.forEach(element => {
    newListBlanks.push(element.description.toUpperCase() + "-" + element.color.toUpperCase())
    tShirtStyles.push(element.style.toUpperCase())
})


function printItems() {
    let html = ''

        for(const item of Items) {
            
            html += `
                    <tr>
                        <th class="row inputs_table">${item.id}</th>
                        <td class="inputs_table">${item.type}</td>
                        <td class="inputs_table">${item.description}</td>
                        <td class="inputs_table">${item.um}</td>
                        <td class="inputs_table">${item.quantity}</td>
                        <td id="${item.id}">
                            <button class="btn_delete">Borrar</button>
                        </td>
                    </tr>
                `
        }
        
        bodyList.innerHTML = html;
           
}

printItems()

form1.addEventListener('submit', (e) => {
    e.preventDefault()

    const type = e.target.type.value
    const description = e.target.description.value
    const um = e.target.unitOfMeasure.value
    const quantity = e.target.quantity.value
    
    const newItems = {
        id,
        type,
        description,
        um,
        quantity: parseFloat(quantity)
    }

    id++
    Items.push(newItems)
    pintarTextArea()
    form1.reset()
    printItems()
})

form1_1.addEventListener('submit', (e) => {
    e.preventDefault()

    const type = e.target.style.value
    const description = e.target.description.value + ' ' + e.target.size.value
    const um = e.target.unitOfMeasure.value
    const quantity = e.target.quantity.value
    
    const newItems = {
        id,
        type,
        description,
        um,
        quantity: parseFloat(quantity)
    }

    id++
    Items.push(newItems)
    pintarTextArea()
    form1_1.reset()
    printItems()
})
/*
form2.addEventListener('submit', (e) => {
    e.preventDefault()
    
    
    const type = e.target.style.value
    const description = e.target.description.value + "-" + e.target.size.value
    const um = e.target.unitOfMeasure.value
    const quantity = e.target.quantity.value
    
    const newItems = {
        id,
        type,
        description,
        um,
        quantity: parseFloat(quantity),
    }

    id++

    Items.push(newItems)
    form2.reset()
    printItems()
})
*/
bodyList.addEventListener('click', (e) => {
    
    if(e.target.classList.contains('btn_delete')) {
        
        const idItem = +e.target.parentElement.id

       for (let i = 0; i < Items.length; i++) {
        if(Items[i].id === idItem) {
            Items.splice(i, 1)
            break
        }
        
     }
     pintarTextArea()
     printItems()  
    }
    
})


containerSelectByType.addEventListener('change', (e) => {
    
   let value = e.currentTarget.value.toLowerCase()
    
    if(value === 'componentes') {
        descriptions1(listComp)
    } else if(value === 'horno') {
        descriptions1(listHorno)
    } else if(value === 'reactivo') {
        descriptions1(listReactive)
    } else if(value === 'insumos para baños') {
        descriptions1(listBathroom)
    } else if(value === 'materiales para oficina') {
        descriptions1(listOffice)
    }   
   
})

containerSelectByStyle.addEventListener('change', (e) => {
    
    let value = e.currentTarget.value
    let value2 = []
        blanks.forEach(element => {
        if (element.style.toLocaleUpperCase() === value) {
            value2.push(element.description + " " + element.color)
        } 
    })
            descriptions2(value2)
        
    
 })

function UnitOfMeasure(um) {
    let html = '<option value="">Selec una Unidad de Medida</option>';
                   
    um.map(element => {
        
       html += `
                <option value="${element.toUpperCase()}">${element.toUpperCase()}</option>
                
                `
              return containerSelectByUM.innerHTML = html; 
        })          
    };

function types(type) {
        let html = '<option value="">Elija el tipo</option>';
                       
        type.map(element => {
            
           html += `
                    <option value="${element.toUpperCase()}">${element.toUpperCase()}</option>
                    
                    `
                  return containerSelectByType.innerHTML = html; 
            })          
    };    

function descriptions1(description) {
    
    let html = '<option value="">Seleccione Producto</option>';
    
        description.map(element => {
            
           html += `
                    <option value="${element.toUpperCase()}">${element.toUpperCase()}</option>
                   `
                  return containerSelectByDescrip1.innerHTML = html; 
            })          
    };

function descriptions2(description) {
    
        let html = '<option value=""></option>';
        
            description.map(element => {
               
               html += `
                        <option value="${element.toUpperCase()}">${element.toUpperCase()}</option>
                       `
                      return containerSelectByDescrip2.innerHTML = html; 
                })          
    };

function styles(style) {
    
        let html = '<option value="">Seleccione el estilo</option>';
        
            style.map(element => {
                
               html += `
                        <option value="${element.toUpperCase()}">${element.toUpperCase()}</option>
                       `
                      return containerSelectByStyle.innerHTML = html; 
                })          
    };
    
function Sizes(size) {
    
        let html = '<option value="">Seleccione el size</option>';
            
            size.map(element => {
                    
                html += `
                        <option value="${element.toUpperCase()}">${element.toUpperCase()}</option>
                           `
                        return containerSelectSize.innerHTML = html; 
            })          
    };    

UnitOfMeasure(UM)    
types(listTypes) 
styles(tShirtStyles) 
Sizes(tShirtSizes)

const sendForm = ((d)=> {
       const $form = d.querySelector('.form1_1')
       //$loader = d.querySelector('.contact-form-loader'),
       //$response = d.querySelector('.content-response');
   
       $form.addEventListener('submit', e => {
           e.preventDefault()
           //$loader.classList.remove('none');
           fetch('https://formsubmit.co/ajax/josueventura.job@gmail.com', {
               method: "POST",
               body: new FormData(e.target)
           })
               .then((res) => (res.ok ? res.json() : Promise.reject(res)))
               .then(json => {
                   console.log(json);
                   location.hash = '#gracias';
                   $form.reset();
                   
               })
               .catch(err => {
                   console.log(err);
                   let message = err.statusText || `Ocurrio un error al enviar, intenta nuevamente`
                   //$response.querySelector('h3').innerHTML = `Error ${err.status} : ${message}`
               })
               .finally(() => {
                   //$loader.classList.add('none');
                   setTimeout(()=> {
                       location.hash = '#close';
                   }, 3000)
               })
       })
   })(document)
   

   

   
   
      