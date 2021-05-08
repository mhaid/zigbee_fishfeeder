# ZigBee automatic feeder for fish
ZigBee automatic feeder for fish based on the TI CC2530.


## Intruduction
### Purpose
The puprose of the fish feeder project is:
1. the battery monitoring so a low battery is noticed right away;
2. the control of the feed time and amount via smarthome system.


### Feeder requirements
In this project I modified my automatic feeder by JUWEL (Product nr. 89000).
Other feeders could be modified instead, if they:
1. have sufficent room for a custom PCB (4cm x 2.5cm);
2. use on or two AA batteries as power supply;
3. have accessible contacts for: on/off, trigger feeding process and on/off status voltage.


### What you will need
For the building process you will need:
1. A custom PCB (bought or selfmade)
2. The components listed in the BOM
3. An automatic feeder which meets the requirements listed in _Feeder requirements_
4. A smarthome system with ZigBee support (see _Smarthome notes_ for more details)




## Building process
### Investigate your feeder
First look at the available space for an extra PCB in your feeder.
Once you got measurements on how big the PCB can be, look for the following contacts:
1. ON/OFF button (high side)
2. Manual feeder trigger button (hight side)
3. ONOFF status
You will have to solder a cable onto those, so be sure it is doable before ordering a PCB.
If it is not, you will propably have to replace the default PCB.


### Do I have to design my own PCB?
You can of course replace the default feeder circutry with your own. For my project I decided not to to that, as the default circuit already implements the motor control nicely. Also in the case of the JUWEL feeder there is enough space available.
If you decide to replace the default circutry, it would be awesome if we could publish the gerber files in this project for others to use. 


### Order the PCB and components
After validating, that the provided PCB is a good fit, or after designing your own PCB, it is time to order them.
There are many options to where to order:
Local suppliers are usually good choice, but they useally aren't the cheapest when ordering low quantitys.
For the EU multi-circuit-boards.eu or eurocircuits.com.
If you like it cheap: jlcpcb.com or pcbway.com

