import {listComp, listHorno, listReactive, UM, listTypes, listBathroom, listOffice, blanks, sunshineBlanks, rubenBlanks} from './data.js'


const containerSelectByDescrip = document.querySelector('.input_descript')
const containerSelectByUM = document.querySelector('.input_um')
const containerSelectByType = document.querySelector('.input_type')
const form1 = document.querySelector('#form1')
const headId = document.querySelector('#id')
const headTipo = document.querySelector('#tipo')
const headDescription = document.querySelector('#description')
const headUm = document.querySelector('#um')
const headQuantity = document.querySelector('#quantity')
const bodyList = document.querySelector('#details')

const Items = []
let id = 1 
const newListBlanks = []
const newListBlanksSunshine = []
const newListBlanksRuben = []

blanks.forEach(element => {
    newListBlanks.push(element.style.toUpperCase() + "-" + element.color.toUpperCase() + "-" + element.size.toUpperCase())
})

sunshineBlanks.forEach(element => {
    newListBlanksSunshine.push(element.style.toUpperCase() + "-" + element.color.toUpperCase() + "-" + element.size.toUpperCase())
})

rubenBlanks.forEach(element => {
    newListBlanksRuben.push(element.style.toUpperCase() + "-" + element.color.toUpperCase() + "-" + element.size.toUpperCase())
})

function printItems() {
    let html = ''

        for(const item of Items) {
            
            html += `
                    <tr>
                        <th class="row"><input class="inputs_table" type="text" name="id" value="${item.id}"></th>
                        <td><input class="inputs_table" type="text" name="tipo" value="${item.type}"></td>
                        <td><input class="inputs_table" type="text" name="descripcion" value="${item.description}"></td>
                        <td><input class="inputs_table" type="text" name="unidad de medida" value="${item.um}"></td>
                        <td><input class="inputs_table" type="text" name="cantidad" value="${item.quantity}"></td>
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
    form1.reset()
    printItems()
})

bodyList.addEventListener('click', (e) => {
    
    if(e.target.classList.contains('btn_delete')) {
        
        const idItem = +e.target.parentElement.id

       for (let i = 0; i < Items.length; i++) {
        if(Items[i].id === idItem) {
            Items.splice(i, 1)
            break
        }
        
     }
     
     printItems()  
    }
    
})

containerSelectByType.addEventListener('change', (e) => {
    
   let value = e.currentTarget.value.toLowerCase()
    
    if(value == 'componentes') {
        descriptions(listComp)
    } else if(value === 'horno') {
        descriptions(listHorno)
    } else if(value === 'reactivo') {
        descriptions(listReactive)
    } else if(value === 'insumos para baños') {
        descriptions(listBathroom)
    } else if(value === 'materiales para oficina') {
        descriptions(listOffice)
    } else if(value === 't-shirt') {
        descriptions(newListBlanks)
    } else if(value === 'sunshine') {
        descriptions(newListBlanksSunshine)
    } else if(value === 'ruben') {
        descriptions(newListBlanksRuben)
    }  
    
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

function descriptions(description) {
    
    let html = '<option value="">Seleccione Producto</option>';
    
        description.map(element => {
            
           html += `
                    <option value="${element.toUpperCase()}">${element.toUpperCase()}</option>
                   `
                  return containerSelectByDescrip.innerHTML = html; 
            })          
    };

UnitOfMeasure(UM)    
types(listTypes)  

