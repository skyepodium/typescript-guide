// config.js
module.exports = {
    title: 'Study in TypeScript',
    description: '타입스크립트 가이드',
    base: '/typescript-guide/',
    themeConfig: {
      sidebar: [
        {
          title: 'intro',
          collapsable: false,
          children: [
            '/intro/intro'
          ],
        },
        {
          title: 'install',
          collapsable: false,
          children: [
            '/install/install'
          ],
        }        
      ]
    } 
  }
  