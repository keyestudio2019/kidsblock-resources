/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    
    Blockly.Arduino.huskyLensVision_beginI2C = function () {
        Blockly.Arduino.includes_['DFRobot_HuskyLens'] = '#include <DFRobot_HuskyLens.h>';
        Blockly.Arduino.definitions_['DFRobot_HuskyLens'] = 'DFRobot_HuskyLens huskylens;';

        var code = 'huskylens.beginI2CUntilSuccess();\n';
        return code;
    };

   
    Blockly.Arduino.huskyLensVision_writeAlgorithm = function () {
        var algorithm = this.getFieldValue('ALGORITHM');

        var code = 'huskylens.writeAlgorithm('+algorithm+');\n';
        return code;
    };

    
    Blockly.Arduino.huskyLensVision_request = function () {
        
        var code = 'huskylens.request();\n';
        return code;
    };


    
    Blockly.Arduino.huskyLensVision_readLearnedIDCount = function () {
        
        var code = 'huskylens.readLearnedIDCount()';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    
    Blockly.Arduino.huskyLensVision_isAppearDirect = function () {
        var result = this.getFieldValue('RESULT');

        var code = 'huskylens.isAppearDirect(HUSKYLENSResult'+result+')';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    
    Blockly.Arduino.huskyLensVision_readBlockCenterParameterDirect = function () {
        var blockParameter = this.getFieldValue('BLOCK_PARAMETER');
        
        var code = 'huskylens.readBlockCenterParameterDirect().'+blockParameter+'';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    
    Blockly.Arduino.huskyLensVision_readArrowCenterParameterDirect = function () {
        var arrowParameter = this.getFieldValue('ARROW_PARAMETER');
        
        var code = 'huskylens.readArrowCenterParameterDirect().'+arrowParameter+'';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };


    
    Blockly.Arduino.huskyLensVision_isLearned = function () {
        var count = Blockly.Arduino.valueToCode(this, 'COUNT', Blockly.Arduino.ORDER_ATOMIC);

        var code = 'huskylens.isLearned('+count+')';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    
    Blockly.Arduino.huskyLensVision_isAppear = function () {
        var count = Blockly.Arduino.valueToCode(this, 'COUNT', Blockly.Arduino.ORDER_ATOMIC);
        var result = this.getFieldValue('RESULT');

        var code = 'huskylens.isAppear('+count+', HUSKYLENSResult'+result+')';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    
    Blockly.Arduino.huskyLensVision_readBlockParameter = function () {
        var count = Blockly.Arduino.valueToCode(this, 'COUNT', Blockly.Arduino.ORDER_ATOMIC);
        var blockParameter = this.getFieldValue('BLOCK_PARAMETER');
        
        var code = 'huskylens.readBlockParameter('+count+').'+blockParameter+'';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    
    Blockly.Arduino.huskyLensVision_readArrowParameter = function () {
        var count = Blockly.Arduino.valueToCode(this, 'COUNT', Blockly.Arduino.ORDER_ATOMIC);
        var arrowParameter = this.getFieldValue('ARROW_PARAMETER');
        
        var code = 'huskylens.readArrowParameter('+count+').'+arrowParameter+'';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };


   
    Blockly.Arduino.huskyLensVision_readCount = function () {
        var result = this.getFieldValue('RESULT');

        var code = 'huskylens.readCount(HUSKYLENSResult'+result+')';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    
    Blockly.Arduino.huskyLensVision_readBlockParameterDirect = function () {
        var sn = Blockly.Arduino.valueToCode(this, 'SN', Blockly.Arduino.ORDER_ATOMIC);
        var blockParameter = this.getFieldValue('BLOCK_PARAMETER');
        
        var code = 'huskylens.readBlockParameterDirect('+sn+').'+blockParameter+'';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

   
    Blockly.Arduino.huskyLensVision_readArrowParameterDirect = function () {
        var sn = Blockly.Arduino.valueToCode(this, 'SN', Blockly.Arduino.ORDER_ATOMIC);
        var arrowParameter = this.getFieldValue('ARROW_PARAMETER');
        
        var code = 'huskylens.readArrowParameterDirect('+sn+').'+arrowParameter+'';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };


    
    Blockly.Arduino.huskyLensVision_readCount2 = function () {
        var count = Blockly.Arduino.valueToCode(this, 'COUNT', Blockly.Arduino.ORDER_ATOMIC);
        var result = this.getFieldValue('RESULT');

        var code = 'huskylens.readCount('+count+', HUSKYLENSResult'+result+')';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    
    Blockly.Arduino.huskyLensVision_readBlockParameter2 = function () {
        var count = Blockly.Arduino.valueToCode(this, 'COUNT', Blockly.Arduino.ORDER_ATOMIC);
        var sn = Blockly.Arduino.valueToCode(this, 'SN', Blockly.Arduino.ORDER_ATOMIC);
        var blockParameter = this.getFieldValue('BLOCK_PARAMETER');
        
        var code = 'huskylens.readBlockParameter('+count+', '+sn+').'+blockParameter+'';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

   
    Blockly.Arduino.huskyLensVision_readArrowParameter2 = function () {
        var count = Blockly.Arduino.valueToCode(this, 'COUNT', Blockly.Arduino.ORDER_ATOMIC);
        var sn = Blockly.Arduino.valueToCode(this, 'SN', Blockly.Arduino.ORDER_ATOMIC);
        var arrowParameter = this.getFieldValue('ARROW_PARAMETER');
        
        var code = 'huskylens.readArrowParameter('+count+', '+sn+').'+arrowParameter+'';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };


   
    Blockly.Arduino.huskyLensVision_learnOnce = function () {
        var count = Blockly.Arduino.valueToCode(this, 'COUNT', Blockly.Arduino.ORDER_ATOMIC);
        
        var code = 'huskylens.learnOnce('+count+');\n';
        return code;
    };

    
    Blockly.Arduino.huskyLensVision_forgetLearn = function () {
        
        var code = 'huskylens.forgetLearn();\n';
        return code;
    };

    
    Blockly.Arduino.huskyLensVision_writeName = function () {
        var count = Blockly.Arduino.valueToCode(this, 'COUNT', Blockly.Arduino.ORDER_ATOMIC);
        var string = Blockly.Arduino.valueToCode(this, 'STRING', Blockly.Arduino.ORDER_ATOMIC);

        var code = 'huskylens.writeName(String('+string+'), '+count+');\n';
        return code;
    };

    
   
    Blockly.Arduino.huskyLensVision_writeOSD = function () {
        var row = Blockly.Arduino.valueToCode(this, 'ROW', Blockly.Arduino.ORDER_ATOMIC);
        var column = Blockly.Arduino.valueToCode(this, 'COLUMN', Blockly.Arduino.ORDER_ATOMIC);
        var string = Blockly.Arduino.valueToCode(this, 'STRING', Blockly.Arduino.ORDER_ATOMIC);
        
        var code = 'huskylens.writeOSD(String('+string+'), '+row+', '+column+');\n';
        return code;
    };

    
    Blockly.Arduino.huskyLens_screen_row_length = function () {
        const num = this.getFieldValue('NUM');

        return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    
    Blockly.Arduino.huskyLens_screen_column_length = function () {
        const num = this.getFieldValue('NUM');

        return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    
    Blockly.Arduino.huskyLensVision_clearOSD = function () {
        
        var code = 'huskylens.clearOSD();\n';
        return code;
    };


    
    Blockly.Arduino.huskyLensVision_photoToSDCard = function () {
        var photo = this.getFieldValue('PHOTO');

        var code = 'huskylens.'+photo+'ToSDCard();\n';
        return code;
    };

    
    Blockly.Arduino.huskyLensVision_ModelToTFCard = function () {
        var model = this.getFieldValue('MODEL');
        var sn = Blockly.Arduino.valueToCode(this, 'SN', Blockly.Arduino.ORDER_ATOMIC);
        
        var code = 'huskylens.'+model+'('+sn+');\n';
        return code;
    };

  
    Blockly.Arduino.huskyLens_model_dropdown = function () {
        const sn = this.getFieldValue('SN');
        
        return [`${sn}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;