'use strict';

const Vinyl = require('vinyl');
const globby = require('globby');

async function process(context,nodeid){ 

    const paths = await globby(['*', '!cake']);
 
    let vinyls = [];
    for (let i=0; i<paths.length; i++){
        vinyls.push(new Vinyl({
            cwd: '/',
            base: '/test/',
            path: paths[i]
          }));
    }

    console.log(vinyls);

}
