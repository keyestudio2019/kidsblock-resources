/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#42CCFF';
    const sdIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNjAuNSA4MC44IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MC41IDgwLjg7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSJTROWNoS5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMC4yLTIgKGU4NmM4NzA4NzksIDIwMjEtMDEtMTUpIj48bWV0YWRhdGEKICAgaWQ9Im1ldGFkYXRhMTEiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGU+PC9kYzp0aXRsZT48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMKICAgaWQ9ImRlZnM5IiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgaWQ9Im5hbWVkdmlldzciCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMTAuNzMwMTk4IgogICBpbmtzY2FwZTpjeD0iMzAuMjUiCiAgIGlua3NjYXBlOmN5PSI0Ny44NTU1OTYiCiAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSLlm77lsYJfMSIgLz4KPHN0eWxlCiAgIHR5cGU9InRleHQvY3NzIgogICBpZD0ic3R5bGUyIj4KCS5zdDB7ZmlsbDojRkZFNjAwO30KPC9zdHlsZT4KPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTSA2MC41LDgwLjggViA1MS45IEMgNjAuMyw1MiA2MC4xLDUyIDU5LjgsNTIgSCA1OS40IEMgNTguMSw1MiA1Nyw1MC45IDU3LDQ5LjYgdiAtMTIgYyAwLC0xLjMgMS4xLC0yLjQgMi40LC0yLjQgaCAwLjQgYyAwLjIsMCAwLjUsMCAwLjcsMC4xIFYgMC45IEwgMTkuNiwwIDAsMTYuNCBWIDgwLjMgWiBNIDUyLjEsOC43IGMgMS4zLDAgMi40LDEuMSAyLjQsMi40IHYgMTYuNyBjIDAsMS4zIC0xLjEsMi40IC0yLjQsMi40IGggLTMuMyBjIC0xLjMsMCAtMi40LC0xLjEgLTIuNCwtMi40IFYgMTEuMSBjIDAsLTEuMyAxLjEsLTIuNCAyLjQsLTIuNCB6IG0gLTEzLjIsMCBjIDEuMywwIDIuNCwxLjEgMi40LDIuNCB2IDE2LjcgYyAwLDEuMyAtMS4xLDIuNCAtMi40LDIuNCBoIC0zLjMgYyAtMS4zLDAgLTIuNCwtMS4xIC0yLjQsLTIuNCBWIDExLjEgYyAwLC0xLjMgMS4xLC0yLjQgMi40LC0yLjQgeiBtIC0xOSwyLjQgYyAwLC0xLjMgMS4xLC0yLjQgMi40LC0yLjQgaCAzLjMgYyAxLjMsMCAyLjQsMS4xIDIuNCwyLjQgdiAxNi43IGMgMCwxLjMgLTEuMSwyLjQgLTIuNCwyLjQgaCAtMy4zIGMgLTEuMywwIC0yLjQsLTEuMSAtMi40LC0yLjQgeiBNIDkuNiwzNy44IGMgLTEuMywwIC0yLjQsLTEuMSAtMi40LC0yLjQgdiAtMTIgQyA3LjIsMjIuMSA4LjMsMjEgOS42LDIxIEggMTAgYyAxLjMsMCAyLjQsMS4xIDIuNCwyLjQgdiAxMiBjIDAsMS4zIC0xLjEsMi40IC0yLjQsMi40IHoiCiAgIGlkPSJwYXRoNCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KPC9zdmc+Cg==';
    
    Blockly.Blocks.sd_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SD_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    },
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'cs'
                    },
                ],
                
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.sd_type = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SD_TYPE,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'cs'
                    },
                ],
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.sd_list = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SD_LIST,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'cs'
                    },
                ],
                
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.sd_var = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SD_VAR,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'unit',
                        options: [
                            ['Cluster Count', 'volume.clusterCount()'],
                            ['Blocks Per Cluster', 'volume.blocksPerCluster()'],
                            ['Total blocks', 'volume.blocksPerCluster() * volume.clusterCount()'],
                            ['FatType', 'volume.fatType()'],
                            ['Volume(KB)', 'volume.blocksPerCluster()*volume.clusterCount()/2'],
                            ['Volume(MB)', 'volume.blocksPerCluster()*volume.clusterCount()/2/1024'],
                            ['Volume(GB)', 'volume.blocksPerCluster()*volume.clusterCount()/2/1024/1024.0'],
                            ]
                    },
                    {
                        type: 'input_value',
                        name: 'cs'
                    },
                ],
                
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.sd_judge = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SD_JUDGE,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'file'
                    },
                ],
                
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.sd_delete = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SD_DELETE,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'file'
                    },
                ],
                
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.sd_read = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SD_READ,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'file'
                    },
                ],
                
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.sd_write = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SD_WRITE,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'file'
                    },
                    {
                        type: 'input_value',
                        name: 'data'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'unit',
                        options: [
                            ['true', 'datafile.println("");'],
                            ['fasle', ''],
                            ]
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
