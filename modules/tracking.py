import requests
from flask import request
from datetime import datetime


def get_ip_info(ip):
    """ Get IP data from ipapi.co """

    response = requests.get(f'https://ipapi.co/{ip}/json/').json()
    location_data = {
        "ip": ip,
        "city": response.get("city"),
        "region": response.get("region"),
        "country": response.get("country_name")
    }
    return location_data


def track_request(request, data_save_path):
    """ Main function to track IP data """

    # Get IP from request
    ip = request.environ.get("HTTP_X_FORWARDED_FOR")

    if ip is None:
        ip = request.environ.get("REMOTE_ADDR")

    if ip is None:
        return

    # Get info for ip
    ip_info = get_ip_info(ip)

    # Get current time
    current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    # Create output
    output = {
        "time": current_time,
        "ip": ip,
        "city": ip_info["city"],
        "region": ip_info["region"],
        "country": ip_info["country"]
    }

    with open(data_save_path, "a", encoding="utf-8") as out_file:
        out_file.write(f"{output}\n")
