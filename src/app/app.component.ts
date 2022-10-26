import { Component } from '@angular/core';
import { XmlservService } from './xmlserv.service';
var xml2js = require('xml2js')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private xmlServ: XmlservService) {}

  title = 'easyXML';
  onXML(){
    alert("entra ");
    this.xmlServ.sendRequest().subscribe( 
      {
        next: data => {
             console.log('mi data: '+data);
        },
        error: error => { // No responde con json pero manda respuestas
            console.log(error);
            let errorMessage = error.status;
            console.log(errorMessage);
            if(errorMessage != 200){
              console.log("código dif 200");
            } 
            else {
              let resp = error.error.text;
              console.log("mi resp: "+ resp);
              this.parseXML(resp);
              
             
              
              
            } 
            
        }
    }
      
      
    );
  }

  parseXML(data: any) {  
    return new Promise(resolve => {  
      var k: string | number,  
        arr : [],  
        parser = new xml2js.Parser(  
          {  
            trim: true,  
            explicitArray: true  
          });  
      parser.parseString(data, function (err: any , result: any) {  
       //console.log(result);  
       let elements = result["soap:Envelope"]["soap:Body"][0]["listaMarcasResponse"][0]["listaMarcasResult"][0]["salida"][0]["datos"][0]["Elemento"];
       console.log(elements);
        resolve(arr);  
      });  
    });  
  }  

}
