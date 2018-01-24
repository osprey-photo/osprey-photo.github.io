
'use strict';


let inputDir = meta[name].inputDir;
let outputDir

// get the URIs from the context

// mightbe globs URIs

let inputFiles = //parse glob from meta

// for all files in inputFiles

load the file 

md.render(renderedMarkdown)

// 
put URI back to the context

write to the FileList.



// convert markdown to the html
    let md = new MarkdownIt();

    // render the context for the html
    let htmlCtx = { context: context, body: md.render(renderedMarkdown) };
  

    // and write out the file
    fs.writeFileSync(targetFile, renderedHTML, { encoding: "utf8" });
