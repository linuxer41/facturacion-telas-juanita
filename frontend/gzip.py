import gzip

def get_gzip_file(self, xml_str: str):
    # gzip the xml
    gzip_xml = gzip.compress(xml_str.encode("utf-8"))
    return gzip_xml

print(get_gzip_file("test"))