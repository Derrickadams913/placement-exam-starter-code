// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Derrick Adams" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// variables

var gbQuantity;
var ccQuantity;
var ssQuantity;
var total = 0;

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`
 
// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    console.log('Gingerbread + button was clicked!');
    if(gb>= 0)
    {
        gb++

    }
    gbQuantity = document.getElementById('qty-gb');
    gbQuantity. textContent = gb ;
    totalgbQyantity = document.getElementById('qty-total');
    total = total + 1;
    totalgbQyantity.textContent = total;
    console.log("button should work now")
})
document.getElementById('minus-gb').addEventListener('click', function() {
    console.log('Gingerbread + button was clicked!');
    if(gb > 0)
    {
        gb--

    
    gbQuantity = document.getElementById('qty-gb');
    gbQuantity. textContent = gb ;
    totalgbQyantity = document.getElementById('qty-total');
    total = total - 1;
    totalgbQyantity.textContent = total;
    
        
    } else {
        if(gb ==0)
        total = 0
        
    }

    console.log("button should work now")
})


//


    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked


document.getElementById('add-cc').addEventListener('click', function() {
    console.log('Choclate chip + button was clicked!');
   
    if(cc>= 0)
    {
        cc++

    }
    gbQuantity = document.getElementById('qty-cc');
    gbQuantity. textContent = cc ;
    totalgbQyantity = document.getElementById('qty-total');
    total = total + 1;
    totalgbQyantity.textContent = total;

    console.log("button should work now")
 
})
document.getElementById('minus-cc').addEventListener('click', function() {
    console.log('Chocolate chip + button was clicked!');
    if(cc > 0)
    {
        cc--

    
    gbQuantity = document.getElementById('qty-cc');
    gbQuantity. textContent = cc ;
    totalgbQyantity = document.getElementById('qty-total');
    total = total - 1;
    totalgbQyantity.textContent = total;
    
        
    } else {
        if(cc ==0)
        total = 0
        
    }
    console.log('minus should work')
})

document.getElementById('add-sugar').addEventListener('click', function() {
        console.log('Sugar + button was clicked!');

    if(sugar>= 0)
    {
        sugar++

    }
    gbQuantity = document.getElementById('qty-sugar');
    gbQuantity. textContent = sugar ;
    totalgbQyantity = document.getElementById('qty-total');
    total = total + 1;
    totalgbQyantity.textContent = total;
    console.log("button should work now")

    document.getElementById('minus-sugar').addEventListener('click', function() {
        console.log('sugar + button was clicked!');
        if(sugar > 0)
        {
            sugar--
    
        
        gbQuantity = document.getElementById('qty-sugar');
        gbQuantity. textContent = sugar ;
        totalgbQyantity = document.getElementById('qty-total');
        total = total - 1;
        totalgbQyantity.textContent = total;
        
            
        } else {
            if(sugar ==0)
            total = 0
            
        }
        console.log('minus should work')
})
})