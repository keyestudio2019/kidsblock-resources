/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#A0522D';
    const secondaryColour = '#8B4513';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.ws2812b_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WS2812B_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'NUM',
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ws2812b_brightnessNumber = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                args0: [
                    {
                        type: 'field_slider',
                        name: 'NUM',
                        value: '255',
                        precision: 1,
                        min: '0',
                        max: '255'
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

    Blockly.Blocks.ws2812b_setBrightness = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WS2812B_SETBRIGHTNESS,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'BRIGHTNESS',
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ws2812b_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WS2812B_CLEAR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ws2812b_setRangeColor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WS2812B_SETRANGECOLOR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'START',
                    },
                    {
                        type: 'input_value',
                        name: 'END',
                    },
                    {
                        type: 'input_value',
                        name: 'COLOR'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ws2812b_rgbToColor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WS2812B_RGBTOCOLOR,
                args0: [
                    {
                        type: 'input_value',
                        name: 'RED',
                    },
                    {
                        type: 'input_value',
                        name: 'GREEN',
                    },
                    {
                        type: 'input_value',
                        name: 'BLUE'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.ws2812b_showRainbow = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WS2812B_SHOWRAINBOW,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'NUM1',
                    },
                    {
                        type: 'input_value',
                        name: 'NUM2',
                    },
                    {
                        type: 'input_value',
                        name: 'COR1'
                    },
                    {
                        type: 'input_value',
                        name: 'COR2'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ws2812b_shift = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WS2812B_SHIFT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'NUM',
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ws2812b_rotate = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WS2812B_ROTATE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'NUM',
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ws2812b_showBarGraph = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WS2812B_SHOWBARGRAPH,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'NUM1',
                    },
                    {
                        type: 'input_value',
                        name: 'NUM2',
                    },
                    {
                        type: 'input_value',
                        name: 'VAL1'
                    },
                    {
                        type: 'input_value',
                        name: 'VAL2'
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
