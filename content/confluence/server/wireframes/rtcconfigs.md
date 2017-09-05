---
date: 2015-07-30T15:52:28-07:00
title: "Real-Time Service Configurations"
menu: "menuconfluenceserverwireframes"
product: "Balsamiq Wireframes for Confluence Server"
weight: 2490
---

Our Atlassian server add-ons include a built-in, behind the firewall real-time collaboration service that allows multiple users to work on the same project, at the same time. This documentation is to help administrators understand how the service is implemented, and potentially help them solve problems with it.

We anticipate there being four configurations used by our Balsamiq Wireframes for Atlassian Server customers.

![](//media.balsamiq.com/img/support/docs/atlassian/bwrtc.png)

{{% alert info %}}**Note:** In each of these configurations you will want to make sure that the TCP port is reachable on all network paths, and you'll want to verify that the fully qualified domain name of the server is correct (IE, if the Server Base URL is http://example.com/JIRA, the Server Name in the plugin configuration name has to be example.com). Also, you will want to make sure that your Atlassian Server and RTC service use the same type of connection (HTTP/HTTPS). {{% /alert %}}

## Connecting Directly to the Server over HTTP

{{% alert warning %}}In the RTC panel, the Protocol should read **HTTP**.{{% /alert %}}

This configuration should _just work_. If you experience any issues, take a look at the [Real-Time Collaboration Troubleshooting Page](../rtc-troubleshooting/), or [email us](mailto:support@balsamiq.com).

## Connecting to a Proxy Server Over HTTP

{{% alert warning %}}In the RTC panel, the Protocol should read **HTTP**.{{% /alert %}}

With this configuration you will need to ensure that the RTC port has been redirected on the proxy server. Here is an example of a typical configuration on an nginx reverse proxy.

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

## Connecting to a Proxy Server Using an SSL Certificate on the Proxy

{{% alert warning %}}In the RTC panel, the Protocol should read **HTTP + SSL**.{{% /alert %}}

This is similar to [connecting to a proxy server over HTTP](#connecting-to-a-proxy-server-over-http), but you will want to make sure to add the listening ports on your SSL certificate.

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

## Connecting Directly to the Server over HTTPS

{{% alert warning %}}In the RTC panel, the Protocol should read **HTTPS**.{{% /alert %}}

The Balsamiq Wireframes servlet will read the following parameters from your Atlassian Server's server.xml

```
keystoreFile="/keystore-location"
keystorePass="somethingLong"
keystoreType="JKS"
keyAlias="tomcat"
```
---

If you run into any RTC issues (or are using a configuration different from these), please [get in touch](mailto:support@balsamiq.com). We are here to help however we can!
