---
tags: [aws/network]
title: 01-introduction-to-networking
created: '2022-07-10T21:12:31.180Z'
modified: '2022-07-10T21:19:14.920Z'
---

```
title:
date:
```

# Introduction to networking

> Lesson 1 of 9

**At the core of the lesson, you will learn how to:**

- Define basic networking terms
- Identify the main components of a computer network

What is a computer network?  

![Basic computer network](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/gLZzJk1QCmk2WlCD_Ao_llIerggziJspc.png)

Basic computer network

- A *computer network* is a collection of computing devices that are logically connected to communicate and share resources.

- A *node* refers to any device on a network. Examples of nodes can be servers, switches, modems, or even printers.  

- A *host* device is a node that has unique function: other devices connect to nodes so they can access data or other services. A server is an example of a host because a server can provide access to data, run an application, or provide a service.  

## Elements of a computer network

![Network Elements.png](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/DvEuptw58UKYcxZe_9NnLCGGZASE_aCVU.png)

## Client

![Computer and mobile device clients](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/3xx07ZVyqJu9p5p7_jaI50zlFRou8QHtQ.jpg)

Computer and mobile device clients

- A *client* is a computer hardware device that accesses the data or a service that is managed by another computer hardware device, which is called a *server*.
- The client connects to the server over a *network*.
- A *client* can also refer to software on the accessing device. For example, a web browser is a client for accessing content from a web server.

## Server

![Rack-mounted server components](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/KL4LcQlNC12Ik8Kp_HJ5HUbycDOhttWe7.png)

Rack-mounted server components

- A *server* provides a response to a request from a client computer over a network.
- Examples: 
  - Web server
  - Database server
  - File server
  - Mail server
  - Print server

## Network interface card (NIC)

- A *network interface card (NIC)* connects a computer to a computer network. It is also sometimes referred to as a *network adapter*.  

- It uses a *cable* that is connected to a hub or a switch.

- Each NIC has its own *media access control (MAC) address*. The MAC address is a unique physical (hardware) identifier. It is assigned by the manufacturer, and is used to identify the sender and receiver of data.

![Wired NIC](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/4IIFXCWKPrBMbEZf_WtAOwji-pSrEZxd3.jpg)

Wired NIC

## Network cable

Most network nodes are linked together by using some type of cabling. Three *types of cables* are commonly used for networks: 

[COAXIAL](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/index.html#)[TWISTED-PAIR](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/index.html#)[FIBER-OPTIC](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/index.html#)

- A *coaxial cable* (or *coax*) contains a central conductor wire (typically copper) that is surrounded by an insulating material. This insulating material, in turn, is surrounded by a braided metal shield. The entire cable is then enclosed in a jacket. 
- Today, the most common uses for coaxial cables are to *connect a cable TV modem to an internet service provider (ISP)*, and to connect TVs to cable boxes.

![Parts of a coax cable](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/OPnEyYDBjlYnQhi-_YqNyJiuTEzVTHI9S.jpg)

## Hub and switch

![Network hub or switch](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/J768qjlHb0uy-nTu_ar-wsDl85XPmc28J.png)

Network hub or switch

A *hub* or *switch* is a device that connects all the nodes of a network together. Every hardwired device in the network uses a network adapter, or NIC, to connect directly to a *port* on the hub or switch through a single cable.

### **Hub**

- A device that transmits data that is received on one port *to all the other ports on the hub*. 
- If one node sends data, all the others receive it, but only the intended recipient listens to it.

### **Switch**

- A device that transmits data *to only the receiving device*. It makes a direct link *by using MAC addresses* between the transmitting device and the receiving device.
- It improves performance because it does not use bandwidth on unnecessary transmissions.

### 

**Video: Hub versus switch**

## 

**Router**

A *router* is a network device that connects *multiple network segments into one network*.

- Connects *multiple switches* and their respective networks to form a larger network (that is, it acts as a switch between networks).  

- Can also *filter the data* that flows through it, which enables data to be routed differently, depending on need.  

The diagram below shows two switched networks (which are also called *subnets*)—Department A and Department B—that are interconnected through a router.

![Router diagram with two different departments on two different switches connected to one router](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/mbbQKCs2IK48QpuQ__uDo19h3ZocKv2gk.png)

Router diagram

## 

**Key takeaways  
**

- A computer network is a *collection of computing devices that are logically connected to communicate and share resources*.

- The main components of a computer network include:
  
  - Client devices  
  
  - Servers
  
  - Network adapters (NICs) and cables  
  
  - Hubs and switches 
  
  - Routers

![Nice work! Time for a knowledge check.](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/EJqXGaG9IJiZfyMl_PSvSTQF-ObtT1jC4.jpg)

**Nice work!**

**It's time** **for checkpoint questions.**

- Which network device should you use to connect multiple networks?
- Which device makes a direct link (by using MAC addresses) between the transmitting device and receiving device?
- Which type of cable transmits light instead of electricity?
