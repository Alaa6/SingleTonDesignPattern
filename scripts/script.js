counterID = document.getElementById("counter")

/*  two client make two objects in the memory 
   // var vistor1 = new Visitor();
   // var vistor2 = new Visitor();
*/

// two  client update the same object in the memory
var vistor1 = Visitors.prototype.getInstance()
var vistor2 = Visitors.prototype.getInstance()

const onClickVisitor1 = () => {
    vistor1.addCount()
    counterID.innerHTML = vistor1.counter

}
const onClickVisitor2 = () => {
    vistor2.addCount()
    counterID.innerHTML = vistor2.counter
}







