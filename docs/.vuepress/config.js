// config.js
module.exports = {
    title: 'vuepress-stater', // 사이트 타이틀
    description: 'vuepress로 만든 문서입니다.',
    base: '/typescript-guide/',
    themeConfig: {
      sidebar: [
        {
          title: 'intro',
          collapsable: false,
          children: [
            '/intro/intro'
          ],
        }
      ]
    } 
  }
  