/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#42CCFF';
    const LCD128IconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgMTA0Mi40IDczNC45MDA1IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSJMQ0TmmL7npLrlsY8uc3ZnIgogICB3aWR0aD0iMTA0Mi40IgogICBoZWlnaHQ9IjczNC45MDA1MSIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4wLjItMiAoZTg2Yzg3MDg3OSwgMjAyMS0wMS0xNSkiPjxtZXRhZGF0YQogICBpZD0ibWV0YWRhdGExNSI+PHJkZjpSREY+PGNjOldvcmsKICAgICAgIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZQogICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICBpZD0iZGVmczEzIiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgaWQ9Im5hbWVkdmlldzExIgogICBzaG93Z3JpZD0iZmFsc2UiCiAgIGlua3NjYXBlOnpvb209IjAuODMxNzM0NDQiCiAgIGlua3NjYXBlOmN4PSI1MjEuMjQ5NzQiCiAgIGlua3NjYXBlOmN5PSIyNzEuMjY1NzMiCiAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSLlm77lsYJfMSIgLz4KPHN0eWxlCiAgIHR5cGU9InRleHQvY3NzIgogICBpZD0ic3R5bGUyIj4KCS5zdDB7ZmlsbDojMDBBMEU5O30KPC9zdHlsZT4KPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTSAwLDMxLjYwMDUyNSBWIDcwMy4zMDA1MiBjIDAsMTcuNCAxNC4yLDMxLjYgMzEuNiwzMS42IGggOTc5LjIgYyAxNy40LDAgMzEuNiwtMTQuMiAzMS42LC0zMS42IFYgMzEuNjAwNTI1IGMgMCwtMTcuNCAtMTQuMiwtMzEuNjAwMDAwMDUzMzEgLTMxLjYsLTMxLjYwMDAwMDA1MzMxIEggMzEuNiBDIDE0LjIsLTAuMDk5NDc1MDUgMCwxNC4xMDA1MjUgMCwzMS42MDA1MjUgWiBNIDEwMTYuNCwzNjcuNDAwNTIgYyAwLDE5IC0xNS40LDM0LjQgLTM0LjQsMzQuNCAtMTksMCAtMzQuNCwtMTUuNCAtMzQuNCwtMzQuNCAwLC0xOSAxNS40LC0zNC40IDM0LjQsLTM0LjQgMTksMCAzNC40LDE1LjQgMzQuNCwzNC40IHogTSA5MjEuNiw0Mi4xMDA1MjUgViA2OTIuNzAwNTIgSCA0Mi4yIFYgNDIuMDAwNTI1IGggODc5LjQgeiIKICAgaWQ9InBhdGg0IgogICBzdHlsZT0iZmlsbDojZmYwMDAwIiAvPgo8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJtIDMyMy4zNDk3NCwyOTYuMTUwMjYgYyAtMC45LDAgLTEuOCwtMC4yIC0yLjYsLTAuNyAtMi41LC0xLjUgLTMuNCwtNC43IC0xLjksLTcuMiBsIDE0Ni44LC0yNTIuMTk5OTk1IGMgMS41LC0yLjUgNC43LC0zLjQgNy4yLC0xLjkgMi41LDEuNSAzLjQsNC43IDEuOSw3LjIgbCAtMTQ2LjksMjUyLjE5OTk5NSBjIC0xLDEuNiAtMi43LDIuNiAtNC41LDIuNiB6IgogICBpZD0icGF0aDYiCiAgIHN0eWxlPSJmaWxsOiNmZjAwMDAiIC8+CjxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Im0gMzYxLjY0OTc0LDQ0Mi4wNTAyNiBjIC0wLjksMCAtMS44LC0wLjIgLTIuNiwtMC43IC0yLjUsLTEuNSAtMy40LC00LjcgLTEuOSwtNy4yIGwgMjM0LjEsLTQwMi4wOTk5OTUgYyAxLjUsLTIuNSA0LjcsLTMuNCA3LjIsLTEuOSAyLjUsMS41IDMuNCw0LjcgMS45LDcuMiBsIC0yMzQuMiw0MDIuMDk5OTk1IGMgLTAuOSwxLjcgLTIuNywyLjYgLTQuNSwyLjYgeiIKICAgaWQ9InBhdGg4IgogICBzdHlsZT0iZmlsbDojZmYwMDAwIiAvPgo8L3N2Zz4K';
    
    Blockly.Blocks.lcd128_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.LCD128_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: LCD128IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd128_cursor = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.LCD128_CURSOR,
                args0: [
                    {
                        type: 'field_image',
                        src: LCD128IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'row',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3']
                            ],
                    },
                    {
                        type: 'field_dropdown',
                        name: 'col',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9'],
                            ['10', '10'],
                            ['11', '11'],
                            ['12', '12'],
                            ['13', '13'],
                            ['14', '14'],
                            ['15', '15'],
                            ['16', '16'],
                            ['17', '17'],
                            ],
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd128_string = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.LCD128_STRING,
                args0: [
                    {
                        type: 'field_image',
                        src: LCD128IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'string'
                    },
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd128_number = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.LCD128_NUMBER,
                args0: [
                    {
                        type: 'field_image',
                        src: LCD128IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'NUMBER'
                    },
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd128_pixel = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.LCD128_PIXEL,
                args0: [
                    {
                        type: 'field_image',
                        src: LCD128IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'row'
                    },
                    {
                        type: 'input_value',
                        name: 'col'
                    },
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd128_d_pixel = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.LCD128_C_PIXEL,
                args0: [
                    {
                        type: 'field_image',
                        src: LCD128IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'row'
                    },
                    {
                        type: 'input_value',
                        name: 'col'
                    },
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd128_clear = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.LCD128_CLEAR,
                args0: [
                    {
                        type: 'field_image',
                        src: LCD128IconUrl,
                        width: 50,
                        height: 27
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
