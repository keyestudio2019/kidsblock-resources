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

        Blockly.Arduino.setups_[`motor130_s`] = 'pinMode(8, OUTPUT);\n  pinMode(A1, OUTPUT);\n';
        return 'digitalWrite('+pin1+','+state1+');\nanalogWrite('+pin2+','+val2+');\n';
    };



    //超声波
    Blockly.Arduino.hc_sr04_read_distance = function (block) {

        const trigPin = block.getFieldValue('trig_pin');
        const echoPin = block.getFieldValue('echo_pin');
        const unit = block.getFieldValue('unit');

        Blockly.Arduino.includes_.include_hc_sr04_read = `#include <Ultrasonic.h>`;
        Blockly.Arduino.definitions_[`hc_sr04_read${trigPin}${echoPin}`] =
            `Ultrasonic ultrasonic_${trigPin}_${echoPin}(${trigPin}, ${echoPin});`;

        return [`ultrasonic_${trigPin}_${echoPin}.read(${unit})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.matrix_iic_init = function (block) {
        Blockly.Arduino.definitions_[`matrix`] = '#include <Matrix.h>\n'+
        'Matrix myMatrix(A4,A5);\nuint8_t  LEDArray[8];';
        Blockly.Arduino.setups_['matrix_pin_setup'] = 'myMatrix.begin(112);\n  myMatrix.clear();';
        return '';
    };

//****************显示点*******************************

    Blockly.Arduino.matrix_iic_piexl = function (block) {
        const xVal = Blockly.Arduino.valueToCode(block, 'xVal', Blockly.Arduino.ORDER_ATOMIC);
        const yVal = Blockly.Arduino.valueToCode(block, 'yVal', Blockly.Arduino.ORDER_ATOMIC);
        const matrix_state = this.getFieldValue('state');

        return 'myMatrix.drawPixel('+xVal+'-0,'+yVal+'-0,'+matrix_state+');\n';
    };

//****************显示直线*******************************
Blockly.Arduino.matrix_iic_drawLine = function (block) {
    const x0 = Blockly.Arduino.valueToCode(block, 'X0', Blockly.Arduino.ORDER_ATOMIC);
    const y0 = Blockly.Arduino.valueToCode(block, 'Y0', Blockly.Arduino.ORDER_ATOMIC);
    const x1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
    const y1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
  
    return `myMatrix.drawLine(${x0}, ${y0}, ${x1}, ${y1},HIGH);\n`;
};


//****************显示长方形*******************************
Blockly.Arduino.matrix_iic_drawrectangle = function (block) {
    const x0 = Blockly.Arduino.valueToCode(block, 'X0', Blockly.Arduino.ORDER_ATOMIC);
    const y0 = Blockly.Arduino.valueToCode(block, 'Y0', Blockly.Arduino.ORDER_ATOMIC);
    const l1 = Blockly.Arduino.valueToCode(block, 'L1', Blockly.Arduino.ORDER_ATOMIC);
    const w1 = Blockly.Arduino.valueToCode(block, 'W1', Blockly.Arduino.ORDER_ATOMIC);
  
    return `myMatrix.fillRect(${x0}, ${y0}, ${l1}, ${w1},HIGH);\n`;
};

//****************显示圆形*******************************
Blockly.Arduino.matrix_iic_drawcircle = function (block) {
    const x0 = Blockly.Arduino.valueToCode(block, 'X0', Blockly.Arduino.ORDER_ATOMIC);
    const y0 = Blockly.Arduino.valueToCode(block, 'Y0', Blockly.Arduino.ORDER_ATOMIC);
    const r0 = Blockly.Arduino.valueToCode(block, 'R0', Blockly.Arduino.ORDER_ATOMIC);
  
    return `myMatrix.drawCircle(${x0}, ${y0}, ${r0},HIGH);\n`;
};


//****************显示文本和数字*******************************
Blockly.Arduino.matrix_iic_showChar = function (block) {
    const text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC);
   

    return `myMatrix.setTextSize(1);\nmyMatrix.setTextWrap(false);\nmyMatrix.setTextColor(HIGH);\nmyMatrix.setRotation(0);\nmyMatrix.setCursor(2,0);\nmyMatrix.print(${text});\n`;
};


//****************显示文本和数字滚动*******************************
Blockly.Arduino.matrix_iic_show_loop = function (block) {
    const message = Blockly.Arduino.valueToCode(block, 'MESSAGE', Blockly.Arduino.ORDER_ATOMIC);
    const speed =  Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
    
    return `myMatrix.setTextSize(1);\nmyMatrix.setTextWrap(false);\nmyMatrix.setTextColor(HIGH);\nmyMatrix.setRotation(0);\nmyMatrix.scrollMessage(${message},${speed});\n`;
         
};


Blockly.Arduino.matrix_iic_face = function (block) {
        Blockly.Arduino.definitions_[`1matrix_face`] = 
        'uint8_t matrix_smile[8]={0x00,0x18,0x24,0x00,0x00,0xa5,0xa5,0x42};\n'+
        'uint8_t matrix_front[8]={0x18,0x18,0x18,0x18,0xdb,0x7e,0x3c,0x18};\n'+
        'uint8_t matrix_back[8]={0x18,0x3c,0x7e,0xdb,0x18,0x18,0x18,0x18};\n'+
        'uint8_t matrix_left[8]={0x08,0x0c,0x06,0xff,0xff,0x06,0x0c,0x08};\n'+
        'uint8_t matrix_right[8]={0x10,0x30,0x60,0xff,0xff,0x60,0x30,0x10};\n'+
        'uint8_t matrix_stop[8]={0x00,0x7e,0x42,0x5a,0x5a,0x42,0x7e,0x00};\n'+
        'uint8_t matrix_tsundere[8]={0x00,0x00,0x04,0x28,0x10,0x00,0xe7,0x00};\n'+
        'uint8_t matrix_squinting[8]={0x00,0x00,0x3c,0x81,0x42,0x24,0x42,0x81};\n'+
        'uint8_t matrix_despise1[8]={0x00,0x00,0x3c,0x00,0x00,0xee,0x88,0x00};\n'+
        'uint8_t matrix_speechless[8]={0x00,0x3c,0x24,0x3c,0x00,0x00,0xe7,0x00};\n'+
        'uint8_t matrix_heart[8]={0x18,0x3c,0x7e,0xff,0xff,0xff,0xe7,0x42};\n'+
        'uint8_t matrix_clear[8]={0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00};\n';

        Blockly.Arduino.definitions_[`2matrix_display`] = 'int matrix_display(uint8_t led_array[8])'+
        '{\n'+
        '  for(int i=0; i<8; i++)\n'+
        '  {\n'+
        '    LEDArray[i]=led_array[i];\n'+
        '    for(int j=7; j>=0; j--)\n'+
        '    {\n'+
        '      if((LEDArray[i]&0x01)>0)\n'+
        '      myMatrix.drawPixel(j, i,1);\n'+
        '      LEDArray[i] = LEDArray[i]>>1;\n'+
        '    }\n'+
        '  }\n'+
        '}\n';

        const matrix_face = this.getFieldValue('face');

        return 'matrix_display('+matrix_face+');\n';
    };

    Blockly.Arduino.matrix_iic_refresh = function (block) {
        return 'myMatrix.write();\n';
    };

    Blockly.Arduino.matrix_iic_clear = function (block) {
        return 'myMatrix.clear();\n';
    };


    return Blockly;
}

exports = addGenerator;