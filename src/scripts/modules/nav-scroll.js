export function navScroll() {
  let last_known_scroll_position = 0;
  const navHeight = '20';
  let ticking = false;
  let navHasScroll = false;
  const body = document.querySelector('.header');
  const navScrolledClass = 'header--sticky';


  const onScroll = () => {
    if (body.classList.contains(navScrolledClass)) { return; }
    body.classList.add(navScrolledClass);
  };

  const onTop = () => {
    if (!body.classList.contains(navScrolledClass)) { return; }
    body.classList.remove(navScrolledClass);
  };


  window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;

    if( last_known_scroll_position > navHeight) {
      if (!ticking) {
        if(!navHasScroll) {
          window.requestAnimationFrame(function() {
            onScroll();
            ticking = false;
            navHasScroll = false;
          });
        }
      }
      ticking = true;
      navHasScroll = true;
    } else {
      navHasScroll = false;
      onTop();
    }

  });
}
