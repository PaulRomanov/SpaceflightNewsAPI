import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  title: string;
  summary: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    summary: "US Federal Aviation Administration says that its environmental review of SpaceX’s plan to conduct orbital Starship launches out of South Texas has...",
    title: "SpaceX’s Starbase environmental review is inches from the finish line"
  },
  {
    position: 2,
    summary: "NASA will provide live coverage of the launch and docking of a Russian cargo spacecraft carrying about three tons of food, fuel, and supplies for the Expedition 67 crew aboard the International Space Station.",
    title: "NASA to Provide Live Coverage of Space Station Cargo Launch, Docking"
  },
  {
    position: 3,
    summary: "Cash-strapped smallsat operator Astrocast announced plans May 30 to buy Dutch connectivity solutions provider Hiber, which scrapped plans for its own constellation last year following failures on its initial satellites.",
    title: "Astrocast buying Hiber to boost funding and expansion plans"
  },
  {
    position: 4,
    summary: "When you say asteroid mining, people laugh at you.",
    title: "AstroForge aims to succeed where other asteroid mining companies have failed"
  },
  {
    position: 5,
    summary: "Sierra Space announced May 31 a strategic partnership with aerospace manufacturer Spirit AeroSystems for production of cargo modules for its Dream Chaser vehicles.",
    title: "Sierra Space to partner with Spirit AeroSystems on Dream Chaser cargo modules"
  },
  {
    position: 6,
    summary: "A Long March 5B rocket has arrived at Wenchang spaceport as China gears up to send its second space station module into orbit.",
    title: "Rocket to launch China’s next space station module arrives at launch center"
  },
  {
    position: 7,
    summary: "In what appears to be a tit-for-tat move against Quad nations’ launch of a satellite-based maritime domain awareness initiative for the Indo-Pacific region, China has rolled out a similar campaign with its four BRICS partners.",
    title: "Against Quad? China launches satellite-based Earth observation initiative with BRICS nations"
  },
  {
    position: 8,
    summary: "Members of the House Science Committee used a hearing about the planetary science decadal survey to criticize a proposal in NASA’s budget request to delay work on a space telescope to track near Earth objects.",
    title: "House committee questions proposed delay in NASA asteroid mission"
  },
  {
    position: 9,
    summary: "SpaceX workers have been spotted repairing the company’s newest Starship prototype in the days after the rocket’s first partial test. Starship S24...",
    title: "SpaceX repairing upgraded Starship prototype after first test"
  },
  {
    position: 10,
    summary: "Dust storms and changing seasons will limit the ability of NASA’s Ingenuity helicopter to fly for the next several months, a project engineer said May 27.",
    title: "Ingenuity “hunkering down” during Martian dust storms and winter"
  },

]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SpaceflightNewsAPI';


  public dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

}
