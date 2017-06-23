---
date: 2015-07-30T15:52:28-07:00
title: "Real-Time Collaboration Service Troubleshooting (BETA)"
menu: "menujirawireframes"
listorder: 2
product: "Balsamiq Wireframes for JIRA Server"
weight: 2140
---

Balsamiq Wireframes for JIRA Server uses a "behind the firewall" service in order to allow real time collaboration, chat and other features. To verify that the service works as intended, you can use the configuration page of the add-on.

![](//media.balsamiq.com/img/support/docs/jira/wireframes/rtc-troubleshooting-1.png)

This should be the expected status.

![](//media.balsamiq.com/img/support/docs/jira/wireframes/rtc-troubleshooting-2.png)

In case of problem, the config page will show an error status.

![](//media.balsamiq.com/img/support/docs/jira/wireframes/rtc-troubleshooting-3.png)

In case the status of the Real-Time Collaboration Service is **DOWN**, you should verify that:

*   the selected TCP port is available and reachable
*   the fully qualified domain name of the server is correct. In most cases, it is equivalent to the FQDN of the JIRA server instance.

* * *

## Verify That the Selected Port Is Available and Reachable

Ensure that the port selected in the add-on config page is available and reachable (i.e. not blocked by any firewall).

For example, on a linux server, we can run the following command in order to list the service using the port 9093.

    netstat -tul | grep 9093

In case of conflict with other service, you can change the port on the configuration page and restart the server.
