发布界面的消息格式

1. 获取的信息

```json
{
    "base": [{
        // 品牌
        "label": String,
        "value": String,
        "children": [{
            // 系列
            "label": String,
            "value": String,
            "children": [{
                // 具体型号
                "label": String,
                "value": String
            }, {
                "label": String,
                "value": String
            }]
        }]
    }],

    "selections": [{
        "label": String,
        "value": String,
        "selected": Number,
        "options": [{
            "label": String,
            "value": String
        }, {
            "label": String,
            "value": String
        }]
    }]

}
```

2. 上传的数据

```json
{
    "model": [
        "brand",
        "series",
        "model"
    ],

    "results": [{
        "label": String,
        "value": String,
        "option": String
    }, {
        "label": String,
        "value": String,
        "option": String
    }]
}
```