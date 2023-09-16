const path = require('path')

module.exports = {
    outDir: './build',    
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    output: 'export',
    images: {
        loader: 'imgix',
        path: '/',
      },
}