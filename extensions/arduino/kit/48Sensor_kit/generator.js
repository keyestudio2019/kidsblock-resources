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

//红外发射 
Blockly.Arduino.ir_send= function () {
    Blockly.Arduino.definitions_.include_IRremote = '#include <IRremote.h>\n';
    Blockly.Arduino.definitions_.var_declare_ir_send = 'IRsend irsend;\n';
    const bits = Blockly.Arduino.valueToCode(this, 'bits', Blockly.Arduino.ORDER_ATOMIC);
    const data = Blockly.Arduino.valueToCode(this, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
    const type = this.getFieldValue('TYPE');
    const code = 'irsend.send'+type+'('+data+','+bits+');\n';
    /*
	for (var name in Blockly.Arduino.definitions_) {
		var def = Blockly.Arduino.definitions_[name];
		if (def.match(/^IRrecv irrecv_/)) {
			var tmp=def.substring(7,def.indexOf('('));
			code=code+tmp+'.enableIRIn();\n';
		}
	}*/
  return code;
}

Blockly.Arduino.ir_send_raw = function () {
    Blockly.Arduino.definitions_['include_IRremote'] = '#include <IRremote.h>\n';
    Blockly.Arduino.definitions_['var_declare_ir_send'] = 'IRsend irsend;\n';
    var length = Blockly.Arduino.valueToCode(this, 'Length', Blockly.Arduino.ORDER_ATOMIC);
    var freq = Blockly.Arduino.valueToCode(this, 'FREQ', Blockly.Arduino.ORDER_ATOMIC);
    var array = Blockly.Arduino.valueToCode(this, 'ARRAY', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'unsigned int buf_raw['+length+']={'+array+'};\n'
    code = code + 'irsend.sendRaw(buf_raw,'+length+ ','+freq+');\n';
    return code;
  }

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


//Encoder

Blockly.Arduino.ks_encoder_init = function (block) {
    const dt = block.getFieldValue('dt');
    const clk = block.getFieldValue('clk');
    const mode = this.getFieldValue('mode');

    Blockly.Arduino.includes_.include_encoder_init = `#include <Encoder.h>`;
    Blockly.Arduino.definitions_[`encoder_init`] = `Encoder ${mode}(${dt}, ${clk});`;
    return '';
};

Blockly.Arduino.ks_encoder_read = function (block) {
    const mode = this.getFieldValue('mode');
    
    return [`${mode}.read()`, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ks_encoder_write = function (block) {
    const data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
    const mode = this.getFieldValue('mode');
    return `${mode}.write(${data})`;
};

Blockly.Arduino.ks_encoder_button = function (block) {
    const pin = block.getFieldValue('pin');
    return [`digitalRead(${pin})`, Blockly.Arduino.ORDER_ATOMIC];
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


//tm1650

Blockly.Arduino.tm1650_string = function (block) {
    const tm1650str = Blockly.Arduino.valueToCode(block, 'tube_string', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.includes_.include_tm1650_init = `#include <Wire.h>\n#include <TM1650.h>\n`;
    Blockly.Arduino.definitions_[`tm1650_var`] = `TM1650 tm_4display;\n`;
    Blockly.Arduino.setups_['tm1650_setup'] = 'Wire.begin();\n  tm_4display.init();\n';
    return 'tm_4display.displayString('+tm1650str+');\n';
};

Blockly.Arduino.tm1650_dot = function (block) {
    const dot = this.getFieldValue('dot');
    const dot_state = this.getFieldValue('state');
    Blockly.Arduino.includes_.include_tm1650_init = `#include <Wire.h>\n#include <TM1650.h>\n`;
    Blockly.Arduino.definitions_[`tm1650_var`] = `TM1650 tm_4display;\n`;
    Blockly.Arduino.setups_['tm1650_setup'] = 'Wire.begin();\ntm_4display.init();\n';
    return 'tm_4display.setDot('+dot+','+dot_state+');\n';
};

Blockly.Arduino.tm1650_state = function (block) {
    const state = this.getFieldValue('state');
    Blockly.Arduino.includes_.include_tm1650_init = `#include <Wire.h>\n#include <TM1650.h>\n`;
    Blockly.Arduino.definitions_[`tm1650_var`] = `TM1650 tm_4display;\n`;
    Blockly.Arduino.setups_['tm1650_setup'] = 'Wire.begin();\n  tm_4display.init();\n';
    return ''+state+'\n';
};

    return Blockly;
}

exports = addGenerator;