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

//RGB LED

    Blockly.Arduino.rgb_digital = function (block) {
        const pin1 = block.getFieldValue('PIN1');
        const pin2 = block.getFieldValue('PIN2');
        const pin3 = block.getFieldValue('PIN3');
        const state1 = this.getFieldValue('state1');
        const state2 = this.getFieldValue('state2');
        const state3 = this.getFieldValue('state3');

        Blockly.Arduino.setups_[`rgb_s`] = 'pinMode('+pin1+', OUTPUT);\n  pinMode('+pin2+', OUTPUT);\n  pinMode('+pin3+', OUTPUT);\n';
        return 'digitalWrite('+pin1+','+state1+');\ndigitalWrite('+pin2+','+state2+');\ndigitalWrite('+pin3+','+state3+');\n';
    };

    Blockly.Arduino.rgb_analog = function (block) {
        const pin1 = block.getFieldValue('PIN1');
        const pin2 = block.getFieldValue('PIN2');
        const pin3 = block.getFieldValue('PIN3');
        const val1 = Blockly.Arduino.valueToCode(block, 'val1', Blockly.Arduino.ORDER_ATOMIC);
        const val2 = Blockly.Arduino.valueToCode(block, 'val2', Blockly.Arduino.ORDER_ATOMIC);
        const val3 = Blockly.Arduino.valueToCode(block, 'val3', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.setups_[`rgb_s`] = 'pinMode('+pin1+', OUTPUT);\n  pinMode('+pin2+', OUTPUT);\n  pinMode('+pin3+', OUTPUT);\n';
        return 'analogWrite('+pin1+','+val1+');\nanalogWrite('+pin2+','+val2+');\nanalogWrite('+pin3+','+val3+');\n';
    };

    Blockly.Arduino.ks_74hc595_init = function (block) {
        const st_cp = block.getFieldValue('st_cp');
        const sh_cp = block.getFieldValue('sh_cp');
        const ds = block.getFieldValue('ds');

        Blockly.Arduino.includes_.include_74hc595_init = 'int st_cp = '+st_cp+';\nint sh_cp = '+sh_cp+';\nint ds = '+ds+';\n';
        Blockly.Arduino.definitions_[`74hc595_val`] = 'int ouput_74hc595(boolean q1, boolean q2, boolean q3, boolean q4, boolean q5, boolean q6, boolean q7, boolean q8) {\n'+
        '  digitalWrite(st_cp,LOW);\n \n'+
        '  digitalWrite(sh_cp,LOW);\n'+
        '  digitalWrite(ds,q8);\n'+
        '  digitalWrite(sh_cp,HIGH);\n \n'+
        '  digitalWrite(sh_cp,LOW);\n'+
        '  digitalWrite(ds,q7);\n'+
        '  digitalWrite(sh_cp,HIGH);\n'+
        '  digitalWrite(sh_cp,LOW);\n \n'+
        '  digitalWrite(ds,q6);\n'+
        '  digitalWrite(sh_cp,HIGH);\n \n'+
        '  digitalWrite(sh_cp,LOW);\n'+
        '  digitalWrite(ds,q5);\n'+
        '  digitalWrite(sh_cp,HIGH);\n \n'+
        '  digitalWrite(sh_cp,LOW);\n'+
        '  digitalWrite(ds,q4);\n'+
        '  digitalWrite(sh_cp,HIGH);\n \n'+
        '  digitalWrite(sh_cp,LOW);\n'+
        '  digitalWrite(ds,q3);\n'+
        '  digitalWrite(sh_cp,HIGH);\n \n'+
        '  digitalWrite(sh_cp,LOW);\n'+
        '  digitalWrite(ds,q2);\n'+
        '  digitalWrite(sh_cp,HIGH);\n \n'+
        '  digitalWrite(sh_cp,LOW);\n'+
        '  digitalWrite(ds,q1);\n'+
        '  digitalWrite(sh_cp,HIGH);\n \n'+
        '  digitalWrite(st_cp,HIGH);\n'+
        '}\n';
        Blockly.Arduino.setups_[`74hc595_setup`] = 'pinMode(st_cp,OUTPUT);\n  pinMode(sh_cp,OUTPUT);\n  pinMode(ds,OUTPUT);\n';
        return '';
    };

    Blockly.Arduino.ks_74hc595_output = function (block) {
        const out1 = Blockly.Arduino.valueToCode(block, 'q1', Blockly.Arduino.ORDER_ATOMIC);
        const out2 = Blockly.Arduino.valueToCode(block, 'q2', Blockly.Arduino.ORDER_ATOMIC);
        const out3 = Blockly.Arduino.valueToCode(block, 'q3', Blockly.Arduino.ORDER_ATOMIC);
        const out4 = Blockly.Arduino.valueToCode(block, 'q4', Blockly.Arduino.ORDER_ATOMIC);
        const out5 = Blockly.Arduino.valueToCode(block, 'q5', Blockly.Arduino.ORDER_ATOMIC);
        const out6 = Blockly.Arduino.valueToCode(block, 'q6', Blockly.Arduino.ORDER_ATOMIC);
        const out7 = Blockly.Arduino.valueToCode(block, 'q7', Blockly.Arduino.ORDER_ATOMIC);
        const out8 = Blockly.Arduino.valueToCode(block, 'q8', Blockly.Arduino.ORDER_ATOMIC);

        return 'ouput_74hc595('+out1+', '+out2+', '+out3+', '+out4+', '+out5+', '+out6+', '+out7+', '+out8+');\n';
    };

  //buzzer
  
    Blockly.Arduino.buzzer_tone = function (block) {
        const pin = block.getFieldValue('PIN');
        const fre = this.getFieldValue('fre');

        Blockly.Arduino.setups_[`buzzer_${pin}`] = 'pinMode('+pin+', OUTPUT);\n';
        return 'tone('+pin+', '+fre+');\n';
    };

    Blockly.Arduino.buzzer_tone_d = function (block) {
        const pin = block.getFieldValue('PIN');
        const fre = this.getFieldValue('fre');
        const dur = this.getFieldValue('dur');

        Blockly.Arduino.setups_[`buzzer_${pin}`] = 'pinMode('+pin+', OUTPUT);\n';
        return 'tone('+pin+', '+fre+');\ndelay('+dur+');\n';
    };

    Blockly.Arduino.buzzer_music = function (block) {
        const pin = block.getFieldValue('PIN');
        const mus = this.getFieldValue('mus');
        Blockly.Arduino.includes_.include_music_init = `#include<music.h>\n`;
        Blockly.Arduino.definitions_[`music_${pin}`] = 'music Music('+pin+');';

        Blockly.Arduino.setups_[`buzzer_${pin}`] = 'pinMode('+pin+', OUTPUT);\n';
        return ''+mus+'\n';
    };

    Blockly.Arduino.buzzer_notone = function (block) {
        const pin = block.getFieldValue('PIN');

        Blockly.Arduino.setups_[`buzzer_${pin}`] = 'pinMode('+pin+', OUTPUT);\n';
        return 'noTone('+pin+');\n';
    };


  //servo

    Blockly.Arduino.ks_servo_angle = function (block) {
        const pin = block.getFieldValue('pin');
        const angle = Blockly.Arduino.valueToCode(block, 'angle', Blockly.Arduino.ORDER_ATOMIC);
        const time = Blockly.Arduino.valueToCode(block, 'time', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.include_servo_init = '#include <Servo.h>\n';
        Blockly.Arduino.definitions_[`servo_${pin}`] = 'Servo servo_'+pin+';\n';
        Blockly.Arduino.setups_[`servo_init_${pin}`] = 'servo_'+pin+'.attach('+pin+');';
        return 'servo_'+pin+'.write('+angle+');\ndelay('+time+');\n';
    };

    Blockly.Arduino.ks_servo_read = function (block) {
        const pin = block.getFieldValue('pin');

        Blockly.Arduino.includes_.include_servo_init = '#include <Servo.h>\n';
        Blockly.Arduino.definitions_[`servo_${pin}`] = 'Servo servo_'+pin+';\n';
        Blockly.Arduino.setups_[`servo_init_${pin}`] = 'servo_'+pin+'.attach('+pin+');';

        return ['servo_'+pin+'.read()', Blockly.Arduino.ORDER_ATOMIC];
    };

 //stepper
    Blockly.Arduino.stepper_init = function (block) {
        const IN1 = block.getFieldValue('IN1');
        const IN2 = block.getFieldValue('IN2');
        const IN3 = block.getFieldValue('IN3');
        const IN4 = block.getFieldValue('IN4');
        const step_speed = Blockly.Arduino.valueToCode(block, 'steps', Blockly.Arduino.ORDER_ATOMIC);
        const speed = Blockly.Arduino.valueToCode(block, 'speed', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.include_stepper_init = '#include <Stepper.h>\n';
        Blockly.Arduino.definitions_[`stepper_val`] = 'Stepper mystepper('+step_speed+','+IN1+','+IN3+','+IN2+','+IN4+');\n';
        Blockly.Arduino.setups_[`stepper_setup`] = 'mystepper.setSpeed('+speed+');';
        return '';
    };

    Blockly.Arduino.stepper_step = function (block) {
        const stepNum = Blockly.Arduino.valueToCode(block, 'stepsNum', Blockly.Arduino.ORDER_ATOMIC);

        return 'mystepper.step('+stepNum+');\n';
    };

 //lm35
    Blockly.Arduino.lm35_readTemperature = function (block) {
        const pin = block.getFieldValue('PIN');
        return [`analogRead(${pin}) * 0.488`, Blockly.Arduino.ORDER_ATOMIC];
    };

//红外接收

Blockly.Arduino.ir_init = function (block) {
    const pin = block.getFieldValue('pin');

    Blockly.Arduino.includes_.ir_init = '#include <IRremote.h>';
    Blockly.Arduino.definitions_.ir_init = 'long ir_item;\nIRrecv irrecv('+pin+');\ndecode_results results;\n';
    Blockly.Arduino.setups_['irrecv'] = 'irrecv.enableIRIn();\n';

    return ``;
};

Blockly.Arduino.ir_data = function () {
    return [`irrecv.decode(&results)`, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ir_read = function () {
    return [`results.value`, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ir_refresh = function () {
    return 'irrecv.resume();\n';
};

//一位数码管

Blockly.Arduino.onetube_init = function (block) {
    Blockly.Arduino.definitions_[`onetube_var`] = 
    'int pin_a = 7;\n'+
    'int pin_b = 6;\n'+
    'int pin_c = 5;\n'+
    'int pin_d = 10;\n'+
    'int pin_e = 11;\n'+
    'int pin_f = 8;\n'+
    'int pin_g = 9;\n'+
    'int pin_p = 4;\n';

    Blockly.Arduino.setups_['onetube_setup'] = 'for (int i = 4; i <= 11; i++)\n  {\n    pinMode(i, OUTPUT);\n  }\n';
    return '';
};

Blockly.Arduino.onetube_number = function (block) {
    const oneNum = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    const dot_state = this.getFieldValue('state');

    Blockly.Arduino.definitions_[`onetube_data`] = 'int numTable[10][8] = {\n'+
    '  //a  b  c  d  e  f  g  dp\n'+
    '  {1, 1, 1, 1, 1, 1, 0, '+dot_state+'},     //0\n'+
    '  {0, 1, 1, 0, 0, 0, 0, '+dot_state+'},     //1\n'+
    '  {1, 1, 0, 1, 1, 0, 1, '+dot_state+'},     //2\n'+
    '  {1, 1, 1, 1, 0, 0, 1, '+dot_state+'},     //3\n'+
    '  {0, 1, 1, 0, 0, 1, 1, '+dot_state+'},     //4\n'+
    '  {1, 0, 1, 1, 0, 1, 1, '+dot_state+'},     //5\n'+
    '  {1, 0, 1, 1, 1, 1, 1, '+dot_state+'},     //6\n'+
    '  {1, 1, 1, 0, 0, 0, 0, '+dot_state+'},     //7\n'+
    '  {1, 1, 1, 1, 1, 1, 1, '+dot_state+'},     //8\n'+
    '  {1, 1, 1, 1, 0, 1, 1, '+dot_state+'},     //9\n'+
    '};\n';

    return 'digitalWrite(pin_a, numTable['+oneNum+'][0]);\n'+
    'digitalWrite(pin_b, numTable['+oneNum+'][1]);\n'+
    'digitalWrite(pin_c, numTable['+oneNum+'][2]);\n'+
    'digitalWrite(pin_d, numTable['+oneNum+'][3]);\n'+
    'digitalWrite(pin_e, numTable['+oneNum+'][4]);\n'+
    'digitalWrite(pin_f, numTable['+oneNum+'][5]);\n'+
    'digitalWrite(pin_g, numTable['+oneNum+'][6]);\n'+
    'digitalWrite(pin_p, numTable['+oneNum+'][7]);\n';
};

//4位数码管

Blockly.Arduino.tb4_init = function (block) {
    Blockly.Arduino.includes_.include_fourtube_init = `#include <SevSeg.h>\n`;
    Blockly.Arduino.definitions_[`fourtube_var`] = `SevSeg sevseg;\n`;
    Blockly.Arduino.setups_['fourtube_setup'] = 'byte numDigits = 4;\n  byte digitPins[] = {9, 10, 11, 12};\n'+
    '  byte segmentPins[] = {1, 2, 3, 4, 5, 6, 7, 8};\n'+
    '  bool resistorsOnSegments = false;\n'+
    '  byte hardwareConfig = COMMON_CATHODE;\n'+
    '  bool updateWithDelays = false;\n'+
    '  bool leadingZeros = false;\n'+
    '  bool disableDecPoint = false;\n'+
    'sevseg.begin(hardwareConfig, numDigits, digitPins, segmentPins, resistorsOnSegments,updateWithDelays, leadingZeros, disableDecPoint);\n'+
    '  sevseg.setBrightness(90);\n';
    return '';
};

Blockly.Arduino.tb4_number = function (block) {
    const tbNum = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    const state = this.getFieldValue('state');

    return 'static unsigned long timer = millis();\n'+
    '  static int deciSeconds = 0;\n'+
    '  if (millis() - timer >= 100) {\n'+
    '    timer += 100;\n'+
    '    deciSeconds++;\n'+
    '    if (deciSeconds == 10000) {\n'+
    '      deciSeconds=0;\n'+
    '    }\n'+
    '    sevseg.setNumber('+tbNum+', '+state+');\n'+
    '  }\n'+
    '  sevseg.refreshDisplay();\n';
};

//8x8点阵

Blockly.Arduino.matrix_pin_init = function (block) {
    Blockly.Arduino.definitions_[`onetube_var`] = 'int R[] = {2,3,4,5,6,7,8,9};\n'+
    'int C[] = {10,11,12,13,A0,A1,A2,A3};\n';

    Blockly.Arduino.definitions_[`1data_0`] = 
    'unsigned char data_0[8][8] =\n'+
    '{\n'+
    '{0,0,1,1,1,0,0,0},\n'+
    '{0,1,0,0,0,1,0,0},\n'+
    '{0,1,0,0,0,1,0,0},\n'+
    '{0,1,0,0,0,1,0,0},\n'+
    '{0,1,0,0,0,1,0,0},\n'+
    '{0,1,0,0,0,1,0,0},\n'+
    '{0,1,0,0,0,1,0,0},\n'+
    '{0,0,1,1,1,0,0,0}\n'+
    '};\n';

    Blockly.Arduino.definitions_[`1data_1`] = 
    'unsigned char data_1[8][8] =\n'+
    '{\n'+
    '{0,0,0,0,1,0,0,0},\n'+
    '{0,0,0,1,1,0,0,0},\n'+
    '{0,0,0,0,1,0,0,0},\n'+
    '{0,0,0,0,1,0,0,0},\n'+
    '{0,0,0,0,1,0,0,0},\n'+
    '{0,0,0,0,1,0,0,0},\n'+
    '{0,0,0,0,1,0,0,0},\n'+
    '{0,0,0,1,1,1,0,0}\n'+
    '};\n';

    Blockly.Arduino.definitions_[`1data_2`] = 
    'unsigned char data_2[8][8] =\n'+
    '{\n'+
    '{0,0,1,1,1,0,0,0},\n'+
    '{0,1,0,0,0,1,0,0},\n'+
    '{0,0,0,0,0,1,0,0},\n'+
    '{0,0,0,0,1,0,0,0},\n'+
    '{0,0,0,1,0,0,0,0},\n'+
    '{0,0,1,0,0,0,0,0},\n'+
    '{0,1,1,1,1,1,0,0},\n'+
    '{0,0,0,0,0,0,0,0}\n'+
    '};\n';

    Blockly.Arduino.definitions_[`1data_3`] = 
    'unsigned char data_3[8][8] =\n'+
    '{\n'+
    '{0,0,1,1,1,1,0,0},\n'+
    '{0,0,0,0,0,1,0,0},\n'+
    '{0,0,0,0,0,1,0,0},\n'+
    '{0,0,1,1,1,1,0,0},\n'+
    '{0,0,0,0,0,1,0,0},\n'+
    '{0,0,0,0,0,1,0,0},\n'+
    '{0,0,1,1,1,1,0,0},\n'+
    '{0,0,0,0,0,0,0,0}\n'+
    '};\n';

    Blockly.Arduino.definitions_[`1data_4`] = 
    'unsigned char data_4[8][8] =\n'+
    '{\n'+
    '{0,1,0,0,0,0,0,0},\n'+
    '{0,1,0,0,1,0,0,0},\n'+
    '{0,1,0,0,1,0,0,0},\n'+
    '{0,1,1,1,1,1,1,0},\n'+
    '{0,0,0,0,1,0,0,0},\n'+
    '{0,0,0,0,1,0,0,0},\n'+
    '{0,0,0,0,1,0,0,0},\n'+
    '{0,0,0,0,0,0,0,0}\n'+
    '};\n';

    Blockly.Arduino.definitions_[`1data_5`] = 
    'unsigned char data_5[8][8] =\n'+
    '{\n'+
    '{0,1,0,0,0,0,0,0},\n'+
    '{0,1,1,1,1,1,0,0},\n'+
    '{0,1,0,0,0,0,0,0},\n'+
    '{0,1,1,1,1,1,0,0},\n'+
    '{0,0,0,0,0,1,0,0},\n'+
    '{0,0,0,0,0,1,0,0},\n'+
    '{0,1,1,1,1,1,0,0},\n'+
    '{0,0,0,0,0,0,0,0}\n'+
    '};\n';

    Blockly.Arduino.definitions_[`1data_6`] = 
    'unsigned char data_6[8][8] =\n'+
    '{\n'+
    '{0,1,1,1,1,1,0,0},\n'+
    '{0,1,0,0,0,0,0,0},\n'+
    '{0,1,0,0,0,0,0,0},\n'+
    '{0,1,1,1,1,1,0,0},\n'+
    '{0,1,0,0,0,1,0,0},\n'+
    '{0,1,0,0,0,1,0,0},\n'+
    '{0,1,1,1,1,1,0,0},\n'+
    '{0,0,0,0,0,0,0,0}\n'+
    '};\n';

    Blockly.Arduino.definitions_[`1data_7`] = 
    'unsigned char data_7[8][8] =\n'+
    '{\n'+
    '{0,0,0,0,0,0,0,0},\n'+
    '{0,1,1,1,1,1,0,0},\n'+
    '{0,0,0,0,0,1,0,0},\n'+
    '{0,0,0,0,1,0,0,0},\n'+
    '{0,0,0,1,0,0,0,0},\n'+
    '{0,0,1,0,0,0,0,0},\n'+
    '{0,1,0,0,0,0,0,0},\n'+
    '{0,0,0,0,0,0,0,0}\n'+
    '};\n';

    Blockly.Arduino.definitions_[`1data_8`] = 
    'unsigned char data_8[8][8] =\n'+
    '{\n'+
    '{0,1,1,1,1,1,0,0},\n'+
    '{0,1,0,0,0,1,0,0},\n'+
    '{0,1,0,0,0,1,0,0},\n'+
    '{0,1,1,1,1,1,0,0},\n'+
    '{0,1,0,0,0,1,0,0},\n'+
    '{0,1,0,0,0,1,0,0},\n'+
    '{0,1,1,1,1,1,0,0},\n'+
    '{0,0,0,0,0,0,0,0}\n'+
    '};\n';

    Blockly.Arduino.definitions_[`1data_9`] = 
    'unsigned char data_9[8][8] =\n'+
    '{\n'+
    '{0,1,1,1,1,1,0,0},\n'+
    '{0,1,0,0,0,1,0,0},\n'+
    '{0,1,0,0,0,1,0,0},\n'+
    '{0,1,1,1,1,1,0,0},\n'+
    '{0,0,0,0,0,1,0,0},\n'+
    '{0,0,0,0,0,1,0,0},\n'+
    '{0,1,1,1,1,1,0,0},\n'+
    '{0,0,0,0,0,0,0,0}\n'+
    '};\n';

    Blockly.Arduino.definitions_[`matrix_pin_display`] = 
    'void Display(unsigned char dat[8][8])\n'+
    '{\n'+
    'for(int c = 0; c<8;c++)\n'+
    '{\n'+
    'digitalWrite(C[c],LOW);\n'+
    'for(int r = 0;r<8;r++)\n'+
    '{\n'+
    'digitalWrite(R[r],dat[r][c]);\n'+
    '}\n'+
    'delay(1);\n'+
    'Clear();\n'+
    '}\n'+
    '}\n';

    Blockly.Arduino.definitions_[`matrix_pin_clear`] = 
    'void Clear()\n'+
    '{\n'+
    'for(int i = 0;i<8;i++)\n'+
    '{\n'+
    'digitalWrite(R[i],LOW);\n'+
    'digitalWrite(C[i],HIGH);\n'+
    '}\n'+
    '}\n';

    Blockly.Arduino.setups_['matrix_pin_setup'] = 'for(int i = 0;i<8;i++)\n  {\n    pinMode(R[i],OUTPUT);\n    pinMode(C[i],OUTPUT);\n  }\n';
    return '';
};

Blockly.Arduino.matrix_pin_display = function (block) {
    const matrix_photo = this.getFieldValue('photo');

    return 'Display('+matrix_photo+');\n';
};

//1602

Blockly.Arduino.lcd_pin_init = function (block) {
    const rs = block.getFieldValue('RS');
    const en = block.getFieldValue('EN');
    const d4 = block.getFieldValue('D4');
    const d5 = block.getFieldValue('D5');
    const d6 = block.getFieldValue('D6');
    const d7 = block.getFieldValue('D7');

    Blockly.Arduino.includes_.lcd_init = `#include <LiquidCrystal.h>`;
    Blockly.Arduino.definitions_.lcd_init = `LiquidCrystal mylcd(${rs}, ${en}, ${d4}, ${d5}, ${d6}, ${d7});`;
    Blockly.Arduino.setups_[`lcd_setup`] = 'mylcd.begin(16,2);\n';

    return ``;
};


Blockly.Arduino.lcd_pin_print = function (block) {
    const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
    const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
    const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);

    return `mylcd.setCursor(${x}, ${y});\n mylcd.print(${data});\n`;
};

Blockly.Arduino.lcd_pin_clear = function (block) {
    const state = block.getFieldValue('lcd_state');
    return `mylcd.${state};\n`;
};

//adxl345

Blockly.Arduino.adxl345_read = function (block) {
    Blockly.Arduino.includes_.include_adxl_init = `#include <Wire.h>\n#include <I2Cdev.h>\n#include <ADXL345.h>\n`;
    Blockly.Arduino.definitions_[`adxl_1`] = `ADXL345 accel;\n`;
    Blockly.Arduino.setups_['adxl_getAddress'] = 'Wire.begin();\n  accel.initialize();\n';
    const unit = this.getFieldValue('unit');
    return [`${unit}`, Blockly.Arduino.ORDER_ATOMIC];
};

//dht11

Blockly.Arduino.dht_init = function (block) {
    const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    const pin = block.getFieldValue('PIN');
    const mode = this.getFieldValue('MODE');

    Blockly.Arduino.includes_.dht_init = `#include <DHT.h>`;
    Blockly.Arduino.definitions_[`dht_init_${no}`] = `DHT dht_${no}(${pin}, ${mode});`;
    return '';
};

Blockly.Arduino.dht_readHumidity = function (block) {
    const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    return [`dht_${no}.readHumidity()`, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.dht_readTemperature = function (block) {
    const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    const unit = this.getFieldValue('UNIT');
    return [`dht_${no}.readTemperature(${unit})`, Blockly.Arduino.ORDER_ATOMIC];
};

//DS3231

Blockly.Arduino.ds3231_init = function (block) {

    Blockly.Arduino.includes_.include_ds3231_init = `#include <RTClib.h>\n`;
    Blockly.Arduino.definitions_[`ds3231_var`] = `RTC_DS3231 rtc;\nchar daysOfTheWeek[7][12] = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};\n`;
    
    Blockly.Arduino.setups_['ds3231_setup'] = 'if (! rtc.begin()) {\n    Serial.println("not find RTC");\n    Serial.flush();\n    abort();\n  }\n';
    return '';
};

Blockly.Arduino.ds3231_set_sys = function (block) {
    //Blockly.Arduino.setups_['ds3231_setup_nowTime'] = 'rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));\n';
    return 'rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));\n';
};

Blockly.Arduino.ds3231_set_time = function (block) {
    const year = Blockly.Arduino.valueToCode(block, 'year', Blockly.Arduino.ORDER_ATOMIC);
    const month = Blockly.Arduino.valueToCode(block, 'month', Blockly.Arduino.ORDER_ATOMIC);
    const day = Blockly.Arduino.valueToCode(block, 'day', Blockly.Arduino.ORDER_ATOMIC);
    const hour = Blockly.Arduino.valueToCode(block, 'hour', Blockly.Arduino.ORDER_ATOMIC);
    const minute = Blockly.Arduino.valueToCode(block, 'minute', Blockly.Arduino.ORDER_ATOMIC);
    const second = Blockly.Arduino.valueToCode(block, 'second', Blockly.Arduino.ORDER_ATOMIC);
    const week = Blockly.Arduino.valueToCode(block, 'week', Blockly.Arduino.ORDER_ATOMIC);
    
    const code = 'rtc.adjust(DateTime('+year+', '+month+', '+day+', '+hour+', '+minute+', '+second+'));\n';
    return code;
};


Blockly.Arduino.ds3231_read = function (block) {
    const unit = this.getFieldValue('unit');
    return [`${unit}`, Blockly.Arduino.ORDER_ATOMIC];
};


//ultrasonic 

Blockly.Arduino.hc_sr04_read_distance = function (block) {

    const trigPin = block.getFieldValue('trig_pin');
    const echoPin = block.getFieldValue('echo_pin');
    const unit = block.getFieldValue('unit');

    Blockly.Arduino.includes_.include_hc_sr04_read = `#include <Ultrasonic.h>`;
    Blockly.Arduino.definitions_[`hc_sr04_read${trigPin}${echoPin}`] =
        `Ultrasonic ultrasonic_${trigPin}_${echoPin}(${trigPin}, ${echoPin});`;

    return [`ultrasonic_${trigPin}_${echoPin}.read(${unit})`, Blockly.Arduino.ORDER_ATOMIC];
};

//joyStick

Blockly.Arduino.joyStick_xyValue= function(block) {
    var arg0 = block.getFieldValue('pin') || 'A0';
    var code = "analogRead(" + arg0 + ")";
    // const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.joyStick_zState= function(block) {
    var arg0 = block.getFieldValue('pin') || 'A0';
    var code = "(digitalRead(" + arg0 + ")==1)";
    Blockly.Arduino.setups_.joyStick_init = `pinMode(${arg0}, INPUT);`;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//RFID

Blockly.Arduino.mfrc522_init = function (block) {
    const cs = Blockly.Arduino.valueToCode(block, 'CS', Blockly.Arduino.ORDER_ATOMIC);
    const rst = block.getFieldValue('RST');

    Blockly.Arduino.includes_.mfrc522_init = `#include <SPI.h>\n#include <MFRC522.h>`;
    Blockly.Arduino.definitions_.mfrc522_init = `MFRC522 mfrc522(${cs}, ${rst});\nMFRC522::MIFARE_Key ` +
        `mfrc522_key{{0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF}};`;
    return `SPI.begin();\nmfrc522.PCD_Init();\n`;
};

Blockly.Arduino.mfrc522_isNewCardPresent = function () {
    return [`mfrc522.PICC_IsNewCardPresent()`, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.mfrc522_readCardSerial = function () {
    return [`mfrc522.PICC_ReadCardSerial()`, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.mfrc522_getCardTypeName = function () {
    return [`mfrc522.PICC_GetTypeName(mfrc522.PICC_GetType(mfrc522.uid.sak))`, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.mfrc522_getCardUid = function () {
    return [`((uint32_t)mfrc522.uid.uidByte[0] << 24 | (uint32_t)mfrc522.uid.uidByte[1] << 16 | ` +
        `(uint32_t)mfrc522.uid.uidByte[2] << 8 | (uint32_t)mfrc522.uid.uidByte[3])`, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.mfrc522_numberToHexString = function (block) {
    const num = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);

    return [`String(${num}, HEX)`, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.mfrc522_verificationKey = function (block) {
    const bl = Blockly.Arduino.valueToCode(block, 'BLOCK', Blockly.Arduino.ORDER_ATOMIC);

    return [`mfrc522.PCD_Authenticate(MFRC522::PICC_CMD_MF_AUTH_KEY_A, ${bl}, &mfrc522_key, ` +
        `&(mfrc522.uid)) == MFRC522::STATUS_OK`, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.mfrc522_blockNumber = function (block) {
    const num = block.getFieldValue('NUM');

    return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.mfrc522_readBlockData = function (block) {
    const bl = Blockly.Arduino.valueToCode(block, 'BLOCK', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.definitions_.mfrc522_readBlockData = `uint8_t mfrc522_rxBuffer[18];\n` +
        `uint8_t mfrc522_size = sizeof(mfrc522_rxBuffer);`;

    return [`mfrc522.MIFARE_Read(${bl}, mfrc522_rxBuffer, &mfrc522_size) == MFRC522::STATUS_OK`,
        Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.mfrc522_getBlockData = function (block) {
    const type = block.getFieldValue('TYPE');

    if (type === 'number') {
        return [`*(float*)mfrc522_rxBuffer`, Blockly.Arduino.ORDER_ATOMIC];
    }
    return [`(char*)mfrc522_rxBuffer`, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.mfrc522_writeBlockData = function (block) {
    const bl = Blockly.Arduino.valueToCode(block, 'BLOCK', Blockly.Arduino.ORDER_ATOMIC);
    const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
    const type = block.getFieldValue('TYPE');

    Blockly.Arduino.definitions_.mfrc522_writeBlockData = `uint8_t mfrc522_txBuffer[16];`;

    if (type === 'number') {
        return `*(float*)mfrc522_txBuffer = ${data.slice(1, -1)};\nmfrc522.MIFARE_Write(${bl}, mfrc522_txBuffer, 16);\n`;
    }
    return `strcpy(mfrc522_txBuffer, ${data});\nmfrc522.MIFARE_Write(${bl}, mfrc522_txBuffer, 16);\n`;
};

Blockly.Arduino.mfrc522_setKey = function (block) {
    const key = (0xffffffffffff - Blockly.Arduino.valueToCode(block, 'KEY', Blockly.Arduino.ORDER_ATOMIC)).toString(16);

    return `mfrc522_key = {0x${key.slice(0, 2)}, ` +
    `0x${key.slice(2, 4)}, 0x${key.slice(4, 6)}, 0x${key.slice(6, 8)}, 0x${key.slice(8, 10)}, 0x${key.slice(10, 12)}};\n`;
};

Blockly.Arduino.mfrc522_writeKeyToSector = function (block) {
    const key = (0xffffffffffff - Blockly.Arduino.valueToCode(block, 'KEY', Blockly.Arduino.ORDER_ATOMIC)).toString(16);
    const sector = Blockly.Arduino.valueToCode(block, 'SECTOR', Blockly.Arduino.ORDER_ATOMIC);

    const bl = (sector * 4) + 3;

    const tx = `uint8_t mfrc522_txKey[16] = {0x${key.slice(0, 2)}, 0x${key.slice(2, 4)}, 0x${key.slice(4, 6)}, ` +
        `0x${key.slice(6, 8)}, 0x${key.slice(8, 10)}, 0x${key.slice(10, 12)}, 0xff, 0x07, 0x80, 0x69, ` +
        `0x${key.slice(0, 2)}, 0x${key.slice(2, 4)}, 0x${key.slice(4, 6)}, 0x${key.slice(6, 8)}, 0x${key.slice(8, 10)}, ` +
        `0x${key.slice(10, 12)}};\n`;

    return `${tx}mfrc522.MIFARE_Write(${bl}, mfrc522_txKey, 16);\n`;
};

Blockly.Arduino.mfrc522_sectorNumber = function (block) {
    const num = block.getFieldValue('NUM');

    return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.mfrc522_printSectorData = function (block) {
    const sector = Blockly.Arduino.valueToCode(block, 'SECTOR', Blockly.Arduino.ORDER_ATOMIC);

    return `mfrc522.PICC_DumpMifareClassicSectorToSerial(&(mfrc522.uid), &mfrc522_key, ${sector});\n`;
};

Blockly.Arduino.mfrc522_halt = function () {
    return `mfrc522.PICC_HaltA();\nmfrc522.PCD_StopCrypto1();\n`;
};

    return Blockly;
}

exports = addGenerator;