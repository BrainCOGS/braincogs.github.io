(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{341:function(e,t,o){e.exports=o.p+"assets/img/control-1.31a5e2d2.png"},342:function(e,t,o){e.exports=o.p+"assets/img/control-assembly-1.3e1cb53a.png"},343:function(e,t,o){e.exports=o.p+"assets/img/control-assembly-2.e729353b.png"},344:function(e,t,o){e.exports=o.p+"assets/img/control-assembly-3.3c613198.png"},345:function(e,t,o){e.exports=o.p+"assets/img/control-assembly-21.cd2c2b31.png"},346:function(e,t,o){e.exports=o.p+"assets/img/control-assembly-4.e9eb1fe1.png"},347:function(e,t,o){e.exports=o.p+"assets/img/control-assembly-5.e85ae378.png"},348:function(e,t,o){e.exports=o.p+"assets/img/control-assembly-6.548f0cbf.png"},349:function(e,t,o){e.exports=o.p+"assets/img/control-assembly-7.516fd97f.png"},350:function(e,t,o){e.exports=o.p+"assets/img/control-assembly-8.9f7e66aa.png"},351:function(e,t,o){e.exports=o.p+"assets/img/control-assembly-9.5188fee4.png"},352:function(e,t,o){e.exports=o.p+"assets/img/control-assembly-10.92ccf29e.png"},353:function(e,t,o){e.exports=o.p+"assets/img/control-assembly-11.c0e33c40.png"},354:function(e,t,o){e.exports=o.p+"assets/img/control-assembly-12.e58faff5.png"},355:function(e,t,o){e.exports=o.p+"assets/img/control-assembly-13.17922eb1.png"},356:function(e,t,o){e.exports=o.p+"assets/img/control-assembly-14.da4ce5ef.png"},357:function(e,t,o){e.exports=o.p+"assets/img/control-assembly-15.9864fdac.png"},358:function(e,t,o){e.exports=o.p+"assets/img/control-assembly-16.d3892529.png"},359:function(e,t,o){e.exports=o.p+"assets/img/control-assembly-17.167fb961.png"},360:function(e,t,o){e.exports=o.p+"assets/img/control-assembly-18.e06b9945.png"},361:function(e,t,o){e.exports=o.p+"assets/img/control-assembly-19.f1c2400d.png"},362:function(e,t,o){e.exports=o.p+"assets/img/control-assembly-20.edc1b377.png"},505:function(e,t,o){"use strict";o.r(t);var a=o(10),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"frontmatter-title"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),t("p",[e._v("The control module consist on a 24V power source, a couple of distribution blocks, which make it easier to connect any other stuff that works on 24V; a custom made solenoid valve driver, an USB NiDAQ card from National Instruments and an Arduino due that is inside a 3D printed housing with a DIN rail clip attached. Each of these parts will be explained in detail below with instructions for assembly.")]),e._v(" "),t("figure",[t("img",{attrs:{src:o(341)}}),e._v(" "),t("center",[t("figcaption",[t("small",[e._v("Control module.")])])])],1),e._v(" "),t("h2",{attrs:{id:"solenoid-valve-driver-assembly"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solenoid-valve-driver-assembly"}},[e._v("#")]),e._v(" Solenoid valve driver assembly")]),e._v(" "),t("figure",[t("img",{attrs:{src:o(342)}})]),e._v(" "),t("p",[e._v("We designed a simple solenoid valve driver circuit using a MOSFET, the gate is driven by a digital input that will be supplied by the NIDAQ card, which open and closes the circuit from the solenoid valve to a 24V power supply. We added a diode to protect the circuit from discharge from the solenoid valve. To assembly the solenoid valve driver follow the next steps.")]),e._v(" "),t("ol",[t("li",[e._v("Have the PCB made (we use pcbway since they can make and ship the stencil, you can found our project "),t("a",{attrs:{href:"https://www.pcbway.com/project/shareproject/Simple_Solenoid_valve_driver_1340eb55.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(") and make sure to order a stencil. We use a manual printer for PCB stencil to spread the soldering paste across the PCB pads evenly. First, place the PCB on the surface using high temperature tape and place the stencil on top of it. Make sure to match the solder pads to the holes of the stencil.")])]),e._v(" "),t("figure",[t("img",{attrs:{src:o(343)}})]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Use solder paste and a flexible wipe down knife and spread evenly the solder paste into the pads. Then lift and remove the stencil.")])]),e._v(" "),t("figure",[t("img",{attrs:{src:o(344)}})]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Place each component into place, we place the resistances (R1, R3, R5, R7, and R9 resistor values are 10K Ohm and R2, R4, R6, R8 and R10 resistor values are 1K Ohm) first, then place the MOSFET and finally the diodes, make sure that the diodes are placed correctly (the band should match the ] symbol on the PCB). The picture below show the correct position of the components.")])]),e._v(" "),t("figure",[t("img",{attrs:{src:o(345)}})]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Each time you place a component in the pad make sure to slightly press it against the solder paste with the same tweezers that you use.")]),e._v(" "),t("figure",[t("img",{attrs:{src:o(346)}})])]),e._v(" "),t("figure",[t("img",{attrs:{src:o(347)}})]),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[e._v("Use a heat gun (we set the temperature at 1000F) at the lowest intensity allowed (to avoid components flying around) and move it around on top of the components until the solder melt and the components get attached in place.")])]),e._v(" "),t("figure",[t("img",{attrs:{src:o(348)}})]),e._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[e._v("Remove the high temperature tape and solder the pluggable terminal blocks, place the fillers and slide down the PCB into the case, then close the case.")])]),e._v(" "),t("figure",[t("img",{attrs:{src:o(349)}})]),e._v(" "),t("figure",[t("img",{attrs:{src:o(350)}})]),e._v(" "),t("figure",[t("img",{attrs:{src:o(351)}})]),e._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[e._v("Place the labels (make sure they are placed correctly) and place the driver on the DIN rail.")])]),e._v(" "),t("figure",[t("img",{attrs:{src:o(352)}})]),e._v(" "),t("figure",[t("img",{attrs:{src:o(353)}})]),e._v(" "),t("h2",{attrs:{id:"power-supply-and-nidaq-control-assembly"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#power-supply-and-nidaq-control-assembly"}},[e._v("#")]),e._v(" Power supply and NIDAQ control assembly")]),e._v(" "),t("ol",[t("li",[e._v("Place the power supply and the distribution blocks on the DIN rails, connect the power supply to the distribution block input accordigly. The TRACO Power TBLC 50-124 is a 50W power supply, which is more than enough to power both the reward module solenoid valve (7 Watts) and the two air puffs solenoid valves (0.65 Watts each one), and have plenty of power left (~40W) for other modules if required. One power supply could be use for a stack of 2 or 3 rigs if desired.")])]),e._v(" "),t("figure",[t("img",{attrs:{src:o(354)}})]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Use a standard PC power cable and cut the portion of the connector that goes to the PC, cut the ground cable and connect the neutral cable to the negative input of the power supply and the hot cable to the positive input.")])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Open the NIDAQ case and make a hole at the middle of the back case. Screw the DIN rail mounting clip to it, then close the case and place the top screws only.")])]),e._v(" "),t("figure",[t("img",{attrs:{src:o(355)}})]),e._v(" "),t("figure",[t("img",{attrs:{src:o(356)}})]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Connect everything!")])]),e._v(" "),t("ul",[t("li",[e._v("Start by connecting the positive output of the power supply from one of the pins of the red distribution blocks to the V IN input of the solenoid valve driver, then the ground from one of the pins of the black distribution block to the GND pin of the solenoid valve driver.")]),e._v(" "),t("li",[e._v("Then connect the one of the GND pins of the solenoid valve driver to the the digital ground pin of the NIDAQ.")]),e._v(" "),t("li",[e._v("Connect the solenoid valve driver inputs to the NIDAQ outputs as follows: P0.0 from NIDAQ to V IN 1, P0.1 to V IN 2 and P0.2 to V IN 3.")]),e._v(" "),t("li",[e._v("Finally connect the solenoid valve driver outputs to the solenoid valve drivers. Since the solenoid valves doesn't have polarity, you should use the V OUT (+) as common in the valves, you can use one or multiple pins of the solenoid valve driver. Then connect the V OUT 1 (-) pin to the reward solenoid valve, the V OUT 2 (-) pin to the left solenoid valve and the V OUT 3 (-) to the right solenoid valve.")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("The solenoid valve driver has more outputs for you to connect and control with the NIDAQ digital outputs any other piece of hardware (like a 24 V IR light source for example), just make sure to wire the ports to the input and output of the driver and match them in the Rig Parameters portion of ViRMEN.")])]),e._v(" "),t("figure",[t("img",{attrs:{src:o(357)}}),e._v(" "),t("center",[t("figcaption",[t("small",[e._v("Control module wiring diagram for solenoid valves.")])])])],1),e._v(" "),t("h2",{attrs:{id:"arduino-module-assembly"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arduino-module-assembly"}},[e._v("#")]),e._v(" Arduino module assembly")]),e._v(" "),t("ol",[t("li",[e._v("Have printed the arduino case and screw the arduino. Insert the connector in place and crimp the cables. Make sure to follow the color code and connect the cables to the arduino.")])]),e._v(" "),t("figure",[t("img",{attrs:{src:o(358)}}),e._v(" "),t("center",[t("figcaption",[t("small",[e._v("Wiring diagram for Arduino due to connector.")])])])],1),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Cover the case and install the din rail mounting clip. Install the arduino module in the top DIN rail.")])]),e._v(" "),t("figure",[t("img",{attrs:{src:o(359)}})]),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[e._v("Make the cable to connect the arduino to the 3D printer cup. Unscrew the outer portion of the connector and insert it into the cable (you need to do this before connecting the cables, otherwise you will not be able to insert the cover and will have to do everything again). Unscrew all the conectors and insert the cable following the color code in the image below, screw them and place the connector cover.")])]),e._v(" "),t("figure",[t("img",{attrs:{src:o(360)}})]),e._v(" "),t("figure",[t("img",{attrs:{src:o(361)}})]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Place one connector first and connect it to the arduino box placed in the top DIN rail at the outer portion of the rig, then measure the lenght of the cable by inserting into the rig and into the cable carrier. Cut the cable and place the other connector, finally connect it to the 3D printed cup.")])]),e._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[e._v("Connect the arduino to the computer using a "),t("a",{attrs:{href:"https://www.bhphotovideo.com/c/product/1387544-REG/tether_tools_cuc2515_blk_tetherpro_usb_c_to_2_0.html?sts=pi&pim=Y",target:"_blank",rel:"noopener noreferrer"}},[e._v("USB Type-C male to micro-USB Type-B male cable"),t("OutboundLink")],1),e._v(". Or any other cable matching your setup, we do recommend to use a single tether cable or USB 3.0 cable and avoid using either multiple cables or HUBs (or make sure everything is high speed rated).")])]),e._v(" "),t("h2",{attrs:{id:"programming-the-arduino"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#programming-the-arduino"}},[e._v("#")]),e._v(" Programming the Arduino")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Download the latest version of the "),t("a",{attrs:{href:"https://www.arduino.cc/en/software",target:"_blank",rel:"noopener noreferrer"}},[e._v("arduino IDE"),t("OutboundLink")],1),e._v(" and download the Arduino SAM Boards (32-bits ARM Cortex-M3) toolbox from the boards manager (Tools > Boards > Boards Manager), v1.6.11 has been working for us.")])]),e._v(" "),t("li",[t("p",[e._v("Connect the arduino to the computer using the "),t("a",{attrs:{href:"https://www.arduino.cc/en/uploads/Main/DueUSBPorts.jpg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Programming port"),t("OutboundLink")],1),e._v(" (connect the cable to the USB port closest to the circular power connector). The arduino should be listed in the devices at the top of the window as "),t("code",[e._v("Arduino Due (Programming port)")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Either download or open from Matlab the firmware from the repository. The file is inside "),t("strong",[e._v("sensors > ADNS_aout_wUSB_1sensor_or_squal_nativeport")]),e._v(" folder and is named "),t("code",[e._v("ADNS_aout_wUSB_1sensor_or_squal_nativeport.ino")]),e._v(". Make sure you have selecteed the board at the top of the window and upload the firmware by pressing the upload button (right arrow icon).")])]),e._v(" "),t("li",[t("p",[e._v("Wait until the firmware is uploaded (a message in the terminal of the arduino IDE should confirm this) and disconnect the USB cable from the Programming port and connect it to the "),t("a",{attrs:{href:"https://www.arduino.cc/en/uploads/Main/DueUSBPorts.jpg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Native Port"),t("OutboundLink")],1),e._v(". The arduino should be programmed and working, you can confirm this by running the rig tester and pressing the "),t("em",[e._v("Arduino detection")]),e._v(" and "),t("em",[e._v("sensor quality")]),e._v(" buttons.")])])]),e._v(" "),t("h2",{attrs:{id:"usb-hub-and-speaker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usb-hub-and-speaker"}},[e._v("#")]),e._v(" USB HUB and Speaker")]),e._v(" "),t("ol",[t("li",[e._v("Use double side tape to glue the USB Hub to the cabinet at the top left portion above the DIN rail and connect everything that must be connected there (if using USB or USB powered speakers, the NIDAQ). Use a USB C extension to connect the hub to the computer.")])]),e._v(" "),t("figure",[t("img",{attrs:{src:o(362)}})]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Place the speaker inside the cabinet and connect to Hub - Make an upper hole on the cabinet for other cables as shown in the picture above. You can use a USB speakers or a desktop speakers and place them on top of the screen plate and connect it to the hub and, if necessary, to the computer audio input.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);