---
tags: [aws/network]
title: 02-networking-concepts
created: '2022-07-10T21:12:31.187Z'
modified: '2022-07-10T21:18:49.852Z'
---

# Networking concepts

Lesson 2 of 9 

**At the core of the lesson, you will learn how to:** 

- Distinguish between different types of networks
- Describe common network management models and network topologies
- Explain the purpose of the Open Systems Interconnection (OSI) communication model
- List different types of network protocols

## Types of computer networks

From the standpoint of *geographical span*, two of the most common types of computer networks are *local area networks (LANs)* and *wide area networks (WANs)*.

![A LAN with one router, two switches, and three nodes under each switch](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/BfiottwgqKPMLfNW_GHnJ18ksdyqnWsbg.png)

A LAN with one router, two switches, and three nodes under each switch

### Local-area network (LAN)

- A LAN connects devices in a *limited geographical area*, such as a floor, building, or campus. 
- LANs commonly use the *Ethernet* standard for connecting devices, and they usually have a high data-transfer rate.
- *Wireless technology* is also commonly used for a LAN.

![A WAN with three routers, two switches, and three nodes under each switch](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/G_g__6KVOjLIydu6_TUuNQvqnXwzs5MR6.png)

A WAN with three routers, two switches, and three nodes under each switch

### Wide-area network (WAN)

- A WAN connects devices in a *large geographical area*, such as multiple cities or countries. 
- WANs are *used to connect LANs*. They use technologies such as fiber-optic cables and satellites to transmit data. 
- The *internet* is considered to be the largest WAN. 

## Network management models

A network management model is a representation of *how data is managed, and how applications are hosted in a network*. It is important to understand network management models because they define the roles and relationships of the devices in your network. The two most common network management models for a LAN are *client-server* and *peer-to-peer*. 

![Client-Server Model connects, one server, one switch, and three clients.](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/lMECbivEyni7mPzK_KNSsmM89COm-RloA.png)

### Client-server model

In a client-server network model, the *data* management and *application* hosting *are centralized at the server* and distributed to the clients. All clients on the network must use the designated server to access shared files and information that are stored on the serving computer. 

If the server goes down, no client can access the network until the server is restored. Examples of client-server models are:

- File server and desktop clients
- Print server and desktop clients

![Peer-to-Peer Model with six connected nodes.](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/iaOE6A-B1QrmMvOR_nM2RH8xKEbjKYs7u.png)

### Peer-to-peer model

In a peer-to-peer network model, *each node has its own data and applications* and is responsible for its own management and security.

The peer-to-peer model is a distributed architecture that *shares* tasks or workloads among peers. Peers are equally privileged participants in the architecture. For example, files can be shared directly between systems on the network without a central server.

This model might be considered under the following conditions:

- Users are responsible for backing up each node
- Security requirements are not restrictive
- A limited number of peers are used

## Network topologies

Computer networks use different *topologies* to share information. A topology is a *pattern* (or diagram) *that shows how nodes connect to each other*. Computer networks have both physical topologies and logical typologies.

- **Physical topology –** Refers to the physical layout of wires in the network
- **Logical topology –** Refers to how data moves through the network

The following descriptions define historical topologies, such as *bus* and *star*, and more modern *mesh* and *hybrid* topologies.  

![Bus Topology with four clients running on a single cable.](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/Q8pQcmsv_fK7rVbF_I93HSpo1vXduozKD.png)

### Bus topology

**Bus** 

**Physical topology**

A *bus* topology *positions all the devices on a network along a single cable*. They run in a single direction from one end of the network to the other. A bus topology is also called a *line topology* or *backbone topology*. 

**Logical topology**

The *data flow* on the network also follows the route of the cable, and it *moves in one direction*. 

A bus topology is simple to configure. However, it allows only one computer to send a signal at a time, which can cause network collisions that bring down the network.

![Star Topology diagram with six clients with a central switch manages data transmission.](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/Lne29cYJs1RrhFIN_xq20_wETNzz_JiZz.png)

### Star topology

**Star** 

**Physical topology**

A *star* topology is set up so that *every node* in the network is directly *connected to one central switch* by using coaxial, twisted-pair, or fiber-optic cables.

**Logical topology**

This *central switch manages data transmission*. Data that is sent from any node on the network must pass through the central switch to reach its destination. The central switch can also function as a repeater to prevent data loss.

![Mesh topology where six nodes are interconnected.](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/ugLxozgg8aKafaZC_EWfYJ_x2YD85Z8g-.png)

### Mesh topology

**Physical topology**

A *mesh* topology is a complex structure of connections that are similar to peer-to-peer, where the nodes are interconnected. Mesh networks can be full mesh or partial mesh. In a *partial-mesh* topology, *all devices are connected to at least two other devices*.

In a *full-mesh* topology, *all nodes are interconnected*. A full-mesh topology provides full redundancy for the network. It is an expensive topology because it requires each node to have multiple network adapters and cables. You will most likely find a full-mesh topology in a WAN.

![Star-Bus  hybrid topology diagram displaying three switches with three nodes on a switch.](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/jbW7KZW220u776ty_Btq06Y2JXUZ_jm5H.png)

Star-bus hybrid topology

### Hybrid topology

A hybrid topology *combines two or more different topology structures*. It is usually found in large organizations where separate departments have personalized network topologies to accommodate their network usage and other requirements. 

Today, the *star-bus* topology is the most common hybrid topology.

## Open Systems Interconnection (OSI) model

The Open Systems Interconnection (OSI) model *defines a standard for how computers can share information over a network*, regardless of the hardware or software that they use. The model divides the processing of data that is sent over a network into seven layers.  

The following diagram illustrates how data flows in an *OSI-compliant network* from a source computer to a target computer.

![Data flow in an OSI-compliant network from a source computer to a target computer](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/N_i2EWyIVBRYyynR_3mghxHezbP6hy10E.png)

## Network protocols

A network protocol defines the *rules for formatting and transmitting data* between devices on a network. It typically operates at layer 3 (Network) or layer 4 (Transport) of the OSI model.

Network protocols fall into two general categories: *connection-oriented* protocols or *connectionless* protocols.  

![Two cell phones connected on one line.](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/rGiiZ0aUa1cbUgN8_7B_11a3nNMIprgqL.png)

A connection-oriented protocol is similar to a phone call between two people

****Connection-oriented protocol****

- Establishes a connection
- Waits for a response
- Creates a *session* between the sender and the receiver
- Uses *synchronous* communication

****Connectionless protocol****

- Sends a message from one endpoint to the other, without ensuring that the destination is available and ready to receive the data 
- *Does not require a session* between the sender and the receiver
- Uses *asynchronous* communication

![A connectionless protocol can be described as asynchronous communication between the sender and the receiver.  It's like sending a letter from one mailbox to another.](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/YneAWZjqTy4V2Ate_0LU2dSzCOp8FPSwA.png)

A connectionless protocol is like sending a letter from one mailbox to another mailbox

## Key takeaways

- A local-area network (LAN) connects devices in a *limited geographical area*, and a wide-area network (WAN) connects devices in a large geographical area.  

- A *network management model* defines how data is managed, and how applications are hosted in a network. *Client-server* and *peer-to-peer* are two common network management models for a LAN.

- A *network topology* shows how nodes connect to each other. *Star* and *hybrid* are example patterns of a network topology.  

- The *Open Systems Interconnection (OSI)* model defines a standard for how computers can share information over a network, regardless of the hardware or software that they use.

- A *network protocol* defines the rules for formatting and transmitting data between devices on a network.

![Nice work! Time for a knowledge check.](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/EJqXGaG9IJiZfyMl_PSvSTQF-ObtT1jC4.jpg)

**Nice work!**

**It's time** **for checkpoint questions.**

- Which network topology should you use if you want every node in a network to be directly connected to one central hub?
- A business is housed on several floors of the same building. Each employee has their own desktop in their cubicle. The employees must have access to a central file server, and multiple print servers on each floor. Which type of network would best suit the needs of this business?
