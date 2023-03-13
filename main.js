import {description, UM} from './data.js'


const containerSelectByDescrip = document.querySelector('.input_descript')
const containerSelectByUM = document.querySelector('.input_um')


function UnitOfMeasure(um) {
    let html = '<option value="">Selec una Unidad de Medida</option>';
                   
    um.map(element => {
        
       html += `
                
                
                <option value="${element}">${element}</option>
                
                `
              return containerSelectByUM.innerHTML = html; 
        })          
    };

function descriptions(description) {
    let html = '<option value="">Seleccione Producto</option>';
    
    description.map(element => {
        
       html += `
                
                
                <option value="${element}">${element}</option>
                
                `
              return containerSelectByDescrip.innerHTML = html; 
        })          
    };

UnitOfMeasure(UM)    
descriptions(description)  

