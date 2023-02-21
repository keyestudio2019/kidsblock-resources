/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#42CCFF';
    const dsIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNzkuNCA3OS41IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3OS40IDc5LjU7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSLml7bpkp8uc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMi0yIChlODZjODcwODc5LCAyMDIxLTAxLTE1KSI+PG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTI3Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgIGlkPSJkZWZzMjUiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICBib3JkZXJvcGFjaXR5PSIxIgogICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICBncmlkdG9sZXJhbmNlPSIxMCIKICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICBpZD0ibmFtZWR2aWV3MjMiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMTAuOTA1NjYiCiAgIGlua3NjYXBlOmN4PSIzOS43MDAwMDEiCiAgIGlua3NjYXBlOmN5PSIzOS43NSIKICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IuWbvuWxgl8xIiAvPgo8c3R5bGUKICAgdHlwZT0idGV4dC9jc3MiCiAgIGlkPSJzdHlsZTIiPgoJLnN0MHtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiMwMEEwRTk7fQo8L3N0eWxlPgo8ZwogICBpZD0iZzIwIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIj4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0zOS43LDc5LjVjNS41LDAsMTIuMS0xLjUsMTUuOC0zLjRjMC42LTAuMywxLTAuNCwxLjUtMC43YzcuNy0zLjUsMTQuNS0xMC41LDE4LjItMTggICBjNS42LTExLjEsNS42LTI0LjQsMC0zNS41Yy0xLjEtMi4zLTIuMS0zLjgtMy42LTUuOGwtNC41LTUuMkM2Mi40LDcuMiw2MS42LDYsNTUuNSwzLjNjLTkuNC00LjItMjIuNC00LjYtMzEuOSwwLjEgICBjLTIuMSwxLjEtNC40LDIuMi02LjMsMy41Yy0yLjEsMS41LTMuNCwyLjYtNS4zLDQuNWMtOC43LDguNy0xMiwxNy0xMiwzMC4xYzAsNS43LDIsMTEuNCwzLjgsMTUuNGMwLjksMiwyLjQsNC4zLDMuNyw2LjEgICBjMC43LDAuOSwxLjMsMS44LDIuMSwyLjdjMC44LDAuOSwxLjYsMS42LDIuNSwyLjVDMTkuMiw3NS4yLDI5LDc5LjUsMzkuNyw3OS41IE00MC45LDc0LjFDMzAuMiw3NC4xLDIyLjMsNzEsMTUsNjMuOCAgIGMtNC4zLTQuMy03LjctMTAuNC05LTE2LjRjLTAuMi0xLTAuNS0yLjYtMC42LTMuNWMtMC40LTQtMC4yLTMuOCwwLTcuOGMwLjEtMS4yLDAuNC0yLjgsMC42LTMuOGMzLjEtMTQuOSwxNy4zLTI3LDMyLjQtMjcgICBjOC45LDAsMTQuNSwxLjYsMjEuNSw2LjVjNC44LDMuMyw4LjcsOC41LDExLjMsMTMuOWM3LjIsMTQuOCwwLjksMzMuNi0xMS4zLDQyLjFjLTIsMS40LTMuMiwyLTUuNCwzLjEgICBDNTEsNzIuNiw0Ni4yLDc0LjEsNDAuOSw3NC4xeiIKICAgaWQ9InBhdGg0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTMyLjgsNDIuNGMwLjksMy43LDcuNiw3LjQsMTIuNCwyLjZjNC4xLTQuMSwxLjctMTEuMy0yLjktMTIuNGMwLTEuNSwwLjItMjAuMi0wLjEtMjEuMmMtMC42LTEuNi0yLTEuNC0zLTEuNCAgIGMtMi45LDAtMS45LDcuNC0xLjksMTAuNHYxMi4zYy0xLjgsMC45LTMuOCwxLjktNC40LDQuNEgxNGMtNS44LDAtNC45LDUuMS0wLjksNS40TDMyLjgsNDIuNHogTTQwLDQyLjFjLTMuNCwwLTMuMy00LjctMC4zLTQuNyAgIEM0Mi45LDM3LjMsNDIuNCw0Mi4xLDQwLDQyLjF6IgogICBpZD0icGF0aDYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMjAuNSwyMy4yYzAuOSwwLDEuMy0wLjIsMS44LTAuN2MyLjMtMi4xLTAuMS00LjctMS41LTQuN0MxNywxNy44LDE3LjUsMjMuMiwyMC41LDIzLjIiCiAgIGlkPSJwYXRoOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik02Nyw0Mi40YzMuMiwwLDMuMi01LjMsMC01LjNDNjMuNCwzNyw2My41LDQyLjQsNjcsNDIuNCIKICAgaWQ9InBhdGgxMCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik01OS4yLDE3LjhjLTEuNCwwLTIuOCwxLjMtMi44LDIuNWMwLDIuMywyLjcsMy42LDQuMywyLjFDNjIuNSwyMC45LDYxLjMsMTcuOCw1OS4yLDE3LjgiCiAgIGlkPSJwYXRoMTIiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMjAuNSw2MS41YzMuNSwwLDMuMi01LjIsMC01LjJTMTcsNjEuNSwyMC41LDYxLjUiCiAgIGlkPSJwYXRoMTQiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNNTguOSw2MS41YzMuNSwwLDMuMi01LjIsMC01LjJDNTUuNiw1Ni4zLDU1LjMsNjEuNSw1OC45LDYxLjUiCiAgIGlkPSJwYXRoMTYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMzkuMSw2OS40YzUsMCwzLjEtNSwxLjMtNUMzNS40LDY0LjQsMzcuMiw2OS40LDM5LjEsNjkuNCIKICAgaWQ9InBhdGgxOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KPC9nPgo8L3N2Zz4K';
    
    Blockly.Blocks.ds3231_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.DS3231_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: dsIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ds3231_set_sys = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.DS3231_SET_SYS_TIME,
                args0: [
                    {
                        type: 'field_image',
                        src: dsIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ds3231_set_time = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.DS3231_SET_TIME,
                args0: [
                    {
                        type: 'field_image',
                        src: dsIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'year'
                    },
                    {
                        type: 'input_value',
                        name: 'month'
                    },
                    {
                        type: 'input_value',
                        name: 'date'
                    },
                    {
                        type: 'input_value',
                        name: 'hour'
                    },
                    {
                        type: 'input_value',
                        name: 'minute'
                    },
                    {
                        type: 'input_value',
                        name: 'second'
                    },
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ds3231_read = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.DS3231_READ,
                args0: [
                    {
                        type: 'field_image',
                        src: dsIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'unit',
                        options: [
                            ['year', 'rtc.now().year();'],
                            ['month', 'rtc.now().month();'],
                            ['date', 'rtc.now().date();'],
                            ['hour', 'rtc.now().hour();'],
                            ['minute', 'rtc.now().minute();'],
                            ['second', 'rtc.now().second();'],
                            ['week', 'daysOfTheWeek[rtc.now().dayOfTheWeek()];'],
                            ],
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
