/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#4C97FF';


    const LEDIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNDQuNSA0NS4zIgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NC41IDQ1LjM7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSJSR0IgbGVkLnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4wLjItMiAoZTg2Yzg3MDg3OSwgMjAyMS0wMS0xNSkiPjxtZXRhZGF0YQogICBpZD0ibWV0YWRhdGEyOSI+PHJkZjpSREY+PGNjOldvcmsKICAgICAgIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZQogICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICBpZD0iZGVmczI3IiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgaWQ9Im5hbWVkdmlldzI1IgogICBzaG93Z3JpZD0iZmFsc2UiCiAgIGlua3NjYXBlOnpvb209IjE5LjEzOTA3MyIKICAgaW5rc2NhcGU6Y3g9IjIyLjI1IgogICBpbmtzY2FwZTpjeT0iMjguOTE5ODk2IgogICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0i5Zu+5bGCXzEiIC8+CjxzdHlsZQogICB0eXBlPSJ0ZXh0L2NzcyIKICAgaWQ9InN0eWxlMiI+Cgkuc3Qwe2ZpbGw6I0U2MDAxMjt9Cjwvc3R5bGU+CjxnCiAgIGlkPSJnMjIiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTExLjEsMzkuMVYyMS45YzAtNi4zLDUuMS0xMS40LDExLjQtMTEuNHMxMS40LDUuMSwxMS40LDExLjR2MTcuMkMzMy45LDM5LjEsMTEuMSwzOS4xLDExLjEsMzkuMXogTTMxLjgsMjEuOSAgIGMwLTUuMS00LjItOS4zLTkuMy05LjNzLTkuMyw0LjItOS4zLDkuM3YxNWgxOC41TDMxLjgsMjEuOUwzMS44LDIxLjl6IgogICBpZD0icGF0aDQiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMTcsNDQuOVYzMi4xYzAtMywyLjQtNS40LDUuNC01LjRzNS40LDIuNCw1LjQsNS40djEyLjdjMCwwLjMtMC4yLDAuNS0wLjUsMC41cy0wLjUtMC4yLTAuNS0wLjVWMzIuMSAgIGMwLTIuNC0yLTQuNC00LjQtNC40cy00LjQsMi00LjQsNC40djEyLjdjMCwwLjMtMC4yLDAuNS0wLjUsMC41UzE3LDQ1LjEsMTcsNDQuOXoiCiAgIGlkPSJwYXRoNiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0zNS4yLDI2Ljh2LTEuMWMwLTAuNSwwLjQtMC45LDAuOS0wLjloNy41YzAuNSwwLDAuOSwwLjQsMC45LDAuOXYxLjFjMCwwLjUtMC40LDAuOS0wLjksMC45aC03LjUgICBDMzUuNSwyNy42LDM1LjIsMjcuMiwzNS4yLDI2LjgiCiAgIGlkPSJwYXRoOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0zMy43LDE1LjVMMzMsMTQuN2MtMC4zLTAuNC0wLjItMC45LDAuMS0xLjJsNS44LTQuOGMwLjQtMC4zLDAuOS0wLjIsMS4yLDAuMWwwLjcsMC44ICAgYzAuMywwLjQsMC4yLDAuOS0wLjEsMS4ybC01LjgsNC44QzM0LjUsMTUuOSwzNCwxNS44LDMzLjcsMTUuNSIKICAgaWQ9InBhdGgxMCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik05LjMsMjYuOHYtMS4xYzAtMC41LTAuNC0wLjktMC45LTAuOUgwLjljLTAuNSwwLTAuOSwwLjQtMC45LDAuOXYxLjFjMCwwLjUsMC40LDAuOSwwLjksMC45aDcuNSAgIEM5LDI3LjYsOS4zLDI3LjIsOS4zLDI2LjgiCiAgIGlkPSJwYXRoMTIiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMjEuNyw5LjJoMS4xYzAuNSwwLDAuOC0wLjQsMC44LTAuOFYwLjljMC0wLjUtMC40LTAuOS0wLjgtMC45aC0xLjFjLTAuNSwwLTAuOSwwLjQtMC45LDAuOXY3LjUgICBDMjAuOSw4LjgsMjEuMiw5LjIsMjEuNyw5LjIiCiAgIGlkPSJwYXRoMTQiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMTAuOCwxNS41bDAuNy0wLjhjMC4zLTAuNCwwLjItMC45LTAuMS0xLjJMNS42LDguN0M1LjIsOC40LDQuNyw4LjUsNC40LDguOEwzLjcsOS42ICAgYy0wLjMsMC40LTAuMiwwLjksMC4xLDEuMmw1LjgsNC44QzEwLDE1LjksMTAuNSwxNS44LDEwLjgsMTUuNSIKICAgaWQ9InBhdGgxNiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0yMi40LDI5LjljLTEuNSwwLTIuNi0xLjItMi42LTIuNmMwLTEuNSwxLjItMi42LDIuNi0yLjZjMS41LDAsMi42LDEuMiwyLjYsMi42UzIzLjgsMjkuOSwyMi40LDI5LjkiCiAgIGlkPSJwYXRoMTgiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNNy4xLDM4di0xYzAtMS4xLDAuOS0yLDItMmgyNi44YzEuMSwwLDIsMC45LDIsMnYxYzAsMS4xLTAuOSwyLTIsMkg5LjFDOCw0MCw3LjEsMzkuMSw3LjEsMzgiCiAgIGlkPSJwYXRoMjAiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+CjwvZz4KPC9zdmc+Cg==';
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.LED_setLEDState = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.LED_SET_LED_STATE,
                args0: [
                    {
                        type: 'field_image',
                        src: LEDIconUrl,
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
                        name: 'state',
                        options: [
                            [Blockly.Msg.LED_ON, '1'],
                            [Blockly.Msg.LED_OFF, '0']]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
