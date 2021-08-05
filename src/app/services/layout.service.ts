import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class LayoutgService {

    currentScreenSize: string;

    displayNameMap = new Map([
        [Breakpoints.XSmall, 'small'],
        [Breakpoints.Small, 'medium'],
        [Breakpoints.Medium, 'large'],
        [Breakpoints.Large, 'large'],
        [Breakpoints.XLarge, 'large'],
    ]);
    

    constructor( breakpointObserver: BreakpointObserver ){
        breakpointObserver.observe([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
            Breakpoints.Large,
            Breakpoints.XLarge,
        ]).subscribe( (resp) => {
            for (const query of Object.keys(resp.breakpoints)){
                if (resp.breakpoints[query]) {
                    this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
                }
            } 
        });
    }
}