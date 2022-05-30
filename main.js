 const tabs = document.getElementById('tabs');
 const content = document.querySelectorAll('.content');

 

 
 
 
 const chengeClass = el =>{
   for(let i = 0; i < tabs.children.length; i++){
     tabs.children[i].classList.remove('active');
   }
   el.classList.add('active')
 }
 
 tabs.addEventListener('click', e =>{
  const currTab = e.target.dataset.btn;
  chengeClass(e.target);
    for(let i = 0; i < content.length; i++){
      content[i].classList.remove('active');
      if(content[i].dataset.content == currTab){
        content[i].classList.add('active');
      }
    }
 })


/*-----------------------------------------------------------------*/


  const tabSecond = document.getElementById('tabs__second');
  const contentSecond = document.querySelectorAll('.text');

 const chengeClassSecond = el =>{
  for(let i = 0; i < tabSecond.children.length; i++){
    tabSecond.children[i].classList.remove('open');
  }
  el.classList.add('open')
}

tabSecond.addEventListener('click', e =>{
 const currTab = e.target.dataset.btn2;
 chengeClassSecond(e.target);
   for(let i = 0; i < contentSecond.length; i++){
    contentSecond[i].classList.remove('open');
     if(contentSecond[i].dataset.text == currTab){
      contentSecond[i].classList.add('open');
     }
   }
})
