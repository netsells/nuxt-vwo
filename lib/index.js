const path = require('path');
const { defaultsDeep } = require('lodash');

module.exports = function(_options) {
    const options = defaultsDeep({}, _options, this.options.vwo, {
        accountId: null,
        settingsTolerance: 2000,
        libraryTolerance: 2500,
    });

    // Don't include when run in dev mode
    if (this.options.dev) {
        return;
    }

    // Don't include when no vwo accountId is given
    if (!options.accountId) {
        return;
    }

    // Register plugin
    this.addPlugin({
        src: path.resolve(__dirname, 'plugin.js'),
        fileName: 'vwo.js',
        ssr: false,
        options,
    });
};

module.exports.meta = require('../package.json');
