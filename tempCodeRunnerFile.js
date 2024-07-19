let colors = ["red","blue","Green","Grey"]


function colours(){
        let rand = Math.random(colors)*colors.length
        let colouroutcome = colors[Math.floor(rand)]        
    return colouroutcome
}

console.log(colours())