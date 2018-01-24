
'use strict';

const fs = require('fs');
const path = require('path');
const winston = require('winston');
const yaml = require('js-yaml');
const prettyoutput = require('prettyoutput');
const util = require('util')

winston.loggers.add('app', {
    console: {
        level: 'silly',
        colorize: true,
        label: 'Oak'
    }
});

const LOG = winston.loggers.get('oak');

let context = {};

// do not currently have the hierachial naming of keys
function setupContext(node){
    if (!node){
        return;
    }
    for (var i in node._sub){
        setupContext( node._sub[i] );
    }
    context[node._nodeid] = node.meta;
    LOG.info(`${node._nodeid}  ${node.processor}`);
}

function processNode(node){
    if (!node){
        return;
    }
    for (var i in node._sub){
        processNode( node._sub[i] );
    }
   
    LOG.info(`${node._nodeid}  ${node.processor}`);
}

// main code starts here
(async () => {

    try {
          let data = yaml.safeLoad(fs.readFileSync('./_src/config.yaml', 'utf8'));

          setupContext(data.processtree);

          processNode(data.processtree);
          console.log(util.inspect(context,{ showHidden: true, depth: null, colors:true }));
     } catch (error) {
         LOG.error(error);
         process.exit(1);
     } finally {
        
     }
 
 })();
// need mapping from name to the fn