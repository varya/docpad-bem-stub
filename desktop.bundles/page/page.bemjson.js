({
    block: 'page',
    title: 'Article',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: 'http://fonts.googleapis.com/css?family=Arvo', ie: false },
        { elem: 'css', url: 'page.min.css', ie: false },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    content:[
        {
            block: 'header',
            content: [
                {
                    block: 'site-menu',
                    content: [
                        {
                            elem: 'item',
                            mods: {
                                current: true
                            },
                            content: {
                                block: 'link',
                                url: '#',
                                content: 'Index'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'link',
                                url: '#',
                                content: 'About'
                            }
                        }
                    ]
                }
            ]
        },
        {
            elem: 'content',
            content: [
                {
                    block: 'page',
                    elem: 'title',
                    content: 'Page title'
                },
                'Page content'
            ]
        },
        {
            block: 'footer',
            content: {
                elem: 'inner',
                content: 'footer content'
            }
        },
        { elem: 'js', url: 'index.min.js' }
    ]
})
