# resolutionwallet

Graphical UI for guardian coll
==============================

An experimental learning proof of concept code to assist building a Living Knowledge Network (LKN) protocol. The collaboration ethos is set out at https://docs.google.com/document/d/1xFs83-xVqlPJhRqCuN6bzS-bb7-k2b1cpGlrONnVhqk/edit?usp=sharing  The goal for the LKN protocol is to implement the ethos is code.   As specific functionality is identified and made modular, new code repositories will be setup and aggregated via the shell guardian coll code, https://github.com/LivingKnowledgeNetwork/guardiancoll

How to use
==========
First install the ResolutionWallet  see below.

1. Click on PtoP tab link
2. Enter an identity number for a science cycle and click start.
3. A new entry will be displayed.
4. Add a datamodel description and click the link to add.
5. Add link to data source and click the link to add.
6. Add link to the source of science e.g. github URL and click link to add.
7. Describe type of computation, local, mobile, cloud, truebits etc.
8. Value the science, enter a number and click the link to add.

To add another CCSC (consilience collaboration science cycle) enter a new identity number and click start. Then repeat 3 to 8.

Whichever identity number is live, data is added for the context.

All entries a automatically shared across the LKN network.

Existing knowledge in the network can view by clicking on the Get Knowledge link.

Security
========

NB. the protocol is currently unsecured, use at own risk.


Install
=======

The Resolution Wallet is a coded in Node.js and can be a stand alone Electron desktop app or run as a cloud server. Node v7.9.0

Electron Install
----------------

1. Clone repository
2. cd to resolutionwallet directory
3. npm install  
4. sudo npm start

Compile binaires usind eletron buildDapperurl
1. sudo build -l --x64

As server
---------
1. clone repository
2. cd to resolutionwallet/src/server/
3. npm install
4. sudo node index.js
5. Put a copy of the resolutionwallet/src/   files ie. index.html in hosting directory


Collaborate and Contribute
==========================

Read the LKN ethos and then participate, whether that is thinking, code, documentation or in educating etc.
