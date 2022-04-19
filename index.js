/*
let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)
*/

const newImage = (source, x, y) => {
let dummyVariable = document.createElement('img')
dummyVariable.src = source
dummyVariable.style.position = 'fixed'
dummyVariable.style.left = x
dummyVariable.style.bottom = y
document.body.append(dummyVariable)
}

newImage("assets/green-character.gif", "100px", "100px")
newImage("assets/pine-tree.png", "450px", "200px")

newImage("assets/tree.png", "200px", "300px")
newImage("assets/pillar.png", "350px", "100px")
newImage("assets/crate.png", "150px", "200px")
newImage("assets/well.png", "500px", "425px")

/*
let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)

sword.addEventListener('dblclick', function(){
    sword.remove()
})
*/

const newItem = (source, x, y) => {
    let dummyVariable = document.createElement('img')
    dummyVariable.src = source
    dummyVariable.style.position = 'fixed'
    dummyVariable.style.left = x
    dummyVariable.style.bottom = y
    document.body.append(dummyVariable)

    dummyVariable.addEventListener('dblclick', function(){
        dummyVariable.remove()
    })
}

newItem("assets/sword.png", "500px", "405px")
newItem("assets/sheild.png", "165px", "185px")
newItem("assets/staff.png", "600px", "100px")

