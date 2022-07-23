---
tags: [aws/network]
title: 08-threat-mitigation
created: '2022-07-10T21:12:31.268Z'
modified: '2022-07-10T21:19:15.017Z'
---

# Threat mitigation

Lesson 8 of 9 

**At the core of the lesson, you will learn how to:**

- Define the goal of threat mitigation  

- Describe common threat-mitigation methods  

### What is threat mitigation?

Jika lingkungan komputasi Anda telah disusupi atau terinfeksi, Anda atau organisasi Anda harus mengambil tindakan korektif untuk menemukan dan menghilangkan ancaman tersebut. Tindakan korektif, seperti strategi atau solusi pencegahan, diterapkan untuk memerangi atau mengurangi ancaman TI pada komputer, server, atau jaringan. 

**Mitigation is a** **detection and protection policy that is adopted to safeguard networks**.

### Threat-mitigation methods

Mitigation methods include: 

- Anti-malware – Malware detection 
- Encryption
- Authentication
- Firewalls
- IDS
- Training

Penetration testing and vulnerability scanning are also essential.

### Anti-malware

- Anti-malware protects the device and the network. 
- Malware is malicious computer software that is developed to act out malicious intentions. Malware is designed to damage computer hardware or steal data. Types of malware include viruses, worms, trojan horses, rootkits, ransomware, and keyloggers.
- Malware detection examines networked devices and the data on those systems to detect malware. Malware-detection software is effective at detecting malware because it can involve the use of multiple mechanisms and methods. Types of malware-detection software include anti-virus software, anti-spyware, anti-spam, and firewalls.

### Encryption

- Encryption uses an algorithm to encrypt (or scramble) data.
- A decryption key is needed to decrypt (or unscramble) the data.
- Sensitive data that is at rest or in motion should be encrypted.

![Encryption uses an algorithm to encrypt data. A decryption key is needed to decrypt the data.](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/prKuiwkhHhBWQlr5_9wp4r7eYAQ6U7DBU.png)

*Encryption uses an algorithm to encrypt data. A decryption key is needed to decrypt the data.*

### Data in motion versus data at rest

Imagine that an email message is being sent. When the email message is sent from the first computer to the second computer, the data is *in motion*. After the email message reaches the second computer's inbox and is waiting to be opened, the data is *at rest*.

![Data in motion versus data at rest](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/m4McXatFpCz29Ui6_73lQuRikezEp8WtF.png)

*Data in motion versus data at rest*

### Encrypting data in motion and data at rest

Encrypting data at rest is vital for regulatory compliance. It helps ensure that sensitive data that is saved on disks is not readable by any user or application that does not have a valid key. Some compliance regulations—such as the Payment Card Industry Data Security Standard (PCI DSS) and the U.S. Health Insurance Portability and Accountability Act (HIPAA)—require the encryption of data at rest throughout the data lifecycle.

### Certificate authentication and encryption

- *Digital certificates* are electronic credentials that are used to *represent the online identities* of individuals, computers, and other entities on a network. Digital certificates are similar to personal ID cards.  

- A certificate with a *public key* and a corresponding *private key* can be used for *encryption* and *decryption*. When only the public key is used, the certificate establishes trust and performs encryption.  

- There are two types of certificates—*Certificates that are signed by a certificate authority (CA)* and *self-signed certificates*.  

![How certification works](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/A-esf7cD7bipCdYJ_N9JbYmt7YFWQzBCL.png)

How certification works  

- Certificates that are signed by a *certificate authority (CA)* are signed by a third-party CA or a trusted CA.
- *Self-signed* certificates are created, issued, and signed by the entities whose identities the certificates are meant to verify. 

### Firewalls

![Firewalls monitor incoming and outgoing network traffic, and they filter data packets.](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/_zb2iQGsKArZl6ls_9jw5qnNdOJJ6M7_7.png)

Firewalls monitor incoming and outgoing network traffic, and they filter data packets.

A *firewall* is a network security device that helps to protect software, hardware, or web applications against common web exploits. These exploits might affect availability, compromise security, or consume excessive resources. Firewalls monitor incoming and outgoing network traffic. They allow data packets, or blocks data packets. Firewalls control how traffic reaches your applications by enabling you to create security rules that block common attack patterns, such as SQL injection or cross-site scripting. You can also create rules that filter out specific traffic patterns that you define.

### Intrusion detection systems and intrusion prevention systems

An *intrusion detection system (IDS)* is a combination of hardware and software that can detect network attacks and alert network information security professionals.  

![How an IDS and an IPS work](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/sY7NaFZ8HKLxQb24_27m12HV9Y1kGhw9b.png)

How an IDS and an IPS work

An IDS can discover an attack in a couple of ways:  

- An *anomaly-based IDS* examines baselines and deviations from baseline behavior. 
- A *signature-based IDS* monitors for known patterns of attack. 

In addition, an IDS usually is either a *network-based intrusion detection system (NIDS)* or a *host-based intrusion detection system (HIDS)*. A NIDS monitors for *attacks on the network*. Often, all the data that travels through the network also travels through the IDS for inspection and analysis. A NIDS is installed on a server and monitors *logs and critical files on the server*, monitoring for signs of a network attack.

An *intrusion prevention system (IPS)* is a network security tool that *identifies and prevents* threats. An IPS monitors networks for malicious incidents, and acts to prevent these malicious threats from affecting the system. IPSs are often behind the firewall, and they provide an extra layer of protection.

### Security training and education

Security training and education is a continuous effort to acquire knowledge, skills, and competencies that are related to security. Knowledge of security starts with awareness and develops with further training and education.

## Key takeaways

- The goal of threat mitigation is to *combat threats* to an organization's data. It should be a proactive and preventive effort.  

- Anti-malware, encryption, certificate authentication, firewalls, IDSs, IPSs, and training are examples of effective *threat-mitigation methods*.
