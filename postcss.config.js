module.exports = {
    "plugins": {
        'postcss-import': {},
        'postcss-cssnext': {
            browsers: ['last 2 versions', '> 5%'],
        },
        "postcss-salad": {
            features: {
                bem: {
                    shortcuts: {
                        component: 'c',//全局
                        descendent: 'd',//结构
                        modifier: 'm' //差异
                    },
                    separators: {
                        descendent: '__', //结构
                        modifier: '--'//
                    }
                }
            }
        },
        'postcss-write-svg': {}
    },
    build: {
        autoprefixer: false//自动加前缀
    }
};
