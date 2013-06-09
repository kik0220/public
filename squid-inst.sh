wget -O squid.conf https://docs.google.com/uc?id=0B-L9O92t2c4GUklPeUZQQlJhSGM
nano squid.conf
sudo yum install squid -y
sudo mv /etc/squid/squid.conf /etc/squid/squid.conf_org
sudo mv squid.conf /etc/squid/
sudo chkconfig squid on
sudo service squid start
