import { Component } from '@angular/core';

@Component({
    selector: 'app-databinding',
    templateUrl: './databinding.component.html',
    styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent{
    title: string = 'Databinding';
    image: string = 'assets/images/databinding.png';
    documentation: string = 'https://angular.io/guide/architecture#data-binding';

    //for interpolation
    interpolationNotation = '{{}}';
    interpolation = 'Welcome to Interpolation';

    //for property binding
    propertyBindingNotation: string = '[]';

    public objectStyle = {
        color: 'red',
        border: '1px solid black',
        cursor: 'pointer',
        margin: '2px'
    };

    public changeStyles(): void{
        if(this.objectStyle.color === 'red'){
            this.objectStyle.color = 'blue';
            this.objectStyle.border = '4px groove purple';
        } else if(this.objectStyle.color === 'blue'){
            this.objectStyle.color = 'green';
            this.objectStyle.border = '4px ridge yellow';
        } else {
            this.objectStyle.color = 'red';
            this.objectStyle.border = '4px solid black';
        }
    }

    //for event binding
    eventBindingNotation: string = '()';
    public counter: number = 0;

    public incrementCounter():void {
        this.counter++;
    }

    //for Two-way data binding
    twoWayBindingNotation: string = '[()]';
    public user = {
        email:'',
        password: ''
    };
}