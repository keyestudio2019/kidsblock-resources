/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#4C97FF';

    Blockly.Blocks.tm1650_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TM1650_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NUM',
                        options: [
                            [Blockly.Msg.TM1650_1, '1'],
                            [Blockly.Msg.TM1650_2, '2'],
                            [Blockly.Msg.TM1650_3, '3'],
                            [Blockly.Msg.TM1650_4, '4']
                        ]
                    }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tm1650_screenSet = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TM1650_SCREENSET,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NUM',
                        options: [
                            [Blockly.Msg.TM1650_1, '1'],
                            [Blockly.Msg.TM1650_2, '2'],
                            [Blockly.Msg.TM1650_3, '3'],
                            [Blockly.Msg.TM1650_4, '4']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
                            [Blockly.Msg.TM1650_ON, 'displayOn'],
                            [Blockly.Msg.TM1650_OFF, 'displayOff'],
                            [Blockly.Msg.TM1650_CLEAR, 'clear']
                        ]
                    }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tm1650_show = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TM1650_SHOW,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NUM',
                        options: [
                            [Blockly.Msg.TM1650_1, '1'],
                            [Blockly.Msg.TM1650_2, '2'],
                            [Blockly.Msg.TM1650_3, '3'],
                            [Blockly.Msg.TM1650_4, '4']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'TEXT'
                    }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tm1650_setDot = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TM1650_SETDOT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NUM',
                        options: [
                            [Blockly.Msg.TM1650_1, '1'],
                            [Blockly.Msg.TM1650_2, '2'],
                            [Blockly.Msg.TM1650_3, '3'],
                            [Blockly.Msg.TM1650_4, '4']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DOT_NUM',
                        options: [
                            [Blockly.Msg.TM1650_1, '1'],
                            [Blockly.Msg.TM1650_2, '2'],
                            [Blockly.Msg.TM1650_3, '3'],
                            [Blockly.Msg.TM1650_4, '4']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
                            [Blockly.Msg.TM1650_LIGHT, 'true'],
                            [Blockly.Msg.TM1650_UNLIGHT, 'false'],
                        ]
                    }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
