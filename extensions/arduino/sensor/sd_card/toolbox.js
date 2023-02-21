/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const sdIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNjAuNSA4MC44IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MC41IDgwLjg7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSJTROWNoS5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMC4yLTIgKGU4NmM4NzA4NzksIDIwMjEtMDEtMTUpIj48bWV0YWRhdGEKICAgaWQ9Im1ldGFkYXRhMTEiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGU+PC9kYzp0aXRsZT48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMKICAgaWQ9ImRlZnM5IiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgaWQ9Im5hbWVkdmlldzciCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iNS4zNjUwOTkiCiAgIGlua3NjYXBlOmN4PSIzMC4yNSIKICAgaW5rc2NhcGU6Y3k9IjQwLjQwMDAwMiIKICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IuWbvuWxgl8xIgogICBpbmtzY2FwZTpkb2N1bWVudC1yb3RhdGlvbj0iMCIgLz4KPHN0eWxlCiAgIHR5cGU9InRleHQvY3NzIgogICBpZD0ic3R5bGUyIj4KCS5zdDB7ZmlsbDojRkZFNjAwO30KPC9zdHlsZT4KPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTSA2MC41LDgwLjggViA1MS45IEMgNjAuMyw1MiA2MC4xLDUyIDU5LjgsNTIgSCA1OS40IEMgNTguMSw1MiA1Nyw1MC45IDU3LDQ5LjYgdiAtMTIgYyAwLC0xLjMgMS4xLC0yLjQgMi40LC0yLjQgaCAwLjQgYyAwLjIsMCAwLjUsMCAwLjcsMC4xIFYgMC45IEwgMTkuNiwwIDAsMTYuNCBWIDgwLjMgWiBNIDUyLjEsOC43IGMgMS4zLDAgMi40LDEuMSAyLjQsMi40IHYgMTYuNyBjIDAsMS4zIC0xLjEsMi40IC0yLjQsMi40IGggLTMuMyBjIC0xLjMsMCAtMi40LC0xLjEgLTIuNCwtMi40IFYgMTEuMSBjIDAsLTEuMyAxLjEsLTIuNCAyLjQsLTIuNCB6IG0gLTEzLjIsMCBjIDEuMywwIDIuNCwxLjEgMi40LDIuNCB2IDE2LjcgYyAwLDEuMyAtMS4xLDIuNCAtMi40LDIuNCBoIC0zLjMgYyAtMS4zLDAgLTIuNCwtMS4xIC0yLjQsLTIuNCBWIDExLjEgYyAwLC0xLjMgMS4xLC0yLjQgMi40LC0yLjQgeiBtIC0xOSwyLjQgYyAwLC0xLjMgMS4xLC0yLjQgMi40LC0yLjQgaCAzLjMgYyAxLjMsMCAyLjQsMS4xIDIuNCwyLjQgdiAxNi43IGMgMCwxLjMgLTEuMSwyLjQgLTIuNCwyLjQgaCAtMy4zIGMgLTEuMywwIC0yLjQsLTEuMSAtMi40LC0yLjQgeiBNIDkuNiwzNy44IGMgLTEuMywwIC0yLjQsLTEuMSAtMi40LC0yLjQgdiAtMTIgQyA3LjIsMjIuMSA4LjMsMjEgOS42LDIxIEggMTAgYyAxLjMsMCAyLjQsMS4xIDIuNCwyLjQgdiAxMiBjIDAsMS4zIC0xLjEsMi40IC0yLjQsMi40IHoiCiAgIGlkPSJwYXRoNCIKICAgc3R5bGU9ImZpbGw6I2ZmMDAwMCIgLz4KPC9zdmc+Cg==';
    
    return `
<category name="%{BKY_SD_CATEGORY}" id="SD_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${sdIconUrl}">
    <block type="sd_init" id="sd_init">
    	<value name="cs">
            <shadow type="math_number">
                <field name="NUM">7</field>
            </shadow>
        </value>
    </block>

    <block type="sd_type" id="sd_type">
    	<value name="cs">
            <shadow type="math_number">
                <field name="NUM">7</field>
            </shadow>
        </value>
    </block>

    <block type="sd_list" id="sd_list">
    	<value name="cs">
            <shadow type="math_number">
                <field name="NUM">7</field>
            </shadow>
        </value>
    </block>

    <block type="sd_var" id="sd_var">
    	<value name="cs">
            <shadow type="math_number">
                <field name="NUM">7</field>
            </shadow>
        </value>
    </block>

    <block type="sd_judge" id="sd_judge">
    	<value name="file">
            <shadow type="text">
                <field name="TEXT">file.txt</field>
            </shadow>
        </value>
    </block>

    <block type="sd_delete" id="sd_delete">
    	<value name="file">
            <shadow type="text">
                <field name="TEXT">file.txt</field>
            </shadow>
        </value>
    </block>

    <block type="sd_read" id="sd_read">
    	<value name="file">
            <shadow type="text">
                <field name="TEXT">file.txt</field>
            </shadow>
        </value>
    </block>

    <block type="sd_write" id="sd_write">
    	<value name="file">
            <shadow type="text">
                <field name="TEXT">file.txt</field>
            </shadow>
        </value>
        <value name="data">
            <shadow type="text">
                <field name="TEXT">hello,world</field>
            </shadow>
        </value>
    </block>

</category>`;
}

exports = addToolbox;
