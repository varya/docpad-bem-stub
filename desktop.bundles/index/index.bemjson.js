({
    block: 'page',
    title: 'Article',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: 'index.min.css', ie: false },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    content:[
        {
            block: 'posts-list'
        },
        { elem: 'js', url: 'index.min.js' }
    ]
})
