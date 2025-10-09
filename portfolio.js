document.getElementById('year').textContent = new Date().getFullYear();
    function toggleMenu(){
      const mm = document.getElementById('mobileMenu');
      mm.style.display = (mm.style.display === 'none' || mm.style.display === '') ? 'block' : 'none';
    }
document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', function(e){
        const href = this.getAttribute('href');
        if(href.startsWith('#')){
          e.preventDefault();
          const el = document.querySelector(href);
          if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
        }
    });
});
