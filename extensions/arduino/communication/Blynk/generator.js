/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {


//物联网-服务器信息
Blockly.Arduino.esp32_blynk_server = function() {
  var wifi_ssid = Blockly.Arduino.valueToCode(this, 'wifi_ssid', Blockly.Arduino.ORDER_ATOMIC);
  var wifi_pass = Blockly.Arduino.valueToCode(this, 'wifi_pass', Blockly.Arduino.ORDER_ATOMIC);
  var auth_key = Blockly.Arduino.valueToCode(this, 'auth_key', Blockly.Arduino.ORDER_ATOMIC);
  var server_add = Blockly.Arduino.valueToCode(this, 'server_add', Blockly.Arduino.ORDER_ATOMIC);
  server_add = server_add.replace(/\"/g, "").replace(/\./g, ",");
  Blockly.Arduino.definitions_['DEFINE_BLYNK_INCLUDE'] = '#if defined(ESP8266)\n#define BLYNK_PRINT Serial\n#include <ESP8266WiFi.h>\n#include <BlynkSimpleEsp8266.h>\n#elif defined(ESP32)\n#define BLYNK_PRINT Serial\n#include <WiFi.h>\n#include <WiFiClient.h>\n#include <BlynkSimpleEsp32.h>\n#endif\n';
  // Blockly.Arduino.definitions_['define_BLYNK_PRINT'] ='#define BLYNK_PRINT Serial';
  // Blockly.Arduino.definitions_['include_WiFi'] ="#include <WiFi.h>";
  // Blockly.Arduino.definitions_['include_WiFiClient'] ="#include <WiFiClient.h>";
  // Blockly.Arduino.definitions_['include_BlynkSimpleEsp32'] ="#include <BlynkSimpleEsp32.h>";

  Blockly.Arduino.definitions_['D1_auth_key'] ='char auth[] = '+auth_key+';';
  Blockly.Arduino.definitions_['D2_wifi_ssid'] ='char ssid[] = '+wifi_ssid+';';
  Blockly.Arduino.definitions_['D3_wifi_pass'] ='char pass[] = '+wifi_pass+';';

  Blockly.Arduino.setups_['setup_robot_serial']= 'Serial.begin(9600);';
  Blockly.Arduino.setups_['setup_Blynk.begin'] = 'Blynk.begin(auth,ssid,pass,IPAddress('+server_add+'),8080);';  
  var code="Blynk.run();\n";
  return code;
};

 // 物联网-一键配网
Blockly.Arduino.esp32_blynk_smartconfig = function() {
  var auth_key = Blockly.Arduino.valueToCode(this, 'auth_key', Blockly.Arduino.ORDER_ATOMIC);
  var server_add = Blockly.Arduino.valueToCode(this, 'server_add', Blockly.Arduino.ORDER_ATOMIC);
  server_add = server_add.replace(/\"/g, "").replace(/\./g, ",");
  Blockly.Arduino.definitions_['DEFINE_BLYNK_INCLUDE'] = '#if defined(ESP8266)\n#define BLYNK_PRINT Serial\n#include <ESP8266WiFi.h>\n#include <BlynkSimpleEsp8266.h>\n#elif defined(ESP32)\n#define BLYNK_PRINT Serial\n#include <WiFi.h>\n#include <WiFiClient.h>\n#include <BlynkSimpleEsp32.h>\n#endif\n';
  // Blockly.Arduino.definitions_['define_BLYNK_PRINT'] ='#define BLYNK_PRINT Serial';
  // Blockly.Arduino.definitions_['include_WiFi'] = "#include <WiFi.h>";
  // Blockly.Arduino.definitions_['include_WiFiClient'] = "#include <WiFiClient.h>";
  // Blockly.Arduino.definitions_['include_BlynkSimpleEsp32'] = "#include <BlynkSimpleEsp32.h>";

  Blockly.Arduino.definitions_['D1_auth_key'] ='char auth[] = '+auth_key+';';
  Blockly.Arduino.setups_['setup_robot_serial']= 'Serial.begin(9600);';
  
  Blockly.Arduino.setups_['setup_smartconfig'] ='\n'+
  'WiFi.mode(WIFI_STA);\n'+
  'WiFi.begin();\n'+
  'int cnt = 0;\n'+
  'while (WiFi.status() != WL_CONNECTED) {\n'+
  '  delay(1000);\n'+
  '  Serial.print(".");\n'+
  '  if (cnt++ >= 30) {\n'+
  '    WiFi.beginSmartConfig();\n'+
  '    while (1) {\n'+
  '      delay(1000);\n'+
  '      if (WiFi.smartConfigDone()) {\n'+
  '        Serial.println();\n'+
  '        Serial.println("SmartConfig: Success");\n'+
  '        cnt = 0;\n'+
  '        WiFi.setAutoConnect(true);\n'+
  '        break;\n'+
  '      }\n'+
  '      Serial.print("|");\n'+
  '    }\n'+
  '  }\n'+
  '}  WiFi.printDiag(Serial);\n'+
  'Blynk.config(auth, IPAddress('+server_add+'), 8080);\n'
  var code="Blynk.run();\n";
  return code;
};

//当设备连接到blynk云服
Blockly.Arduino.BLYNK_CONNECTED = function() {
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
    
    //var code = 'BLYNK_CONNECTED() {\n'+branch+'\n}';
    Blockly.Arduino.definitions_['J1_blynkconnected1'] ='BLYNK_CONNECTED() { \n';
    Blockly.Arduino.definitions_['J2_BLYNK_CONNECTED'] = ''+branch+'\n';
    Blockly.Arduino.definitions_['J3_blynkconnected2'] ='}\n';
};
//当设备连接上APP
Blockly.Arduino.BLYNK_APP_CONNECTED = function() {
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
    var code = 'BLYNK_APP_CONNECTED() {\n'+branch+'\n}';
    
    Blockly.Arduino.definitions_['J1_return_BLYNK_APP_CONNECTED'] = code;
};
//当设备断开APP
Blockly.Arduino.BLYNK_APP_DISCONNECTED = function() {
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
    var code = 'BLYNK_APP_DISCONNECTED() {\n'+branch+'\n}';

    Blockly.Arduino.definitions_['J1_return_BLYNK_APP_DISCONNECTED'] = code;
};
//硬件连接服务器状态
Blockly.Arduino.blynk_iot_CONNECTED = function() {

  var code = 'Blynk.connected()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//从APP获取数据
Blockly.Arduino.blynk_iot_get_data = function() {
  var Vpin = this.getFieldValue('Vpin');
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
  var code = 'BLYNK_WRITE('+Vpin+') {\n'+branch+'\n}';

    Blockly.Arduino.definitions_['J1_return_BLYNK_APP_DISCONNECTED'] = code;
};
//从APP获取数据
Blockly.Arduino.blynk_iot_get_data = function() {
  var Vpin = this.getFieldValue('Vpin');
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
  var code = 'BLYNK_WRITE('+Vpin+') {\n'+branch+'\n}';

    Blockly.Arduino.definitions_['J1_return_BLYNK_APP_DISCONNECTED'] = code;
};
//物联网推送数据
Blockly.Arduino.blynk_iot_push_data_request = function() {
  var Vpin = this.getFieldValue('Vpin');
  var Vname = Blockly.Arduino.valueToCode(this, 'Vname',Blockly.Arduino.ORDER_ATOMIC) || '0';
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格s
  Blockly.Arduino.definitions_['J1_push_data'+Vpin] = 'BLYNK_READ('+Vpin+')\n{\nBlynk.virtualWrite('+Vpin+','+ Vname+ ');\n'+branch+'}';
  var code="";
  return code;
};
//物联网-同步管脚数据
Blockly.Arduino.blynk_iot_syncVirtual = function () {
  var Vpin = this.getFieldValue('Vpin');
  if(Vpin=='ALL')
    var code = 'Blynk.syncAll();\n ';
  else
    var code = 'Blynk.syncVirtual(' + Vpin + ');\n ';
  return code;
};

//物联网-发送数据到app
Blockly.Arduino.blynk_iot_push_data = function() {
  var Vpin = this.getFieldValue('Vpin');
  var data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var code='Blynk.virtualWrite('+Vpin+','+data+' );\n ';
  return code;
};
//blynk 定时器
Blockly.Arduino.Blynk_iot_timer = function () {
  var dropdown_pin = this.getFieldValue('pinb');
  
  var time = Blockly.Arduino.valueToCode(this, 'TIME', Blockly.Arduino.ORDER_ATOMIC);
  var funcName = 'myTimerEvent'+dropdown_pin+'';
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var code = 'void' + ' ' + funcName + '() {\n' + branch + '}\n';
  Blockly.Arduino.definitions_['G1_BlynkTimer'] = 'BlynkTimer timer;';
  Blockly.Arduino.definitions_['J1'+funcName] = code;
  Blockly.Arduino.setups_['myTimerEvent'+dropdown_pin] = 'timer.setInterval('+ time+'L, myTimerEvent'+dropdown_pin+');\n';
  var code="timer.run();\n";
  Blockly.Arduino.loops_['time_run'] = code;
  //return code;
};
//LED组件颜色&开关
Blockly.Arduino.blynk_iot_WidgetLED_COLOR=function(){
  var Vpin = this.getFieldValue('Vpin');
  var colour_rgb_led_color = Blockly.Arduino.valueToCode(this, 'RGB_LED_COLOR', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.definitions_['G1_WidgetLED'+Vpin] = 'WidgetLED led'+Vpin+'('+Vpin+');';
  var code = 'led'+Vpin+'.setColor("'+colour_rgb_led_color+'");\n';
  //window.alert(dropdown_stat);
  if(dropdown_stat=="HIGH")
    code+='led'+Vpin+'.on();\n';
  else if(dropdown_stat=="LOW")
    code+='led'+Vpin+'.off();\n';
  return code;
};

//LED组件颜色&亮度
Blockly.Arduino.blynk_iot_WidgetLED_VALUE=function(){
  var Vpin = this.getFieldValue('Vpin');
  var colour_rgb_led_color = Blockly.Arduino.valueToCode(this, 'RGB_LED_COLOR', Blockly.Arduino.ORDER_ATOMIC);
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['G1_WidgetLED'+Vpin] = 'WidgetLED led'+Vpin+'('+Vpin+');';
  var code = 'led'+Vpin+'.setColor("'+colour_rgb_led_color+'");\n';
  code+='led'+Vpin+'.setValue('+value_num+');\n';
  return code;
};

//发送邮件
Blockly.Arduino.blynk_email = function() {
  var email_add = Blockly.Arduino.valueToCode(this, 'email_add', Blockly.Arduino.ORDER_ATOMIC);
  var Subject = Blockly.Arduino.valueToCode(this, 'Subject', Blockly.Arduino.ORDER_ATOMIC);
  var content = Blockly.Arduino.valueToCode(this, 'content', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['D1_BLYNK_MAX_SENDBYTES'] ='#define BLYNK_MAX_SENDBYTES 128 \n';
  var code=' Blynk.email('+email_add+', '+Subject+', '+content+');\n';
  return code;
};

//发送通知（国内用不了，先关了）
/*Blockly.Arduino.blynk_notify = function() {
  var content = Blockly.Arduino.valueToCode(this, 'content', Blockly.Arduino.ORDER_ATOMIC);
  var code=' Blynk.notify('+content+');\n';
  return code;
};

Blockly.Arduino.blynk_terminal_clear = function () {
  var code = 'terminal.clear();\n';
  return code;
};
*/
//从终端获取字符串
Blockly.Arduino.blynk_iot_terminal_get = function () {
  var Vpin = this.getFieldValue('Vpin');
  Blockly.Arduino.definitions_['var_declare_WidgetTerminal'] = 'WidgetTerminal terminal('+Vpin+');\n';
  Blockly.Arduino.definitions_['var_declare_action']='String action ;';
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格s
    var code = 'BLYNK_WRITE' + '(' +Vpin+'){\naction = param.asStr();\n'+branch;
    code+='\nterminal.flush();\n}';
    Blockly.Arduino.definitions_[Vpin] = code;
};

//物联网-终端组件显示文本
Blockly.Arduino.blynk_terminal = function() {
  var Vpin = this.getFieldValue('Vpin');
  Blockly.Arduino.definitions_['G1_WidgetTerminal'] = 'WidgetTerminal terminal('+Vpin+');\n';
  var content = Blockly.Arduino.valueToCode(this, 'content', Blockly.Arduino.ORDER_ATOMIC);
  var code=' terminal.println('+content+');\nterminal.flush();\n';
  return code;
};

//Blynk LCD显示
Blockly.Arduino.blynk_lcd = function () {
  var Vpin = this.getFieldValue('Vpin');
  var x = Blockly.Arduino.valueToCode(this, 'x', Blockly.Arduino.ORDER_ATOMIC);
  var y = Blockly.Arduino.valueToCode(this, 'y', Blockly.Arduino.ORDER_ATOMIC);
  var value = Blockly.Arduino.valueToCode(this, 'value', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['include_lcd'] = 'WidgetLCD lcd(' + Vpin + ');\n';
  var code = 'lcd.print(' + x + ', ' + y + ', ' + value + ');\n';
  return code;
};

//Blynk LCD清屏
Blockly.Arduino.blynk_lcd_clear = function () {
  var code = 'lcd.clear();\n';
  return code;
};

//Blynk Table小部件添加数据
Blockly.Arduino.blynk_table = function () {
  var id = Blockly.Arduino.valueToCode(this, 'id', Blockly.Arduino.ORDER_ATOMIC);
  var mingcheng = Blockly.Arduino.valueToCode(this, 'mingcheng', Blockly.Arduino.ORDER_ATOMIC);
  var shujv = Blockly.Arduino.valueToCode(this, 'shujv', Blockly.Arduino.ORDER_ATOMIC);
  var xnyj = this.getFieldValue('Vpin');
  var mode = this.getFieldValue('mode');
  var code = 'Blynk.virtualWrite(' + xnyj + ', \"'+mode+'\", ' + id + ',' + mingcheng + ', ' + shujv + ');\n';
  return code;
};

//Blynk Table小部件数据操作
Blockly.Arduino.blynk_table_highlight = function () {
  var id = Blockly.Arduino.valueToCode(this, 'id', Blockly.Arduino.ORDER_ATOMIC);
  var xnyj = this.getFieldValue('Vpin');
  var mode = this.getFieldValue('mode');
  var code = 'Blynk.virtualWrite(' + xnyj + ', \"'+mode+'\", ' + id + ');\n';
  return code;
};


//Blynk Table小部件数据清除
Blockly.Arduino.blynk_table_cleardata = function () {
  var xnyj = this.getFieldValue('Vpin');
  var code = 'Blynk.virtualWrite(' + xnyj + ', "clr");\n';
  return code;
};

//时间输入
Blockly.Arduino.blynk_time_input_1 = function () {
  var Vpin = this.getFieldValue('Vpin');
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
    var code = 'BLYNK_WRITE' + '(' +Vpin+'){\n long startTimeInSecs = param[0].asLong();\nint hour =int(startTimeInSecs/3600);\nint minute=int(startTimeInSecs%3600/60);\n'+branch+'\n}';
    Blockly.Arduino.definitions_[Vpin] = code;
};

//视频流
Blockly.Arduino.blynk_videourl = function() {
  var Vpin = this.getFieldValue('Vpin');
  var url = Blockly.Arduino.valueToCode(this, 'url', Blockly.Arduino.ORDER_ATOMIC);
  
  var code='Blynk.setProperty('+Vpin+',"url",'+url+');\n';
  return code;
};


//桥接授权码
Blockly.Arduino.blynk_bridge_auth = function() {
  var Vpin = this.getFieldValue('Vpin');
  var num = this.getFieldValue('num');
  var auth = Blockly.Arduino.valueToCode(this, 'auth', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['G1_bridge1.setAuthToken'+Vpin] ='WidgetBridge bridge'+num+'('+Vpin+');\n';
  var code='bridge'+num+'.setAuthToken('+auth+'); \n';
  return code;
};

//桥接数字输出
Blockly.Arduino.blynk_bridge_digitalWrite = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var num = this.getFieldValue('num');
  var dropdown_stat = this.getFieldValue('STAT');
  var code=' bridge'+num+'.digitalWrite('+dropdown_pin+', '+dropdown_stat+');\n';
  return code;
};

//桥接模拟输出
Blockly.Arduino.blynk_bridge_AnaloglWrite = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var num = this.getFieldValue('num');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var code=' bridge'+num+'.analogWrite('+dropdown_pin+', '+value_num+');\n';
  return code;
};

//桥接虚拟管脚
Blockly.Arduino.blynk_bridge_VPin = function() {
  var Vpin = this.getFieldValue('Vpin');
  var num = this.getFieldValue('num');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var code=' bridge'+num+'.virtualWrite('+Vpin+', '+value_num+');\n';
  return code;
};

//RTC组件初始化
Blockly.Arduino.blynk_WidgetRTC_init = function() { 
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['G1_WidgetRTC'] ='WidgetRTC rtc;\n';
  Blockly.Arduino.setups_['setSyncInterval'] = 'setSyncInterval('+value_num+'* 60);';

  var code='rtc.begin(); \n';
  return code;
};
//RTC获取时间
Blockly.Arduino.blynk_WidgetRTC_get_time = function () {
  var timeType = this.getFieldValue('TIME_TYPE');
  var code = timeType +'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//播放音乐组件
Blockly.Arduino.blynk_iot_playmusic = function () {
  var Vpin = this.getFieldValue('Vpin');
  var branch1 = Blockly.Arduino.statementToCode(this, 'DO1');
  branch1 = branch1.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
  var branch2 = Blockly.Arduino.statementToCode(this, 'DO2');
  branch2 = branch2.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
  var branch3 = Blockly.Arduino.statementToCode(this, 'DO3');
  branch3 = branch3.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
  var branch4 = Blockly.Arduino.statementToCode(this, 'DO4');
  branch4 = branch4.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
    
  var code='BLYNK_WRITE(V0){\n'+
'String action;\n'+
'action = param.asStr();\n'+
'if (action == "play") {\n'+branch1+
'\n'+
'  } else if (action == "stop") {\n'+branch2+
'\n'+
'  } else if (action == "next") {\n'+branch3+
'\n'+
'  } else if (action == "prev") {\n'+branch4+
'\n'+
'  }\n'+
'Blynk.setProperty(V0, "label", action);};\n'


  Blockly.Arduino.definitions_[Vpin] = code;
};

//光线传感器
Blockly.Arduino.blynk_light = function () {
  var Vpin = this.getFieldValue('Vpin');
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
    var code = 'BLYNK_WRITE' + '(' +Vpin+'){\nint lx = param.asInt();\n'+branch+'\n}';
    Blockly.Arduino.definitions_[Vpin] = code;
};
//重力传感器
Blockly.Arduino.blynk_gravity = function () {
  var Vpin = this.getFieldValue('Vpin');
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
    var code = 'BLYNK_WRITE' + '(' +Vpin+'){\nint x = param[0].asFloat();\nint y = param[1].asFloat();\nint z = param[2].asFloat();\n'+branch+'\n}';
    Blockly.Arduino.definitions_[Vpin] = code;
};

//blynk解析数据
Blockly.Arduino.blynk_param = function() {
  var param = this.getFieldValue('param');
  var type = this.getFieldValue('type');
  var code=param+type;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//串口打印
Blockly.Arduino.serialPrint = function() {
  var type = this.getFieldValue('type');
  var VALUE = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_robot_serial']= 'Serial.begin(9600);';
  var code='Serial.'+type+'('+VALUE+');\n';
  return code;
};

//变量get
    Blockly.Arduino.QH_variables_get = function() {
        var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        code = name;
        return [code, Blockly.Arduino.ORDER_NONE];
    };


    return Blockly;
}

exports = addGenerator;
