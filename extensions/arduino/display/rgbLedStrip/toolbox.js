/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    const rgb6812IconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNDcuOCA0OC43IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0Ny44IDQ4Ljc7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSI2ODEyIFJHQi5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMC4yLTIgKGU4NmM4NzA4NzksIDIwMjEtMDEtMTUpIj48bWV0YWRhdGEKICAgaWQ9Im1ldGFkYXRhMjkiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGU+PC9kYzp0aXRsZT48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMKICAgaWQ9ImRlZnMyNyIgLz48c29kaXBvZGk6bmFtZWR2aWV3CiAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciCiAgIGlkPSJuYW1lZHZpZXcyNSIKICAgc2hvd2dyaWQ9ImZhbHNlIgogICBpbmtzY2FwZTp6b29tPSI2LjI5NDI2NjUiCiAgIGlua3NjYXBlOmN4PSIyMy45IgogICBpbmtzY2FwZTpjeT0iMjYuNTk2ODI5IgogICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0i5Zu+5bGCXzEiCiAgIGlua3NjYXBlOmRvY3VtZW50LXJvdGF0aW9uPSIwIiAvPgo8c3R5bGUKICAgdHlwZT0idGV4dC9jc3MiCiAgIGlkPSJzdHlsZTIiPgoJLnN0MHtmaWxsOiNFNjAwMTI7fQo8L3N0eWxlPgo8ZwogICBpZD0iZzIyIgogICBzdHlsZT0iZmlsbDojZmYwMDAwIj4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik03LjMsNDAuMUw3LjMsNDAuMWMwLTEuNiwxLjMtMi45LDIuOS0yLjloMjcuNmMxLjYsMCwyLjksMS4zLDIuOSwyLjlTMzkuNCw0MywzNy44LDQzSDEwLjIgICBDOC42LDQzLDcuMyw0MS43LDcuMyw0MC4xIgogICBpZD0icGF0aDQiCiAgIHN0eWxlPSJmaWxsOiNmZjAwMDAiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMzcuMiwyOC41VjI4YzAtMC44LDAuNy0xLjUsMS41LTEuNWg3LjZjMC44LDAsMS41LDAuNywxLjUsMS41djAuNWMwLDAuOC0wLjcsMS41LTEuNSwxLjVoLTcuNiAgIEMzNy45LDMwLDM3LjIsMjkuMywzNy4yLDI4LjUiCiAgIGlkPSJwYXRoNiIKICAgc3R5bGU9ImZpbGw6I2ZmMDAwMCIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0zNS42LDE3LjJsLTAuMy0wLjRjLTAuNS0wLjYtMC40LTEuNiwwLjItMi4xbDUuOC00LjljMC42LTAuNSwxLjYtMC40LDIuMSwwLjJsMC4zLDAuNCAgIGMwLjUsMC42LDAuNCwxLjYtMC4yLDIuMWwtNS44LDQuOUMzNywxNy45LDM2LjEsMTcuOSwzNS42LDE3LjIiCiAgIGlkPSJwYXRoOCIKICAgc3R5bGU9ImZpbGw6I2ZmMDAwMCIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0yNC4xLDEwLjZoLTAuNmMtMC44LDAtMS41LTAuNy0xLjUtMS41VjEuNUMyMiwwLjcsMjIuNywwLDIzLjUsMEgyNGMwLjgsMCwxLjUsMC43LDEuNSwxLjV2Ny42ICAgQzI1LjUsOS45LDI0LjksMTAuNiwyNC4xLDEwLjYiCiAgIGlkPSJwYXRoMTAiCiAgIHN0eWxlPSJmaWxsOiNmZjAwMDAiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMTIuOSwxNi4zbC0wLjQsMC40Yy0wLjUsMC42LTEuNCwwLjgtMi4xLDAuM2wtNi00LjZjLTAuNy0wLjUtMC44LTEuNC0wLjMtMi4xbDAuMy0wLjQgICBjMC41LTAuNiwxLjQtMC44LDIuMS0wLjNsNiw0LjZDMTMuMiwxNC43LDEzLjQsMTUuNywxMi45LDE2LjMiCiAgIGlkPSJwYXRoMTIiCiAgIHN0eWxlPSJmaWxsOiNmZjAwMDAiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMTAuNSwyOC4xdjAuNWMwLDAuOC0wLjcsMS41LTEuNSwxLjRsLTcuNi0wLjJjLTAuOCwwLTEuNS0wLjctMS40LTEuNXYtMC41YzAtMC44LDAuNy0xLjUsMS41LTEuNGw3LjYsMC4yICAgQzkuOSwyNi42LDEwLjUsMjcuMywxMC41LDI4LjEiCiAgIGlkPSJwYXRoMTQiCiAgIHN0eWxlPSJmaWxsOiNmZjAwMDAiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMTEuNyw0MS45VjIyLjdjMC02LjQsNS4yLTExLjYsMTEuNi0xMS42aDEuNWM2LjQsMCwxMS42LDUuMiwxMS42LDExLjZ2MTkuMUgxMS43VjQxLjl6IE0zMy40LDIyLjcgICBjMC00LjctMy45LTguNi04LjYtOC42aC0xLjVjLTQuNywwLTguNiwzLjktOC42LDguNnYxNi4xaDE4LjdDMzMuNCwzOC44LDMzLjQsMjIuNywzMy40LDIyLjd6IgogICBpZD0icGF0aDE2IgogICBzdHlsZT0iZmlsbDojZmYwMDAwIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTI0LDMyLjNjLTEuOCwwLTMuMi0xLjQtMy4yLTMuMnMxLjQtMy4yLDMuMi0zLjJzMy4yLDEuNCwzLjIsMy4yUzI1LjgsMzIuMywyNCwzMi4zIgogICBpZD0icGF0aDE4IgogICBzdHlsZT0iZmlsbDojZmYwMDAwIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTE4LDMyLjRjMC0wLjUsMC4yLTEuMywwLjgtMmMxLTEuMSwyLjYtMS42LDQuOS0xLjZjNS44LDAsNi40LDMuOCw2LjQsNFYzM3YxNC41YzAsMC43LTAuNSwxLjItMS4yLDEuMiAgIHMtMS4yLTAuNS0xLjItMS4yVjMzLjFjLTAuMS0wLjMtMC43LTEuOS00LTEuOWMtMi43LDAtMy40LDAuOS0zLjQsMS4zdjE1YzAsMC43LTAuNSwxLjItMS4yLDEuMnMtMS4yLTAuNS0xLjItMS4yVjMyLjYgICBDMTgsMzIuNSwxOCwzMi41LDE4LDMyLjQiCiAgIGlkPSJwYXRoMjAiCiAgIHN0eWxlPSJmaWxsOiNmZjAwMDAiIC8+CjwvZz4KPC9zdmc+Cg==';
    
    return `
<category name="%{BKY_RGBLEDSTRIP_CATEGORY}" id="RGBLEDSTRIP_CATEGORY" colour="#7700FF" secondaryColour="#4400B3" iconURI="${rgb6812IconUrl}">
    <block type="rgbLedStrip_init" id="rgbLedStrip_init">
        <value name="LEN">
            <shadow type="math_whole_number">
                <field name="NUM">16</field>
            </shadow>
        </value>
        <field name="PIN">2</field>
    </block>
    <block type="rgbLedStrip_setPixelColor" id="rgbLedStrip_setPixelColor">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="COLOR">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="rgbLedStrip_fill" id="rgbLedStrip_fill">
        <value name="FIRST">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="COUNT">
            <shadow type="math_whole_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
        <value name="COLOR">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="rgbLedStrip_color" id="rgbLedStrip_color">
        <value name="R">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="G">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="B">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="rgbLedStrip_setBrightness" id="rgbLedStrip_setBrightness">
        <value name="BRT">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="rgbLedStrip_clear" id="rgbLedStrip_clear">
    </block>
    <block type="rgbLedStrip_show" id="rgbLedStrip_show">
    </block>
</category>`;
}

exports = addToolbox;
