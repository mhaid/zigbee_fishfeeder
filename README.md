# ZigBee automatic feeder for fish
ZigBee automatic feeder for fish based on the TI CC2530.



## Intruduction
### Purpose
The purpose of the fish feeding project is:
1. to monitor the battery so that a low battery is noticed immediately;
2. to control the feeding time and therefore quantity through the smarthome system.



### Feeder requirements
In this project I modified my automatic feeder (JUWEL Product nr. 89000).
Other feeders can be modified instead, if they:
1. have sufficent room for a custom PCB (4cm x 2.5cm);
2. use one or two AA/AAA batteries as power supply;
3. have accessible contacts for: voltage supply (Vcc and 0V), trigger on/off, trigger feeding-process and optional a status LED.



### What you will need
For the building process you will need:
1. a custom PCB (bought or selfmade);
2. the components listed in the BOM;
3. Solder paste + hot air gun (for SMD), solder wire + solder station (for TH-wires);
4. an automatic feeder which meets the requirements listed in _Feeder requirements_;
5. a smarthome system with ZigBee support (and preferably the possibility to integrate own devices).




## Building process
### Investigate your feeder
First have a look at the available space for an extra PCB in your feeder.
Once you got measurements on how big the PCB can be, search for the following contacts:
1. ON/OFF trigger (e.g. high side of the button)
2. Feeder trigger (e.g. high side of the button)
3. Optional: Negative pin of a LED we can pull to 0V for status indication
You will have to solder a cable onto those, so be sure it is doable before ordering a PCB.
If it is not, you will propably have to replace the default feeder PCB.

**Note:** The current feeder software pulls the trigger and the LED down to the 0V rail on activation. If you need a pull up to the 3.3V rail, the current PCB design has to be modified.

**Important note:** If your Feeder uses batteries with a combined voltage of more than 3.6 V you will have to use a voltage divider before Pin 0.7 of the CC2530 as it could otherwise destroy your chip. Please also note that the power supply used here is not be the best choice for input voltages > 3.3V. It is designed to step up and not to step down the battery voltage.

<img src="Images/Schematic.jpg" width="65%">
<img src="Images/Image_Feeder2.jpg" width="65%">



### Do I have to design my own PCB?
You can of course replace the default feeder circutry with your own. For my project I decided not to to that, as the default circuit already implements the motor control nicely. Also in the case of the JUWEL feeder there is enough space available.
If you decide to replace the default circutry, it would be awesome if we could publish the gerber files in this project for others to use. 

<img src="Images/Rendering.jpg" width="65%">



### Order the PCB and components
After validating, that the provided PCB is a good fit, or after designing your own PCB, it is time to order them.
There are many options where to order:
Local suppliers are usually good choice, but they aren't the cheapest when ordering low quantitys.
For the EU _multi-circuit-boards.eu_ or _eurocircuits.com._
If you like it cheap: _jlcpcb.com_ or _pcbway.com_
For ordering the components, find a local distributor or order at DigiKey, Mouser, Reichelt, etc.
The Bill of material (BOM) of all required components can be found in the repository.
As the official CC-Debugger is quite expensive, you can also order thrid party debuggers from amazon or ebay. I got an official and an unofficial CC-Debugger, both work without any problem.



### Soldering and flashing
Once you have received the boards and components, solder them to the board. Also connect the cables to the five through-hole contacts on the board and solder them to the correct contact of the feeder.
The cable connections are shown in the next pictures, where the two rectangles of the same color are each connected by a cable.
The green rectangle represents the hole where the antenna cable is attached. The length should be ~3.75cm for a 1/2 wavelength or ~1.87 cm for a 1/4 wavelength antenna.


Overview:

<img src="Images/Image_Feeder3.JPG" width="65%">


Backside of the feeder-pcb:

<img src="Images/Wiring_Feeder-Board_Backside.png" width="65%">


Backside of the zigbee-pcb:

<img src="Images/Wiring_ZigBee-Board_Backside.png" width="65%">


Frontside of the zigbee-pcb:

<img src="Images/Wiring_ZigBee-Board_Frontside.png" width="65%">



Now connect the CC-Debugger with the 6-Pin-Connector, press the button on the debugger and check if the green led lights up. If it stays red, check the polarity of the connector and try again. If it still does not work, check your solder joints.

<img src="Images/Image_Feeder4.jpg" width="65%">

Once successfully connected, downlaod the .hex file from this project, open the [TI Flash Programmer](https://www.ti.com/tool/FLASH-PROGRAMMER) (not TI Flash Programmer 2 !) and select the .hex file.
After flashing, you are ready to go.

<img src="Images/Image_Debugger.png" width="65%">



### Zigbee Integration
The device is a battery powered ZigBee 3.0 Enddevice.
All important ZigBee attributes of the device are shown in the following image or in the file [Zigbee-Atrributes.txt](Zigbee-Atrributes.txt) in more detail.

<img src="Images/Zigbee_Interviewresults.jpg" width="65%">

I already implemented the device into [Homey](https://homey.app/), but an implementation into other open ZigBee-Coordinators is possible. You could also use this ZigBee-Device as "Basic ZigBee Device", but it is possible that not all the features work correctly.


<img src="Images/Image_Feeder1.jpg" width="65%">


Have fun with your new smart feeder!

Cheers,
Morris
