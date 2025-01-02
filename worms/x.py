import socket



def scan_network(target_ip):

    for port in range(1, 1024):  # Scan a range of ports

        try:

            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:

                s.settimeout(1)

                result = s.connect_ex((target_ip, port))

                if result == 0:

                    print(f"Open port: {port} on {target_ip}")

                    # Send worm code to open port

                    s.sendall(b"Worm code here") 

        except Exception as e:

            pass



# Example usage (replace with actual target IP)

target_ip = "192.168.1.1"

scan_network(target_ip)
