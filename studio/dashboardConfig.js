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
                  buildHookId: '6075b1ace75328fb2fbe415f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-k5swae94',
                  apiId: 'a4bf3dfd-bfa4-47e9-aee6-4d39bf47703a'
                },
                {
                  buildHookId: '6075b1ace305aaf70ca2a49d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-j2w3bgo8',
                  apiId: 'f258bb81-954c-42a1-a2d6-bc8a39d5fd4f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thainabbraz/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-j2w3bgo8.netlify.app',
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
