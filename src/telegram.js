const webApp = window.Telegram.WebApp;

webApp.onEvent('start', () => {
  console.log('Telegram Web App started');
});

webApp.onEvent('close', () => {
  console.log('Telegram Web App closed');
});

export default webApp;
