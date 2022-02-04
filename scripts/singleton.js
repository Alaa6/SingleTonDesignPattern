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