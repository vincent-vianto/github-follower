class coffee {
    constructor(obj={}){
        this.bean =obj.bean,
        this.method= obj.method
    }
}

class cafe extends coffee{
    constructor(obj={}){
        super(obj)
        this.name= obj.name
    }
}

class location extends cafe{
    constructor(obj={}){
        super(obj)
        this.long= obj.long,
        this.lat= obj.lat
    }
}

const locationMaps = new location({
    bean: 'Gayo red honey',
    method:'Manual Brewing',
    name: 'SevenDays',
    long: "-231312321",
    lat : '223232'
})

console.log(locationMaps);
