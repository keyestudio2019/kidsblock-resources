/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    //定义变量
    Blockly.Arduino.KS_variables_declare = function() {
        var type = this.getFieldValue('TYPE');
        var VARIABLES_TYPE = this.getFieldValue('variables_type');
        var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        var value = Blockly.Arduino.valueToCode(this, 'VALUE',Blockly.Arduino.ORDER_ASSIGNMENT) || ' ';
        value = value.replace(/\"/g,'');

        let code ='';
        //code = type + ' ' + name + ' = '+value+';\n';
        if(VARIABLES_TYPE == 'global_variate')
        {
            if(type == 'String')
            {
                Blockly.Arduino.definitions_['var_declare' + name] =  type + ' ' + name + ' = "'+value+'";\n';
            }
            else
            {
                Blockly.Arduino.definitions_['var_declare' + name] =  type + ' ' + name + ' = '+value+';\n';
            }
        }
          
        else
        {
            if(type == 'String')
            {
                code = type + ' ' + name + ' = "'+value+'";\n';
            }
            else
            {
                code = type + ' ' + name + ' = '+value+';\n';
            }
          
        }

        return code;
    };
    //变量get
    Blockly.Arduino.KS_variables_get = function() {
        var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        code = name;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
        //return [code, Blockly.Arduino.ORDER_NONE];
    };
    //变量set
    Blockly.Arduino.KS_variables_set = function() {
        var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        var value = Blockly.Arduino.valueToCode(this, 'VALUE',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        value = value.replace(/\"/g,'');
        code = name+'\='+value+';\n';
        return code;
    };

    //字符串变量set
    Blockly.Arduino.KS_variables_stringSet = function() {
        var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        var value = Blockly.Arduino.valueToCode(this, 'VALUE',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        code = name+'\='+value+';\n';
        return code;
    };
    //变量++--
    Blockly.Arduino.KS_variables_change = function() {
        var type = this.getFieldValue('TYPE');
        var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        code = name+type+';\n';
        return code;
    };

    //文本char
    Blockly.Arduino.KS_CHAR = function() {
        var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        return [`\'${name}\'`, Blockly.Arduino.ORDER_ATOMIC];
    };

    //文本string
    Blockly.Arduino.KS_STRING = function() {
        var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||" " ;
        name = name.replace(/\"/g,'');
        return [`\"${name}\"`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.KS_data = function() {
        var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        code = name;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
        //return [code, Blockly.Arduino.ORDER_NONE];
    };
   
    //逻辑比较
    Blockly.Arduino.KS_judge = function() {
        var val1 = Blockly.Arduino.valueToCode(this, 'VALUE1',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        val1 = val1.replace(/\"/g,'');
        var val2 = Blockly.Arduino.valueToCode(this, 'VALUE2',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        val2 = val2.replace(/\"/g,'');
        var judge = this.getFieldValue('judge');
        return [`${val1} ${judge} ${val2}`, Blockly.Arduino.ORDER_ATOMIC];
    }; 

    //buzzer
    Blockly.Arduino.buzzer_tone_d = function (block) {
        const pin = block.getFieldValue('PIN');
        const fre = this.getFieldValue('fre');
        const dur = Blockly.Arduino.valueToCode(block, 'dur', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_.include_tone_init = `#include <ESP32Tone.h>\n`;

        Blockly.Arduino.setups_[`buzzer_${pin}`] = 'pinMode('+pin+', OUTPUT);\n';
        return 'tone('+pin+', '+fre+', '+dur+', 0);\n';
    };

    Blockly.Arduino.buzzer_music = function (block) {
        const pin = block.getFieldValue('PIN');
        const mus = this.getFieldValue('mus');
        Blockly.Arduino.includes_.include_music_init = `#include <ESP32Tone.h>\n#include<musicESP32.h>\n`;
        Blockly.Arduino.definitions_[`music_${pin}`] = 'music Music('+pin+');';

        Blockly.Arduino.setups_[`buzzer_${pin}`] = 'pinMode('+pin+', OUTPUT);\n';
        return ''+mus+'\n';
    };

    Blockly.Arduino.buzzer_notone = function (block) {
        const pin = block.getFieldValue('PIN');
        Blockly.Arduino.setups_[`buzzer_${pin}`] = 'pinMode('+pin+', OUTPUT);\n';
        return 'noTone('+pin+', 0);\n';
    };

    Blockly.Arduino.motor130 = function (block) {
        const pin1 = block.getFieldValue('IN1');
        const pin2 = block.getFieldValue('IN2');
        //const val1 = Blockly.Arduino.valueToCode(block, 'SPEED1', Blockly.Arduino.ORDER_ATOMIC);
        const state1 = this.getFieldValue('state1');
        const val2 = Blockly.Arduino.valueToCode(block, 'SPEED2', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.setups_[`motor130`] = 'pinMode('+pin1+', OUTPUT);\n  ledcSetup(5, 1200, 8);\n  ledcAttachPin('+pin2+', 5);\n';
        
        return 'digitalWrite('+pin1+','+state1+');\nledcWrite(5, '+val2+');\n';
    };



    Blockly.Arduino.ks_servo1_angle = function (block) {
        const pin = block.getFieldValue('pin');
        const angle = Blockly.Arduino.valueToCode(block, 'angle', Blockly.Arduino.ORDER_ATOMIC);
        const time = Blockly.Arduino.valueToCode(block, 'time', Blockly.Arduino.ORDER_ATOMIC);
        const ch = block.getFieldValue('CH');

        Blockly.Arduino.includes_.include_servo_init = '#include <ESP32_Servo.h>\n';
        Blockly.Arduino.definitions_[`servo_${pin}`] = 'const int servo1pin = '+pin+';\n'+
        'int set_angle1(int angle)\n'+
        '{\n'+
        '  int servo1_angle = map(angle, 0, 180, 25, 128);\n'+
        '  return servo1_angle;\n'+
        '}\n';
        Blockly.Arduino.setups_[`servo_init_${pin}`] = 'ledcSetup('+ch+', 50, 10);\n  ledcAttachPin('+pin+','+ch+');\n';
        return 'ledcWrite('+ch+', set_angle1('+angle+'));\n  delay('+time+');\n';
    };


    Blockly.Arduino.ks_servo1_read = function (block) {
        const pin = block.getFieldValue('pin');

        Blockly.Arduino.includes_.include_servo_init = '#include <ESP32_Servo.h>\n';
        Blockly.Arduino.definitions_[`servo_${pin}`] = 'Servo servo1_'+pin+';\n';
        Blockly.Arduino.setups_[`servo_init_${pin}`] = 'servo1_'+pin+'.attach('+pin+');';

        return ['servo1_'+pin+'.read()', Blockly.Arduino.ORDER_ATOMIC];
    };

    
    Blockly.Arduino.ks_servo2_angle = function (block) {
        const pin = block.getFieldValue('pin');
        const angle = Blockly.Arduino.valueToCode(block, 'angle', Blockly.Arduino.ORDER_ATOMIC);
        const time = Blockly.Arduino.valueToCode(block, 'time', Blockly.Arduino.ORDER_ATOMIC);
        const ch = block.getFieldValue('CH');

        Blockly.Arduino.includes_.include_servo_init = '#include <ESP32_Servo.h>\n';
        Blockly.Arduino.definitions_[`servo_${pin}`] = 'const int servo2pin = '+pin+';\n'+
        'int set_angle2(int angle)\n'+
        '{\n'+
        '  int servo2_angle = map(angle, 0, 180, 25, 128);\n'+
        '  return servo2_angle;\n'+
        '}\n';
        Blockly.Arduino.setups_[`servo_init_${pin}`] = 'ledcSetup('+ch+', 50, 10);\n  ledcAttachPin('+pin+','+ch+');\n';
        return 'ledcWrite('+ch+', set_angle2('+angle+'));\n  delay('+time+');\n';
    };


    Blockly.Arduino.ks_servo2_read = function (block) {
        const pin = block.getFieldValue('pin');

        Blockly.Arduino.includes_.include_servo_init = '#include <ESP32_Servo.h>\n';
        Blockly.Arduino.definitions_[`servo_${pin}`] = 'Servo servo2_'+pin+';\n';
        Blockly.Arduino.setups_[`servo_init_${pin}`] = 'servo2_'+pin+'.attach('+pin+');';

        return ['servo2_'+pin+'.read()', Blockly.Arduino.ORDER_ATOMIC];
    };
    
    
    
    
    //dht11
    Blockly.Arduino.DHT_init = function () {

        const sensor_type = this.getFieldValue('TYPE');
        const dropdown_pin = this.getFieldValue('PIN');

        Blockly.Arduino.includes_.include_dht_init = `#include <DHT.h>\n`;
        Blockly.Arduino.definitions_['var_declare_dht' + dropdown_pin] = 'DHT dht('+dropdown_pin+', '+sensor_type+');\n';
        Blockly.Arduino.setups_['DHT_SETUP'+dropdown_pin] = 'dht.begin();';
        return ''
    };



    //dht11
    Blockly.Arduino.KE_DHT = function (block) {
        const mode = block.getFieldValue('MODE');

        let code = '';

        if (mode === 'temperature') {
            code += `dht.readTemperature()`;
        } else {
            code += `dht.readHumidity()`;
        }
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };



    Blockly.Arduino.rc522_init = function (block) {

        Blockly.Arduino.includes_.include_rc522_init = `#include <Wire.h>\n#include <MFRC522_I2C.h>\n`;
        Blockly.Arduino.definitions_[`rc522_var`] = `MFRC522 mfrc522(0x28);\nString rfid_str = "";\n`;
        Blockly.Arduino.definitions_[`rc522_data_func`] = `String return_rfid_data()\n`+
        `{\n`+
        `  if ( ! mfrc522.PICC_IsNewCardPresent() || ! mfrc522.PICC_ReadCardSerial() ) {\n`+
        `    delay(50);\n`+
        `    return "0";\n`+
        `  }\n`+
        `  rfid_str = "";\n`+
        `  for (byte i = 0; i < mfrc522.uid.size; i++) {\n`+
        `    rfid_str = rfid_str + String(mfrc522.uid.uidByte[i],HEX);\n`+
        `  }\n`+
        `  return rfid_str;\n`+
        `}\n`;
        Blockly.Arduino.setups_['rc522_setup'] = 'Wire.begin();\n  mfrc522.PCD_Init();\n';
        return '';
    };

    Blockly.Arduino.rc522_read = function (block) {
        return [`return_rfid_data()`, Blockly.Arduino.ORDER_ATOMIC];
    };


    Blockly.Arduino.bbrgbLedStrip_init = function (block) {
        const len = Blockly.Arduino.valueToCode(block, 'LEN', Blockly.Arduino.ORDER_ATOMIC);
        const pin = block.getFieldValue('PIN');

        Blockly.Arduino.includes_.rgbLedStrip_init = `#include <Adafruit_NeoPixel.h>`;
        Blockly.Arduino.definitions_.rgbLedStrip_init =
        `Adafruit_NeoPixel ledStrip(${len}, ${pin}, NEO_GRB + NEO_KHZ800);`;

        return `ledStrip.begin();\n`;
    };

    Blockly.Arduino.rgbLedStrip_setPixelColor = function (block) {
        const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
        const colour = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');

        return `ledStrip.setPixelColor(${no}, ${colour});\n`;
    };

    Blockly.Arduino.rgbLedStrip_fill = function (block) {
        const first = Blockly.Arduino.valueToCode(block, 'FIRST', Blockly.Arduino.ORDER_ATOMIC);
        const count = Blockly.Arduino.valueToCode(block, 'COUNT', Blockly.Arduino.ORDER_ATOMIC);
        const colour = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');

        return `ledStrip.fill(${colour}, ${first}, ${count});\n`;
    };

    Blockly.Arduino.rgbLedStrip_color = function (block) {
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
        const g = Blockly.Arduino.valueToCode(block, 'G', Blockly.Arduino.ORDER_ATOMIC);
        const b = Blockly.Arduino.valueToCode(block, 'B', Blockly.Arduino.ORDER_ATOMIC);

        return [`ledStrip.Color(${r}, ${g}, ${b})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.rgbLedStrip_setBrightness = function (block) {
        const brightness = Blockly.Arduino.valueToCode(block, 'BRT', Blockly.Arduino.ORDER_ATOMIC);

        return `ledStrip.setBrightness(${brightness});\n`;
    };

    Blockly.Arduino.rgbLedStrip_clear = function () {
        return `ledStrip.clear();\n`;
    };

    Blockly.Arduino.rgbLedStrip_show = function () {
        return `ledStrip.show();\n`;
    };

    
    Blockly.Arduino.lcd_init = function (block) {
        const addr = block.getFieldValue('ADDR');

        Blockly.Arduino.includes_.lcd_init = `#include <Wire.h>\n#include <LiquidCrystal_I2C.h>`;
        Blockly.Arduino.definitions_.lcd_init = `LiquidCrystal_I2C lcd(${addr}, 16, 2);`;

        return `lcd.begin();\n`;
    };

    Blockly.Arduino.lcd_setCursorPosition = function (block) {
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);

        return `lcd.setCursor(${x}, ${y});\n`;
    };

    Blockly.Arduino.lcd_print = function (block) {
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);

        return `lcd.print(${data});\n`;
    };

    Blockly.Arduino.lcd_clear = function () {
        return `lcd.clear();\n`;
    };

    Blockly.Arduino.lcd_setBackLight = function (block) {
        const state = block.getFieldValue('STATE');

        if (state === 'on') {
            return `lcd.backlight();\n`;
        }
        return `lcd.noBacklight();\n`;
    };

    Blockly.Arduino.lcd_setCursorStyle = function (block) {
        const state = block.getFieldValue('STATE');
        const style = block.getFieldValue('STYLE');

        let code = '';

        if (state === 'display') {
            code += `lcd.cursor();\n`;
        } else {
            code += `lcd.noCursor();\n`;
        }

        if (style === 'blink') {
            code += `lcd.blink();\n`;
        } else {
            code += `lcd.noBlink();\n`;
        }

        return code;
    };




    Blockly.Arduino.wifi_init = function (block) {
        const ssid = Blockly.Arduino.valueToCode(block, 'SSID', Blockly.Arduino.ORDER_ATOMIC);
        const passwd = Blockly.Arduino.valueToCode(block, 'PASSWD', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.wifi_init = '#include <WiFi.h>\n#include <ESPmDNS.h>\n#include <WiFiClient.h>\n';
        Blockly.Arduino.definitions_.wifi_init = 'const char* ssid = '+ssid+';\nconst char* password = '+passwd+';\nWiFiServer server(80);\n';
        Blockly.Arduino.setups_['wifi_setup'] = 'Serial.begin(115200);\n   WiFi.begin(ssid, password);\n   while (WiFi.status() != WL_CONNECTED) {\n   delay(500);\n   Serial.print(".");\n    }\n    Serial.println("");\n    Serial.print("Connected to ");\n    Serial.println(ssid);\n    Serial.print("IP address: ");\n    Serial.println(WiFi.localIP());\n    server.begin();\n    Serial.println("TCP server started");\n    MDNS.addService("http", "tcp", 80);\n';

        return `WiFiClient client = server.available();\n    if (!client) {\n        return;\n    }\n    while(client.connected() && !client.available()){\n        delay(1);\n    }\n    String req = client.readStringUntil('\\r');\n    int addr_start = req.indexOf(' ');\n    int addr_end = req.indexOf(' ', addr_start + 1);\n    if (addr_start == -1 || addr_end == -1) {\n        Serial.print("Invalid request: ");\n        Serial.println(req);\n        return;\n    }\nreq = req.substring(addr_start + 1, addr_end);\n`;
    };


    
    Blockly.Arduino.wifi_read = function () {
        return [`req`, Blockly.Arduino.ORDER_ATOMIC];


    };

    Blockly.Arduino.client_print = function (block) {
   
        const data  = this.getFieldValue('DATA');

        return `client.println("${data}");\n`;

    };
    Blockly.Arduino.dht_print = function (block) {
   
        const sata  = this.getFieldValue('SATA');

        return `client.println(${sata});\n`;

    };


    return Blockly;
}
    exports = addGenerator;