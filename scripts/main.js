document.getElementById('btn-textmore').addEventListener('click', () => {
  const text = document.getElementById('abstract-box-text');
  
  text.style.height = 'fit-content';
  text.style.overflow = 'visible';
  document.getElementById('btn-textmore').style.display = 'none';
  document.getElementById('btn-hide').style.display = 'block';
});

document.getElementById('btn-hide').addEventListener('click', () => {
  const text = document.getElementById('abstract-box-text');
  
  text.style.height = '92px';
  text.style.overflow = 'hidden';
  document.getElementById('btn-hide').style.display = 'none';
  document.getElementById('btn-textmore').style.display = 'block';
});

document.getElementById('btn-show-comments').addEventListener('click', () => {
  const response = document.getElementById('show');

  if(response.style.display == 'none') {
    response.style.display = 'block';
  } else {
    response.style.display = 'none';
  }
});

document.getElementById('btn-open-menu-mobile').addEventListener('click', () => {
  const nav = document.getElementById('navigation');
  nav.style.display = 'block';
});

document.getElementById('btn-close-menu-mobile').addEventListener('click', () => {
  const nav = document.getElementById('navigation');
  nav.style.display = 'none';
});