const fs = require('fs');
const path = require('path');
const world = require('countries-list');
const { runInThisContext } = require('vm');

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
    
    // ### GET ALL ###

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

    // ### GET BY SEARCHING ###
    
    getComuniBySiglaProvincia(sigla) {
        let result = [];
        this.comuni.forEach( function(comune) {
            if ( comune.sigla == sigla) 
                result.push(comune);  
        });
        return result;
    }

    getComuniByProvincia(provincia) {
        let result = [];
        this.comuni.forEach( function(comune) {
            if ( comune.provincia.nome == provincia) 
                result.push(comune);  
        });
        return result;
    }

    getProvinceByRegione(regione) {
        let result = [];
        this.province.forEach( function(provincia) {
            if ( provincia.regione == regione) 
                result.push(provincia);  
        });
        return result;
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