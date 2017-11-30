# nodeOpsAzure
research and describe operational method for node.js on Azure Web Apps

## How to store Application log
In C#, Azure Web Apps can store 



memo: Will add some documents..
1. Local Git Repository

need to click [Essentials]tab in [Overview]blade to see `Instrumentation Key` in Azure portal


How to log console.log() with Application Insights.
https://github.com/Microsoft/ApplicationInsights-node.js/
```
Note that by default setAutoCollectConsole is configured to **exclude calls to console.log (and other console methods)**. By default, only calls to supported third-party loggers (e.g. winston, bunyan) will be collected. You can change this behavior to **include calls to console methods by using setAutoCollectConsole(true, true)**.
```