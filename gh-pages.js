const ghpages = require('gh-pages');

// Путь к вашей сборке
const buildPath = 'build';

ghpages.publish(buildPath, {
  branch: 'gh-pages',
  repo: 'https://github.com/RuslanUsman/talant-lios.git',
}, (err) => {
  if (err) {
    console.error('Ошибка публикации на GitHub Pages:', err);
  } else {
    console.log('Проект успешно опубликован на GitHub Pages');
  }
});
