#!/bin/bash
curl -L https://raw.github.com/kik0220/public/master/squid.conf > squid.conf
nano squid.conf
sudo yum install squid -y
sudo mv /etc/squid/squid.conf /etc/squid/squid.conf_org
sudo mv squid.conf /etc/squid/
sudo chkconfig squid on
sudo service squid start
