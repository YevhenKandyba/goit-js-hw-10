document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const delay = parseInt(form.delay.value);
    const state = form.state.value;

    function createPromise(delay, state) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (state === 'fulfilled') {
            resolve(delay);
          } else {
            reject(delay);
          }
        }, delay);
      });
    }

    createPromise(delay, state)
      .then((delay) => {
        iziToast.success({
          message: `✅ Fulfilled promise in ${delay}ms`,
          position: 'topRight',
        });
      })
      .catch((delay) => {
        iziToast.error({
          message: `❌ Rejected promise in ${delay}ms`,
          position: 'topRight',
        });
      });
  });
});

