import socket
import threading
from queue import Queue

# Target IP address
target_ip = '192.168.1.1'

# Queue to manage port numbers
port_queue = Queue()

# Function to scan a single port
def port_scan(port):
    try:
        # Create a socket object
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            # Set a timeout for the connection attempt
            s.settimeout(1)
            # Attempt to connect to the target IP and port
            result = s.connect_ex((target_ip, port))
            if result == 0:
                print(f"Port {port} is open")
    except Exception as e:
        pass

# Worker function to process ports from the queue
def worker():
    while not port_queue.empty():
        port = port_queue.get()
        port_scan(port)
        port_queue.task_done()

# Main function to set up threads and initiate scanning
def main():
    # Define the range of ports to scan
    for port in range(1, 1025):
        port_queue.put(port)

    # Create and start thread pool
    thread_list = []
    for _ in range(100):  # Number of threads
        thread = threading.Thread(target=worker)
        thread_list.append(thread)
        thread.start()

    # Wait for all threads to complete
    for thread in thread_list:
        thread.join()

    print("Scanning complete.")

if __name__ == "__main__":
    main()
