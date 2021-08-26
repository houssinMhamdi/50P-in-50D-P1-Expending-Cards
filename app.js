const panals = document.querySelectorAll('.panel');
panals.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses();
        panel.classList.toggle('active');
    })
});

function removeActiveClasses(){
    panals.forEach((ele)=>{
        ele.classList.remove('active');
    });
}
