/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.sd_init = function (block) {
        const cs = Blockly.Arduino.valueToCode(block, 'cs', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_.include_sd_init = `#include <SD.h>\n#include <SPI.h>\n`;
        
        Blockly.Arduino.setups_['begin'] = 'SD.begin('+cs+');';
        return '';
    };

    Blockly.Arduino.sd_type = function (block) {
        const cs = Blockly.Arduino.valueToCode(block, 'cs', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.definitions_[`sd2`] = `Sd2Card card;`;
        Blockly.Arduino.setups_['begin'] = 'card.init(SPI_HALF_SPEED, '+cs+');\n';
        return ['card.type()',Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.sd_list = function (block) {
        const cs = Blockly.Arduino.valueToCode(block, 'cs', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.definitions_[`sd2`] = `Sd2Card card;\nSdFile root;\nSdVolume volume;\n`;
        Blockly.Arduino.setups_['begin'] = 'card.init(SPI_HALF_SPEED, ${cs});\n  volume.init(card);\n';
        return 'root.openRoot(volume);\n root.ls(LS_R | LS_DATE | LS_SIZE);\n';
    };

    Blockly.Arduino.sd_var = function (block) {
        const unit = this.getFieldValue('unit');
        const cs = Blockly.Arduino.valueToCode(block, 'cs', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.definitions_[`sd2`] = `Sd2Card card;\nSdVolume volume;\n`;
        Blockly.Arduino.setups_['begin'] = 'card.init(SPI_HALF_SPEED, '+cs+');\n  volume.init(card);\n';
        return [''+unit+'',Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.sd_judge = function (block) {
        const file = Blockly.Arduino.valueToCode(block, 'file', Blockly.Arduino.ORDER_ATOMIC);

        return [`SD.exists(${file})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.sd_delete = function (block) {
        const file = Blockly.Arduino.valueToCode(block, 'file', Blockly.Arduino.ORDER_ATOMIC);

        return `SD.remove(${file});\n`;
    };

    Blockly.Arduino.sd_read = function (block) {
        const file = Blockly.Arduino.valueToCode(block, 'file', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.definitions_[`SD`] = `File datafile;`;
        const code = 'datafile = SD.open('+file+');\n'+
        '  while(datafile.available()) {\n'+
        '   Serial.write(datafile.read());\n'+
        '  }\n'+
        '  datafile.close();\n';
        return code;
    };

    Blockly.Arduino.sd_write = function (block) {
        const file = Blockly.Arduino.valueToCode(block, 'file', Blockly.Arduino.ORDER_ATOMIC);
        const data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
        const unit = this.getFieldValue('unit');
        Blockly.Arduino.definitions_[`SD`] = `File datafile;`;
        const code = 'datafile = SD.open('+file+', FILE_WRITE);\n'+
        '  if(datafile){\n'+
        '   datafile.print('+data+');\n'+
        '   '+unit+'\n'+
        '   datafile.close();\n'+
        '  }\n';
        return code;
    };

    return Blockly;
}

exports = addGenerator;
