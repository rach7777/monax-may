#!/usr/bin/env python
import BaseHTTPServer, SimpleHTTPServer
import ssl

httpd = BaseHTTPServer.HTTPServer(('', 1313), SimpleHTTPServer.SimpleHTTPRequestHandler)
httpd.socket = ssl.wrap_socket (httpd.socket, certfile='../server.pem', server_side=True)
sa = httpd.socket.getsockname()
print "Serving HTTPS on", sa[0], "port", sa[1], "..."
httpd.serve_forever()