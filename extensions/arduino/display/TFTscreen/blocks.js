/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#42CCFF';
    const TFTIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgMTA3Ni40MjI4IDk5OS45OTk5OCIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iTENE5pi+56S65bGPLnN2ZyIKICAgd2lkdGg9IjEwNzYuNDIyOSIKICAgaGVpZ2h0PSIxMDAwIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMi0yIChlODZjODcwODc5LCAyMDIxLTAxLTE1KSI+PG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTE1Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlIC8+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgIGlkPSJkZWZzMTMiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICBib3JkZXJvcGFjaXR5PSIxIgogICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICBncmlkdG9sZXJhbmNlPSIxMCIKICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICBpZD0ibmFtZWR2aWV3MTEiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMC41ODgxMjUwNiIKICAgaW5rc2NhcGU6Y3g9IjIxNy44ODQ3NCIKICAgaW5rc2NhcGU6Y3k9IjYyMC4zMzA1MyIKICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IuWbvuWxgl8xIgogICBpbmtzY2FwZTpkb2N1bWVudC1yb3RhdGlvbj0iMCIgLz4KPHN0eWxlCiAgIHR5cGU9InRleHQvY3NzIgogICBpZD0ic3R5bGUyIj4KCS5zdDB7ZmlsbDojMDBBMEU5O30KPC9zdHlsZT4KCgoKPHJlY3QKICAgc3R5bGU9ImZpbGw6I2ZmMDAwMDtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4wMTg2NCIKICAgaWQ9InJlY3Q4MzMtMiIKICAgd2lkdGg9IjEwNTIuOTk1OCIKICAgaGVpZ2h0PSI3NjguNTExNzgiCiAgIHg9IjEwLjcxMTIzMiIKICAgeT0iMTE5LjAzODQyIgogICByeT0iMzguMDM0NDQ3IiAvPjxyZWN0CiAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMDU4MjkiCiAgIGlkPSJyZWN0ODM1LTMiCiAgIHdpZHRoPSI5MDEuMTEwNTMiCiAgIGhlaWdodD0iNjI3LjM1OTMxIgogICB4PSI4Ny4wMzkxMTYiCiAgIHk9IjE5NS41NzI2OCIKICAgcnk9IjcuNzcxNDEzOCIgLz48cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJtIDMwOC4yNzM0MSw2MTQuMzk4MTEgYyAtMC45LDAgLTEuOCwtMC4yIC0yLjYsLTAuNyAtMi41LC0xLjUgLTMuNCwtNC43IC0xLjksLTcuMiBsIDIzNC4xLC00MDIuMDk5OTkgYyAxLjUsLTIuNSA0LjcsLTMuNCA3LjIsLTEuOSAyLjUsMS41IDMuNCw0LjcgMS45LDcuMiBsIC0yMzQuMiw0MDIuMDk5OTkgYyAtMC45LDEuNyAtMi43LDIuNiAtNC41LDIuNiB6IgogICBpZD0icGF0aDgtMi02IgogICBzdHlsZT0iZmlsbDojZmYwMDAwIiAvPjxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Im0gMjU1LjAwNTIxLDQ2Mi45MzM4MSBjIC0wLjksMCAtMS44LC0wLjIgLTIuNiwtMC43IC0yLjUsLTEuNSAtMy40LC00LjcgLTEuOSwtNy4yIGwgMTQ2LjgsLTI1Mi4yMDAwMiBjIDEuNSwtMi41IDQuNywtMy40MDAwMSA3LjIsLTEuOTAwMDEgMi41LDEuNSAzLjQsNC43MDAwMSAxLjksNy4yMDAwMSBsIC0xNDYuOSwyNTIuMjAwMDIgYyAtMSwxLjYgLTIuNywyLjYgLTQuNSwyLjYgeiIKICAgaWQ9InBhdGg2LTQtMiIKICAgc3R5bGU9ImZpbGw6I2ZmMDAwMCIgLz48L3N2Zz4K';
    
    Blockly.Blocks.tft_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.TFT_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: TFTIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'cs'
                    },
                    {
                        type: 'input_value',
                        name: 'dc'
                    },
                    {
                        type: 'input_value',
                        name: 'rst'
                    },
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tft_background = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.TFT_BG,
                args0: [
                    {
                        type: 'field_image',
                        src: TFTIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'bR'
                    },
                    {
                        type: 'input_value',
                        name: 'bG'
                    },
                    {
                        type: 'input_value',
                        name: 'bB'
                    },
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tft_stroke = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.TFT_STROKE,
                args0: [
                    {
                        type: 'field_image',
                        src: TFTIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 's_r'
                    },
                    {
                        type: 'input_value',
                        name: 's_g'
                    },
                    {
                        type: 'input_value',
                        name: 's_b'
                    },
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tft_nostroke = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.TFT_NOSTROKE,
                args0: [
                    {
                        type: 'field_image',
                        src: TFTIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tft_fill = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.TFT_FILL,
                args0: [
                    {
                        type: 'field_image',
                        src: TFTIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'f_r'
                    },
                    {
                        type: 'input_value',
                        name: 'f_g'
                    },
                    {
                        type: 'input_value',
                        name: 'f_b'
                    },
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tft_nofill = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.TFT_NOFILL,
                args0: [
                    {
                        type: 'field_image',
                        src: TFTIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tft_text = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.TFT_TEXT,
                args0: [
                    {
                        type: 'field_image',
                        src: TFTIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'string'
                    },
                    {
                        type: 'input_value',
                        name: 'x'
                    },
                    {
                        type: 'input_value',
                        name: 'y'
                    },
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tft_textSize = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.TFT_TEXT_S,
                args0: [
                    {
                        type: 'field_image',
                        src: TFTIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'size'
                    },
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tft_point = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.TFT_POINT,
                args0: [
                    {
                        type: 'field_image',
                        src: TFTIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'xp'
                    },
                    {
                        type: 'input_value',
                        name: 'yp'
                    },
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tft_line = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.TFT_LINE,
                args0: [
                    {
                        type: 'field_image',
                        src: TFTIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'xs'
                    },
                    {
                        type: 'input_value',
                        name: 'ys'
                    },
                    {
                        type: 'input_value',
                        name: 'xe'
                    },
                    {
                        type: 'input_value',
                        name: 'ye'
                    },
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tft_rect = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.TFT_RECT,
                args0: [
                    {
                        type: 'field_image',
                        src: TFTIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'xs'
                    },
                    {
                        type: 'input_value',
                        name: 'ys'
                    },
                    {
                        type: 'input_value',
                        name: 'xe'
                    },
                    {
                        type: 'input_value',
                        name: 'ye'
                    },
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tft_width = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.TFT_WIDTH,
                args0: [
                    {
                        type: 'field_image',
                        src: TFTIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tft_height = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.TFT_HEIGHT,
                args0: [
                    {
                        type: 'field_image',
                        src: TFTIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tft_circle = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.TFT_CIRCLE,
                args0: [
                    {
                        type: 'field_image',
                        src: TFTIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'x'
                    },
                    {
                        type: 'input_value',
                        name: 'y'
                    },
                    {
                        type: 'input_value',
                        name: 'radius'
                    },
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;
