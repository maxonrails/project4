

if (window.jQuery) {  
    console.log("JQ is loaded")
} else {
    console.log("JQ is not loaded")
}

// 1) SELECT FUNCTIONS TO HIGHLIGHT CERTAIN RAPPERS
    var selectAll = function(){
    d3.selectAll("circle")
        .style("opacity", 1)
    };

    var selectFemale = function(){
    d3.selectAll("circle")
        .style("opacity", 0.4)
    d3.selectAll("circle.female")
        .style("opacity", 1);
    };

    var selectMale = function(){
    d3.selectAll("circle")
        .style("opacity", 0.4)
    d3.selectAll("circle.male")
        .style("opacity", 1);
    };

    var selectBlack = function(){
    d3.selectAll("circle")
        .style("opacity", 0.4)
    d3.selectAll("circle.black")
        .style("opacity", 1);
    };

    var selectWhite = function(){
    d3.selectAll("circle")
        .style("opacity", 0.4)
    d3.selectAll("circle.white")
        .style("opacity", 1);
    };

    var selectEast = function(){
    d3.selectAll("circle")
        .style("opacity", 0.4)
    d3.selectAll("circle.east")
        .style("opacity", 1);
    };

    var selectWest = function(){
    d3.selectAll("circle")
        .style("opacity", 0.4)
    d3.selectAll("circle.west")
        .style("opacity", 1);
    };

    var selectMidwest = function(){
    d3.selectAll("circle")
        .style("opacity", 0.4)
    d3.selectAll("circle.midwest")
        .style("opacity", 1);
    };

    var selectSouth = function(){
    d3.selectAll("circle")
        .style("opacity", 0.4)
    d3.selectAll("circle.south")
        .style("opacity", 1);
    };

// 2) MORE INFO - make new div appear with rapper info
    var moreInfo = function(name){
         $(".rappers").hide()
         $("#" + name + "info").show();
         
    }

// 3) PUT RAPPER INFO INTO NEW DIV!
    var populateRapperDiv = function(name){
        console.log("populating the div for " + name)
        var svg = d3.select("#" + name + "info")
            .append("svg")
            .attr("width", 1000)
            .attr("height", 500)
            .attr("id", "svg_for_" + name)

        var image = d3.select("#" + "svg_for_" + name)
            .append("image")
            .attr('x', -9)
            .attr('y', -12)
            .attr('width', 200)
            .attr('height', 250)
            .attr("xlink:href", "/images/" + name + ".png")

        console.log("running populateRapperDiv");
        
    }



// d3.json("/api/stocks.json", function(error, json) {
//   if (error) return console.warn(error);
//   theData = json;
//   // visualizeit();


// var svgContainer = d3.select("body").append("svg")
//                                     .attr("width", 1000)
//                                     .attr("height", 1000);

// var circles = svgContainer.selectAll("circle")
//   .data(theData)
//   .enter()
//   .append("circle")

// var circleAttributes = circles
// 						.attr("cx", function(d){
// 							return (d.bid*3)
// 						})
// 						.attr("cy", function(d){
// 							return (d.bid*3)
// 						})
// 						.attr("r", function(d){
// 							return (d.bid/3)
// 						})
// 						.style("fill", "green");





// });

// var visualizeit = function(){
// d3.select("body")
//    .append("svg")
//    .attr("width", 500)
//    .attr("height", 500)
//    .append("circle")
//    .attr("cx", 40)
//    .attr("cy", 40)
//    .attr("r", 40 )
//    .style("fill", "purple");

 

// }
window.onload = function(){





    //D3 program to fit circles of different sizes along a 
    //horizontal dimension, shifting them up and down
    //vertically only as much as is necessary to make
    //them all fit without overlap.
    //By Amelia Bellamy-Royds, in response to 
    //http://stackoverflow.com/questions/20912081/d3-js-circle-packing-along-a-line
    //inspired by
    //http://www.nytimes.com/interactive/2013/05/25/sunday-review/corporate-taxes.html
    //Freely released for any purpose under Creative Commons Attribution licence: http://creativecommons.org/licenses/by/3.0/
    //Author name and link to this page is sufficient attribution.
    
// var svg = d3.select("body").append("svg").attr("height", "450px").attr("width", "450px")


// svg.append("circle")
//          .attr("class", "logo")
//          .attr("cx", 25)
//          .attr("cy", 25)
//          .attr("r", 20)
//          .style("fill", "transparent")
//          .style("stroke", "black")   
//          .style("stroke-width", 0.25)
//          .style("fill", "url(#drake)");

// svg.append("circle")
// .attr("class", "logo")
// .attr("cx", 125)
// .attr("cy", 125)
// .attr("r", 20)
// .style("fill", "transparent")
// .style("stroke", "black")   
// .style("stroke-width", 0.25)
// .style("fill", "url(#nicki_minaj)");

// svg.append("circle")
// .attr("class", "logo")
// .attr("cx", 175)
// .attr("cy", 175)
// .attr("r", 20)
// .style("fill", "transparent")
// .style("stroke", "black")   
// .style("stroke-width", 0.25)
// .style("fill", "url(#image3)");



var data = [
{
	x: 0.5,
	r: 3,
	id: "drake",
    region: "east",
    gender: "male",
    race: "mixed"
},
{
	x: 0.55,
	r: 1.5,
	id: "nicki_minaj",
    region: "east",
    gender: "female",
    race: "black"
},
{
    x: 0.2,
    r: 5,
    id: "kanye",
    region: "south",
    gender: "male",
    race: "black"
},
{
    x: 0.565,
    r: 1,
    id: "jay_z",
    region: "east",
    gender: "male",
    race: "black"
},
{
    x: 0.5,
    r: 3,
    id: "lil_jon",
    region: "south",
    gender: "male",
    race: "black"
},
{
    x: 0.655,
    r: 1.5,
    id: "eminem",
    region: "midwest",
    gender: "male",
    race: "white"

},
{
    x: 0.35,
    r: 1.5,
    id: "missy_elliott",
    region: "west",
    gender: "female",
    race: "black"
},
]




//create data array//
// var data = [];
// var N = 25, i = N;
// var randNorm = d3.random.normal(0.5,0.2)
// while(i--)data.push({
//     x:randNorm(),
//     r:Math.random()});
    //x for x-position
    //r for radius; value will be proportional to area  
//________________//
    
console.log(data);

//Set up SVG and axis//   
var svg = d3.select("svg")
			.attr("height", 500)
			.attr("width", 1000);
// var digits = /(\d*)/;
var margin = 50; //space in pixels from edges of SVG
var padding = 4; //space in pixels between circles
var maxRadius = 25;
var biggestFirst = true; //should largest circles be added first?

var width = 1000;
	
	// This part is not necessary if you define the size of the SVG
	// in absolute terms (like I have above)
	// window.getComputedStyle(d3.select("svg")[0][0])["width"];
    // width = digits.exec(width)[0];
var height = 500;

	// Same here - I've already defined SVG 
	// window.getComputedStyle(svg[0][0])["height"];
    // height = Math.min(digits.exec(height)[0], width);
    
var baselineHeight = (margin + height)/2;

// The domain of the x-scale defines its scale (in this case it goes from 0 to 1)
var xScale = d3.scale.linear()
        .domain([0,1])
        .range([margin,width-margin]);
var rScale = d3.scale.sqrt()  
        //make radius proportional to square root of data r
        .domain([0,1])
        .range([1,maxRadius]);
    
var formatPercent = d3.format(".0%");

// the x-axis is the line on top, with % tick marks
var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("top")
    .ticks(5)
    .tickFormat(formatPercent);
    
svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0,280)")
    .call(xAxis);
    
var threads = svg.append("g")
    .attr("class", "threads");

    
var bubbleLine = svg.append("g")
        .attr("class", "bubbles")
        .attr("transform", 
              "translate(0, 280)");
    
    // bubbleLine.append("line")
    //     .attr("x1", xScale.range()[0])
    //     .attr("x2", xScale.range()[1]);
//________________//
    
//Create Quadtree to manage data conflicts & define functions//
    
var quadtree = d3.geom.quadtree()
        .x(function(d) { return xScale(d.x); }) 
        .y(0) //constant, they are all on the same line
        .extent([[xScale(-1),0],[xScale(2),0]]);
    //extent sets the domain for the tree
    //using the format [[minX,minY],[maxX, maxY]]
    //optional if you're adding all the data at once

var quadroot = quadtree([]);
          //create an empty adjacency tree; 
          //the function returns the root node.
    
// Find the all nodes in the tree that overlap a given circle.
// quadroot is the root node of the tree, scaledX and scaledR
//are the position and dimensions of the circle on screen
//maxR is the (scaled) maximum radius of dots that have
//already been positioned.
//This will be most efficient if you add the circles
//starting with the smallest.  
function findNeighbours(root, scaledX, scaledR, maxR) {

    var neighbours = [];
    //console.log("Neighbours of " + scaledX + ", radius " + scaledR);
    
  root.visit(function(node, x1, y1, x2, y2) {
      //console.log("visiting (" + x1 + "," +x2+")");
    var p = node.point; 
    if (p) {  //this node stores a data point value
        var overlap, x2=xScale(p.x), r2=rScale(p.r);        
        if (x2 < scaledX) {
            //the point is to the left of x
            overlap = (x2+r2 + padding >= scaledX-scaledR);
            /*console.log("left:" + x2 + ", radius " + r2 
                        + (overlap?" overlap": " clear"));//*/
        }      
        else {
            //the point is to the right
            overlap = (scaledX + scaledR + padding >= x2-r2);
            /*console.log("right:" + x2 + ", radius " + r2 
                        + (overlap?" overlap": " clear"));//*/
        }
        if (overlap) neighbours.push(p);
    }
   
    return (x1-maxR > scaledX + scaledR + padding) 
            && (x2+maxR < scaledX - scaledR - padding) ;
      //Returns true if none of the points in this 
      //section of the tree can overlap the point being
      //compared; a true return value tells the `visit()` method
      //not to bother searching the child sections of this tree
  });
    
    return neighbours;
}

function calculateOffset(maxR){
    return function(d) {
        neighbours = findNeighbours(quadroot, 
                                   xScale(d.x),
                                   rScale(d.r),
                                   maxR);
        var n=neighbours.length;
        //console.log(j + " neighbours");
        var upperEnd = 0, lowerEnd = 0;      
        
        if (n){
            //for every circle in the neighbour array
            // calculate how much farther above
            //or below this one has to be to not overlap;
            //keep track of the max values
            var j=n, occupied=new Array(n);
            while (j--) { 
                var p = neighbours[j];
                var hypoteneuse = rScale(d.r)+rScale(p.r)+padding; 
                //length of line between center points, if only 
                // "padding" space in between circles
                
                var base = xScale(d.x) - xScale(p.x); 
                // horizontal offset between centres
                
                var vertical = Math.sqrt(Math.pow(hypoteneuse,2) -
                    Math.pow(base, 2));
                //Pythagorean theorem
                
                occupied[j]=[p.offset+vertical, 
                             p.offset-vertical];
                //max and min of the zone occupied
                //by this circle at x=xScale(d.x)
            }
            occupied = occupied.sort(
                function(a,b){
                    return a[0] - b[0];
                });
            //sort by the max value of the occupied block
            //console.log(occupied);
            lowerEnd = upperEnd = 1/0;//infinity
                
            j=n;
            while (j--){
                //working from the end of the "occupied" array,
                //i.e. the circle with highest positive blocking
                //value:
                
                if (lowerEnd > occupied[j][0]) {  
                    //then there is space beyond this neighbour  
                    //inside of all previous compared neighbours
                    upperEnd = Math.min(lowerEnd,
                                        occupied[j][0]);
                    lowerEnd = occupied[j][1];
                }
                else {
                    lowerEnd = Math.min(lowerEnd,
                                        occupied[j][1]);
                }
            //console.log("at " + formatPercent(d.x) + ": "
              //          + upperEnd + "," + lowerEnd);
            }
        }
            
            //assign this circle the offset that is smaller
            //in magnitude:
        return d.offset = 
                (Math.abs(upperEnd)<Math.abs(lowerEnd))?
                        upperEnd : lowerEnd;
    };
}
    
    //Create circles!//
var maxR = 0;
bubbleLine.selectAll("circle")
    .data(data.sort(
        biggestFirst?
            function(a,b){return b.r - a.r;} :
            function(a,b){return a.r - b.r;}
        ))          
    .enter()
        .append("circle")
        .attr("r", 
        	function(d){
            var r=rScale(d.r);
            maxR = Math.max(r,maxR);
            return r;})
        .on("mouseover", function(d) {
          d3.select(this).style("stroke", "red")
          d3.select(this).style("stroke-width", 3)
        }) 
        .on("mouseout", function(d) {
          d3.select(this).style("stroke-width", 0)
        })
        

        .style("fill", 
            function(d){
               name = "url(#" + d.id + ")"
                return name
        })


        .each(function(d, i) {
            //for each circle, calculate it's position
            //then add it to the quadtree
            //so the following circles will avoid it.
            
            //console.log("Bubble " + i);
            var scaledX = xScale(d.x);            
            d3.select(this)
            	.attr("class", d.id + " " + d.region + " "+ d.gender + " " + d.race)
                .attr("cx", scaledX)
                .attr("cy",  0)

            .on("click", function(d) {
            if(!$("#" + d.id + "info").length) {
                console.log("creating a div for " + d.id)
                d3.select("body").append("div").attr("id", d.id + "info").attr("class", "rappers");
                populateRapperDiv(d.id);
            }  
             moreInfo(d.id)
        })


              
                // .transition().delay(300*i).duration(250)
                .attr("cy", calculateOffset(maxR))



            quadroot.add(d);
            
            bubbleLine.append("text")
                .attr("x", scaledX)
                .attr("y", d.offset)
                // .text(d.x)


            
            //add a drop line from the centre of this
            //circle to the axis
            // threads.append("line").datum(d)
            //     .attr({x1:scaledX, x2:scaledX, y2:margin})
            //     .attr("y1", margin)
            //     .transition().delay(300*i).duration(250)
            //     .attr("y1", (baselineHeight+d.offset));
        });
    




    $('circle').tipsy({ 
        gravity: 's', 
        html: true, 
        title: function() {
            d = this.__data__
          // var d = this.__data__, c = colors(d.i);
          return "I'm " + d.id +"! I know " + d.x*100 + " words!"

        }
      });


}



