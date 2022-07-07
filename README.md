# Workflow Blog Writing
```mermaid
graph TD
    A[Write BLog] -->|push| B(rendrapcx/blog)
    A[Write BLog] -->|build| C(/var/www/blog)
    C -->|push| rendrapcx.github.io 
```