burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.navlist')
rightnav=document.querySelector('.rightnav')
burger.addEventListener('click',()=>{
rightnav.ClassList.toggle('v-class-resp')
navlist.ClassList.toggle('v-class-resp')
navbar.ClassList.toggle('h-nav-resp')

})