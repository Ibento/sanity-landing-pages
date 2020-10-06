export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7c49115e6748012850687d',
                  title: 'Sanity Studio',
                  name: 'sanity-landing-pages-studio-e1w8g3gi',
                  apiId: 'adebf7da-b7ec-4c75-9f49-c5486406e4dd'
                },
                {
                  buildHookId: '5f7c491110416e00c08421be',
                  title: 'Landing pages Website',
                  name: 'sanity-landing-pages-web',
                  apiId: 'ca3fe96e-3f90-4e11-be44-aa28c288be98'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Ibento/sanity-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-landing-pages-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
