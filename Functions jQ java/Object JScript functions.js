/*    LIST ALL PROPERTIES OF AN OBJECT - ITERATE THROUGH OBJECT PROPERTIES - FOR...IN LOOP
- keep iterating with for...in as long as the sub-obj is an object
- when sub is not object, this is the end of the line so we log it
- “stack” keeps storing the full path the item  */
function iterate(obj, stack) {
  for (var property in obj) {
   if (obj.hasOwnProperty(property)) {
     if (typeof obj[property] == "object") {
      iterate(obj[property], stack + '.' + property);
     } else {
       console.log(property + "   " + obj[property]);
       $('#output').append($("<div/>").text(stack + '.' + property))
     }
    }
  }     
}
/* http://jsfiddle.net/tbynA/1/
http://stackoverflow.com/questions/15690706/recursively-looping-through-an-object-to-build-a-property-list 
Log sub-objects which are values for key 'title'
If object[prop] isn’t an object, then there cannot be a key-value pair inside so we skip it  */
function iterateForTitle(obj) {
    for (var property in obj) {      
        if (typeof obj[property] === "object") {
            iterateForTitle(obj[property]) 
        } else if (property === 'title'){
            console.log(property + "   " + obj[property]);
        }
    }
}

/* ARRAY INTERSECTION */
function findIntersection(line1, line2) {
  return line1.filter(function(item) {
    return (line2.indexOf(item) != -1);
  });
};


