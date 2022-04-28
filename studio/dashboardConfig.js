export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '626a9daf81db681581a6fb3c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2jdow9dp',
                  apiId: '44e941e7-30b5-474f-965a-e05e116bf076'
                },
                {
                  buildHookId: '626a9daf6aa1ff15c387f215',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vfusf4pq',
                  apiId: '2904b19d-8162-4e2a-8598-98c739110b07'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kile-lindgren/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vfusf4pq.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
