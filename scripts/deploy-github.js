const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/tramynn/tramynn.github.io.git',
  },
  () => {
    console.log('Deploy complete')
  }
)
