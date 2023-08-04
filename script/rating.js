
  // aqui estão todos os buttons 
  let num1 = document.getElementById('b1')
  let num2 = document.getElementById('b2')
  let num3 = document.getElementById('b3')
  let num4 = document.getElementById('b4')
  let num5 = document.getElementById('b5')
 
 //texto dentro do meu span 
  let txt = document.querySelector('span')  
  let submitForm = document.getElementById('sub')
 
  // aqui eu deixo visivel ou invisivel de parte do formulario
  submitForm.addEventListener('click', function(){
    let visible = document.getElementById('visible')
    let invisible =  document.getElementById('invisible')
    visible.classList.add('hidden')
    invisible.style.display = 'grid'
  }) 
  

  // essa parte controla o valor a ser enviado
   num1.addEventListener('click',function() {
  document.getElementById('selectvalue').innerText = ` 1 `
  })

  num2.addEventListener('click',function() {
   document.getElementById('selectvalue').innerText = ` 2 `
  })

  num3.addEventListener('click',function() {
   document.getElementById('selectvalue').innerText = ` 3 `
  })

  num4.addEventListener('click',function() {
   document.getElementById('selectvalue').innerText = ` 4 `
  })

  num5.addEventListener('click',function() {
   document.getElementById('selectvalue').innerText = ` 5 `
  })

  

 