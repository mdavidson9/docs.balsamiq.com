---
date: 2015-07-30T15:52:28-07:00
title: "Real-Time Collaboration Service Configuration"
menu: "menuconfluenceserverwireframes"
product: "Balsamiq Wireframes for Confluence Server"
weight: 2200
---

Our Atlassian server add-ons include a built-in, behind the firewall **real-time collaboration service** (RTC) that allows multiple users to work on the same project, at the same time. This documentation is to help administrators understand how the service is implemented, and potentially help them solve problems with it.

It's a service on the main application server that needs to be configured according to the existing network layout. Except for common setups (direct connection to tomcat), you need administration access to the server console to edit reverse proxy configuration files or open the desired port.

Confluence/Jira administration permissions are needed to modify the RTC plugin configuration (set the FQDN, set the RTC port, verify if RTC is up or restart it).

{{% alert warning %}}**Note:** To avoid mixed content (HTTP+HTTPS on the same webpage), the connection protocol has to be the same (client/server and RTC), so HTTP for both or HTTPS for both.

Example: if SSL is terminated at the reverse proxy, and proxied to http (tomcat), the same thing should happen for RTC (default port 9083-9093){{% /alert %}}

* * *

## Possible Configurations

JIRA/Confluence application server can be installed with different network configurations.

Depending on the configuration, the RTC configuration page shows different protocol values. If the protocol field in the configuration page shows HTTP, the plugin is guessing that the protocol during the full network path (client/\<proxy if existing>/server) is HTTP.

![](//media.balsamiq.com/img/support/docs/atlassian/rtc_http.png)

If it shows HTTPS, the protocol used is HTTPS for all the network path.

![](//media.balsamiq.com/img/support/docs/atlassian/rtc_https.png)

If it shows HTTP + SSL, the protocol used is HTTPS to the reverse proxy, then http to the tomcat server.

![](//media.balsamiq.com/img/support/docs/atlassian/rtc_http.png)

Here are different network configurations related to protocol value (shown in RTC plugin configuration page):

* RTC configuration examples (HTTP)
* RTC configuration examples (HTTP+SSL)
* RTC configuration examples (HTTPS)

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

CONTINUE HERE



<!-- {{% alert warning %}}In the RTC panel, the Protocol should read **HTTP**.{{% /alert %}}

With this configuration you will need to ensure that the RTC port has been redirected on the proxy server.

### nginx Config File Example
```
#Confluence application server
server {
    listen s01.kvm.gozzi:80;
    server_name s01.kvm.gozzi;

    location /confluence/ {
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Server $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://192.168.1.56:8090/confluence/;
        client_max_body_size 20M;
        proxy_buffer_size 8k;
    }
}

#RTC configuration for Balsamiq Wireframes
server {
    listen 9090;
    server_name s01.kvm.gozzi;

    location / {
        proxy_pass http://192.168.1.56:9090/;
        include proxy_params;
        proxy_redirect off;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
    }
}
```

{{% alert info %}}
**Things to take care of:**

- The RTC port has to be redirected (on the proxy, in case of nginx/haproxy/apache or the listener, in case of AWS).
- In the RTC section, input port and redirected port have to be the same.
- Even if the main app has a contex/location different from "/" (in the example "confluence/"), RTC redirection has to be "/"
- Parameters have been set to let the websocket protocol work, in particular the following options (specific for nginx):

```
proxy_redirect off;
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "Upgrade";
```
{{% /alert %}}

* * *

## Connecting to a Reverse Proxy Server (Proxy and Server are on the Same Machine)

{{% alert warning %}}In the RTC panel, the Protocol should read **HTTP**.{{% /alert %}}

This is similar to [connecting to a reverse proxy server](#connecting-to-a-reverse-proxy-server), but the Proxy service will have to listen to the public interface and redirect to 127.0.0.1 (loopback address). The Atlassian Server also has to be configured to listen to the loopback interface.

### server.xml Example
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

### nginx Config File Example
```
#Confluence application server
server {
    listen s07.kvm.gozzi:80;
    server_name s07.kvm.gozzi;

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
    listen 192.168.1.57:9083;
    server_name s01.kvm.gozzi;
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

### Apache Reverse Proxy Example
```
<VirtualHost *:80>
    ServerName s14.kvm.gozzi
    ProxyRequests Off

    <Proxy *>
         Require all granted
    </Proxy>

    ProxyPass /synchrony http://s06.kvm.gozzi:8091/synchrony

    <Location /synchrony>
    Require all granted
    RewriteEngine on
        RewriteCond %{HTTP:UPGRADE} ^WebSocket$ [NC]
        RewriteCond %{HTTP:CONNECTION} Upgrade$ [NC]
        RewriteRule .* ws://s06.kvm.gozzi:8091%{REQUEST_URI} [P]
     </Location>

    ProxyPass "/confluence/"  "http://s06.kvm.gozzi:8090/confluence/"
    ProxyPassReverse "/confluence/"  "http://s06.kvm.gozzi:8090/confluence/"

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>


Listen 9083
<VirtualHost *:9083>
  RewriteEngine on
  AllowEncodedSlashes on

  RewriteCond %{QUERY_STRING} transport=polling
  RewriteRule /(.*)$ http://s06.kvm.gozzi:9083/$1 [P]

  ProxyRequests off
  ProxyPass /socket.io/ ws://s06.kvm.gozzi:9083/socket.io/
  ProxyPassReverse /socket.io/ ws://s06.kvm.gozzi:9083/socket.io/

  ProxyPass / http://s06.kvm.gozzi:9083/
  ProxyPassReverse / http://s06.kvm.gozzi:9083/
</VirtualHost>
```

* * *

## Connecting to a Reverse Proxy Server Using SSL

{{% alert warning %}}In the RTC panel, the Protocol should read **HTTP + SSL**.{{% /alert %}}

This is similar to [connecting to a reverse proxy server](#connecting-to-a-reverse-proxy-server), but you will want to make sure to add the listening ports on your SSL certificate.

```
#JIRA application server
server {
    listen s01.kvm.gozzi:443 ssl;
    server_name s01.kvm.gozzi;

    ssl_certificate /etc/nginx/ssl/nginx.crt;
    ssl_certificate_key /etc/nginx/ssl/nginx.key;

    location /JIRA/ {
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Server $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://192.168.1.52:8080/JIRA/;
        client_max_body_size 20M;
        proxy_buffer_size 8k;
    }
}


#RTC configuration for Balsamiq Wireframes
server {
        listen 192.168.1.51:8092 ssl;
        server_name s01.kvm.gozzi;

        ssl_certificate /etc/nginx/ssl/nginx.crt;
        ssl_certificate_key /etc/nginx/ssl/nginx.key;

location / {
            proxy_pass http://192.168.1.52:8092/;
            include proxy_params;
            proxy_redirect off;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "Upgrade";
    }
}
```
{{% alert info %}}**Note**: The application server (Tomcat) needs to access the proxy, so the full CA chain has to be ok.
If the SSL certificate is self signed, it has to be imported at jre level:

```
echo -n | openssl s_client -connect s01.kvm.gozzi:443 | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > /tmp/s01.kvm.gozzi.cert

cd /opt/atlassian/jre/bin

./keytool -keystore ../lib/security/cacerts -import -alias jira -file /tmp/s01.kvm.gozzi.cert
```
{{% /alert %}}

* * *

## Connecting Directly to the Server over HTTPS

{{% alert warning %}}In the RTC panel, the Protocol should read **HTTPS**.{{% /alert %}}

The Balsamiq Wireframes servlet will read the following parameters from your Atlassian Server's server.xml

```
keystoreFile="/keystore-location"
keystorePass="somethingLong"
keystoreType="JKS"
keyAlias="tomcat"
```
* * *

## Connecting to a Reverse Proxy Server Using SSL (Proxy and Server are on the Same Machine)

{{% alert warning %}}In the RTC panel, the Protocol should read **HTTP + SSL**.{{% /alert %}}

This is going to be similar to [connecting to reverse proxy server on the same machine as the Atlassian server](#connecting-to-a-reverse-proxy-server-proxy-and-server-are-on-the-same-machine), but you will want to make sure to add the listening ports on your SSL certificate.

### sever.xml Example
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

### nginx Config File Example
```
#Confluence application server
server {
    listen s07.kvm.gozzi:443 ssl;
    server_name s07.kvm.gozzi;

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
    listen 192.168.1.57:9093 ssl;
    server_name s01.kvm.gozzi;

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

### Apache Reverse Proxy Example
```
<IfModule mod_ssl.c>
        <VirtualHost *:443>
    ServerAdmin gozzi@balsamiq.com
    ServerName s14.kvm.gozzi
    DocumentRoot /var/www/html
         ErrorLog ${APACHE_LOG_DIR}/error.log
         CustomLog ${APACHE_LOG_DIR}/access.log combined
    SSLEngine on
    SSLCertificateFile      /etc/ssl/certs/apache-selfsigned.crt
    SSLCertificateKeyFile /etc/ssl/private/apache-selfsigned.key
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
    ProxyPass "/confluence/"  "http://127.0.0.1:8090/confluence/"
    ProxyPassReverse "/confluence/"  "http://127.0.0.1:8090/confluence/"

        </VirtualHost>
</IfModule>


Listen 192.168.1.64:9088
<VirtualHost *:9088>
    SSLEngine on
    SSLCertificateFile      /etc/ssl/certs/apache-selfsigned.crt
    SSLCertificateKeyFile /etc/ssl/private/apache-selfsigned.key
  RewriteEngine on
  AllowEncodedSlashes on
  RewriteCond %{QUERY_STRING} transport=polling
  RewriteRule /(.*)$ http://127.0.0.1:9088/$1 [P]
  ProxyRequests off
  ProxyPass /socket.io/ ws://127.0.0.1:9088/socket.io/
  ProxyPassReverse /socket.io/ ws://127.0.0.1:9088/socket.io/
  ProxyPass / http://127.0.0.1:9088/
  ProxyPassReverse / http://127.0.0.1:9088/
</VirtualHost>
```

If you run into any RTC issues (or are using a configuration different from these), please [get in touch](mailto:support@balsamiq.com). We are here to help however we can! -->
