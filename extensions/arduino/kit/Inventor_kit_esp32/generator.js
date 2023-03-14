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


Blockly.Arduino.led_analog= function(block) {
    const pin = block.getFieldValue('PIN') || '0';
    const val = Blockly.Arduino.valueToCode(block, 'VAL', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;
    const ch = block.getFieldValue('CH') || '0';
  
    Blockly.Arduino.setups_['led_analog'] = 'ledcSetup('+ch+', 490, 8);';
    Blockly.Arduino.setups_['led_ch'] = 'ledcAttachPin('+pin+', '+ch+');';

    return `ledcWrite(${ch}, ${val});\n`;

  };

//active buzzer

Blockly.Arduino.ATbuzzerState = function (block) {
    //const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
    const pin = block.getFieldValue('pin');
    const state = this.getFieldValue('state');

    Blockly.Arduino.setups_.relay_init = `pinMode(${pin}, OUTPUT);`;

    return `digitalWrite(${pin}, ${state});\n`;
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

//POT
Blockly.Arduino['PotSensor_readValue'] = function(block) {
    var arg0 = block.getFieldValue('pin') || 'A0';
    var code = "analogRead(" + arg0 + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//SOUND
Blockly.Arduino['SoundSensor_readValue'] = function(block) {
    var arg0 = block.getFieldValue('pin') || 'A0';
    var code = "analogRead(" + arg0 + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//HC-SR04

Blockly.Arduino.hc_sr04_read_distance = function (block) {

    const trigPin = block.getFieldValue('trig_pin');
    const echoPin = block.getFieldValue('echo_pin');
    const unit = block.getFieldValue('unit');

    Blockly.Arduino.includes_.include_hc_sr04_read = `#include <Ultrasonic.h>`;
    Blockly.Arduino.definitions_[`hc_sr04_read${trigPin}${echoPin}`] =
        `Ultrasonic ultrasonic_${trigPin}_${echoPin}(${trigPin}, ${echoPin});`;

    return [`ultrasonic_${trigPin}_${echoPin}.read(${unit})`, Blockly.Arduino.ORDER_ATOMIC];
};

//DHT11

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

//servo
Blockly.Arduino.ks_servo_angle = function (block) {
    const pin = block.getFieldValue('pin');
    const angle = Blockly.Arduino.valueToCode(block, 'angle', Blockly.Arduino.ORDER_ATOMIC);
    const time = Blockly.Arduino.valueToCode(block, 'time', Blockly.Arduino.ORDER_ATOMIC);
    const ch = block.getFieldValue('CH');

    Blockly.Arduino.includes_.include_servo_init = '#include <ESP32_Servo.h>\n';
    Blockly.Arduino.definitions_[`servo_${pin}`] = 'const int servopin = '+pin+';\n'+
    'int set_angle(int angle)\n'+
    '{\n'+
    '  int servo_angle = map(angle, 0, 180, 25, 128);\n'+
    '  return servo_angle;\n'+
    '}\n';
    Blockly.Arduino.setups_[`servo_init_${pin}`] = 'ledcSetup('+ch+', 50, 10);\n  ledcAttachPin('+pin+','+ch+');\n';
    return 'ledcWrite('+ch+', set_angle('+angle+'));\n  delay('+time+');\n';
};


Blockly.Arduino.ks_servo_read = function (block) {
    const pin = block.getFieldValue('pin');

    Blockly.Arduino.includes_.include_servo_init = '#include <ESP32_Servo.h>\n';
    Blockly.Arduino.definitions_[`servo_${pin}`] = 'Servo servo_'+pin+';\n';
    Blockly.Arduino.setups_[`servo_init_${pin}`] = 'servo_'+pin+'.attach('+pin+');';

    return ['servo_'+pin+'.read()', Blockly.Arduino.ORDER_ATOMIC];
};



//WS2812RGB

Blockly.Arduino.ws2812b_init = function (block) {
    const text = block.getField('PIN').text_.slice(1);
    // console.log("block:", block.getField('PIN'));
    // console.log("block:", block.getField('PIN').text_);
    const pin = block.getFieldValue('PIN');
    const num = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.includes_.ws2812b_init = `#include <NeoPixel.h>`;
    Blockly.Arduino.definitions_[`ws2812b_init_${text}`] = `NeoPixel neoPixel_${text};`;

    return `neoPixel_${text}.begin(${pin}, ${num});\n`;
};

Blockly.Arduino.ws2812b_brightnessNumber = function (block) {
    const num = block.getFieldValue('NUM');

    return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ws2812b_setBrightness = function (block) {
    // const pin = block.getFieldValue('PIN');
    const text = block.getField('PIN').text_.slice(1);
    const brightness = Blockly.Arduino.valueToCode(block, 'BRIGHTNESS', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.includes_.ws2812b_init = `#include <NeoPixel.h>`;
    Blockly.Arduino.definitions_[`ws2812b_init_${text}`] = `NeoPixel neoPixel_${text};`;

    return `neoPixel_${text}.setBrightness(${brightness});\n`;
};

Blockly.Arduino.ws2812b_clear = function (block) {
    // const pin = block.getFieldValue('PIN');
    const text = block.getField('PIN').text_.slice(1);

    Blockly.Arduino.includes_.ws2812b_init = `#include <NeoPixel.h>`;
    Blockly.Arduino.definitions_[`ws2812b_init_${text}`] = `NeoPixel neoPixel_${text};`;

    return `neoPixel_${text}.clear();\n`;
};

Blockly.Arduino.ws2812b_setRangeColor = function (block) {
    const text = block.getField('PIN').text_.slice(1);
    const start = Blockly.Arduino.valueToCode(block, 'START', Blockly.Arduino.ORDER_ATOMIC);
    const end = Blockly.Arduino.valueToCode(block, 'END', Blockly.Arduino.ORDER_ATOMIC);
    const color = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');

    Blockly.Arduino.includes_.ws2812b_init = `#include <NeoPixel.h>`;
    Blockly.Arduino.definitions_[`ws2812b_init_${text}`] = `NeoPixel neoPixel_${text};`;

    return `neoPixel_${text}.setRangeColor(${start}, ${end}, ${color});\n`;
};

Blockly.Arduino.ws2812b_rgbToColor = function (block) {
    const red = Blockly.Arduino.valueToCode(block, 'RED', Blockly.Arduino.ORDER_ATOMIC);
    const green = Blockly.Arduino.valueToCode(block, 'GREEN', Blockly.Arduino.ORDER_ATOMIC);
    const blue = Blockly.Arduino.valueToCode(block, 'BLUE', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_.rgbToColor = `\nuint32_t rgbToColor(uint8_t r, uint8_t g, uint8_t b)\n{\n  return (uint32_t)((((uint32_t)r<<16) | ((uint32_t)g<<8)) | (uint32_t)b);\n}`;

    // return `rgbToColor(round(${red}), round(${green}), round(${blue}))`;
    return [`rgbToColor(round(${red}), round(${green}), round(${blue}))`, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ws2812b_showRainbow = function (block) {
    const text = block.getField('PIN').text_.slice(1);
    const num1 = Blockly.Arduino.valueToCode(block, 'NUM1', Blockly.Arduino.ORDER_ATOMIC);
    const num2 = Blockly.Arduino.valueToCode(block, 'NUM2', Blockly.Arduino.ORDER_ATOMIC);
    const col1 = Blockly.Arduino.valueToCode(block, 'COR1', Blockly.Arduino.ORDER_ATOMIC);
    const col2 = Blockly.Arduino.valueToCode(block, 'COR2', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.includes_.ws2812b_init = `#include <NeoPixel.h>`;
    Blockly.Arduino.definitions_[`ws2812b_init_${text}`] = `NeoPixel neoPixel_${text};`;

    return `neoPixel_${text}.showRainbow(${num1}, ${num2}, ${col1}, ${col2});\n`;
};

Blockly.Arduino.ws2812b_shift = function (block) {
    const text = block.getField('PIN').text_.slice(1);
    const num = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.includes_.ws2812b_init = `#include <NeoPixel.h>`;
    Blockly.Arduino.definitions_[`ws2812b_init_${text}`] = `NeoPixel neoPixel_${text};`;

    return `neoPixel_${text}.shift(${num});\n`;
};

Blockly.Arduino.ws2812b_rotate = function (block) {
    const text = block.getField('PIN').text_.slice(1);
    const num = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.includes_.ws2812b_init = `#include <NeoPixel.h>`;
    Blockly.Arduino.definitions_[`ws2812b_init_${text}`] = `NeoPixel neoPixel_${text};`;

    return `neoPixel_${text}.rotate(${num});\n`;
};

Blockly.Arduino.ws2812b_showBarGraph = function (block) {
    const text = block.getField('PIN').text_.slice(1);
    const num1 = Blockly.Arduino.valueToCode(block, 'NUM1', Blockly.Arduino.ORDER_ATOMIC);
    const num2 = Blockly.Arduino.valueToCode(block, 'NUM2', Blockly.Arduino.ORDER_ATOMIC);
    const col1 = Blockly.Arduino.valueToCode(block, 'VAL1', Blockly.Arduino.ORDER_ATOMIC);
    const col2 = Blockly.Arduino.valueToCode(block, 'VAL2', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.includes_.ws2812b_init = `#include <NeoPixel.h>`;
    Blockly.Arduino.definitions_[`ws2812b_init_${text}`] = `NeoPixel neoPixel_${text};`;

    return `neoPixel_${text}.showBarGraph(${num1}, ${num2}, ${col1}, ${col2});\n`;
};

//tm1650

Blockly.Arduino.tm1650_init = function (block) {
    const num = block.getFieldValue('NUM');
    Blockly.Arduino.includes_.tm1650_init = `#include <TM1650.h>`;
    Blockly.Arduino.definitions_[`tm1650_init_${num}`] = `TM1650 tm1650_${num};`;

    return `tm1650_${num}.init();\n`;
};

Blockly.Arduino.tm1650_screenSet = function (block) {
    const num = block.getFieldValue('NUM');
    const type = block.getFieldValue('TYPE');
    Blockly.Arduino.includes_.tm1650_init = `#include <TM1650.h>`;
    Blockly.Arduino.definitions_[`tm1650_init_${num}`] = `TM1650 tm1650_${num};`;

    return `tm1650_${num}.${type}();\n`;
};

Blockly.Arduino.tm1650_show = function (block) {
    const num = block.getFieldValue('NUM');
    var text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
    if(text.length>4){
        text=text.slice(0, 4);
    }
    Blockly.Arduino.includes_.tm1650_init = `#include <TM1650.h>`;
    Blockly.Arduino.definitions_[`tm1650_init_${num}`] = `TM1650 tm1650_${num};`;

    return `tm1650_${num}.displayString("${text}");\n`;
};

Blockly.Arduino.tm1650_setDot = function (block) {
    const num = block.getFieldValue('NUM');
    const dot_num = block.getFieldValue('DOT_NUM');
    const type = block.getFieldValue('TYPE');
    Blockly.Arduino.includes_.tm1650_init = `#include <TM1650.h>`;
    Blockly.Arduino.definitions_[`tm1650_init_${num}`] = `TM1650 tm1650_${num};`;

    return `tm1650_${num}.setDot(${dot_num}-1,${type});\n`;
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

    // 1602 LCD

    Blockly.Arduino.MatirxDisplay_init = function (block) {
        const cs = block.getFieldValue('CS');

        Blockly.Arduino.includes_.MatirxDisplay_init = `#include <SPI.h>\n#include <Adafruit_GFX.h>\n#include <Max72xxPanel.h>`;
        Blockly.Arduino.definitions_.MatirxDisplay_init = `Max72xxPanel eitghtTimesEightMatrix = Max72xxPanel(${cs}, 1, 1);`;

        return ``;
    };

    Blockly.Arduino.MatirxDisplay_drawPixel = function (block) {
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `eitghtTimesEightMatrix.drawPixel(${x}, ${y}, ${colour});\n`;
    };

    Blockly.Arduino.MatirxDisplay_drawLine = function (block) {
        const x0 = Blockly.Arduino.valueToCode(block, 'X0', Blockly.Arduino.ORDER_ATOMIC);
        const y0 = Blockly.Arduino.valueToCode(block, 'Y0', Blockly.Arduino.ORDER_ATOMIC);
        const x1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
        const y1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `eitghtTimesEightMatrix.drawLine(${x0}, ${y0}, ${x1}, ${y1},${colour});\n`;
    };

    Blockly.Arduino.MatirxDisplay_showChar = function (block) {
        const text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const colour = block.getFieldValue('COLOUR');

        return `eitghtTimesEightMatrix.drawChar(0, 0, '${text}', ${colour}, !${colour}, 1);\n`;
    };

    Blockly.Arduino.MatirxDisplay_showNumber = function (block) {
        const number = Blockly.Arduino.valueToCode(block, 'NUMBER', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `eitghtTimesEightMatrix.drawChar(0, 0, ${number} + '0', ${colour}, !${colour}, 1);\n`;
    };

    Blockly.Arduino.MatirxDisplay_fill = function (block) {
        const colour = block.getFieldValue('COLOUR');

        return `eitghtTimesEightMatrix.fillScreen(${colour});\n`;
    };

    Blockly.Arduino.MatirxDisplay_refresh = function () {
        return `eitghtTimesEightMatrix.write();\n`;
    };

    Blockly.Arduino.MatirxDisplay_setBrightness = function (block) {
        const brt = Blockly.Arduino.valueToCode(block, 'BRT', Blockly.Arduino.ORDER_ATOMIC);

        return `eitghtTimesEightMatrix.setIntensity(${brt});\n`;
    };

    Blockly.Arduino.MatirxDisplay_brightnessNumber = function (block) {
        const num = block.getFieldValue('NUM');

        return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.MatirxDisplay_setRotation = function (block) {
        const rotation = block.getFieldValue('ROTATION');

        return `eitghtTimesEightMatrix.setRotation(${rotation});\n`;
    };

//IR

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
   
    return Blockly;
}

exports = addGenerator;