/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#D39DDB';
    const hc_sr04IconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNzEuNyAzMi4xIgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3MS43IDMyLjE7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSLotoXlo7Dms6Iuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMi0yIChlODZjODcwODc5LCAyMDIxLTAxLTE1KSI+PG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTI3Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgIGlkPSJkZWZzMjUiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICBib3JkZXJvcGFjaXR5PSIxIgogICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICBncmlkdG9sZXJhbmNlPSIxMCIKICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICBpZD0ibmFtZWR2aWV3MjMiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMTUuNTkyNzQ4IgogICBpbmtzY2FwZTpjeD0iMzUuODQ5OTk4IgogICBpbmtzY2FwZTpjeT0iMTYuMDQ5OTk5IgogICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0i5Zu+5bGCXzEiIC8+CjxzdHlsZQogICB0eXBlPSJ0ZXh0L2NzcyIKICAgaWQ9InN0eWxlMiI+Cgkuc3Qwe2ZpbGw6IzAwQ0FFNTt9Cjwvc3R5bGU+CjxnCiAgIGlkPSJnMTgiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTUzLjUsMjguNmMtNi44LDAtMTIuMy01LjctMTIuMy0xMi43YzAtNyw1LjUtMTIuNywxMi4zLTEyLjdzMTIuMyw1LjcsMTIuMywxMi43UzYwLjMsMjguNiw1My41LDI4LjZ6ICAgIE01My41LDdjLTQuNywwLTguNSw0LTguNSw4LjlzMy44LDguOSw4LjUsOC45czguNS00LDguNS04LjlTNTguMiw3LDUzLjUsN3oiCiAgIGlkPSJwYXRoNCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0xOC4yLDI4LjZjLTYuOCwwLTEyLjMtNS43LTEyLjMtMTIuN2MwLTcsNS41LTEyLjcsMTIuMy0xMi43czEyLjMsNS43LDEyLjMsMTIuN1MyNSwyOC42LDE4LjIsMjguNnogTTE4LjIsNyAgIGMtNC43LDAtOC41LDQtOC41LDguOXMzLjgsOC45LDguNSw4LjlzOC41LTQsOC41LTguOVMyMi45LDcsMTguMiw3eiIKICAgaWQ9InBhdGg2IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTYzLjYsMjguMmMtMS4xLDAtMi0wLjktMi0yczAuOS0yLDItMmMxLjEsMCwyLDAuOSwyLDJTNjQuNywyOC4yLDYzLjYsMjguMnogTTYzLjYsMjUuOCAgIGMtMC4yLDAtMC40LDAuMi0wLjQsMC40YzAsMC41LDAuOSwwLjUsMC45LDBDNjQsMjYsNjMuOCwyNS44LDYzLjYsMjUuOHoiCiAgIGlkPSJwYXRoOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik02My42LDguMWMtMS4xLDAtMi0wLjktMi0yczAuOS0yLDItMmMxLjEsMCwyLDAuOSwyLDJTNjQuNyw4LjEsNjMuNiw4LjF6IE02My42LDUuN2MtMC4yLDAtMC40LDAuMi0wLjQsMC40ICAgYzAsMC41LDAuOSwwLjUsMC45LDBDNjQsNS44LDYzLjgsNS43LDYzLjYsNS43eiIKICAgaWQ9InBhdGgxMCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik04LjQsMjguMmMtMS4xLDAtMi0wLjktMi0yczAuOS0yLDItMnMyLDAuOSwyLDJTOS41LDI4LjIsOC40LDI4LjJ6IE04LjQsMjUuOEM4LjIsMjUuOCw4LDI2LDgsMjYuMiAgIGMwLDAuNSwwLjksMC41LDAuOSwwQzguOCwyNiw4LjYsMjUuOCw4LjQsMjUuOHoiCiAgIGlkPSJwYXRoMTIiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNOC40LDguMWMtMS4xLDAtMi0wLjktMi0yczAuOS0yLDItMnMyLDAuOSwyLDJTOS41LDguMSw4LjQsOC4xeiBNOC40LDUuN0M4LjIsNS43LDgsNS44LDgsNi4xICAgYzAsMC41LDAuOSwwLjUsMC45LDBDOC44LDUuOCw4LjYsNS43LDguNCw1Ljd6IgogICBpZD0icGF0aDE0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTM4LjksMjcuMmgtNi40Yy0xLjYsMC0yLjktMS4zLTIuOS0zczEuMy0zLDIuOS0zaDYuNGMxLjYsMCwzLDEuMywzLDNDNDEuOSwyNS45LDQwLjYsMjcuMiwzOC45LDI3LjJ6ICAgIE0zMi41LDIzLjljLTAuMiwwLTAuNCwwLjItMC40LDAuNGMwLDAuMiwwLjIsMC40LDAuNCwwLjRoNi40YzAuMiwwLDAuNC0wLjIsMC40LTAuNGMwLTAuMi0wLjItMC40LTAuNC0wLjRIMzIuNXoiCiAgIGlkPSJwYXRoMTYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+CjwvZz4KPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTY4LjQsMzIuMWgtNjVjLTEuOCwwLTMuMy0xLjUtMy4zLTMuM1YzLjNDMCwxLjUsMS41LDAsMy4zLDBoNjVjMS44LDAsMy4zLDEuNSwzLjMsMy4zdjI1LjUgIEM3MS43LDMwLjYsNzAuMiwzMi4xLDY4LjQsMzIuMXogTTMuMywxQzIsMSwxLDIsMSwzLjN2MjUuNWMwLDEuMywxLDIuMywyLjMsMi4zaDY1YzEuMywwLDIuMy0xLDIuMy0yLjNWMy4zYzAtMS4zLTEtMi4zLTIuMy0yLjMgIEgzLjN6IgogICBpZD0icGF0aDIwIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgo8L3N2Zz4K';
    
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.hc_sr04_read_distance = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.HC_SR04_READ_DISTANCE,
                args0: [
                    {
                        type: 'field_image',
                        src: hc_sr04IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'trig_pin',
                        options: digitalPins
                    }, 
                    {
                        type: 'field_dropdown',
                        name: 'echo_pin',
                        options: digitalPins
                    }, 
                    {
                        type: 'field_dropdown',
                        name: 'unit',
                        options: [
                            ['cm', 'CM'],
                            ['inch', 'INC']]
                    }],
                colour: color,
                extensions: ['output_number']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;
