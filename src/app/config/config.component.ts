import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
    selector: 'app-config',
    templateUrl: './config.component.html',
    styleUrls: ['./config.component.css']
})


export class ConfigComponent implements OnInit {
    config: any;

    constructor(private service: ConfigService) { }

    ngOnInit(): void {
        this.showConfig();
    }

    showConfig() {
        this.service.getConfig().subscribe((data: Config)=>{
            this.config = { ...data }
            for(let c in this.config) {
                console.log(c, this.config[c]);
            }
        })
    }
    showConfigResponse() {
        this.service.getConfigResponse().subscribe((res)=>{
          console.log(res);

        })
    }

}


export interface Config {
    heroesUrl: string;
    textfile: string;
    date: any;
}
