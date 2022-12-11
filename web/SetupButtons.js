
document.addEventListener("DOMContentLoaded", function(event) {
    
    SetupButtons();

  });

function SetupButtons(){

    view = document.getElementsByClassName('dataView')
    button = document.getElementsByClassName('indiceParameterButton')

    for (let index = 0; index < button.length; index++) {
    const element = button[index];

    element.addEventListener("click",function() {btnAction(button[index]);});
    
   }
}

function btnAction(btn)
{
    btn.classList.toggle("active");
    var content = btn.nextElementSibling;

    if(content.style.scale == 1)
    {
        content.style.scale = 0;
        content.style.maxHeight = 0;     
        
        view.innerHTML = "";
    }
    else
    {
        content.style.scale = 1;
        content.style.maxHeight = '100%'; 
    }
}

function UpdateView(property)
{
    
}