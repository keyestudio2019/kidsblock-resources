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

//LED 

    Blockly.Arduino.LED_setLEDState = function (block) {
        //const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
        const pin = block.getFieldValue('pin');
        const state = this.getFieldValue('state');

        Blockly.Arduino.setups_.Led_init = `pinMode(${pin}, OUTPUT);`;

        return `digitalWrite(${pin}, ${state});\n`;
};

Blockly.Arduino.led_analog = function (block) {
    const pin = block.getFieldValue('PIN');

    const val = Blockly.Arduino.valueToCode(block, 'val', Blockly.Arduino.ORDER_ATOMIC);
   

    Blockly.Arduino.setups_[`led_s`] = 'pinMode('+pin+', OUTPUT);\n';
    return 'analogWrite('+pin+','+val+');\n';
};


//Relay

Blockly.Arduino.RelayState = function (block) {
    //const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
    const pin = block.getFieldValue('pin');
    const state = this.getFieldValue('state');

    Blockly.Arduino.setups_.relay_init = `pinMode(${pin}, OUTPUT);`;

    return `digitalWrite(${pin}, ${state});\n`;
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
//button

Blockly.Arduino['Button_readState'] = function(block) {
    var arg0 = block.getFieldValue('pin') || 'A0';
    var code = "(digitalRead(" + arg0 + ")==1)";
    // const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_.Button_init = `pinMode(${arg0}, INPUT);`;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['Button_readValue'] = function(block) {
    var arg0 = block.getFieldValue('pin') || 'A0';
    var code = "digitalRead(" + arg0 + ")";
    Blockly.Arduino.setups_.Button_init = `pinMode(${arg0}, INPUT);`;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//PIR
Blockly.Arduino['pir_readValue'] = function(block) {
    var arg0 = block.getFieldValue('pin') || 'A0';
    var code = "digitalRead(" + arg0 + ")";
    Blockly.Arduino.setups_.pir_init = `pinMode(${arg0}, INPUT);`;

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//light
Blockly.Arduino['lightSensor_readValue'] = function(block) {
    var arg0 = block.getFieldValue('pin') || 'A0';
    var code = "analogRead(" + arg0 + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Gas
Blockly.Arduino['GasSensor_readValue'] = function(block) {
    var arg0 = block.getFieldValue('pin') || 'A0';
    var code = "analogRead(" + arg0 + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Steam
Blockly.Arduino['SteamSensor_readValue'] = function(block) {
    var arg0 = block.getFieldValue('pin') || 'A0';
    var code = "analogRead(" + arg0 + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Soil
Blockly.Arduino['SoilSensor_readValue'] = function(block) {
    var arg0 = block.getFieldValue('pin') || 'A0';
    var code = "analogRead(" + arg0 + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//fan motor

    Blockly.Arduino.motor130_digital = function (block) {
        const pin1 = block.getFieldValue('IN1');
        const pin2 = block.getFieldValue('IN2');
        const state1 = this.getFieldValue('state1');
        const state2 = this.getFieldValue('state2');

        Blockly.Arduino.setups_[`motor130_s`] = 'pinMode('+pin1+', OUTPUT);\n  pinMode('+pin2+', OUTPUT);\n';
        return 'digitalWrite('+pin1+','+state1+');\ndigitalWrite('+pin2+','+state2+');\n';
    };

    Blockly.Arduino.motor130_analog = function (block) {
        const pin1 = block.getFieldValue('IN1');
        const pin2 = block.getFieldValue('IN2');
        //const val1 = Blockly.Arduino.valueToCode(block, 'SPEED1', Blockly.Arduino.ORDER_ATOMIC);
        const state1 = this.getFieldValue('state1');
        const val2 = Blockly.Arduino.valueToCode(block, 'SPEED2', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.setups_[`motor130_s`] = 'pinMode('+pin1+', OUTPUT);\n  pinMode('+pin2+', OUTPUT);\n';
        return 'digitalWrite('+pin1+','+state1+');\nanalogWrite('+pin2+','+val2+');\n';
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

// 1602 LCD
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

    Blockly.Arduino.ble_serial = function (block) {
        // return 'Serial.readStringUntil(\'#\');\n';
        return ['Serial.readStringUntil(\'#\')', Blockly.Arduino.ORDER_ATOMIC];
    };

   
    return Blockly;
}

exports = addGenerator;