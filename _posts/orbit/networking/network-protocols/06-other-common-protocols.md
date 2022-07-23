---
tags: [aws/network]
title: 06-other-common-protocols
created: '2022-07-10T21:12:31.233Z'
modified: '2022-07-10T21:19:14.984Z'
---

# Other common protocols

Lesson 6 of 9

**At the core of the lesson, you will learn how to:**

- Identify other types of communication protocols
- Describe common transport, application, and network management protocols
- Use tools to discover information about network communications

## Transport protocols

### Transmission Control Protocol (TCP)

Recall that you first learned about TCP/IP earlier in this module. When Transmission Control Protocol (TCP) is combined with Internet Protocol (IP), they form the TCP/IP protocol suite, a set of protocols that the internet runs on. 

TCP/IP is a *connection-oriented protocol*. It defines how to establish and maintain network communications where application programs can exchange data. Data that is sent through this protocol is divided into smaller chunks called *packets*.

The goal of TCP/IP was to support an interconnection of networks, which was referred to as an *internetwork*, or *internet*. The internet comprises the groups of networks that communicate over this protocol.

**Reference:** Parziale, L., Britt, D., Davis, C., Forrester, J., Liu, W., Matthews, C., & Rosselot, N. (2006, December). TCP/IP Tutorial and Technical Overview. Retrieved from: [IBM Redbook: TCP/IP Tutorial and Technical Overview](https://www.redbooks.ibm.com/redbooks/pdfs/gg243376.pdf). 

### User Datagram Protocol (UDP)

The User Datagram Protocol (UDP) uses a simple, *connectionless communication* model to deliver data over an IP network. Compared to TCP, UDP only provides a minimum set of functions. It is considered to be *unreliable because it does not guarantee the delivery or ordering of data*. Its advantage is that it has a lower overhead, and it is faster than TCP.

UDP is *used by applications that value speed over guaranteed delivery*. Examples include video chat and video streaming. A missed packet might cause a short pause in the video, but the video will still be mostly understandable. However, if the users must wait for all the packets to be confirmed and ordered correctly, the delays can severely impact the quality of their experience.

### Application protocols

#### Hypertext Transfer Protocol (HTTP)

HTTP is the protocol that is used to reach webpages. A *full HTTP* address is expressed as a *uniform resource locator (URL)*.

![Example of a URL](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/iV74Vl-520mEPcFK_NWWI2pSnI9EbZMwu.png)

*`Example of a URL`*

#### Secure Sockets Layer (SSL) and Transport Layer Security (TLS)

*Secure Sockets Layer (SSL)* is a *standard for securing and safeguarding communications* between two systems by using encryption.

*Transport Layer Security (TLS)* is an *updated version of SSL* that is *more secure*. Many *security and standards organizations*—such as the *Payment Card Industry Security Standards Council (PCI SSC)*—require organizations to use *TLS version 1.2* to retain certification.

### Mail protocols (SMTP, POP, IMAP)

- The *Simple Message Transfer Protocol (SMTP)* is used to transfer email messages between mail servers.
- *Post Office Protocol (POP)* and *Internet Message Access Protocol (IMAP)* are used *by email clients* such as *Mozilla Thunderbird* or *Microsoft Outlook* to retrieve email messages from the mail server.

![Mail protocols: SMTP, POP, and IMAP](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/IupZAdFc5BJhAsAf_n7xF7BsFh62VHxP-.png)

Mail protocols: SMTP, POP, and IMAP

### Remote Desktop Protocols (RDP and SSH)

- *Remote Desktop Protocol (RDP)* is a protocol that is used to access the desktop of a remote *Microsoft Windows* computer. *Use port 3389* with clients that are available for Microsoft Windows, Unix, Linux, macOS, and other operating systems.
- *Secure Shell Protocol (SSH)* is a protocol that opens a secure *command line interface (CLI)* on a remote *Linux* or *Unix* computer.

### Application protocol port numbers

Application protocols—such as *Hypertext Transfer Protocol (HTTP)* and *File Transfer Protocol (FTP)*—have assigned port numbers. 

These numbers are data endpoints. The ports provide devices with a way to understand what to do with the data that they receive. For example, a computer might download a file over FTP. The computer connects to the server and downloads the data over port 21. The computer will know how to handle that data because of the port that it used. The computer will thus be able to complete the download. 

The following table shows the network protocol and the port number that are used by common application protocols.

| Application Protocol | Transport  Protocol | Port  Number |
| -------------------- | ------------------- | ------------ |
| HTTP                 | TCP                 | 80           |
| HTTPS                | TCP                 | 443          |
| FTP                  | TCP                 | 21           |
| SSH                  | TCP                 | 22           |
| DNS                  | TCP                 | 53           |

### Management and support protocols

- *Management protocols* are used to configure and maintain network equipment.
- *Support protocols* enable and improve network communications. 

The following diagram describes some examples of management and support protocols.

- DNS

- DHCP

- ICMP

- FTP
