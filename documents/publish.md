## 发布界面的消息格式

1. 获取的信息

```json
{
    "base": [{
        // 品牌
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
    "model": [ "brand", "model" ],

    "results": [ ], // 数组里面保存的是每个选择中用户的选择如：0， 1， 2 等等

    "describe": String
}
```

## 消息格式

### 用户接收到商户的估价以及评论消息

消息分类：

- 估价消息
- 评论消息
- 点赞消息
- 交易消息

暂时想到的处理办法是当商户或者用户进行一些操作的时候，比如商户点赞了用户的商品，或者对某个商品开价、评论等，会向服务器发送一个消息，服务端对消息进行处理存到数据库中，然后当用户登录之后从服务器获取消息进行展示，一个消息应当具备的形式应该是：

|Name|Value|Type|
|:-|:-|:-|
|消息发起者ID | sender | String |
消息接收者ID | receiver | String |
消息介质ID，如商品ID | medium | String |
消息的状态 | unread | Bool |

