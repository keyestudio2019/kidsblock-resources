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

//*******************LED**********************
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


//*******************button**********************
    Blockly.Arduino['blueButton_readState'] = function(block) {
        var arg0 = block.getFieldValue('pin');
        var code = "(digitalRead(" + arg0 + ")==1)";
        // const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.setups_.blueButton_init = `pinMode(${arg0}, INPUT);`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino['Button_readValue'] = function(block) {
        var arg0 = block.getFieldValue('pin');
        var code = "digitalRead(" + arg0 + ")";
        Blockly.Arduino.setups_.Button_init = `pinMode(${arg0}, INPUT);`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };   

//******************light**********************
    Blockly.Arduino['lightSensor_readValue'] = function(block) {
        var arg0 = block.getFieldValue('pin');
        var code = "analogRead(" + arg0 + ")";
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

//******************Voice**********************
    Blockly.Arduino['analogVoice_readValue'] = function(block) {
        var arg0 = block.getFieldValue('PIN');
        var code = "analogRead(" + arg0 + ")";
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };


//*******************蜂鸣器**********************
  
    Blockly.Arduino.buzzer_tone = function (block) {
        const pin = block.getFieldValue('PIN');
        const fre = this.getFieldValue('fre');

        Blockly.Arduino.setups_[`buzzer_${pin}`] = 'pinMode('+pin+', OUTPUT);\n';
        return 'tone('+pin+', '+fre+');\n';
    };
//*******************蜂鸣器发出声音**********************
    Blockly.Arduino.buzzer_tone_d = function (block) {
        const pin = block.getFieldValue('PIN');
        const fre = this.getFieldValue('fre');
        const dur = this.getFieldValue('dur');

        Blockly.Arduino.setups_[`buzzer_${pin}`] = 'pinMode('+pin+', OUTPUT);\n';
        return 'tone('+pin+', '+fre+');\ndelay('+dur+');\n';
    };
//*******************蜂鸣器播放音乐**********************
    Blockly.Arduino.buzzer_music = function (block) {
        const pin = block.getFieldValue('PIN');
        const mus = this.getFieldValue('mus');
        Blockly.Arduino.includes_.include_music_init = `#include<music.h>\n`;
        Blockly.Arduino.definitions_[`music_${pin}`] = 'music Music('+pin+');';

        Blockly.Arduino.setups_[`buzzer_${pin}`] = 'pinMode('+pin+', OUTPUT);\n';
        return ''+mus+'\n';
    };

//*******************蜂鸣器结束声音**********************
    Blockly.Arduino.buzzer_notone = function (block) {
        const pin = block.getFieldValue('PIN');

        Blockly.Arduino.setups_[`buzzer_${pin}`] = 'pinMode('+pin+', OUTPUT);\n';
        return 'noTone('+pin+');\n';
    };

    //****************ws2812 RGB LED*******************


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


    Blockly.Arduino.rgb_change=function(block) {
        var dropdown_rgbpin = block.getFieldValue('PIN');
        var wait_time = Blockly.Arduino.valueToCode(this, 'WAIT',Blockly.Arduino.ORDER_ATOMIC);
        var value_brightness = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.definitions_['include_Adafruit_NeoPixel'] = '#include <Adafruit_NeoPixel.h>';
        if (!Blockly.Arduino.definitions_['var_rgb_display' + dropdown_rgbpin]) {
          Blockly.Arduino.definitions_['var_rgb_display' + dropdown_rgbpin] = 'Adafruit_NeoPixel  rgb_display_'+dropdown_rgbpin+'(25,'+dropdown_rgbpin+', NEO_GRB + NEO_KHZ800);';
          Blockly.Arduino.setups_['setup_rgb_display_begin_' + dropdown_rgbpin] = 'rgb_display_'+dropdown_rgbpin+'.begin();';
          '(25,'+ dropdown_rgbpin +', NEO_GRB + NEO_KHZ800);';
          Blockly.Arduino.setups_['setup_rgb_display_setBrightness' + dropdown_rgbpin]  = 'rgb_display_'+dropdown_rgbpin+'.setBrightness('+value_brightness+');';
        }
        var funcName2 = 'Wheel';
        var code2  = 'uint32_t Wheel(byte WheelPos) {\n';
        code2 += 'if(WheelPos < 85) {return rgb_display_'+dropdown_rgbpin+'.Color(WheelPos * 3, 255 - WheelPos * 3, 0);} \n';
        code2 += 'else if(WheelPos < 170) {WheelPos -= 85; return rgb_display_'+dropdown_rgbpin+'.Color(255 - WheelPos * 3, 0, WheelPos * 3);}\n ';
        code2 += 'else {WheelPos -= 170;return rgb_display_'+dropdown_rgbpin+'.Color(0, WheelPos * 3, 255 - WheelPos * 3);}\n';
        code2 += '}\n';
        Blockly.Arduino.definitions_[funcName2] = code2;
    
        var funcName3 = 'rainbow';
        var code3  = 'void rainbow(uint8_t wait) { uint16_t i, j;\n';
        code3 += '      for(j=0; j<256; j++) {               \n';
        code3 += '        for(i=0; i<rgb_display_'+dropdown_rgbpin+'.numPixels(); i++) {\n';
        code3 += '         rgb_display_'+dropdown_rgbpin+'.setPixelColor(i, Wheel((i+j) & 255));}\n';                    
        code3 += '      rgb_display_'+dropdown_rgbpin+'.show();\n';
        code3 += '      delay(wait);}}\n';
    
        Blockly.Arduino.definitions_[funcName3] = code3;
    
        var code = 'rainbow('+ wait_time+');\n'
        return code;
      };


      Blockly.Arduino.rgb_loop=function(block){
        var dropdown_rgbpin = block.getFieldValue('PIN');
        var wait_time = Blockly.Arduino.valueToCode(this, 'WAIT',Blockly.Arduino.ORDER_ATOMIC);
        var value_brightness = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.definitions_['include_Adafruit_NeoPixel'] = '#include <Adafruit_NeoPixel.h>';
        if (!Blockly.Arduino.definitions_['var_rgb_display' + dropdown_rgbpin]) {
          Blockly.Arduino.definitions_['var_rgb_display' + dropdown_rgbpin] = 'Adafruit_NeoPixel  rgb_display_' + dropdown_rgbpin + '(25,'+ dropdown_rgbpin +', NEO_GRB + NEO_KHZ800);';
          Blockly.Arduino.setups_['setup_rgb_display_begin_' + dropdown_rgbpin] = 'rgb_display_' + dropdown_rgbpin + '.begin();';
          
          Blockly.Arduino.setups_['setup_rgb_display_setBrightness' + dropdown_rgbpin]  = 'rgb_display_'+dropdown_rgbpin+'.setBrightness('+value_brightness+');';
        }
        var funcName2 = 'Wheel';
        var code2  = 'uint32_t Wheel(byte WheelPos) {\n';
        code2 += 'if(WheelPos < 85) {return rgb_display_'+dropdown_rgbpin+'.Color(WheelPos * 3, 255 - WheelPos * 3, 0);} \n';
        code2 += 'else if(WheelPos < 170) {WheelPos -= 85; return rgb_display_'+dropdown_rgbpin+'.Color(255 - WheelPos * 3, 0, WheelPos * 3);}\n ';
        code2 += 'else {WheelPos -= 170;return rgb_display_'+dropdown_rgbpin+'.Color(0, WheelPos * 3, 255 - WheelPos * 3);}\n';
        code2 += '}\n';
        Blockly.Arduino.definitions_[funcName2] = code2;
    
        var funcName3 = 'rainbow';
        var code3  = 'void rainbow(uint8_t wait) { uint16_t i, j;\n';
        code3 += '      for(j=0; j<256; j++) {               \n';
        code3 += '        for(i=0; i<rgb_display_'+dropdown_rgbpin+'.numPixels(); i++) {\n';
        code3 += '         rgb_display_'+dropdown_rgbpin+'.setPixelColor(i, Wheel((i+j) & 255));}\n';                    
        code3 += '      rgb_display_'+dropdown_rgbpin+'.show();\n';
        code3 += '      delay(wait);}}\n';
    
        Blockly.Arduino.definitions_[funcName3] = code3;
    
        var funcName4 = 'rainbowCycle';
        var code4  = 'void rainbowCycle(uint8_t wait) {uint16_t i, j;\n';
        code4 += '    for(j=0; j<256*5; j++) { // 5 cycles of all colors on wheel\n';
        code4 += '      for(i=0; i< rgb_display_'+dropdown_rgbpin+'.numPixels(); i++) {\n';
        code4 += '        rgb_display_'+dropdown_rgbpin+'.setPixelColor(i, Wheel(((i * 256 / rgb_display_'+dropdown_rgbpin+'.numPixels()) + j) & 255));}\n';
        code4 += '     rgb_display_'+dropdown_rgbpin+'.show();\n';
        code4 += '     delay(wait);}}\n';
    
        Blockly.Arduino.definitions_[funcName4] = code4;
    
        var code = 'rainbowCycle('+ wait_time+');\n'
        return code;
      };



    Blockly.Arduino.rgbLedStrip_clear = function () {
        return `ledStrip.clear();\n`;
    };

    Blockly.Arduino.rgbLedStrip_show = function () {
        return `ledStrip.show();\n`;
    };


    //****************8*16 MatirxDisplay*******************

    Blockly.Arduino.MatirxDisplay_init = function (block) {
     
        Blockly.Arduino.includes_.MatirxDisplay_init = `#include <Wire.h>\n#include <Keyestudio_GFX.h>\n#include <Keyestudio_LEDBackpack.h>`;
        Blockly.Arduino.definitions_.MatirxDisplay_init = `Keyestudio_8x16matrix matrix = Keyestudio_8x16matrix();`;
        Blockly.Arduino.setups_[`matrix`] = 'matrix.begin(0x70);\n';
        return ``;
    };

//****************显示点*******************************
    Blockly.Arduino.MatirxDisplay_drawPixel = function (block) {
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
       

        return `matrix.clear();\nmatrix.drawPixel(${x}, ${y},LED_ON);\n matrix.writeDisplay();\n`;

    };

//****************显示直线*******************************
    Blockly.Arduino.MatirxDisplay_drawLine = function (block) {
        const x0 = Blockly.Arduino.valueToCode(block, 'X0', Blockly.Arduino.ORDER_ATOMIC);
        const y0 = Blockly.Arduino.valueToCode(block, 'Y0', Blockly.Arduino.ORDER_ATOMIC);
        const x1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
        const y1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
      
        return `matrix.clear();\nmatrix.drawLine(${x0}, ${y0}, ${x1}, ${y1},LED_ON);\n matrix.writeDisplay();\n`;
    };


//****************显示长方形*******************************
    Blockly.Arduino.MatirxDisplay_drawrectangle = function (block) {
        const x0 = Blockly.Arduino.valueToCode(block, 'X0', Blockly.Arduino.ORDER_ATOMIC);
        const y0 = Blockly.Arduino.valueToCode(block, 'Y0', Blockly.Arduino.ORDER_ATOMIC);
        const l1 = Blockly.Arduino.valueToCode(block, 'L1', Blockly.Arduino.ORDER_ATOMIC);
        const w1 = Blockly.Arduino.valueToCode(block, 'W1', Blockly.Arduino.ORDER_ATOMIC);
      
        return `matrix.clear();\nmatrix.fillRect(${x0}, ${y0}, ${l1}, ${w1},LED_ON);\n matrix.writeDisplay();\n`;
    };

//****************显示圆形*******************************
    Blockly.Arduino.MatirxDisplay_drawcircle = function (block) {
        const x0 = Blockly.Arduino.valueToCode(block, 'X0', Blockly.Arduino.ORDER_ATOMIC);
        const y0 = Blockly.Arduino.valueToCode(block, 'Y0', Blockly.Arduino.ORDER_ATOMIC);
        const r0 = Blockly.Arduino.valueToCode(block, 'R0', Blockly.Arduino.ORDER_ATOMIC);
      
        return `matrix.clear();\nmatrix.drawCircle(${x0}, ${y0}, ${r0},LED_ON);\n matrix.writeDisplay();\n`;
    };


//****************显示文本和数字*******************************
    Blockly.Arduino.MatirxDisplay_showChar = function (block) {
        const text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC);
       

        return `matrix.setTextSize(1);\nmatrix.setTextWrap(false);\nmatrix.setTextColor(LED_ON);\nmatrix.setRotation(1);\nmatrix.clear();\nmatrix.setCursor(2,0);\nmatrix.print(${text});\nmatrix.writeDisplay();\n`;
    };


//****************显示文本和数字滚动*******************************
    Blockly.Arduino.MatirxDisplay_show_loop = function (block) {
        const number = Blockly.Arduino.valueToCode(block, 'NUMBER', Blockly.Arduino.ORDER_ATOMIC);
    
      
        return `matrix.setTextSize(1);\nmatrix.setTextWrap(false);\nmatrix.setTextColor(LED_ON);\nmatrix.setRotation(1);\nfor(int8_t x=7; x>=-36; x--)\n{matrix.clear();\nmatrix.setCursor(x,0);\nmatrix.print(${number});\nmatrix.writeDisplay();\ndelay(100);};\n`;
             
    };

//****************显示图片*******************************
    Blockly.Arduino.MatirxDisplay_image = function (block) {

        const image = block.getFieldValue('IMAGE');

        Blockly.Arduino.definitions_[`matrix_image`] = 
        'static const uint8_t PROGMEM smile_bmp[]={0x00, 0x00, 0x04, 0x02, 0x02, 0x02, 0x44, 0x80, 0x80, 0x80, 0x44, 0x02, 0x02, 0x02, 0x04, 0x00,};\n'+
        'static const uint8_t PROGMEM tsundere_bmp[]={0x00, 0x02, 0x02, 0x02, 0x02, 0x22, 0x10, 0x08, 0x10, 0x20, 0x42, 0x82, 0x02, 0x02, 0x02, 0x00,};\n'+
        'static const uint8_t PROGMEM squinting_bmp[]={ 0x00, 0x22, 0x14, 0x08, 0x00, 0x00, 0x40, 0x40, 0x40, 0x40, 0x00, 0x00, 0x08, 0x14, 0x22, 0x00,};\n'+
        'static const uint8_t PROGMEM despise1_bmp[]={0x00, 0x00, 0x0e, 0x08, 0x08, 0x08, 0x40, 0x40, 0x40, 0x40, 0x0e, 0x08, 0x08, 0x08, 0x00, 0x00,};\n'+
        'static const uint8_t PROGMEM speechless_bmp[]={0x00, 0x00, 0x02, 0x02, 0x02, 0x02, 0x70, 0x50, 0x50, 0x70, 0x02, 0x02, 0x02, 0x02, 0x00, 0x00,};\n'+
        'static const uint8_t PROGMEM heart_bmp[]={0x00, 0x00, 0x04, 0x0a, 0x11, 0x21, 0x42, 0x84, 0x88, 0x84, 0x42, 0x21, 0x11, 0x0a, 0x04, 0x00,};\n'+
        'static const uint8_t PROGMEM front_bmp[]={0x00, 0x00, 0x00, 0x00, 0x08, 0x04, 0x02, 0x7e, 0x7e, 0x02, 0x04, 0x08, 0x00, 0x00, 0x00, 0x00,};\n'+
        'static const uint8_t PROGMEM back_bmp[]={0x00, 0x00, 0x00, 0x00, 0x08, 0x10, 0x20, 0x7e, 0x7e, 0x20, 0x10, 0x08, 0x00, 0x00, 0x00, 0x00,};\n'+
        'static const uint8_t PROGMEM right_bmp[]={0x00, 0x00, 0x00, 0x00, 0x18, 0x18, 0x18, 0x18, 0x99, 0x5a, 0x3c, 0x18, 0x00, 0x00, 0x00, 0x00,};\n'+
        'static const uint8_t PROGMEM left_bmp[]={0x00, 0x00, 0x00, 0x00, 0x18, 0x3c, 0x5a, 0x99, 0x18, 0x18, 0x18, 0x18, 0x00, 0x00, 0x00, 0x00,};\n'+
        'static const uint8_t PROGMEM stop_bmp[]={0x00, 0x00, 0x00, 0x00, 0x18, 0x18, 0x18, 0x18, 0x18, 0x18, 0x18, 0x18, 0x00, 0x00, 0x00, 0x00,};\n'
       

        return `matrix.clear();\nmatrix.drawBitmap(0, 0, ${image}, 8, 16, LED_ON);\nmatrix.writeDisplay();\n`;

    };

    return Blockly;
}

exports = addGenerator;