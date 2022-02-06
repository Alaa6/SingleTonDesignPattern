// Start Sinfgleton  
function Visitors() {
    // var instance = new Visitors();
    this.counter = 0
    this.addCount = () => { this.counter++; }

}


Visitors.prototype = {
    instance : null ,  // lazy initialization loading 
    getInstance : () => {
        if(Visitors.prototype.instance == null) {Visitors.prototype.instance = new Visitors}
        return Visitors.prototype.instance;
    },
    
}
// End Singlegton