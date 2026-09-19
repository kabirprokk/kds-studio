// KDS Studio demo interactions
const nav = document.getElementById('nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 30), {passive:true});

const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.onclick = () => mobileMenu.classList.toggle('open');
mobileMenu.querySelectorAll('a').forEach(a => a.onclick = () => mobileMenu.classList.remove('open'));

// Filters
document.querySelectorAll('.filters button').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('#gallery .card').forEach(card => {
      card.style.display = (f === 'all' || card.dataset.cat === f) ? '' : 'none';
    });
  };
});

// Lightbox
const cards = [...document.querySelectorAll('#gallery .card')];
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCap = document.getElementById('lbCap');
let idx = 0;
function visibleCards(){ return cards.filter(c => c.style.display !== 'none'); }
function openLb(i){
  const list = visibleCards();
  idx = (i + list.length) % list.length;
  const img = list[idx].querySelector('img');
  lbImg.src = img.src;
  lbCap.textContent = list[idx].querySelector('figcaption span').textContent;
  lb.classList.add('open');
}
cards.forEach(c => c.onclick = () => openLb(visibleCards().indexOf(c)));
document.getElementById('lbClose').onclick = () => lb.classList.remove('open');
document.getElementById('lbPrev').onclick = e => { e.stopPropagation(); openLb(idx-1); };
document.getElementById('lbNext').onclick = e => { e.stopPropagation(); openLb(idx+1); };
lb.onclick = e => { if(e.target === lb) lb.classList.remove('open'); };
addEventListener('keydown', e => {
  if(!lb.classList.contains('open')) return;
  if(e.key === 'Escape') lb.classList.remove('open');
  if(e.key === 'ArrowRight') openLb(idx+1);
  if(e.key === 'ArrowLeft') openLb(idx-1);
});

// Demo enquiry -> WhatsApp
const form = document.getElementById('enquiryForm');
const note = document.getElementById('formNote');
const waBtn = document.getElementById('waBtn');
// TODO: replace with client's real number, e.g. 919999999999
const WHATSAPP_NUMBER = '910000000000';
function waLink(data){
  const text = `Hello KDS Studio! I'm ${data.get('name')} (${data.get('phone')}). Date: ${data.get('date') || '-'}, Service: ${data.get('service')}. ${data.get('msg') || ''}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
waBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello KDS Studio! I want to enquire about a shoot.')}`;
form.onsubmit = e => {
  e.preventDefault();
  const data = new FormData(form);
  window.open(waLink(data), '_blank');
  note.textContent = 'Opening WhatsApp… we reply within 24 hrs. Thank you! 🤍';
};
