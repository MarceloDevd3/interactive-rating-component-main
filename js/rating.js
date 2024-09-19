 //texto dentro do meu span 
  let txt = document.querySelector('span');
  let submitForm = document.getElementById('sub');
  let btns = document.querySelectorAll(".btn");

  // aqui eu deixo visivel ou invisivel de parte do formulario
  submitForm.addEventListener('click', function() {
    let visible = document.getElementById('visible');
    let invisible =  document.getElementById('invisible');
    visible.classList.add('hidden');
    invisible.style.display = 'grid';
  })
  

  
  // pega valor de botao e atribuir ao meu selectValue
  btns.forEach(btn => {
    btn.onclick =  () => {
      btns.forEach(subIt => {
        subIt.classList.remove('active');
      })
      btn.classList.add('active')
    }
      document.getElementById('selectvalue').innerText = btn.value;
  })



 