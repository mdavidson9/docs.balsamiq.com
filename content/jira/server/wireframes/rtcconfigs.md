---
date: 2015-07-30T15:52:28-07:00
title: "Real-Time Collaboration Service Configuration"
menu: "menujirawireframes"
product: "Balsamiq Wireframes for Jira Server"
weight: 2200
---

Our Atlassian server add-ons include a built-in, behind the firewall **real-time collaboration service** (RTC) that allows multiple users to work on the same project, at the same time. This documentation is to help administrators understand how the service is implemented, and potentially help them solve problems with it.

It's a service on the main application server that needs to be configured according to the existing network layout. Except for common setups (direct connection to tomcat), you need administration access to the server console to edit reverse proxy configuration files or open the desired port.

Confluence/Jira administration permissions are needed to modify the RTC plugin configuration (set the FQDN, set the RTC port, verify if RTC is up or restart it).

{{% alert warning %}}**Note:** To avoid mixed content (HTTP+HTTPS on the same webpage), the connection protocol has to be the same (client/server and RTC), so HTTP for both or HTTPS for both.

Example: if SSL is terminated at the reverse proxy, and proxied to HTTP (tomcat), the same thing should happen for RTC (default port 9083-9093){{% /alert %}}

* * *

## Possible Configurations

JIRA/Confluence application server can be installed with different network configurations. Depending on the configuration, the RTC configuration page shows different protocol values:

If the protocol field in the configuration page shows HTTP, the plugin is guessing that the protocol during the full network path (client/\<proxy if existing>/server) is HTTP.

![](//media.balsamiq.com/img/support/docs/atlassian/rtc_http.png)

If it shows HTTPS, the protocol used is HTTPS for all the network path.

![](//media.balsamiq.com/img/support/docs/atlassian/rtc_https.png)

If it shows HTTP + SSL, the protocol used is HTTPS to the reverse proxy, then HTTP to the tomcat server.

![](//media.balsamiq.com/img/support/docs/atlassian/rtc_http+ssl.png)

Here are different network configurations related to protocol value (shown in RTC plugin configuration page):

* [HTTP configuration examples](#http-configuration-examples)
* [HTTP + SSL configuration examples](#http-ssl-configuration-examples)
* [HTTPS configuration examples](#https-configuration-examples)

* * *

## Prerequisites

### Prerequisites valid for every scenario


{{% alert info %}}* It is possible to configure a desired port (that has to be free and beyond 1024, according to best practices) through the plugin configuration tab "Real-time Collaboration Service" (9083 is the default for confluence, 9093 for Jira).
* The selected TCP port for RTC has to be available and reachable on all the network path.
verify that the fully qualified domain name of the server (or the proxy, in case of reverse proxy) is correct.
* In most cases, it's the same as the FQDN of the Atlassian Server Base URL (if the Server Base URL is http://example.com/JIRA, the Server Name in the plugin configuration name has to be example.com{{% /alert %}}

### Prerequisites in case of reverse proxy

{{% alert info %}}* The selected TCP port for RTC has to be proxied to the application server (to the same port)
* proxy FQDN has to be solved and reachable by the application server{{% /alert %}}

### Prerequisites in case of HTTP + SSL

{{% alert info %}}* If the proxy is on the same host of the application server, tomcat server should be listening on a different IP (tipically, with the parameter address="127.0.0.1" inside server.xml) so that RTC connects to proxy on chosen port in the external interface (e.g. 192.168.1.64), then can be redirected to the same port the tomcat interface
* The Java runtime environment embedded in jira/confluence installation has to trust the SSL certificate of the proxy, so in case it is self signed or the root certificate unknown to Jre, it has to be imported into the embedded Jre.{{% /alert %}}

### Prerequisites for HTTPS

{{% alert info %}}* If tomcat directly terminate https, server.xml has to be configured to let Tomcat use the certificate file. RTC plugin reads these values directly from server.xml
* the Java runtime environment embedded in jira/confluence installation has to trust the SSL certificate, so in case it is self signed or the root certificate unknown to Jre, it has to be imported into the embedded Jre.{{% /alert %}}

### Prerequisites for both HTTPS and HTTP+SSL

{{% alert warning %}}
**CA chain - HTTPS, HTTP+SSL**

Please pay attention that the application server (Tomcat) needs to access the proxy or the application server, so the full CA chain has to be trusted. If for testing purposes SSL certificate is self signed, it has to be imported at jre level in a similar way:

```
echo -n | openssl s_client -connect <jira|confluence_FQDN>:443 | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > /tmp/<jira|confluence_FQDN>.cert

cd /opt/atlassian/<confluence|jira>/jre/bin

./keytool -keystore ../lib/security/cacerts -import -alias jira -file /tmp/<jira|confluence_FQDN>.cert
```
{{% /alert %}}

* * *

## HTTP configuration examples

![](//media.balsamiq.com/img/support/docs/atlassian/http.png)

### Case HTTP (0)

{{% alert info %}}**Note:** Client connects (http) directly to tomcat (Atlassian service), no extra configuration is required.{{% /alert %}}

See the Prerequisites on [this section](#prerequisites).

### Case HTTP (1)

{{% alert info %}}**Note:** Client connects to reverse proxy that pass the request (http) to Atlassian service. Reverse proxy and Atlassian service are on different machines{{% /alert %}}

See the Prerequisites on [this section](#prerequisites).

#### nginx typical config file

```
#Confluence application server
server {
    listen <FQDN__or__staticIP>;
    server_name <FQDN>;

    location /confluence {
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Server $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://<tomcatFQDN__or__tomcatStaticIP>/confluence;
        client_max_body_size 100M;
        proxy_buffer_size 8k;
    }
}

#RTC configuration for Balsamiq Wireframes
server {
    listen <FQDN__or__staticIP>:9083;
    server_name <FQDN>;

    location / {
        proxy_pass http://<tomcatFQDN__or__tomcatStaticIP>:9083;
        include proxy_params;
        proxy_redirect off;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
    }
}
```

#### RTC apache config example

```
Listen <FQDN__or__staticIP>:9083
<VirtualHost *:9083>
ProxyRequests off
ProxyPreserveHost On
RewriteEngine on
<Proxy *>
Require all granted
</Proxy>
ProxyPass / http://<tomcatFQDN__or__tomcatStaticIP>:9083/
RewriteEngine on
RewriteCond %{HTTP:UPGRADE} ^WebSocket$ [NC]
RewriteCond %{HTTP:CONNECTION} Upgrade$ [NC]
RewriteRule .* ws://<tomcatFQDN__or__tomcatStaticIP>:9083%{REQUEST_URI} [P]
</VirtualHost>
```

#### haproxy typical config file

```
#add X-Forwarded-For headers
   option forwardfor

frontend ft_jdc
    bind :80
    default_backend bk_jdc

backend bk_jdc
    server s11 192.168.1.61:8080

frontend ft_jrtc
    bind :9093
    default_backend bk_jrtc

backend bk_jrtc
    server s11 192.168.1.61:9093
```

### Case HTTP (2)

{{% alert info %}}**Note:** Client connects (http) to reverse proxy that pass the request (http) to Atlassian service. Reverse proxy and Atlassian service are on the same machine.{{% /alert %}}

See the Prerequisites on [this section](#prerequisites).

Similar to [Case HTTP (1)](#case-http-1), except for:

* reverse proxy has to listen to public interface and redirect to loopback (127.0.0.1)
* tomcat (Atlassian service) has to be configured to listen to loopback interface (127.0.0.1)

#### server.xml Example

```
<Server port="8000" shutdown="SHUTDOWN" debug="0">
    <Service name="Tomcat-Standalone">
        <Connector port="8090" connectionTimeout="20000" redirectPort="8443"
                address="127.0.0.1"
                maxThreads="48" minSpareThreads="10"
                enableLookups="false" acceptCount="10" debug="0" URIEncoding="U$
                proxyPort="80"
                proxyName="s07.kvm.gozzi"
                scheme="http"
                maxPostSize="2097152"
                protocol="org.apache.coyote.http11.Http11NioProtocol" />
```

#### nginx sites configuration Example

```
#Confluence application server
server {
    listen <FQDN__or__staticIP>:80;
    server_name <FQDN>;

    location / {
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Server $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://127.0.0.1:8090;
        client_max_body_size 100M;
        proxy_buffer_size 8k;
    }
}

upstream confluence_rtc {
        server 127.0.0.1:9083;
        keepalive 60;
}

#RTC configuration for Balsamiq Wireframes
server {
    listen <FQDN__or__staticIP>:9083;
    server_name <FQDN>;
    proxy_read_timeout 86400s;

    location / {
        proxy_pass http://confluence_rtc;
        proxy_redirect off;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
    }
}
```

#### apache reverse proxy Example

```
<VirtualHost *:80>
    ServerName <FQDN>
    ProxyRequests Off

    <Proxy *>
         Require all granted
    </Proxy>

    ProxyPass /synchrony http://127.0.0.1:8091/synchrony

    <Location /synchrony>
    Require all granted
    RewriteEngine on
        RewriteCond %{HTTP:UPGRADE} ^WebSocket$ [NC]
        RewriteCond %{HTTP:CONNECTION} Upgrade$ [NC]
        RewriteRule .* ws://127.0.0.1:8091%{REQUEST_URI} [P]
     </Location>

    ProxyPass "/confluence"  "http://127.0.0.1:8090/confluence"
    ProxyPassReverse "/confluence"  "http://127.0.0.1:8090/confluence"

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>


Listen <FQDN__or__staticIP>:9083
<VirtualHost *:9083>
  ProxyRequests off
  ProxyPreserveHost On
  RewriteEngine on
  <Proxy *>
    Require all granted
  </Proxy>
   ProxyPass /socket.io http://127.0.0.1:9083/socket.io
    <Location /socket.io>
        Require all granted
        RewriteEngine on
        RewriteCond %{HTTP:UPGRADE} ^WebSocket$ [NC]
        RewriteCond %{HTTP:CONNECTION} Upgrade$ [NC]
        RewriteRule .* ws://127.0.0.1:9083%{REQUEST_URI} [P]
     </Location>
</VirtualHost>
```

### Case HTTP (3)

{{% alert info %}}**Note:** Client connects (http) to reverse proxy that balamce the request (http) to Atlassian Data Center. Reverse proxy is configured to allow **balance for tomcat (sticky mode)** and **failover for RTC** (at now RTC does not support full cluster).{{% /alert %}}

See the Prerequisites on [this section](#prerequisites).

#### haproxy, 2 nodes

```
frontend ft_cf_http
   bind :80
    #CORS
    capture request header origin len 128
    http-response add-header Access-Control-Allow-Origin %[capture.req.hdr(0)] if { capture.req.hdr(0) -m found }
    rspadd Access-Control-Allow-Methods:\ GET,\ HEAD,\ OPTIONS,\ POST,\ PUT  if { capture.req.hdr(0) -m found }
    rspadd Access-Control-Allow-Credentials:\ true  if { capture.req.hdr(0) -m found }
    rspadd Access-Control-Allow-Headers:\ Origin,\ Accept,\ X-Requested-With,\ Content-Type,\ Access-Control-Request-Method,\ Access-Control-Reque$
   default_backend bk_cf_http

backend bk_cf_http
   balance roundrobin
   cookie JSESSIONID prefix nocache
   server s12 192.168.1.62:8090 check cookie s12
   server s13 192.168.1.63:8090 check cookie s13

frontend ft_cf_rtc
   bind :9083 ssl crt /etc/ssl/private/haproxy.pem
   default_backend bk_cf_rtc

backend bk_cf_rtc
  option tcp-check
  server s12 192.168.1.62:9083 check port 8090
  server s13 192.168.1.63:9083 check port 8090 backup
```

* * *

## HTTP + SSL configuration examples

![](//media.balsamiq.com/img/support/docs/atlassian/http+ssl.png)

### Case HTTP+SSL (1)

{{% alert info %}}**Note:** Client connects (https) to reverse proxy that pass the request (http) to Atlassian service (on different machines).{{% /alert %}}

See the Prerequisites on [this section](#prerequisites). For CA chain please look also at [this section](#prerequisites-for-both-https-and-http-ssl).

Similar to [Case HTTP (1)](#case-http-1), except for the certificate declarations and for the listening ports (ssl).

#### nginx config example

```
#JIRA application server
server {
    listen <FQDN__or__staticIP>:443 ssl;
    server_name <FQDN>;

    ssl_certificate /etc/nginx/ssl/nginx.crt;
    ssl_certificate_key /etc/nginx/ssl/nginx.key;

    location /JIRA {
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Server $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://<tomcatFQDN__or__tomcatStaticIP>:8080/JIRA;
        client_max_body_size 20M;
        proxy_buffer_size 8k;
    }
}


#RTC configuration for Balsamiq Wireframes
server {
        listen <FQDN__or__staticIP>:8092 ssl;
        server_name <FQDN>;

        ssl_certificate /etc/nginx/ssl/nginx.crt;
        ssl_certificate_key /etc/nginx/ssl/nginx.key;

location / {
            proxy_pass http://<tomcatFQDN__or__tomcatStaticIP>:8092/;
            include proxy_params;
            proxy_redirect off;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "Upgrade";
    }
}
```

#### haproxy configuration example

```
#add X-Forwarded-For headers
   option forwardfor

frontend ft_jdc_ssl
   bind :443 ssl crt /etc/ssl/private/haproxy.pem

backend bk_jdc
   server s11 192.168.1.61:8080

frontend ft_jrtc_ssl
   bind :9093 ssl crt /etc/ssl/private/haproxy.pem
   default_backend bk_jrtc_ssl

backend bk_jrtc_ssl
  server s11 192.168.1.61:9093
# server <server_name> <tomcatFQDN__or__tomcatStaticIP>:<Rtc_port>
```

#### apache configuration file example

```
Listen <FQDN__or__staticIP>:9083
<VirtualHost *:9083>
    SSLEngine on
    SSLCertificateFile      /etc/ssl/certs/apache-selfsigned.crt
    SSLCertificateKeyFile /etc/ssl/private/apache-selfsigned.key
    ProxyRequests off
    ProxyPreserveHost On
    RewriteEngine on
    <Proxy *>
        Require all granted
    </Proxy>
    ProxyPass / http://<tomcatFQDN__or__tomcatStaticIP>:9083/
    RewriteEngine on
    RewriteCond %{HTTP:UPGRADE} ^WebSocket$ [NC]
    RewriteCond %{HTTP:CONNECTION} Upgrade$ [NC]
    RewriteRule .* ws://<tomcatFQDN__or__tomcatStaticIP>:9083%{REQUEST_URI} [P]
</VirtualHost>
```

### Case HTTP+SSL (2)

{{% alert info %}}**Note:** Client connects (https) to reverse proxy that pass the request (http) to Atlassian service. Reverse proxy and Atlassian service are on the same machine (address=127.0.0.1 inside server.xml){{% /alert %}}

See the Prerequisites on [this section](#prerequisites). For CA chain please look also at [this section](#prerequisites-for-both-https-and-http-ssl).

#### server.xml


```
<Server port="8000" shutdown="SHUTDOWN" debug="0">
    <Service name="Tomcat-Standalone">
        <Connector port="8090" connectionTimeout="20000" redirectPort="8443"
                address="127.0.0.1"
                maxThreads="48" minSpareThreads="10"
                enableLookups="false" acceptCount="10" debug="0" URIEncoding="U$
                proxyPort="443"
                proxyName="s07.kvm.gozzi"
                scheme="https"
                maxPostSize="2097152"
                protocol="org.apache.coyote.http11.Http11NioProtocol" />
```

#### nginx config file

```
#Confluence application server
server {
    listen <FQDN__or__staticIP>:443 ssl;
    server_name <FQDN>;

    ssl_certificate               /etc/ssl/certs/nginx-selfsigned.crt;
    ssl_certificate_key           /etc/ssl/private/nginx-selfsigned.key;


    location / {
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Server $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://127.0.0.1:8090;
        client_max_body_size 100M;
        proxy_buffer_size 8k;
    }
}

upstream confluence_rtc {
        server 127.0.0.1:9093;
        keepalive 60;
}

#RTC configuration for Balsamiq Wireframes
server {
    listen <FQDN__or__staticIP>:9093 ssl;
    server_name <FQDN>;

    proxy_read_timeout 86400s;

    ssl_certificate               /etc/ssl/certs/nginx-selfsigned.crt;
    ssl_certificate_key           /etc/ssl/private/nginx-selfsigned.key;

    location / {
        proxy_pass http://confluence_rtc;
        proxy_redirect off;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
    }
}
```

#### apache configuration file example

```
Listen <FQDN__or__staticIP>:9083
<VirtualHost *:9083>
SSLEngine on
SSLCertificateFile /etc/ssl/certs/apache-selfsigned.crt
SSLCertificateKeyFile /etc/ssl/private/apache-selfsigned.key
ProxyRequests off
ProxyPreserveHost On
RewriteEngine on
<Proxy *>
Require all granted
</Proxy>
ProxyPass / http://127.0.0.1:9083/
RewriteEngine on
RewriteCond %{HTTP:UPGRADE} ^WebSocket$ [NC]
RewriteCond %{HTTP:CONNECTION} Upgrade$ [NC]
RewriteRule .* ws://127.0.0.1:9083%{REQUEST_URI} [P]
</VirtualHost>
```

### Case HTTP+SSL (3)

{{% alert info %}}**Note:** Client connects (https) to reverse proxy that pass the request (http) to Atlassian Data Center. Reverse proxy is configured to allow balance for tomcat and failover for RTC (as at now RTC does not support full cluster){{% /alert %}}

See the Prerequisites on [this section](#prerequisites). For CA chain please look also at [this section](#prerequisites-for-both-https-and-http-ssl).

#### haproxy example

```
frontend ft_cf_https
   bind :443 ssl crt /etc/ssl/private/haproxy.pem
 # Add CORS headers when Origin header is present
    capture request header origin len 128
    http-response add-header Access-Control-Allow-Origin %[capture.req.hdr(0)] if { capture.req.hdr(0) -m found }
    rspadd Access-Control-Allow-Methods:\ GET,\ HEAD,\ OPTIONS,\ POST,\ PUT  if { capture.req.hdr(0) -m found }
    rspadd Access-Control-Allow-Credentials:\ true  if { capture.req.hdr(0) -m found }
    rspadd Access-Control-Allow-Headers:\ Origin,\ Accept,\ X-Requested-With,\ Content-Type,\ Access-Control-Request-Method,\ Access-Control-Reque$
   default_backend bk_cf_http

backend bk_cf_http
   balance roundrobin
   cookie JSESSIONID prefix nocache
   server s12 192.168.1.62:8090 check cookie s12
   server s13 192.168.1.63:8090 check cookie s13

frontend ft_cf_rtc_ssl
   bind :9083 ssl crt /etc/ssl/private/haproxy.pem
   default_backend bk_cf_rtc_ssl

backend bk_cf_rtc_ssl
  option tcp-check
  server s12 192.168.1.62:9083 check port 8090
  server s13 192.168.1.63:9083 check port 8090 backup
```

* * *

## HTTPS configuration examples

![](//media.balsamiq.com/img/support/docs/atlassian/https.png)

### Case HTTPS (0)

{{% alert info %}}**Note:** Client connects (https) directly to Atlassian service.{{% /alert %}}

See the Prerequisites on [this section](#prerequisites). For CA chain please look also at [this section](#prerequisites-for-both-https-and-http-ssl). Balsamiq servlet reads the following parameters directly from Atlassian server.xml inside the application https Connector.

```
keystoreFile="/keystore-location"
keystorePass="somethingLong"
keystoreType="JKS"
```

### Case HTTPS (1)

{{% alert info %}}**Note:** Client connects (https) to reverse proxy that pass the request (https) to Atlassian service (on different machines). Reverse proxy redirect https instead of http.{{% /alert %}}

See the Prerequisites on [this section](#prerequisites). For CA chain please look also at [this section](#prerequisites-for-both-https-and-http-ssl).

#### apache configuration file example SSL - SSL

```
<IfModule mod_ssl.c>
    <VirtualHost *:443>
        ServerAdmin gozzi@balsamiq.com
        ServerName <FQDN>
        DocumentRoot /var/www/html
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
        SSLEngine on
        SSLCertificateFile /etc/ssl/certs/apache-selfsigned.crt
        SSLCertificateKeyFile /etc/ssl/private/apache-selfsigned.key
        ProxyRequests Off
        <Proxy *>
           Require all granted
        </Proxy>
        SSLProxyEngine on
###needed only if self signed and not imported
        SSLProxyVerify none
        SSLProxyCheckPeerCN off
        SSLProxyCheckPeerName off
        SSLProxyCheckPeerExpire off
### end optional
        ProxyPass /synchrony https://<tomcatFQDN__or__tomcatStaticIP>:8091/synchrony

    <Location /synchrony>
       Require all granted
       RewriteEngine on
       RewriteCond %{HTTP:UPGRADE} ^WebSocket$ [NC]
       RewriteCond %{HTTP:CONNECTION} Upgrade$ [NC]
       RewriteRule .* wss://<tomcatFQDN__or__tomcatStaticIP>:8091%{REQUEST_URI} [P]
     </Location>

     ProxyPass "/confluence/"  "https://<tomcatFQDN__or__tomcatStaticIP>:8443/confluence/"
     ProxyPassReverse "/confluence/"  "https://<tomcatFQDN__or__tomcatStaticIP>:8443/confluence/"
    </VirtualHost>
</IfModule>


Listen <FQDN__or__staticIP>:9084
<VirtualHost *:9084>
     ServerName <FQDN>
     DocumentRoot /var/www/html
    SSLEngine on
    SSLCertificateFile      /etc/ssl/certs/apache-selfsigned.crt
    SSLCertificateKeyFile /etc/ssl/private/apache-selfsigned.key
    ProxyRequests off
   <Proxy *>
       Require all granted
    </Proxy>
  ProxyPass /socket.io  https://<tomcatFQDN__or__tomcatStaticIP>:9084/socket.io
    <Location /socket.io>
    Require all granted
    RewriteEngine on
        RewriteCond %{HTTP:UPGRADE} ^WebSocket$ [NC]
        RewriteCond %{HTTP:CONNECTION} Upgrade$ [NC]
        RewriteRule .* wss://<tomcatFQDN__or__tomcatStaticIP>:9084%{REQUEST_URI} [P]
     </Location>
  RewriteEngine on
  AllowEncodedSlashes on
    SSLProxyEngine on
###needed only if self signed and not imported
    SSLProxyVerify none
    SSLProxyCheckPeerCN off
    SSLProxyCheckPeerName off
    SSLProxyCheckPeerExpire off
###end optional
  ProxyPass / https://<tomcatFQDN__or__tomcatStaticIP>:9084/
  ProxyPassReverse / https://<tomcatFQDN__or__tomcatStaticIP>:9084/
</VirtualHost>
```

#### nginx configuration example SSL-SSL

```
server {
    server_name <FQDN>;
    listen <FQDN__or__staticIP>:443 ssl;

    ssl_certificate /etc/nginx/ssl/nginx.crt;
    ssl_certificate_key /etc/nginx/ssl/nginx.key;

    location /confluence {
      proxy_pass https://<tomcatFQDN__or__tomcatStaticIP>:8443/confluence;
      client_max_body_size 100M;
      proxy_buffer_size 8k;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header Host $host;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}

upstream confluence_rtc {
        server <tomcatFQDN__or__tomcatStaticIP>:9083;
        keepalive 60;
}

server {
    server_name <FQDN>;
    listen <FQDN__or__staticIP>:9083 ssl;
    listen [::]:9083 ssl;
    proxy_read_timeout 86400s;
    ssl_certificate /etc/nginx/ssl/nginx.crt;
    ssl_certificate_key /etc/nginx/ssl/nginx.key;

    location / {
        proxy_pass https://confluence_rtc;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        # WebSocket support (nginx 1.4)
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
   }
}
```

* * *

If you run into any RTC issues (or are using a configuration different from these), please [get in touch](mailto:support@balsamiq.com). We are here to help however we can!
