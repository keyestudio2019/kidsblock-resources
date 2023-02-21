/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.esp8266_wifi01 = function (block) {
        const ssid = Blockly.Arduino.valueToCode(block, 'SSID', Blockly.Arduino.ORDER_ATOMIC);
        const passwd = Blockly.Arduino.valueToCode(block, 'PASSWD', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.wifi_init = '#include <ESP8266WiFi.h>\n#include <ESP8266mDNS.h>\n#include <WiFiClient.h>\n';
        Blockly.Arduino.definitions_.wifi = '#ifndef STASSID\n#define STASSID '+ssid+'\n#define STAPSK  '+passwd+'\n#endif\nconst char* ssid = STASSID;\nconst char* password = STAPSK;\nWiFiServer server(80);\nString unoData = "";\nint ip_flag = 0;\n';
        Blockly.Arduino.setups_['wifi_s'] = 'Serial.begin(9600);\n  WiFi.mode(WIFI_STA);\n'+
        '  WiFi.begin(ssid, password);\n'+
        '  while (WiFi.status() != WL_CONNECTED) {\n'+
        '    delay(500);\n'+
        '    Serial.print(".");\n'+
        '  }\n'+
        '  Serial.print("IP ADDRESS: ");\n'+
        '  Serial.println(WiFi.localIP());\n'+
        '  if (!MDNS.begin("esp8266")) {\n'+
        //'    Serial.println("Error setting up MDNS responder!");\n'+
        '    while (1) {\n'+
        '      delay(1000);\n'+
        '    }\n'+
        '  }\n'+
        //'  Serial.println("mDNS responder started");\n'+
        '  server.begin();\n'+
        //'  Serial.println("TCP server started");\n'+
        '  MDNS.addService("http", "tcp", 80);\n'+
        '  ip_flag = 1;\n';

        //return '';

        return '  if(ip_flag == 1)\n'+
        '  {\n'+
        '    for(int i=3; i>0; i--)\n'+
        '    {\n'+
        '       Serial.print("IP: ");\n'+
        '       Serial.println(WiFi.localIP());\n'+
        '       delay(500);\n'+
        '    }\n'+
        '    ip_flag = 0;\n'+
        '  }\n'+
        '  MDNS.update();\n'+
        '  WiFiClient client = server.available();\n'+
        '  if (!client) {\n'+
        '    return;\n'+
        '  }\n'+
        '  while (client.connected() && !client.available()) {\n'+
        '    delay(1);\n'+
        '  }\n'+
        '  String req = client.readStringUntil(\'\\r\');\n'+
        '  int addr_start = req.indexOf(\' \');\n'+
        '  int addr_end = req.indexOf(\' \', addr_start + 1);\n'+
        '  if (addr_start == -1 || addr_end == -1) {\n'+
        //'    Serial.print("Invalid request: ");\n'+
        //'    Serial.println(req);\n'+
        '    return;\n'+
        '  }\n'+
        '  req = req.substring(addr_start + 1, addr_end);\n'+
        '  client.flush();\n'+
        '  int len_val = String(req).length();\n'+
        '  String M_req = String(req).substring(0,6);\n'+
        '  if(M_req == "/btn/u")\n'+
        '  {\n'+
        '    String s_M_req = String(req).substring(5,len_val);\n'+
        '    Serial.print(s_M_req);\n'+
        '    Serial.print("#");\n'+
        '  }\n'+
        '  if(M_req == "/btn/v")\n'+
        '  {\n'+
        '    String s_M_req = String(req).substring(5,len_val);\n'+
        '    Serial.print(s_M_req);\n'+
        '    Serial.print("#");\n'+
        '  }\n'+
        '  String s;\n'+
        '  if (req == "/") {\n'+
        '    IPAddress ip = WiFi.localIP();\n'+
        '    String ipStr = String(ip[0]) + \'.\' + String(ip[1]) + \'.\' + String(ip[2]) + \'.\' + String(ip[3]);\n'+
        '    s = "HTTP/1.1 200 OK\\r\\nContent-Type: text/html\\r\\n\\r\\n<!DOCTYPE HTML>\\r\\n<html>Hello from ESP8266 at ";\n'+
        '    s += ipStr;\n'+
        '    s += "</html>\\r\\n\\r\\n";\n'+
        //'    Serial.println("Sending 200");\n'+
        '      Serial.println(WiFi.localIP());\n'+
        '      Serial.write(\'*\');\n'+
        '      Serial.println(\'*\');\n'+
        '      client.print(WiFi.localIP());\n'+
        '      ip_flag = 0;\n'+
        '  }\n'+
        '  else if(req == "/btn/F")\n'+
        '  {\n'+
        '    Serial.write(\'F\');\n'+
        '    client.print("F");\n'+
        '  }\n'+
        '  else if(req == "/btn/B")\n'+
        '  {\n'+
        '    Serial.write(\'B\');\n'+
        '    client.print("B");\n'+
        '  }\n'+
        '  else if(req == "/btn/L")\n'+
        '  {\n'+
        '    Serial.write(\'L\');\n'+
        '    client.print("L");\n'+
        '  }\n'+
        '  else if(req == "/btn/R")\n'+
        '  {\n'+
        '    Serial.write(\'R\');\n'+
        '    client.print("R");\n'+
        '  }\n'+
        '  else if(req == "/btn/S")\n'+
        '  {\n'+
        '    Serial.write(\'S\');\n'+
        '    client.print("S");\n'+
        '  }\n'+
        '  else if(req == "/btn/a")\n'+
        '  {\n'+
        '    Serial.write(\'a\');\n'+
        '    client.print("a");\n'+
        '  }\n'+
        '  else if(req == "/btn/b")\n'+
        '  {\n'+
        '    Serial.write(\'b\');\n'+
        '    client.print("b");\n'+
        '  }\n'+
        '  else if(req == "/btn/c")\n'+
        '  {\n'+
        '    Serial.write(\'c\');\n'+
        '    client.println("c");\n'+
        '  }\n'+
        '  else if(req == "/btn/d")\n'+
        '  {\n'+
        '    Serial.write(\'d\');\n'+
        '    client.println("d");\n'+
        '  }\n'+
        '  else if(req == "/btn/e")\n'+
        '  {\n'+
        '    Serial.write(\'e\');\n'+
        '    client.println("e");\n'+
        '  }\n'+
        '  else if(req == "/btn/f")\n'+
        '  {\n'+
        '    Serial.write(\'f\');\n'+
        '    client.println("f");\n'+
        '  }\n'+
        '  else if(req == "/btn/g")\n'+
        '  {\n'+
        '    Serial.write(\'g\');\n'+
        '    client.println("g");\n'+
        '  }\n'+
        '  else if(req == "/btn/z")\n'+
        '  {\n'+
        '    Serial.write(\'z\');\n'+
        '    client.print("z");\n'+
        '  }\n'+
        '  else if(req == "/btn/i")\n'+
        '  {\n'+
        '    Serial.write(\'i\');\n'+
        '    client.print("i");\n'+
        '  }\n'+
        '  else if(req == "/btn/j")\n'+
        '  {\n'+
        '    Serial.write(\'j\');\n'+
        '    client.print("j");\n'+
        '  }\n'+
        '  else if(req == "/btn/k")\n'+
        '  {\n'+
        '    Serial.write(\'k\');\n'+
        '    client.print("k");\n'+
        '  }\n'+
        '  else if(req == "/btn/y")\n'+
        '  {\n'+
        '    Serial.write(\'y\');\n'+
        '    client.print("y");\n'+
        '  }\n'+
        '  else if(req == "/btn/l")\n'+
        '  {\n'+
        '    Serial.write(\'l\');\n'+
        '    client.print("l");\n'+
        '  }\n'+
        '  else if(req == "/btn/m")\n'+
        '  {\n'+
        '    Serial.write(\'m\');\n'+
        '    client.print("m");\n'+
        '  }\n'+
        '  else if(req == "/btn/n")\n'+
        '  {\n'+
        '    Serial.write(\'n\');\n'+
        '    client.print("n");\n'+
        '  }\n'+
        '  else if(req == "/btn/o")\n'+
        '  {\n'+
        '    Serial.write(\'o\');\n'+
        '    client.print("o");\n'+
        '  }\n'+
        '  else if(req == "/btn/p")\n'+
        '  {\n'+
        '    Serial.write(\'p\');\n'+
        '    client.print("p");\n'+
        '  }\n'+
        '  else if(req == "/btn/q")\n'+
        '  {\n'+
        '    Serial.write(\'q\');\n'+
        '    client.print("q");\n'+
        '  }\n'+
        '  else if(req == "/btn/x")\n'+
        '  {\n'+
        '    Serial.write(\'x\');\n'+
        '    client.print("x");\n'+
        '  }\n'+
        '  else if(req == "/btn/1")\n'+
        '  {\n'+
        '    Serial.write(\'1\');\n'+
        '    client.print("1");\n'+
        '  }\n'+
        '  else if(req == "/btn/2")\n'+
        '  {\n'+
        '    Serial.write(\'2\');\n'+
        '    client.print("2");\n'+
        '  }\n'+
        '  else if(req == "/btn/3")\n'+
        '  {\n'+
        '    Serial.write(\'3\');\n'+
        '    client.print("3");\n'+
        '  }\n'+
        '  else if(req == "/btn/4")\n'+
        '  {\n'+
        '    Serial.write(\'4\');\n'+
        '    client.print("4");\n'+
        '  }\n'+
        '  else if(req == "/btn/5")\n'+
        '  {\n'+
        '    Serial.write(\'5\');\n'+
        '    client.print("5");\n'+
        '  }\n'+
        '  else if(req == "/btn/0")\n'+
        '  {\n'+
        '    Serial.write(\'0\');\n'+
        '    client.print("0");\n'+
        '  }\n'+
        '  else {\n'+
        //'    s = "HTTP/1.1 404 Not Found\\r\\n\\r\\n";\n'+
        //'    Serial.println("Sending 404");\n'+
        '  }\n'+
        '  client.print(F("IP : "));\n'+
        '  client.println(WiFi.localIP());\n';

    };

    return Blockly;
}

exports = addGenerator;
