const presets = [
    [
        "@babel/env",
        {
            useBuiltIns: "usage",
            corejs: {
                version: 3,
                proposals: true
            }
        },
    ],
];

module.exports = { presets };
