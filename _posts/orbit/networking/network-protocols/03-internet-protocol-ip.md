---
tags: [aws/network]
title: 03-internet-protocol-ip
created: '2022-07-10T21:12:31.196Z'
modified: '2022-07-10T21:19:14.937Z'
---

# Internet Protocol (IP)

Lesson 3 of 9

****At the core of the lesson, you will learn how to:**** 

- Describe the Internet Protocol (IP) and its features
- Explain the purpose of an IP address and its notation
- Convert an IP address to binary
- Distinguish between different classes of IP addresses
- Describe port numbering and its use

### What is IP?

IP is a network protocol that establishes the *rules for relaying and routing data in the internet.*

- IP is a critical standard within the larger *TCP/IP* protocol suite when it is combined with the connection-oriented *Transmission Control Protocol (TCP)*. TCP/IP implements the set of protocols that provides a crucial service for the internet because it enables the successful routing of network traffic among devices on a network. Some useful points about TCP/IP include that it:

- Uses *IP addresses* to identify devices

- Uses *port numbers* to identify endpoints

- Supports *subnetting* to subdivide a network

### IP addresses

An IP address *uniquely identifies a device on a network*. Each device on a network has an IP address, and it serves two main functions:

- It identifies a host and a network. 
- IP addresses are also used for location addressing.

IP addresses can be assigned to devices in a *dynamic* or *static* way. 

- A device with a *dynamic address* has an assigned IP address that can change. This feature is useful in scenarios where devices might leave and come back to a network, like a work-assigned laptop that travels from the work network to the user's home network. 
- A device with a *static address* has an IP address that does not change. This feature can be useful in many scenarios, such as servers or printers on a network that other devices often connect to.

IP addresses can also be made *public* or *private*:

- A *public IP address* is an IP address that can be accessed over the internet. A public IP address is similar to a public phone number that is listed in a phone book or on the internet. The phone number is discoverable by anyone who wants to call it. A public IP address is a globally unique IP address that is assigned to a computing device that must access the internet.
- A *private IP address* is assigned to computers within a private network and they cannot be accessed from the internet. Private addresses work well for use cases when an address is assigned to a device that you do not want other devices to know about. Returning to the phone number analogy, a private IP address would be similar to a private listing or a personal phone number that is not made publicly available. For example, the application and database servers in your data center are assigned private IP addresses because you might not want other devices to know about these servers.

When a network is assigned a range of IP addresses, such as 10.0.0.01–10.255.255.255, a few addresses have a special purpose. They are *not* assigned as host addresses. These addresses are the default router address and the broadcast address.

#### Example: Suppose the range of IP addresses is 10.0.0.0–10.255.255.255.

- The *default router address* is typically the second address in the range: 10.0.0.1
  - The default router address is also known as the *gateway address*, and it is the IP address of the network router.
- The *broadcast address* is the last address in the range: 10.255.255.255
  - The broadcast address is used to transmit messages to all devices that are connected to a network. If a message is sent to a broadcast address, then all nodes on the network can receive it. 

### Converting an IP address into binary

An IP address consists of *four numbers from 0 to 255 separated by a period*, which is also known as a *dotted quad* (for example, 10.15.238.21). This format follows the *IPv4 standard.* It is important to note that the numbers in the IP address *identify both the network and the device on the network*.

To understand IP addressing, it is often better to convert the number to binary. A binary number is expressed in the base-2 numeral system, and it is *consists of only zeroes and ones*:

- The value of 0 or 1 is known as a *binary digit*, or *bit*.
- In an IPv4 address, *each of the four numbers* between the dots is *an 8-bit binary number*. Thus, the entire address is a 32-bit binary number.

The following table can be used to convert an 8-bit binary number to a decimal, or a decimal to an 8-bit binary number:

| **Bit Position**      | **8**       | **7**      | **6**      | **5**      | **4**      | **3**      | **2**      | **1**      |
| --------------------- | ----------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| **Binary Power**      | **27**<br>  | **26**<br> | **2****5** | **24**<br> | **23**<br> | **22**<br> | **21**<br> | **20**<br> |
| **Decimal<br> Value** | **128**<br> | **64**<br> | **32**<br> | **16**<br> | **8**<br>  | **4**<br>  | **2**<br>  | **1**<br>  |

Example 1: Converting the decimal value 13 to binary

It is useful to visualize a binary conversion. To do so, consider the decimal value *13*. To convert this value into binary, first consider the following chart based on what you know from the previous table:

| **Decimal Value** | **128** | **64** | **32** | **16** | **8**  | **4**  | **2**  | **1**  |
| ----------------- | ------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| **Binary Power**  | **27**  | **26** | **25** | **24** | **23** | **22** | **21** | **20** |
| **Bit: 1 or 0 ?** |         |        |        |        | **1**  | **1**  | **0**  | **1**  |

From the preceding chart, you can determine how many powers of 2 can be used to add up to the value of *13*. If you determine what powers of two come closest to the number 13 *without* going over, you can eliminate **2****7**, **2****6**, **2****5**, and **2****4**. Each of these values has a decimal value that is greater than 13. From the chart above, the correct starting power would be **23** because this value equals *8*. Beginning here, you enter a *1* in the chart beneath **2****3** to represent the bit. 

Subtracting 8 from 13 provides the decimal value remainder of *5*. Repeating the previous step, you can find the next power of 2 that can be used to further reduce the decimal value that is being converted. The decimal value for the remainder of *5* would be **2****2** because it represents the decimal value of 4. To represent the bit, you can then put a *1* beneath the binary value for **2****2** in the chart.

Continuing along the same pattern, you can then subtract 4 from the the remainder decimal value of 5 to get *1*. Working left from right, you can observe that you cannot use the 21 binary power because it would give you a value of 2—which is greater than the remainder. Thus, you can place a bit value of *0* beneath the decimal value **2**. The next binary power, **2****0**, has a decimal value of *1*. Because the remainder is currently *1*, **2****0** can be subtracted from the remainder to provide a remaining decimal value of *0*. A bit value of *1* is placed beneath the binary value **2****0**. 

After you convert the number to binary and you have processed the remainders down to 0, you can finally determine the binary value of the number. In this instance, the number *13* has a binary value of **1101**.

#### Example 2: Converting the decimal value 214 to binary

Evaluate the decimal value *214* to determine its binary value.

1. Find the *highest decimal value that is less than or equal* to 214. This value is *128*.
2. *Set the bit* in the 128 column to *1*.
3. *Subtract* 128 from 214 to *get a remainder* of *86*.
4. Find the *highest decimal value that is less than or equal* to 86. This value is *64*.
5. *Set the bit* in the 64 column to *1*.
6. *Subtract* 64 from 86 to *get a remainder* of *22*.
7. *Repeat the preceding pattern* for each remainder value *until the remainder* is *0*.

![The decimal value 214 to binary](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/wAaM7CTwok6II2pm_0YEV-1HKabwNcUZ9.png)

The decimal value *214* coverts to *11010110* in binary

**NOTE**: If you evaluate the diagram on the left against the instructions in Example 1, you can observe the process of determining a binary value. Bit values are placed beneath the corresponding decimal values for the binary powers that are used to reduce the original value of *214* down to *0*. The bit values for **32**, **8**, and **1** are all set to *0* because they were not compatible power values for reducing the decimal value remainders down to 0.

#### Example 3: Converting the IP address 219.103.21.59 to binary

Use the method described in Example 1 and Example 2 to *convert each of the four numbers in the IP address 219.103.21.59 to binary*.

![Conversion chart  IP address to binary](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/lmrZ9YeQdjaRxDZ8_foKKElwFq9d8LH47.png)

In binary, the IP address *219.103.21.59* converts to *11011011.0100111.00010101.00111011*

### What is IPv6?

A newer *IPv6 standard* extends the range of IPv4 addresses by a factor of 1,028. It uses a *group of hexadecimal numbers that are separated by eight colons (:)*. This emerging standard is designed to replace IPv4 eventually. It is also designed to handle packets more efficiently, increase security, and improve performance. It is important to note that in IPv6 addresses, *the numbers identify both the network and the device on the network*. An IPv6 address looks like the following example:

- **2600:1f18:22ba:8c00:ba86:a05e:a5ba:00FF**

When you compare IPv4 to IPv6, you can observe the difference in length between the two numbers. The extra digits in the IPv6 address enable an expanded number of available addresses. Each decimal value now allows for *16 bits* instead of the 8 bits that IPv4 provides. IPv4 provides a maximum of 4.2 billion addresses. However, as the need for connected devices and expansive networks continues to grow, more addresses are needed. IPv6 provides 340 trillion, trillion, trillion addresses—which provides a large amount of space to secure an IP address on a network for the ever-expanding list of smart phones, tablets, computers, servers, internet of things (IoT) devices, and any other connected devices.

![Comparison of IPv4 32bit addresses and IPv6 128bit addresses](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/ZOfKeLX9jZ3OG46k_WpzmzHWRhjSoDD4r.png)

Comparison of IPv4 (32-bit) addresses and IPv6 (128-bit) addresses

## Activity

Convert the following decimal values to their binary equivalents.

For each decimal value, find its binary equivalent.

| Decimal | Binary    |
| ------- | --------- |
| 248     | 1111 1000 |
| 126     | 0111 1110 |
| 63      | 00111111  |
| 227     | 1110 0011 |
| 233     | 11101001  |
| 204     | 11001100  |

## Port numbers

A *port number* allows a device in a network to *further identify the other devices or applications that communicate with it*. A device might send or receive data from multiple devices at the same time. A port number, in combination with an IP address, enables the device to determine the exact source or destination of the data, which is also known as the *endpoint*. 

A good example would be to think of a port number like an extension to a phone number. Multiple people might call a phone number, but each person could be trying to get to a different person based on the extension that they use. This way, everyone can use the same number, but provide unique extensions to ensure that their calls are routed correctly. A computer can receive and send information in a similar way. It can enable multiple types of data to be sent to the same IP address, and still be parsed and acted on in separate and unique ways. This functionality enables a computer download a file over  File Transfer Protocol (FTP) from an Amazon Simple Storage Service (Amazon S3) bucket, stream a live video from Twitch, and receive email messages—all at the same time.

![Example of using port numbers](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/oE5Sj_sJf6kA0PrT_w7G2qFqeiTkql5qs.png)

#### Example of using port numbers

In this example, an application on Computer B receives data simultaneously from applications on Computer A and Computer C. Both Computer A and Computer C run other applications that communicate to other computers over the network. Because each communicating application on computers A, B, and C is identified by a *unique endpoint* (or *combination of IP address and port number*), messages from the three applications can reach their correct destinations.

## Key takeaways

- An *IP address* uniquely identifies a device on a network and enables communication to it.

- An *IPv4 address* consists of four numbers in the range of 0–255, and each number is separated by a dot (.).

- *Working with IP addresses* often requires converting them to binary.

- A *port number* further identifies an application or a service on a device. When the port number is combined with the device's IP address, it represents an *endpoint*.
