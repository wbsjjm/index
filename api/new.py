from http.server import BaseHTTPRequestHandler
import sys

class handler(BaseHTTPRequestHandler):
  def do_GET(self):
    self.send_response(200)
    self.send_header('Content-type', 'text/plain')
    self.end_headers()
    self.dt='''{type:"ok,200",content:"{}"}'''.format(sys.args[1])
    self.wfile.write(self.encode())
    return
