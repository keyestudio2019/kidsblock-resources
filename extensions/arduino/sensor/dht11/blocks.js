/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#42CCFF';
    const dhtIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgMzMuNCA0NC4zOTk5OTkiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIHNvZGlwb2RpOmRvY25hbWU9Iua4qea5v+W6pi5zdmciCiAgIHdpZHRoPSIzMy40MDAwMDIiCiAgIGhlaWdodD0iNDQuNDAwMDAyIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMi0yIChlODZjODcwODc5LCAyMDIxLTAxLTE1KSI+PG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTM5Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgIGlkPSJkZWZzMzciIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICBib3JkZXJvcGFjaXR5PSIxIgogICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICBncmlkdG9sZXJhbmNlPSIxMCIKICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICBpZD0ibmFtZWR2aWV3MzUiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMjUuMTgwMTc5IgogICBpbmtzY2FwZTpjeD0iMTYuNzAwMDAxIgogICBpbmtzY2FwZTpjeT0iMzQuOTA4NDA5IgogICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0i5Zu+5bGCXzEiIC8+CjxzdHlsZQogICB0eXBlPSJ0ZXh0L2NzcyIKICAgaWQ9InN0eWxlMiI+Cgkuc3Qwe2ZpbGw6IzAwQTBFOTt9Cjwvc3R5bGU+CjxnCiAgIGlkPSJnMzIiCiAgIHRyYW5zZm9ybT0icm90YXRlKDkwLDE2LjcsMTYuNykiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0ibSA1LjEsMTAuNiBjIC0xLjksMCAtMy41LC0xLjUgLTMuNSwtMy41IDAsLTIgMS42LC0zLjUgMy41LC0zLjUgMS45LDAgMy41LDEuNSAzLjUsMy41IDAsMiAtMS42LDMuNSAtMy41LDMuNSBtIDAsLTUuNSBDIDQsNS4xIDMsNiAzLDcuMSBjIDAsMS4xIDEsMi4xIDIuMSwyLjEgMS4xLDAgMi4xLC0wLjkgMi4xLC0yLjEgMCwtMS4yIC0xLC0yIC0yLjEsLTIgeiIKICAgaWQ9InBhdGg0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTSAyLjEsOC41IEMgMC45LDguNSAwLDcuOCAwLDcgMCw2LjIgMC45LDUuNSAyLjEsNS41IFoiCiAgIGlkPSJwYXRoNiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0gMTAuOCw0LjggQyA5LjUsNC44IDguNCwzLjcgOC40LDIuNCA4LjQsMS4xIDkuNSwwIDEwLjgsMCBjIDEuMywwIDIuNCwxLjEgMi40LDIuNCAwLDEuMyAtMS4xLDIuNCAtMi40LDIuNCBNIDEwLjgsMSBDIDEwLDEgOS4zLDEuNiA5LjMsMi40IGMgMCwwLjggMC42LDEuNCAxLjQsMS40IDAuOCwwIDEuNCwtMC42IDEuNCwtMS40IEMgMTIuMiwxLjYgMTEuNiwxIDEwLjgsMSBaIgogICBpZD0icGF0aDgiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNIDguNywzLjMgQyA3LjksMy4zIDcuMiwyLjggNy4yLDIuMiA3LjIsMS42IDcuOCwxLjEgOC43LDEuMSBaIgogICBpZD0icGF0aDEwIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0ibSAzNi4xLDIwLjcgYyAtMi4xLDAgLTMuOSwtMS43IC0zLjksLTMuOSAwLC0yLjIgMS44LC0zLjggMy45LC0zLjggMi4xLDAgMy45LDEuNyAzLjksMy45IDAsMi4yIC0xLjgsMy44IC0zLjksMy44IG0gMCwtNi4zIGMgLTEuNCwwIC0yLjUsMS4xIC0yLjUsMi41IDAsMS40IDEuMSwyLjUgMi41LDIuNSAxLjQsMCAyLjUsLTEuMSAyLjUsLTIuNSAwLC0xLjQgLTEuMSwtMi41IC0yLjUsLTIuNSB6IgogICBpZD0icGF0aDEyIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTSAzMywxNy41IEggMjAgYyAtMC40LDAgLTAuNywtMC4zIC0wLjcsLTAuNyAwLC0wLjQgMC4zLC0wLjcgMC43LC0wLjcgaCAxMi45IGMgMC40LDAgMC43LDAuMyAwLjcsMC43IDAsMC40IC0wLjMsMC43IC0wLjYsMC43IgogICBpZD0icGF0aDE0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0ibSAzNi4xLDguOSBjIC0yLjYsMCAtNC45LDEuMiAtNi41LDMuMSBoIC0yNCBjIC0yLjksMCAtNS4zLDIuNCAtNS4zLDUuMyAwLDIuOSAyLjQsNS4zIDUuMyw1LjMgaCAyNC4yIGMgMS41LDEuOCAzLjgsMi45IDYuMywyLjkgNC42LDAgOC4zLC0zLjcgOC4zLC04LjMgMCwtNC41IC0zLjcsLTguMyAtOC4zLC04LjMgTSAyOS43LDIxLjIgSCA1LjYgYyAtMi4xLDAgLTMuOSwtMS44IC0zLjksLTMuOSAwLC0yLjIgMS44LC0zLjkgMy45LC0zLjkgaCAyNC4yIGwgMSwtMC42IGMgMS4zLC0xLjUgMy4yLC0yLjUgNS4zLC0yLjUgMy44LDAgNi45LDMuMSA2LjksNi45IDAsMy44IC0zLjEsNi45IC02LjksNi45IC0yLjEsMCAtNCwtMSAtNS4zLC0yLjUgeiIKICAgaWQ9InBhdGgxNiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0gMi43LDMzLjQgSCAxLjQgYyAtMC4zLDAgLTAuNiwtMC4yIC0wLjYsLTAuNSB2IC02LjIgYyAwLC0wLjMgMC4yLC0wLjUgMC42LC0wLjUgaCAxLjMgYyAwLjMsMCAwLjUsMC4yIDAuNSwwLjUgdiA2LjIgYyAwLDAuMyAtMC4yLDAuNSAtMC41LDAuNSIKICAgaWQ9InBhdGgxOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0gNi45LDMwLjggSCA1LjcgYyAtMC4zLDAgLTAuNSwtMC4yIC0wLjUsLTAuNSB2IC0zLjYgYyAwLC0wLjMgMC4yLC0wLjUgMC41LC0wLjUgaCAxLjIgYyAwLjMsMCAwLjUsMC4yIDAuNSwwLjUgdiAzLjYgYyAwLjEsMC4zIC0wLjIsMC41IC0wLjUsMC41IgogICBpZD0icGF0aDIwIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0ibSAxMS41LDMzLjQgaCAtMS4zIGMgLTAuMywwIC0wLjUsLTAuMiAtMC41LC0wLjUgdiAtNi4yIGMgMCwtMC4zIDAuMiwtMC41IDAuNSwtMC41IGggMS4zIGMgMC4zLDAgMC41LDAuMiAwLjUsMC41IHYgNi4yIGMgMC4xLDAuMyAtMC4yLDAuNSAtMC41LDAuNSIKICAgaWQ9InBhdGgyMiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Im0gMTUuOCwzMC44IGggLTEuMiBjIC0wLjMsMCAtMC41LC0wLjIgLTAuNSwtMC41IHYgLTMuNiBjIDAsLTAuMyAwLjIsLTAuNSAwLjUsLTAuNSBoIDEuMiBjIDAuMywwIDAuNiwwLjIgMC42LDAuNSB2IDMuNiBjIDAsMC4zIC0wLjMsMC41IC0wLjYsMC41IgogICBpZD0icGF0aDI0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTSAyMC4zLDMzLjQgSCAxOSBjIC0wLjMsMCAtMC41LC0wLjIgLTAuNSwtMC41IHYgLTYuMiBjIDAsLTAuMyAwLjIsLTAuNSAwLjUsLTAuNSBoIDEuMyBjIDAuMywwIDAuNSwwLjIgMC41LDAuNSB2IDYuMiBjIDAuMSwwLjMgLTAuMiwwLjUgLTAuNSwwLjUiCiAgIGlkPSJwYXRoMjYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJtIDI0LjYsMzAuOCBoIC0xLjIgYyAtMC4zLDAgLTAuNSwtMC4yIC0wLjUsLTAuNSB2IC0zLjYgYyAwLC0wLjMgMC4yLC0wLjUgMC41LC0wLjUgaCAxLjIgYyAwLjMsMCAwLjUsMC4yIDAuNSwwLjUgdiAzLjYgYyAwLjEsMC4zIC0wLjIsMC41IC0wLjUsMC41IgogICBpZD0icGF0aDI4IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTSAyOC44LDMzLjQgSCAyNy41IEMgMjcuMiwzMy40IDI3LDMzLjIgMjcsMzIuOSB2IC02LjIgYyAwLC0wLjMgMC4yLC0wLjUgMC41LC0wLjUgaCAxLjMgYyAwLjMsMCAwLjUsMC4yIDAuNSwwLjUgdiA2LjIgYyAwLjEsMC4zIC0wLjIsMC41IC0wLjUsMC41IgogICBpZD0icGF0aDMwIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgo8L2c+Cjwvc3ZnPgo=';
    
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();
        
    Blockly.Blocks.dht_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.DHT_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: dhtIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options: [
                            ['dht11', '11'],
                            ['dht21', '21'],
                            ['dht22', '22']]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.dht_readHumidity = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.DHT_READ_HUMIDITY,
                args0: [
                    {
                        type: 'field_image',
                        src: dhtIconUrl,
                        width: 50,
                        height: 27
                    }
                ],

                colour: color,
                extensions: ['output_number']
            });
        }
    };


    Blockly.Blocks.dht_readTemperature = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.DHT_READ_TEMPERATURE,
                args0: [
                    {
                        type: 'field_image',
                        src: dhtIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [

                    {
                        type: 'field_dropdown',
                        name: 'unit',
                        options: [
                            ['℃', 'false'],
                            ['℉', 'true']]
                    }
                ],
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
