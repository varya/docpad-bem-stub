# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {

plugins:
    rss:
        default:
            collection: 'posts'
    grunt:
        writeAfter: false
        generateAfter: ["shell", "copy"]
    ghpages:
        deployRemote: 'origin'
        deployBranch: 'master'

templateData:

    cutTag: '<!-- cut -->'

    site:
        title: 'My Awesome Blog'

    # Post part before “cut”
    cuttedContent: (content) ->
        if @hasReadMore content
            cutIdx = content.search @cutTag
            content[0..cutIdx-1]
        else
            content

    # Has “cut”?
    hasReadMore: (content) ->
        content and ((content.search @cutTag) isnt -1)

    pageTitle: ->
        if @document.basename == 'index'
            @document.title
        else
            (@document.title && @document.title + ' : ') + @site.title

    getPageCSSPath: ->
        "#{@getPageStaticPath()}.min.css"
    getPageJSPath: ->
        "#{@getPageStaticPath()}.min.js"
    getPageStaticPath: ->
        layout = @document.layout
        if layout != 'index'
            layout = 'page'
        "/desktop.bundles/#{layout}/#{layout}"

collections:

    pages: (database) ->
        @getCollection('documents').findAllLive({ relativeOutDirPath: 'pages' }).on 'add', (document) ->
            a = document.attributes

            basename = a.basename
            newUrl = "#{basename}.#{a.outExtension}"
            document.set('isPage', true)
            urls = ["/#{newUrl}"]

            layout = a.layout
            if !layout
                layout = 'page'

            document
                .setMetaDefaults({
                    url: urls[0]
                    layout: layout
                })
                .addUrl(urls)

    posts: (database) ->
        @getCollection('documents').findAllLive({ relativeOutDirPath: 'posts' }).on 'add', (document) ->
            a = document.attributes

            layout = a.layout
            if !layout
                layout = 'post'

            document
                .setMetaDefaults({
                    layout: layout
                })


env: 'static'

}

# Export the DocPad Configuration
module.exports = docpadConfig
