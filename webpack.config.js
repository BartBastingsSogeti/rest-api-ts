var dotenv = require('dotenv');
var fs = require('fs');
var path = require('path');
var nodeModules = {};

dotenv.config();

fs.readdirSync('node_modules')
    .filter((x)=> {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach((mod) => {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = [
    {
        name: 'server',
        entry: __dirname + '/server/app.ts',
        target: 'node',
        mode: process.env.MODE || 'development',
        output: {
            filename: 'app.js',
            path: __dirname + '/dist',
            libraryTarget: 'commonjs'
        },
        resolve: {
            extensopms: ['.ts', '.js']
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader'
                }
            ]
        }
    }
]