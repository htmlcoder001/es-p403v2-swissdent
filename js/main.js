

document.addEventListener("DOMContentLoaded", () => {
  /** Countdown **/
  (() => {
    let sec         = 1800,
      countDiv    = document.querySelector(".js-countdown"),
      countDown   = setInterval(function () {
        secpass();
      }, 1000);

    function secpass() {
      let min     = Math.floor(sec / 60),
        remSec  = sec % 60;

      if (remSec < 10) {
        remSec = '0' + remSec;
      }
      if (min < 10) {
        min = '0' + min;
      }

      document.querySelector('.js-countdown__minutes').innerHTML = min;
      document.querySelector('.js-countdown__seconds').innerHTML = remSec;


      if (sec > 0) {
        sec = sec - 1;
      } else {
        clearInterval(countDown);
        countDiv.innerHTML = '';
      }
    }
  })();

});