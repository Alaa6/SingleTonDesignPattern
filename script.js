counterID = document.getElementById("counter")

// Start Sinfgleton  
function Visitors() {
    // var instance = new Visitors();
    this.counter = 0
    this.addCount = () => { this.counter++; }

}


Visitors.prototype = {
    instance : new Visitors ,
    getInstance : () => {
        return Visitors.prototype.instance;
    },
    
}
// End Singlegton

// var vistor1 = new Visitor();
// var vistor2 = new Visitor();

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







