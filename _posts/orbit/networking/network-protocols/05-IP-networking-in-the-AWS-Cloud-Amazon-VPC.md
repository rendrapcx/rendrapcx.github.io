---
tags: [aws/network]
title: 05-IP-networking-in-the-AWS-Cloud-Amazon-VPC
created: '2022-07-10T21:12:31.224Z'
modified: '2022-07-10T21:19:14.968Z'
---

# IP networking in the AWS Cloud: Amazon VPC

Lesson 5 of 9 

**At the core of the lesson, you will learn how to:**

- Explain virtual networking in the cloud with Amazon Virtual Private Cloud (Amazon VPC)
- Describe the key components of a VPC
- Relate subnetting and CIDR block addressing to Amazon VPC features

### What is Amazon VPC?

Amazon Virtual Private Cloud (Amazon VPC) is *a service* that you can use to *provision a logically isolated section of the AWS Cloud*, which is called a *virtual private cloud*, or *VPC*. With a VPC, you can launch your AWS resources in *a virtual network that you define*. A VPC:  

- Enables you to *create a private network* in the AWS Cloud that uses many of the same concepts and constructs as an on-premises network
- Gives you *control over your virtual networking resources*, including –  
  - Selecting an *IP address range*
  - Creating *subnets*
  - Configuring *route tables* and *network gateways*
- Enables you to *customize its network configuration* 
- Enables you to *use multiple layers of security*

### Using other AWS services with Amazon VPC

- Amazon VPC is an AWS foundational service and it *works with many AWS services*. For example, Amazon Elastic Compute Cloud (Amazon EC2) instances are deployed into a VPC. 
- *Understanding and implementing Amazon VPC will enable you to fully use other AWS services.*

![Amazon VPC is a foundational AWS service, and it works with many AWS services](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/qniZhcLHealb9Gjg_RozascH_lylzJbvL.jpg)

Amazon VPC is a foundational AWS service, and it works with many AWS services 

### Amazon VPC features

- A VPC:
  - Is *dedicated* to an AWS account
  - Belongs to a single ***AWS Region***
  - Can span multiple *Availability Zones*
  - Is *logically isolated* from other VPCs
- You can create *multiple VPCs in an AWS account* to separate networking environments
-  You can create subnets in a VPC, though we recommend fewer subnets to reduce the complexity of the network topology

![Multiple VPCs that span different Availability Zones in an AWS Region](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/7tZkSdHwagbhiWRI_12s3hujut2oRRcZH.png)

Multiple VPCs that span different Availability Zones in an AWS Region  

### IP addressing in Amazon VPC

![The IP address range of a VPC is specified as a CIDR block](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/0U0ATYpyj5J1aMpL__hbnORMSZnVfXUKW.png)

The IP address range of a VPC is specified as a CIDR block

- When you *create a VPC*, you must *specify the IPv4 address* range by choosing a *CIDR block*, such as *10.0.0.0/16*. 
- A VPC address range could be as large as */16* (65,536 addresses) or as small as */28* (16 addresses).
-  *IP addresses should not overlap* with the addresses of other networks that a VPC is connected to.
- The *address range of the VPC cannot be changed* after the VPC is created.

## Amazon VPC components

You can use the following components to configure networking in a VPC:

START 

Component 1

## Public subnet or private subnet

![Public subnet and private subnet](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/o_yOBaUgD9xVql5Y_O7_HN-0nFml7-S6b.jpg)

A subnet is a segment of a VPC address range. You can launch AWS services in a subnet.

- CIDR blocks define subnets.
- AWS reserves the first four IP addresses and the last IP address of every subnet for internal networking purposes. 
- A public subnet is accessible from within the VPC and from the internet.
- A private subnet is only accessible from within the VPC, and it is not accessible from the internet.

## Route table

![AWS route table icon](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/N1ilfd121rJDDUVt_5cid3oK3mCftfJr7.jpg)

A route table contains a set of rules, called *routes*, that are used to determine where network traffic is directed. Each subnet in a VPC must be associated with a route table. The table controls the routing for the subnet. A subnet can only be associated with one route table, but you can associate multiple subnets with the same route table. 

To learn more about route tables, refer to [Route tables](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html) in the AWS Documentation.

## Security group

![sF41ygL9VY7iI7Bi-Screen%2520Shot%25202020-10-15%2520at%252011.27.53%2520PM.png](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/tIx00vbq9OjKk0PK_nIjrKxpblFLa57tD.png)

A security group is a virtual, stateful firewall that controls inbound and outbound network traffic to AWS resources and EC2 instances.

To learn more about security groups, refer to [Security groups for your VPC](https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html) in the AWS Documentation

## Network access control list (network ACL)

![Network access control list icon](https://pdx.scorm.canvaslms.com/courses/sconeID/scone_prod.sha256_bf59af81df4c2e67ca97dd70bb663195fe0aaddc6586924a7dc60ee676d9c064/0/scormcontent/assets/CfIP36Q6rVz7BlLS_-tLhgnRF446HmpNq.jpg)

A network access control list (network ACL) is an optional layer of security for a VPC. It acts as a stateless firewall for controlling traffic in and out of one or more subnets. To learn more, refer to [Network ACLs](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html) in the AWS Documentation.

## Key takeaways

- *Amazon Virtual Private Cloud (Amazon VPC)* is a service that you can use to build a custom-defined network in the AWS Cloud

- The IP address range of a VPC is defined by using a *CIDR block*

- You can create the following components in a VPC:  
  
  - Public subnet or private subnet  
  
  - Route table  
  
  - Security group
  
  - Network access control list (network ACL)
