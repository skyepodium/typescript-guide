// config.js
module.exports = {
    title: 'Study in TypeScript',
    description: '타입스크립트 가이드',
    base: '/typescript-guide/',
    themeConfig: {
      sidebar: [
        {
          title: '소개',
          collapsable: false,
          children: [
            '/intro/why'
          ],
        },
        {
          title: 'install',
          collapsable: false,
          children: [
            '/install/node',
            '/install/type'
          ],
        },
        {
          title: 'basic',
          collapsable: false,
          children: [
            '/basic/variable',
            '/basic/function'
          ],
        }             
      ]
    } 
  }
  