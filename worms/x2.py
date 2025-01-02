import socket

def scan_network(target_ip):
    for port in range(1, 1024):
        try:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                s.settimeout(1)
                if s.connect_ex((target_ip, port)) == 0:
                    try:
                        service = socket.getservbyport(port)
                    except:
                        service = "Unknown service"
                    print(f"Open port: {port} ({service}) on {target_ip}")
        except Exception as e:
            print(f"Error scanning port {port} on {target_ip}: {e}")

target_ip = input("Enter the target IP address: ")
scan_network(target_ip)
