const fs = require('fs');
const path = require('path');
const world = require('countries-list');

class PrivateService {
    constructor() {       
        let comunidata = fs.readFileSync(path.resolve("assets/json/comuni.json"));
        let comuni = JSON.parse(comunidata);
        let provincedata = fs.readFileSync(path.resolve("assets/json/province.json"));
        let province = JSON.parse(provincedata);
        let regionidata = fs.readFileSync(path.resolve("assets/json/regioni.json"));
        let regioni = JSON.parse(regionidata);

        this.comuni = comuni;
        this.province = province;
        this.regioni = regioni;
        this.stati = world.countries;
        this.continenti = world.continents;
        this.lingue = world.languages;
    }

    getComuni() {
        return this.comuni;
    }

    getProvince () {
        return this.province;
    }

    getRegioni() {
        return this.regioni;
    }

    getStati() {
        return this.stati;
    }

    getContinenti() {
        return this.continenti;
    }

    getLingue() {
        return this.lingue;
    }
}

class Service {
    constructor() {
        throw new Error('Use Service.getInstance()');
    }    
    
    static getInstance() {
        if (!Service.instance) {
            Service.instance = new PrivateService();
        }
        return Service.instance;
    }
}

module.exports = Service;