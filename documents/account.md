# 账户体系

系统中所存在的用户有两种，一种是普通用户，一种是商户，因为两者的性质不同，所以两者的账户应当分别存放，与此同时，两者商户个人信息也不尽相同，故需要分别完善。

## 用户账户体系


| Name   | Value    | Type   | Modifiable |
| ------ | -------- | ------ | ---------- |
| 账户ID | ID       | String | false      |
| 账户名 | account  | String | false      |
| 密码   | password | String | true       |
| 头像   | avatar   | String | true       |
| 姓名   | name     | String | true       |
| 手机号 | phone    | String | true       |
| 地址   | address  | String | true       |

## 商户账户体系

