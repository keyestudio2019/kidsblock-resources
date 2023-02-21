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


    Blockly.Arduino.motor130_digital = function (block) {
        const state1 = this.getFieldValue('state1');

        Blockly.Arduino.includes_.include_motor_init = '#include <MecanumCar_v2.h>\n';
        Blockly.Arduino.definitions_[`mecanum`] = 'mecanumCar mecanumCar(3, 2);  //sda-->3,scl-->2\n';

        Blockly.Arduino.setups_[`motor130_s`] = 'mecanumCar.Init();\n';
        return 'mecanumCar.'+state1+';\n';
    };

    Blockly.Arduino.led = function (block) {
        const led1 = this.getFieldValue('led1');
        const state = this.getFieldValue('state');

        Blockly.Arduino.includes_.include_motor_init = '#include <MecanumCar_v2.h>\n';
        Blockly.Arduino.definitions_[`mecanum`] = 'mecanumCar mecanumCar(3, 2);  //sda-->3,scl-->2\n';

        Blockly.Arduino.setups_[`motor130_s`] = 'mecanumCar.Init();\n';
        return 'mecanumCar.'+led1+''+state+';\n';
    };

    Blockly.Arduino.car_serial = function (block) {
        // return 'Serial.readStringUntil(\'#\');\n';
        return ['Serial.readStringUntil(\'#\')', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.rgb6812_init = function (block) {
        const pin = block.getFieldValue('pin');
        const state = this.getFieldValue('state');
        const count = Blockly.Arduino.valueToCode(block, 'count', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.definitions_[`NeoPixel`] = '#include <Adafruit_NeoPixel.h>\nAdafruit_NeoPixel rgb_display_'+pin+' = Adafruit_NeoPixel('+count+','+pin+','+state+');\n';

        Blockly.Arduino.setups_[`NeoPixel_setup`] = 'rgb_display_'+pin+'.begin();\n';
        return '';
    };

    Blockly.Arduino.dis_rgb = function (block) {
        const pin = block.getFieldValue('pin');
        const lights = Blockly.Arduino.valueToCode(block, 'lights', Blockly.Arduino.ORDER_ATOMIC);
        const red = Blockly.Arduino.valueToCode(block, 'red', Blockly.Arduino.ORDER_ATOMIC);
        const green = Blockly.Arduino.valueToCode(block, 'green', Blockly.Arduino.ORDER_ATOMIC);
        const blue = Blockly.Arduino.valueToCode(block, 'blue', Blockly.Arduino.ORDER_ATOMIC);

        return 'rgb_display_'+pin+'.setPixelColor(('+lights+')-1, (('+red+' & 0xffffff) << 16) | (('+green+' & 0xffffff) << 8) | '+blue+');\n';
    };

    Blockly.Arduino.rgb6812_brightness = function (block) {
        const pin = block.getFieldValue('pin');
        const brightness = Blockly.Arduino.valueToCode(block, 'brightness', Blockly.Arduino.ORDER_ATOMIC);

        return 'rgb_display_'+pin+'.setBrightness('+brightness+');\n';
    };

    Blockly.Arduino.rgb6812_show = function (block) {
        const pin = block.getFieldValue('pin');

        return 'rgb_display_'+pin+'.show();\n';
    };

    Blockly.Arduino.rgb6812_clear = function (block) {
        const pin = block.getFieldValue('pin');

        return 'rgb_display_'+pin+'.clear();\n';
    };


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



    return Blockly;
}

exports = addGenerator;