/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#BE77FF';
    const secondaryColour = '#A9A9A9';

    Blockly.Blocks.ssd1306_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SSD1306_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NUM',
                        options: [
                            [Blockly.Msg.SSD1306_1, '1'],
                            [Blockly.Msg.SSD1306_2, '2'],
                            [Blockly.Msg.SSD1306_3, '3'],
                            [Blockly.Msg.SSD1306_4, '4']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'ADDR'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ssd1306_printline = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SSD1306_PRINTLINE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NUM',
                        options: [
                            [Blockly.Msg.SSD1306_1, '1'],
                            [Blockly.Msg.SSD1306_2, '2'],
                            [Blockly.Msg.SSD1306_3, '3'],
                            [Blockly.Msg.SSD1306_4, '4']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'LINE',
                        options: [
                            [Blockly.Msg.SSD1306_1, '1'],
                            [Blockly.Msg.SSD1306_2, '2'],
                            [Blockly.Msg.SSD1306_3, '3'],
                            [Blockly.Msg.SSD1306_4, '4']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'TEXT'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ssd1306_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SSD1306_CLEAR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NUM',
                        options: [
                            [Blockly.Msg.SSD1306_1, '1'],
                            [Blockly.Msg.SSD1306_2, '2'],
                            [Blockly.Msg.SSD1306_3, '3'],
                            [Blockly.Msg.SSD1306_4, '4']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ssd1306_setRotaion = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SSD1306_SETROTAION,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NUM',
                        options: [
                            [Blockly.Msg.SSD1306_1, '1'],
                            [Blockly.Msg.SSD1306_2, '2'],
                            [Blockly.Msg.SSD1306_3, '3'],
                            [Blockly.Msg.SSD1306_4, '4']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'ANGLE',
                        options: [
                            ['180', '180'],
                            ['0', '0']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ssd1306_x = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                args0: [
                    {
                        type: 'field_slider',
                        name: 'XNUM',
                        value: '42',
                        precision: 1,
                        min: '0',
                        max: '127'
                    }
                ],
                output: 'Number',
                outputShape: Blockly.OUTPUT_SHAPE_ROUND,
                colour: Blockly.Colours.textField,
                colourSecondary: Blockly.Colours.textField,
                colourTertiary: Blockly.Colours.textField
            });
        }
    };

    Blockly.Blocks.ssd1306_print = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SSD1306_PRINT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NUM',
                        options: [
                            [Blockly.Msg.SSD1306_1, '1'],
                            [Blockly.Msg.SSD1306_2, '2'],
                            [Blockly.Msg.SSD1306_3, '3'],
                            [Blockly.Msg.SSD1306_4, '4']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Y',
                        options: [
                            [Blockly.Msg.SSD1306_0, '0'],
                            [Blockly.Msg.SSD1306_1, '1'],
                            [Blockly.Msg.SSD1306_2, '2'],
                            [Blockly.Msg.SSD1306_3, '3']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'TEXT'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
