/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
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

    return Blockly;
}

exports = addGenerator;
