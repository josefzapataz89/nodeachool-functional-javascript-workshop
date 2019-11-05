'use restrict'

function getDependencies(tree, result) {
    // SOLUTION GOES HERE
    // Note: Feel free to add additional arguments
    // to this function for use with recursive calls.
    // Or not! There are many ways to recurse.

    let results = result || []
    let dependencies = tree.dependencies || {}

    if(!tree.dependencies) 
        return []

    Object.keys(dependencies).map( (dep) => {
        let depName = `${dep}@${dependencies[dep].version}`

        if(results.indexOf(depName) === -1)
            results.push(depName)

        return getDependencies(dependencies[dep], results)
    })

    return results.sort()
    
}

module.exports = getDependencies