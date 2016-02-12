import {Injectable} from "angular2/core";
import {Http} from "angular2/http";

@Injectable()
export class ErrorsService{
    constructor(private _http : Http){}

    getErrors(){
        return this._http.get('app/Errors/json/errors.json').map(res => res.json()).toPromise();
    }


    /**
     * Cause we doesn't use a webservice
     * We get all errors, and foreach on them to return wanted error
     * @param id
     */
    getById(id){
        return this.getErrors().then(res => {
            for(let error in res){
                if(res[error].id == id){
                    return res[error];
                }
            }
        });
    }
}
