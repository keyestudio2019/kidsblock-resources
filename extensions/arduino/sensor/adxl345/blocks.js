/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#42CCFF';
    const adxlIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNDYuNiA0Ni42IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0Ni42IDQ2LjY7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSJNcHU2MDUwLnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4wLjItMiAoZTg2Yzg3MDg3OSwgMjAyMS0wMS0xNSkiPjxtZXRhZGF0YQogICBpZD0ibWV0YWRhdGEyMyI+PHJkZjpSREY+PGNjOldvcmsKICAgICAgIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZQogICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICBpZD0iZGVmczIxIiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgaWQ9Im5hbWVkdmlldzE5IgogICBzaG93Z3JpZD0iZmFsc2UiCiAgIGlua3NjYXBlOnpvb209IjE4LjYwNTE1MSIKICAgaW5rc2NhcGU6Y3g9IjIzLjI5OTk5OSIKICAgaW5rc2NhcGU6Y3k9IjI1LjQ0OTk0MSIKICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IuWbvuWxgl8xIiAvPgo8c3R5bGUKICAgdHlwZT0idGV4dC9jc3MiCiAgIGlkPSJzdHlsZTIiPgoJLnN0MHtmaWxsOiMwMEEwRTk7fQo8L3N0eWxlPgo8ZwogICBpZD0iZzE2IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIj4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0wLDIzLjNMMCwyMy4zQzAsMTcsMi40LDExLjIsNi45LDYuOGM5LjEtOS4xLDIzLjktOS4xLDMzLDBjOS4xLDkuMSw5LjEsMjMuOSwwLDMzYy05LjEsOS4xLTIzLjksOS0zMywwICAgQzIuNCwzNS4zLDAsMjkuNSwwLDIzLjMgTTQ1LDIzLjNjMC01LjYtMi4xLTExLjEtNi4zLTE1LjNjLTQuMS00LjEtOS42LTYuNC0xNS40LTYuNEMxNy41LDEuNSwxMi4xLDMuOCw4LDcuOXMtNi40LDkuNi02LjQsMTUuNHYwICAgYzAsNS44LDIuMiwxMS4yLDYuNCwxNS4zUzE3LjUsNDUsMjMuMyw0NXMxMS4zLTIuMiwxNS40LTYuM0M0Mi45LDM0LjQsNDUsMjguOSw0NSwyMy4zeiIKICAgaWQ9InBhdGg0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTguOSwxNWMwLTEuOCwwLjUtMy40LDEuNy00LjVjMy43LTMuNywxMi4xLTEsMTkuMiw2YzcuMSw3LjEsOS43LDE1LjUsNiwxOS4yYy0xLjgsMS44LTQuOSwyLjItOC42LDAuOSAgIGMtMy41LTEuMi03LjMtMy43LTEwLjYtN0MxMS42LDI0LjgsOC45LDE5LjIsOC45LDE1IE0zNS44LDMxLjJjMC0zLjctMi43LTkuMS03LjItMTMuNmMtNi4yLTYuMi0xNC05LTE3LTZjLTMsMy0wLjIsMTAuNyw2LDE3bDAsMCAgIGMzLjEsMy4xLDYuNyw1LjUsMTAsNi42YzMuMSwxLDUuNiwwLjgsNy0wLjVDMzUuNCwzMy44LDM1LjgsMzIuNiwzNS44LDMxLjJ6IgogICBpZD0icGF0aDYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNOC43LDMxLjljMC0xLjMsMC4zLTIuNywwLjgtNC4yYzEuMi0zLjUsMy43LTcuMyw3LjEtMTAuNmMzLjMtMy4zLDcuMS01LjgsMTAuNy03YzMuNy0xLjMsNi44LTEsOC42LDAuOCAgIGMxLjgsMS44LDIuMSw0LjksMC44LDguNmMtMS4yLDMuNS0zLjcsNy4zLTcuMSwxMC42Yy03LjIsNy4xLTE1LjYsOS45LTE5LjIsNi4yQzkuMywzNS4yLDguNywzMy43LDguNywzMS45IE0zNS44LDE1LjEgICBjMC0xLjQtMC40LTIuNS0xLjEtMy4zYy0xLjMtMS4zLTMuOS0xLjUtNi45LTAuNGMtMy4zLDEuMS02LjksMy41LTEwLjEsNi43Yy0zLjIsMy4yLTUuNiw2LjctNi43LDEwYy0xLjEsMy4xLTAuOSw1LjYsMC40LDcgICBjMi45LDIuOSwxMC43LDAuMSwxNy02LjJjMy4yLTMuMiw1LjYtNi43LDYuNy0xMEMzNS42LDE3LjUsMzUuOCwxNi4yLDM1LjgsMTUuMXoiCiAgIGlkPSJwYXRoOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0xNy45LDI2LjhjMC0xLjUsMS40LTMuNywzLTUuM2MxLjktMS45LDMuOS0zLDUuMy0zYzAuNywwLDEuMSwwLjMsMS4zLDAuNWMwLjUsMC41LDAuOCwxLjQsMCwzLjEgICBjLTAuNSwxLjEtMS40LDIuNC0yLjYsMy41Yy0xLjEsMS4xLTIuNCwyLTMuNSwyLjZjLTEuOCwwLjgtMi43LDAuNC0zLjEsMEMxOC4xLDI3LjgsMTcuOSwyNy4zLDE3LjksMjYuOCBNMTkuNiwyN0wxOSwyNy42TDE5LjYsMjcgICBjMC4xLDAuMSwwLjUsMC4xLDEuNC0wLjNjMS0wLjQsMi4xLTEuMiwzLjEtMi4yczEuOC0yLjEsMi4zLTMuMWMwLjQtMC45LDAuMy0xLjMsMC4zLTEuNGMwLDAtMC4xLDAtMC4yLDBjLTAuOCwwLTIuNSwwLjktNC4yLDIuNiAgIEMxOS44LDI0LjksMTkuMywyNi44LDE5LjYsMjd6IgogICBpZD0icGF0aDEwIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTAuNywzYzAtMC40LDAuNC0wLjgsMC44LTAuOGMwLjUsMCwyLjksMC4yLDYuMiwzLjljMC4zLDAuMywwLjIsMC44LTAuMSwxLjFDNy4zLDcuNSw2LjgsNy41LDYuNSw3LjEgICBjLTIuOS0zLjMtNC45LTMuNC01LTMuNEMxLjEsMy44LDAuNywzLjQsMC43LDMiCiAgIGlkPSJwYXRoMTIiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMzguNSwzOS4zYzAtMC4yLDAuMS0wLjUsMC4zLTAuNmMwLjMtMC4zLDAuOC0wLjIsMS4xLDAuMmMyLjMsMy4xLDMuOSwzLjEsMy45LDMuMWMwLjQsMCwwLjgsMC4zLDAuOCwwLjggICBzLTAuMywwLjgtMC44LDAuOGMtMC42LDAtMi42LTAuMy01LjItMy43QzM4LjYsMzkuNiwzOC41LDM5LjUsMzguNSwzOS4zIgogICBpZD0icGF0aDE0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgo8L2c+Cjwvc3ZnPgo=';

    Blockly.Blocks.adxl345_read = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.ADXL345_READ,
                args0: [
                    {
                        type: 'field_image',
                        src: adxlIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'unit',
                        options: [
                            ['X-Accel', 'accel.getAccelerationX()'],
                            ['Y-Accel', 'accel.getAccelerationY()'],
                            ['Z-Accel', 'accel.getAccelerationZ()'],
                            ]
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
