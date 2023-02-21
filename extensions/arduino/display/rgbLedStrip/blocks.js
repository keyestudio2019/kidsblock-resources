/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#7700FF';
    const rgb6812IconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNDcuOCA0OC43IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0Ny44IDQ4Ljc7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSI2ODEyIFJHQi5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMC4yLTIgKGU4NmM4NzA4NzksIDIwMjEtMDEtMTUpIj48bWV0YWRhdGEKICAgaWQ9Im1ldGFkYXRhMjkiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGU+PC9kYzp0aXRsZT48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMKICAgaWQ9ImRlZnMyNyIgLz48c29kaXBvZGk6bmFtZWR2aWV3CiAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciCiAgIGlkPSJuYW1lZHZpZXcyNSIKICAgc2hvd2dyaWQ9ImZhbHNlIgogICBpbmtzY2FwZTp6b29tPSIxNy44MDI4NzQiCiAgIGlua3NjYXBlOmN4PSIyMy45IgogICBpbmtzY2FwZTpjeT0iMjYuNTk2ODI5IgogICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0i5Zu+5bGCXzEiIC8+CjxzdHlsZQogICB0eXBlPSJ0ZXh0L2NzcyIKICAgaWQ9InN0eWxlMiI+Cgkuc3Qwe2ZpbGw6I0U2MDAxMjt9Cjwvc3R5bGU+CjxnCiAgIGlkPSJnMjIiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTcuMyw0MC4xTDcuMyw0MC4xYzAtMS42LDEuMy0yLjksMi45LTIuOWgyNy42YzEuNiwwLDIuOSwxLjMsMi45LDIuOVMzOS40LDQzLDM3LjgsNDNIMTAuMiAgIEM4LjYsNDMsNy4zLDQxLjcsNy4zLDQwLjEiCiAgIGlkPSJwYXRoNCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0zNy4yLDI4LjVWMjhjMC0wLjgsMC43LTEuNSwxLjUtMS41aDcuNmMwLjgsMCwxLjUsMC43LDEuNSwxLjV2MC41YzAsMC44LTAuNywxLjUtMS41LDEuNWgtNy42ICAgQzM3LjksMzAsMzcuMiwyOS4zLDM3LjIsMjguNSIKICAgaWQ9InBhdGg2IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTM1LjYsMTcuMmwtMC4zLTAuNGMtMC41LTAuNi0wLjQtMS42LDAuMi0yLjFsNS44LTQuOWMwLjYtMC41LDEuNi0wLjQsMi4xLDAuMmwwLjMsMC40ICAgYzAuNSwwLjYsMC40LDEuNi0wLjIsMi4xbC01LjgsNC45QzM3LDE3LjksMzYuMSwxNy45LDM1LjYsMTcuMiIKICAgaWQ9InBhdGg4IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTI0LjEsMTAuNmgtMC42Yy0wLjgsMC0xLjUtMC43LTEuNS0xLjVWMS41QzIyLDAuNywyMi43LDAsMjMuNSwwSDI0YzAuOCwwLDEuNSwwLjcsMS41LDEuNXY3LjYgICBDMjUuNSw5LjksMjQuOSwxMC42LDI0LjEsMTAuNiIKICAgaWQ9InBhdGgxMCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0xMi45LDE2LjNsLTAuNCwwLjRjLTAuNSwwLjYtMS40LDAuOC0yLjEsMC4zbC02LTQuNmMtMC43LTAuNS0wLjgtMS40LTAuMy0yLjFsMC4zLTAuNCAgIGMwLjUtMC42LDEuNC0wLjgsMi4xLTAuM2w2LDQuNkMxMy4yLDE0LjcsMTMuNCwxNS43LDEyLjksMTYuMyIKICAgaWQ9InBhdGgxMiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0xMC41LDI4LjF2MC41YzAsMC44LTAuNywxLjUtMS41LDEuNGwtNy42LTAuMmMtMC44LDAtMS41LTAuNy0xLjQtMS41di0wLjVjMC0wLjgsMC43LTEuNSwxLjUtMS40bDcuNiwwLjIgICBDOS45LDI2LjYsMTAuNSwyNy4zLDEwLjUsMjguMSIKICAgaWQ9InBhdGgxNCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0xMS43LDQxLjlWMjIuN2MwLTYuNCw1LjItMTEuNiwxMS42LTExLjZoMS41YzYuNCwwLDExLjYsNS4yLDExLjYsMTEuNnYxOS4xSDExLjdWNDEuOXogTTMzLjQsMjIuNyAgIGMwLTQuNy0zLjktOC42LTguNi04LjZoLTEuNWMtNC43LDAtOC42LDMuOS04LjYsOC42djE2LjFoMTguN0MzMy40LDM4LjgsMzMuNCwyMi43LDMzLjQsMjIuN3oiCiAgIGlkPSJwYXRoMTYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMjQsMzIuM2MtMS44LDAtMy4yLTEuNC0zLjItMy4yczEuNC0zLjIsMy4yLTMuMnMzLjIsMS40LDMuMiwzLjJTMjUuOCwzMi4zLDI0LDMyLjMiCiAgIGlkPSJwYXRoMTgiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMTgsMzIuNGMwLTAuNSwwLjItMS4zLDAuOC0yYzEtMS4xLDIuNi0xLjYsNC45LTEuNmM1LjgsMCw2LjQsMy44LDYuNCw0VjMzdjE0LjVjMCwwLjctMC41LDEuMi0xLjIsMS4yICAgcy0xLjItMC41LTEuMi0xLjJWMzMuMWMtMC4xLTAuMy0wLjctMS45LTQtMS45Yy0yLjcsMC0zLjQsMC45LTMuNCwxLjN2MTVjMCwwLjctMC41LDEuMi0xLjIsMS4ycy0xLjItMC41LTEuMi0xLjJWMzIuNiAgIEMxOCwzMi41LDE4LDMyLjUsMTgsMzIuNCIKICAgaWQ9InBhdGgyMCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KPC9nPgo8L3N2Zz4K';
    
    const secondaryColour = '#4400B3';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.rgbLedStrip_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBLEDSTRIP_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: rgb6812IconUrl,
                        width: 50,
                        height: 27
                    }
                ],

                args1: [
                    {
                        type: 'input_value',
                        name: 'LEN'
                    },
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


    Blockly.Blocks.rgbLedStrip_setPixelColor = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBLEDSTRIP_SETPIXELCOLOR,
                args0: [
                    {
                        type: 'field_image',
                        src: rgb6812IconUrl,
                        width: 50,
                        height: 27
                    }    
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'NO'
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

    Blockly.Blocks.rgbLedStrip_fill = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBLEDSTRIP_FILL,
                args0: [
                    {
                        type: 'field_image',
                        src: rgb6812IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'FIRST'
                    },
                    {
                        type: 'input_value',
                        name: 'COUNT'
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

    Blockly.Blocks.rgbLedStrip_color = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBLEDSTRIP_COLOR,
                args0: [
                    {
                        type: 'field_image',
                        src: rgb6812IconUrl,
                        width: 50,
                        height: 27
                    }
                ],

                args1: [
                    {
                        type: 'input_value',
                        name: 'R'
                    },
                    {
                        type: 'input_value',
                        name: 'G'
                    },
                    {
                        type: 'input_value',
                        name: 'B'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.rgbLedStrip_setBrightness = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBLEDSTRIP_SETBRIGHTNESS,
                args0: [
                    {
                        type: 'field_image',
                        src: rgb6812IconUrl,
                        width: 50,
                        height: 27
                    }
                ],

                args1: [
                    {
                        type: 'input_value',
                        name: 'BRT'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.rgbLedStrip_clear = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBLEDSTRIP_CLEAR,
                args0: [
                    {
                        type: 'field_image',
                        src: rgb6812IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.rgbLedStrip_show = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.RGBLEDSTRIP_SHOW,
                args0: [
                    {
                        type: 'field_image',
                        src: rgb6812IconUrl,
                        width: 50,
                        height: 27
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
