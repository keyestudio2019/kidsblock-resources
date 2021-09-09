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
        '    Serial.print("IP: ");\n'+
        '    Serial.println(WiFi.localIP());\n'+
        '    delay(100);\n'+
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
        '  else if(req == "/btn/0")\n'+
        '  {\n'+
        '    Serial.write(\'a\');\n'+
        '    client.print("turn on the relay");\n'+
        '  }\n'+
        '  else if(req == "/btn/1")\n'+
        '  {\n'+
        '    Serial.write(\'b\');\n'+
        '    client.print("turn off the relay");\n'+
        '  }\n'+
        '  else if(req == "/btn/2")\n'+
        '  {\n'+
        '    Serial.write(\'c\');\n'+
        '    client.print("Bring the steering gear over 180 degrees");\n'+
        '  }\n'+
        '  else if(req == "/btn/3")\n'+
        '  {\n'+
        '    Serial.write(\'d\');\n'+
        '    client.print("Bring the steering gear over 0 degrees");\n'+
        '  }\n'+
        '  else if(req == "/btn/4")\n'+
        '  {\n'+
        '    Serial.write(\'e\');\n'+
        '    client.print("esp8266 already turn on the fans");\n'+
        '  }\n'+
        '  else if(req == "/btn/5")\n'+
        '  {\n'+
        '    Serial.write(\'f\');\n'+
        '    client.print("esp8266 already turn off the fans");\n'+
        '  }\n'+
        '  else if(req == "/btn/6")\n'+
        '  {\n'+
        '    Serial.write(\'g\');\n'+
        '    while(Serial.available() > 0)\n'+
        '    {\n'+
        '      unoData = Serial.readStringUntil(\'#\');\n'+
        '      client.println(unoData);\n'+
        '    }\n'+
        '  }\n'+
        '  else if(req == "/btn/7")\n'+
        '  {\n'+
        '    Serial.write(\'h\');\n'+
        '    client.println("turn off the ultrasonic");\n'+
        '  }\n'+
        '  else if(req == "/btn/8")\n'+
        '  {\n'+
        '    Serial.write(\'i\');\n'+
        '    while(Serial.available() > 0)\n'+
        '    {\n'+
        '      unoData = Serial.readStringUntil(\'#\');\n'+
        '      client.println(unoData);\n'+
        '    }\n'+
        '  }\n'+
        '  else if(req == "/btn/9")\n'+
        '  {\n'+
        '    Serial.write(\'j\');\n'+
        '    client.println("turn off the temperature");\n'+
        '  }\n'+
        '  else if(req == "/btn/10")\n'+
        '  {\n'+
        '    Serial.write(\'k\');\n'+
        '    while(Serial.available() > 0)\n'+
        '    {\n'+
        '      unoData = Serial.readStringUntil(\'#\');\n'+
        '      client.println(unoData);\n'+
        '    }\n'+
        '  }\n'+
        '  else if(req == "/btn/11")\n'+
        '  {\n'+
        '    Serial.write(\'l\');\n'+
        '    client.println("turn off the humidity");\n'+
        '  }\n'+
        '  else if(req == "/btn/12")\n'+
        '  {\n'+
        '    Serial.write(\'m\');\n'+
        '    client.print("esp8266 already turn on the LED");\n'+
        '  }\n'+
        '  else if(req == "/btn/13")\n'+
        '  {\n'+
        '    Serial.write(\'n\');\n'+
        '    client.print("esp8266 already turn off the LED");\n'+
        '  }\n'+
        '  else if(req == "/btn/14")\n'+
        '  {\n'+
        '    Serial.write(\'o\');\n'+
        '    client.print("esp8266 already turn on the LED");\n'+
        '  }\n'+
        '  else if(req == "/btn/15")\n'+
        '  {\n'+
        '    Serial.write(\'p\');\n'+
        '    client.print("esp8266 already turn off the LED");\n'+
        '  }\n'+
        '  else if(req == "/btn/16")\n'+
        '  {\n'+
        '    Serial.write(\'q\');\n'+
        '    client.print("esp8266 already turn on the LED");\n'+
        '  }\n'+
        '  else if(req == "/btn/17")\n'+
        '  {\n'+
        '    Serial.write(\'r\');\n'+
        '    client.print("esp8266 already turn off the LED");\n'+
        '  }\n'+
        '  else if(req == "/btn/18")\n'+
        '  {\n'+
        '    Serial.write(\'s\');\n'+
        '    client.print("esp8266 already turn on the LED");\n'+
        '  }\n'+
        '  else if(req == "/btn/19")\n'+
        '  {\n'+
        '    Serial.write(\'t\');\n'+
        '    client.print("esp8266 already turn off the LED");\n'+
        '  }\n'+
        '  else if(req == "/btn/20")\n'+
        '  {\n'+
        '    Serial.write(\'u\');\n'+
        '    client.print("esp8266 already turn on the LED");\n'+
        '  }\n'+
        '  else if(req == "/btn/21")\n'+
        '  {\n'+
        '    Serial.write(\'v\');\n'+
        '    client.print("esp8266 already turn off the LED");\n'+
        '  }\n'+
        '  else if(req == "/btn/22")\n'+
        '  {\n'+
        '    Serial.write(\'w\');\n'+
        '    client.print("esp8266 already turn on the LED");\n'+
        '  }\n'+
        '  else if(req == "/btn/23")\n'+
        '  {\n'+
        '    Serial.write(\'x\');\n'+
        '    client.print("esp8266 already turn off the LED");\n'+
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
